const _ = require('lodash');

const query = `{
  pages: allMdx{
    edges {
      node {
        id
        frontmatter {
          title
          description
          author
          metaImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH placeholder: BLURRED)
            }
          }
        }
        fields {
          slug
        }
        excerpt(pruneLength: 500000)
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, frontmatter: { metaImage, ...restOfFrontmatter }, fields, ...rest } }) {
  return {
    objectID: id,
    metaImage: _.get(metaImage, 'childImageSharp', {}),
    ...restOfFrontmatter,
    ...fields,
    ...rest,
  }
}

const getAlgoliaQueries = () => [
  {
    query,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    settings: {
      attributesToSnippet: [`excerpt:20`],
      searchableAttributes: ['title', 'description', 'excerpt', 'author'],
      indexLanguages: ['en', 'pl'],
      queryLanguages: ['en', 'pl'],
      attributesToRetrieve: ['title', 'author', 'slug', 'description', 'metaImage'],
    },
  },
];

module.exports = getAlgoliaQueries