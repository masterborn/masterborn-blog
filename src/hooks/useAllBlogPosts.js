import { useStaticQuery, graphql } from 'gatsby';

import mapBlogPostEdges from '../utils/mapBlogPostEdges';

const useAllBlogPosts = () => {
  const { allMdx } = useStaticQuery(graphql`
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
  `);
  return mapBlogPostEdges(allMdx.edges);
};

export default useAllBlogPosts;
