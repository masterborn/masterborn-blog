const defaultAvatar = '../src/assets/default_avatar.png';

const query = `
query allBlogPostsQuery {
  allMdx(
    filter: { frontmatter: { isPreview: { ne: true } } }
    sort: { order: DESC, fields: frontmatter___date }
  ) {
    edges {
      node {
        id
        excerpt
        fields {
          slug
          title
        }
        frontmatter {
          metaTitle
          metaDescription
          description
          date
          author
          isFeature
          metaImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          authorAvatar {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
      }
    }
  }
}
`;
const mapBlogPostEdges = postsEdges => {
  return postsEdges.map(({ node }) => ({
    id: node.id,
    slug: node.fields.slug,
    title: node.fields.title,
    metaTitle: node.frontmatter.metaTitle,
    description: node.frontmatter.description || node.excerpt,
    metaDescription: node.frontmatter.metaDescription,
    date: node.frontmatter.date,
    author: node.frontmatter.author,
    isFeature: node.frontmatter.isFeature,
    metaImage: node.frontmatter.metaImage
      ? node.frontmatter.metaImage.childImageSharp
      : {},
    authorAvatar: node.frontmatter.authorAvatar
      ? node.frontmatter.authorAvatar.childImageSharp
      : defaultAvatar,
  }));
};
async function getAllPosts(graphql) {
  const queryResult = await graphql(query);
  return mapBlogPostEdges(queryResult.data.allMdx.edges);
}

module.exports = getAllPosts;
