const path = require('path');

const allMdxQuery = `
    {
      allMdx {
        edges {
          node {
            fields {
              id
              slug
            }
            tableOfContents
          }
        }
      }
    }
  `;

const getMarkdownPages = async graphql => {
  const mdxResults = await graphql(allMdxQuery);
  if (mdxResults.errors) {
    console.error(mdxResults.errors); // eslint-disable-line no-console
  }
  const blogTemplate = path.resolve('./src/templates/BlogTemplate.js');
  return mdxResults.data.allMdx.edges.map(({ node }) => {
    return {
      path: node.fields.slug ? node.fields.slug : '/',
      component: blogTemplate,
      context: {
        id: node.fields.id,
        pageType: 'BLOG_POST',
      },
    };
  });
};

module.exports = getMarkdownPages;
