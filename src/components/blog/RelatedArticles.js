import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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
`

const RelatedArticlesHeading = styled(Heading)`
  text-align: center;
  margin: 2rem 0;
  ${media.desktop`
    margin: 4rem 0;
  `}
`

const RelatedArticlesContainer = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: 1fr;
  ${media.desktop`
    grid-template-columns: repeat(3, 1fr);
  `}
`

const StyledPageSection = styled(PageSection)`
  padding: 0 3rem;
`

const RelatedArticles = ({relatedPosts}) => {
  return (
    <StyledPageSection marginBottom="10rem">
      <RelatedArticlesWrapper>
        <RelatedArticlesHeading as="h6">Related articles:</RelatedArticlesHeading>
        <RelatedArticlesContainer>
          {relatedPosts.map(({ slug, frontmatter, excerpt }) => (
            <PostShort
              key={slug}
              slug={`/${slug}`}
              title={frontmatter.title}
              image={frontmatter.metaImage ? frontmatter.metaImage.childImageSharp : {}}
              description={excerpt}
            />
          )
          )}

        </RelatedArticlesContainer>
      </RelatedArticlesWrapper>
    </StyledPageSection>



  );
};

RelatedArticles.propTypes = {
  relatedPosts: PropTypes.arrayOf(PropTypes.shape({

   })),
}

RelatedArticles.defaultProps = {
  relatedPosts: [],
}

export default RelatedArticles;
