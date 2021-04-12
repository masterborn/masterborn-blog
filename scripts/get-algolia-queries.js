const query = `{
  pages: allMdx{
    edges {
      node {
        id
        frontmatter {
          title
          description
          author
        }
        fields {
          slug
        }
        excerpt(pruneLength: 500000)
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
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
    },
  },
];

module.exports = getAlgoliaQueries