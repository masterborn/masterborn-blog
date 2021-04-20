import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Heading from '../Heading';
import Text from '../Text';
import ReadMoreLink from '../ReadMoreLink';
import HoveredImageLink from '../HoveredImageLink';

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr 1fr;
  grid-gap: 5rem;
`;

const Description = styled(Text)`
  opacity: 0.9;
`;

const LeftSide = styled.div`
  margin: auto;
`;


const StyledImage = styled(HoveredImageLink)`
  height: 37rem;
`;

const FeaturePost = ({ post }) => {
  const { title, description, slug, metaImage } = post;
  return (
    <Container>
      <LeftSide>
        <Heading color="featurePost.header" fontWeight={600} as="h2">{title}</Heading>
        <Description opacity="0.9" lineHeight="2.6rem" fontSize="1.6rem" color="featurePost.description">
          {description}
        </Description>
        <ReadMoreLink slug={slug} />
      </LeftSide>
      <StyledImage slug={slug} metaImage={metaImage} />
    </Container>
  );
};


FeaturePost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    metaImage: PropTypes.shape({
      fluid: PropTypes.shape({
        src: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default FeaturePost;
