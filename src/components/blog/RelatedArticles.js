import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '../../utils/emotion';
import PageSection from '../pages/PageSection';
import Heading from '../Heading';

import PostShort from './PostShort';

const RelatedArticlesWrapper = styled.div`
  position: relative;
  padding: 2rem 0;
  &:before {
    content: ' ';
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colors.relatedArticles.border};
    opacity: 0.18;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
  h6 {
    text-align: center;
    margin: 2rem 0;
    ${media.desktop`
    margin: 4rem 0;
  `}
  }
`;

// const RelatedArticlesHeading = styled(Heading)`
//   text-align: center;
//   margin: 2rem 0;
//   ${media.desktop`
//     margin: 4rem 0;
//   `}
// `;

const RelatedArticlesContainer = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: 1fr;
  ${media.desktop`
    display: flex;
    flex-wrap: wrap;
    width: 76rem;
    margin: 0 auto;
  `}
  @media (min-width: 1225px) {
    width: auto;
    margin: 0;
  }
`;

const StyledPageSection = styled(PageSection)`
  padding: 0 3rem;
  margin-bottom: 3rem;
  ${media.desktop`
    margin-bottom: 10rem;
  `}
`;

const RelatedArticles = ({ relatedPosts }) => {
  return (
    <StyledPageSection>
      <RelatedArticlesWrapper>
        <Heading as="h6">Related articles:</Heading>
        <RelatedArticlesContainer>
          {relatedPosts.map(({ slug, frontmatter, excerpt }) => (
            <PostShort
              key={slug}
              slug={`/${slug}/`}
              title={frontmatter.title}
              image={
                frontmatter.metaImage
                  ? frontmatter.metaImage.childImageSharp
                  : {}
              }
              description={excerpt}
            />
          ))}
        </RelatedArticlesContainer>
      </RelatedArticlesWrapper>
    </StyledPageSection>
  );
};

RelatedArticles.propTypes = {
  relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
};

RelatedArticles.defaultProps = {
  relatedPosts: [],
};

export default RelatedArticles;
