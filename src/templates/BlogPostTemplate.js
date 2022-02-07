import React from 'react';
import styled from '@emotion/styled';
import SEO from '../components/SEO';
import BlogPostsContent from '../components/blog/BlogPostsContent';

const Wrapper = styled('div')`
  margin-top: 12rem;
`;

export default function BlogPostTemplate({
  pageContext: { posts, page, pageCount },
}) {
  return (
    <Wrapper>
      <SEO
        title="MasterBorn | Blog"
        description="Let's start the journey of creating your software with Premium Professionals."
      />
      <BlogPostsContent posts={posts} page={page} pageCount={pageCount} />
    </Wrapper>
  );
}
