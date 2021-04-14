import React, { useState } from 'react';
import styled from '@emotion/styled';
import { InstantSearch ,
  connectStateResults,
  Highlight,
  Hits,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

import useAllBlogPosts from '../hooks/useAllBlogPosts';
import PostShort from '../components/blog/PostShort';
import Heading from '../components/Heading';
import FeaturePost from '../components/blog/FeaturePost';
import BlogContent from '../components/blog/BlogContent';
import { media } from '../utils/emotion';
import SEO from '../components/SEO';
import Search from '../components/Search';
import config from '../../config';



const Wrapper = styled('div')`
  margin-top: 12rem;
`;

const BlogFeatureArticleContent = styled(BlogContent)`
  background-color: ${props => props.theme.colors.accentBackground};
  padding-bottom: 6.5rem;
  padding-top: 0;
  ${media.desktop`
     padding-top: 8rem;
     width: 92rem;
      max-width: 92rem;
  `}
`;
const SearchContainer = styled(BlogContent)`
  padding-bottom: 6.5rem;
  display: flex;
  ${media.desktop`
    padding-top: 8rem;
    padding-right: 0;
    width: 92rem;
    max-width: 92rem;
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
  const [query, setQuery] = useState();
  const searchClient = algoliasearch(
    config.algolia.appId,
    config.algolia.searchKey
  );
  const posts = useAllBlogPosts();
  const featurePosts = posts.filter(item => item.isFeature === true);
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={config.algolia.indexName}
      onSearchStateChange={(searchState) => setQuery(searchState.query)}
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
