import defaultAvatar from '../assets/default_avatar.png';

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

export default mapBlogPostEdges;
