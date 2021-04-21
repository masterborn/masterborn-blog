import React, { useState } from 'react';
import styled from '@emotion/styled';
import { InstantSearch } from "react-instantsearch-dom";
import partition from 'lodash/partition';
import ReactPaginate from 'react-paginate';

import useAlgoliaSearch from '../hooks/useAlgoliaSearch';
import useAllBlogPosts from '../hooks/useAllBlogPosts';
import FeaturePost from '../components/blog/FeaturePost';
import BlogContent from '../components/blog/BlogContent';
import { media } from '../utils/emotion';
import SEO from '../components/SEO';
import Search from '../components/Search';
import PostsTiles from '../components/blog/PostsTiles';



const Wrapper = styled('div')`
  margin-top: 12rem;
`;

const BlogFeatureArticleContent = styled(BlogContent)`
  padding-bottom: 6.5rem;
  padding-top: 0;
  ${media.desktop`
    padding-top: 5rem;
    width: 129rem;
    max-width: 129rem;
  `}
`;
const SearchContainer = styled(BlogContent)`
  padding-bottom: 0rem;
  display: flex;
  width: 118rem;
  ${media.desktop`
    padding-bottom: 0rem;
    padding-top: 3rem;
    padding-right: 0;
    width: 118rem;
    max-width: 118rem;
  `}
`

const BlogPostsContent = styled(BlogContent)`
  background-color: ${props => props.theme.colors.blogTextBackground};
  padding-bottom: 0;
  ${media.desktop`
    padding-bottom: 0;
    padding-top: 10rem;
    width: 129rem;
    max-width: 129rem;
  `};

  .pagination {
    display: grid;
    grid-auto-flow: column;
    width: max-content;
    margin: auto;
    opacity: 0.9;
    font-family: sans-serif;
    margin-bottom: 9rem;
    li {
      width: 3rem;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.pagination.available};
    }
    .active { 
      color: ${({ theme }) => theme.colors.pagination.active};
    }
    .disabled {
      color: ${({ theme }) => theme.colors.pagination.disabled};
      cursor: auto;
    }

    .previous, .next {
      width: 10rem;
    }
  }
`;



const Index = () => {
  const { searchClient, setQuery, indexName } = useAlgoliaSearch();
  const posts = useAllBlogPosts();
  const postsPerPage = 12;
  const [offset, setOffset] = useState(0);
  
  const [featurePosts, restPosts] = partition(posts, ({ isFeature }) => !!isFeature);
  const pageCount = Math.ceil(restPosts.length / postsPerPage);
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
        <SearchContainer>
          <Search />
        </SearchContainer>
        <BlogFeatureArticleContent>
          {featurePosts.map(featurePost => (
            <FeaturePost key={featurePost.id} post={featurePost} />
          ))}
        </BlogFeatureArticleContent>
        <BlogPostsContent>
          <PostsTiles posts={restPosts.slice(offset, offset + postsPerPage)} />
          <ReactPaginate
            previousLabel="&#8592; Newer"
            nextLabel="Older &#8594;"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => setOffset(Math.ceil(selected * postsPerPage))}
            containerClassName="pagination"
            activeClassName="active"
          />
        </BlogPostsContent>
      </Wrapper>
    </InstantSearch>
  );
};

export default Index;
