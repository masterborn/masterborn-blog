import React from 'react';
import styled from '@emotion/styled';
import { InstantSearch, connectStateResults } from "react-instantsearch-dom";

import useAlgoliaSearch from '../hooks/useAlgoliaSearch';
import useAllBlogPosts from '../hooks/useAllBlogPosts';
import PostShort from '../components/blog/PostShort';
import Heading from '../components/Heading';
import FeaturePost from '../components/blog/FeaturePost';
import BlogContent from '../components/blog/BlogContent';
import { media } from '../utils/emotion';
import SEO from '../components/SEO';
import Search from '../components/Search';



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
    width: 92rem;
    max-width: 92rem;
  `};
`;

const Index = () => {
  const { searchClient, setQuery, indexName } = useAlgoliaSearch();
  const posts = useAllBlogPosts();
  const featurePosts = posts.filter(item => item.isFeature === true);

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
          <Heading as="h1" mb={5}>
            All Posts
          </Heading>
          {posts.map(post => (
            <PostShort key={post.id} post={post} />
          ))}
        </BlogPostsContent>
      </Wrapper>
    </InstantSearch>
  );
};

export default Index;
