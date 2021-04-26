import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import LinesEllipsis from 'react-lines-ellipsis'

import Heading from '../Heading';
import ReadMoreLink from '../ReadMoreLink';
import HoveredImageLink from '../HoveredImageLink';

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr 1fr;
  grid-gap: 5rem;
`;

const Description = styled(LinesEllipsis)`
  margin-top: 0;
  margin-bottom: 1.6rem;
  opacity: 0.9;
  line-height: 2.6rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 300;
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
        <Description
          text={description}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='words'
        />
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
