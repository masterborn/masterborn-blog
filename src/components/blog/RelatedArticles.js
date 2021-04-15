import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import PageSection from '../pages/PageSection';
import Heading from '../Heading';
import BlogListItem from '../BlogListItem';

const RelatedArticlesWrapper = styled.div`
  position: relative;
  padding: 4rem 0;
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
`

const RelatedArticlesContainer = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
`

const RelatedArticles = ({relatedPosts}) => {
  return (
    <PageSection marginBottom="10rem">
      <RelatedArticlesWrapper>
        <RelatedArticlesHeading as="h6" mt={3} mb={5}>Related articles:</RelatedArticlesHeading>
        <RelatedArticlesContainer>
          {relatedPosts.map(({ slug, frontmatter, excerpt }) => (
            <BlogListItem
              key={slug}
              slug={slug}
              title={frontmatter.title}
              image={frontmatter.metaImage ? frontmatter.metaImage.childImageSharp : {}}
              description={excerpt}
            />
          )
          )}

        </RelatedArticlesContainer>
      </RelatedArticlesWrapper>
    </PageSection>



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
