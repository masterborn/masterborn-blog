const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);
const { startCase } = require('lodash');

const getMarkdownPages = require('./scripts/get-markdown-pages');
const addCtaButton = require('./src/utils/addCtaButton');

const mapReadmeSlug = slug => {
  return slug.replace(/\/readme/gi, '');
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const mdxPages = await getMarkdownPages(graphql);
  mdxPages.forEach(mdxPage => createPage(mdxPage));
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: { $components: path.resolve(__dirname, 'src/components') },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    const value = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      name: `slug`,
      node,
      value: mapReadmeSlug(value),
    });

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name),
    });
    
    addCtaButton(node);
  }
};
