import React from 'react';
import styled from '@emotion/styled';
import { connectStateResults } from "react-instantsearch-dom";

import PostShort from './PostShort';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PostsTiles = connectStateResults(({ searchResults = {}, posts }) => {
  const { hits = [] } = searchResults || {};
  const enabledSlugs = hits.map(({ slug })=> slug);
  const filteredPosts = posts.filter(({ slug })=>enabledSlugs.includes(slug));
  return (
    <Container>
      {filteredPosts.map(post => (
        <PostShort key={post.id} post={post} />
      ))}
    </Container>
  )
});

  export default PostsTiles;