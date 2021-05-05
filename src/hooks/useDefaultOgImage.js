import { useStaticQuery, graphql } from 'gatsby';

const useDefaultOgImage = () => {
  const { fileName } = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "default-og-image.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);
  return fileName;
};

export default useDefaultOgImage;
