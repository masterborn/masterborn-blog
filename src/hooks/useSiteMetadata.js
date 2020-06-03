import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          githubRepoUrl
          markdownPath
          githubProductionPath
          env {
            ROOT_URL
          }
        }
      }
    }
  `);
  return site.siteMetadata;
};

export default useSiteMetadata;
