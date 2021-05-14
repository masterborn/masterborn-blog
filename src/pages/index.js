import React, { useState } from 'react';
import styled from '@emotion/styled';
import { InstantSearch } from "react-instantsearch-dom";
import partition from 'lodash/partition';

import useAlgoliaSearch from '../hooks/useAlgoliaSearch';
import useAllBlogPosts from '../hooks/useAllBlogPosts';
import FeaturePost from '../components/blog/FeaturePost';
import BlogContent from '../components/blog/BlogContent';
import { media } from '../utils/emotion';
import SEO from '../components/SEO';
// import Search from '../components/Search';
import BlogPostsContent from '../components/blog/BlogPostsContent';

const Wrapper = styled('div')`
  margin-top: 12rem;
`;

const BlogFeatureArticleContent = styled(BlogContent)`
  padding-bottom: 0;
  padding-top: 0;
  ${media.desktop`
    padding-top: 5rem;
    width: 129rem;
    max-width: 129rem;
    adding-bottom: 6.5rem;
  `}
`;
// const SearchContainer = styled(BlogContent)`
//   padding-bottom: 0rem;
//   display: flex;
//   width: 118rem;
//   ${media.desktop`
//     padding-bottom: 0rem;
//     padding-top: 3rem;
//     padding-right: 0;
//     width: 118rem;
//     max-width: 118rem;
//   `}
// `

const Index = () => {
  const { searchClient, setQuery, indexName } = useAlgoliaSearch();
  const posts = useAllBlogPosts();
  const postsPerPage = 12;
  const [offset, setOffset] = useState(0);

  const [featurePosts, restPosts] = partition(posts, ({ isFeature }) => !!isFeature);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indexName}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <Wrapper>
        <SEO
          title="MasterBorn | Blog"
          description="Let's start the journey of creating your software with Premium Professionals."
        />
        {/* <SearchContainer> */}
        {/* <Search /> */}
        {/* </SearchContainer> */}
        {offset === 0 && (
          <BlogFeatureArticleContent>
            {featurePosts.map(featurePost => (
              <FeaturePost key={featurePost.id} post={featurePost} />
          ))}
          </BlogFeatureArticleContent>
        )}
        <BlogPostsContent
          postsPerPage={postsPerPage}
          offset={offset}
          setOffset={setOffset}
          posts={restPosts}
        />
      </Wrapper>
    </InstantSearch>
  );
};

export default Index;
