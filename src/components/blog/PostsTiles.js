import React from 'react';
import styled from '@emotion/styled';
import { connectStateResults } from "react-instantsearch-dom";
import chunk from 'lodash/chunk';

import PostShort from './PostShort';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 0px 35px;
`;

const PostsTiles = connectStateResults(({ searchResults = {}, posts, children }) => {
  const { hits = [] } = searchResults || {};
  const enabledSlugs = hits.map(({ slug })=> slug);
  const filteredPosts = posts.filter(({ slug })=>enabledSlugs.includes(slug));
  const chunkSize = filteredPosts.length > 6 ? 6 : 3;

  const [firstHalf = [], secondHalf = []] = chunk(filteredPosts, chunkSize);

  return (
    <Container>
      {firstHalf.map(post => (
        <PostShort key={post.id} post={post} />
      ))}
      {children}
      {secondHalf.map(post => (
        <PostShort key={post.id} post={post} />
      ))}
    </Container>
  )
});

  export default PostsTiles;