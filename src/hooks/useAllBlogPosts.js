import { useStaticQuery, graphql } from 'gatsby';

import mapBlogPostEdges from '../utils/mapBlogPostEdges';

const useAllBlogPosts = () => {
  const { allMdx } = useStaticQuery(graphql`
    query allBlogPostsQuery {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
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
              authorAvatar {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
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
