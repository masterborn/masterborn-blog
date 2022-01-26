// eslint-disable-next-line import/order
const path = require('path');

const config = require('./config');
const getAllPosts = require('./scripts/get-all-posts');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { startCase, chunk } = require('lodash');

const getMarkdownPages = require('./scripts/get-markdown-pages');
const addCtaButton = require('./src/utils/addCtaButton');

const postsPerPage = config.general.postsPerPage;

const mapReadmeSlug = slug => {
  return slug.replace(/\/readme/gi, '');
};

async function getPageData(graphql) {
  const allPosts = await getAllPosts(graphql);
  const blogPosts = allPosts
    .filter(post => !post.isFeature)
    .slice(postsPerPage); //get rid off first page
  const pageCount =
    Math.ceil((allPosts.length - postsPerPage - 1) / postsPerPage) + 1; // first page has postsPerPage + featured-post posts, rest have 12
  const blogPageData = chunk(blogPosts, postsPerPage).map((chunk, index) => ({
    posts: chunk,
    page: index + 2, //first page is at /blog
    pageCount: pageCount,
  }));
  return blogPageData;
}
const relatedPosts = {};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPageData = await getPageData(graphql);
  blogPageData.forEach(({ page, posts, pageCount }) =>
    createPage({
      path: `/posts/${page}`,
      component: require.resolve('./src/templates/BlogPostTemplate.js'),
      context: {
        page,
        posts,
        pageCount,
      },
    })
  );
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

    createNodeField({
      name: `relatedFileAbsolutePaths`,
      node,
      value: relatedPosts[node.fileAbsolutePath],
    });

    addCtaButton(node);
  }

  if (node.internal.type === 'MarkdownRemark') {
    relatedPosts[node.fileAbsolutePath] = node.fields.relatedFileAbsolutePaths;
  }
};
