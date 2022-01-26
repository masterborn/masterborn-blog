import React from 'react';
import styled from '@emotion/styled';
import partition from 'lodash/partition';

import config from '../../config';

import useAllBlogPosts from '../hooks/useAllBlogPosts';
import FeaturePost from '../components/blog/FeaturePost';
import BlogContent from '../components/blog/BlogContent';
import { media } from '../utils/emotion';
import SEO from '../components/SEO';

import BlogPostsContent from '../components/blog/BlogPostsContent';

const Wrapper = styled('div')`
  margin-top: 12rem;
`;

const BlogFeatureArticleContent = styled(BlogContent)`
  padding-bottom: 0;
  padding-top: 0;
  ${media.desktop`
    padding-top: 5rem;
    width: auto;
    max-width: 129rem;
    padding-bottom: 6.5rem;
  `}
`;

const Index = () => {
  const posts = useAllBlogPosts();
  const postsPerPage = config.general.postsPerPage;
  const [featurePosts, restPosts] = partition(
    posts,
    ({ isFeature }) => !!isFeature
  );

  return (
    <Wrapper>
      <SEO
        title="Blog | MasterBorn: Your React and Node.js Trusted Partners"
          description="Read our latest articles and deepen your JS & business know-how. Explore technical guides, tips, hints, startup insights & more."
      />
      <BlogFeatureArticleContent>
        {featurePosts.map((featurePost, index) => (
          <FeaturePost
            isFirst={index === 0}
            key={featurePost.id}
            post={featurePost}
          />
        ))}
      </BlogFeatureArticleContent>
      <BlogPostsContent
        posts={restPosts.slice(0, postsPerPage)}
        page={1}
        pageCount={
          Math.ceil((posts.length - postsPerPage - 1) / postsPerPage) + 1
        }
      />
    </Wrapper>
  );
};

export default Index;
