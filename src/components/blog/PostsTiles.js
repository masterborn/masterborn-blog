import React from 'react';
import styled from '@emotion/styled';
import { connectStateResults } from "react-instantsearch-dom";
import chunk from 'lodash/chunk';

import { media } from '../../utils/emotion';

import PostShort from './PostShort';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  ${media.desktop`
  justify-content: center;
    gap: 0px 35px;
  `}
`;

const PostsTiles = connectStateResults(({ posts, children }) => {
  // const { hits = [] } = searchResults || {};
  // const enabledSlugs = hits.map(({ slug })=> slug);
  // const filteredPosts = posts.filter(({ slug }) => enabledSlugs.includes(slug));
  const chunkSize = posts.length > 6 ? 6 : 3;

  const [firstHalf = [], secondHalf = []] = chunk(posts, chunkSize);

  return (
    <Container>
      {firstHalf.map(post => (
        <PostShort
          key={post.id}
          slug={post.slug}
          title={post.title}
          description={post.description}
          image={post.metaImage}
        />
      ))}
      {children}
      {secondHalf.map(post => (
        <PostShort
          key={post.id}
          slug={post.slug}
          title={post.title}
          description={post.description}
          image={post.metaImage}
        />
      ))}
    </Container>
  )
});

  export default PostsTiles;