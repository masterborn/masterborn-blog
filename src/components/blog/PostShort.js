import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image'

import Heading from '../Heading';
import Text from '../Text';
import Hr from '../Hr';
import ReadMoreLink from '../ReadMoreLink';
import HoveredImageLink from '../HoveredImageLink';

import PostLink from './PostLink';

const Container = styled.div`
  margin-bottom: ${props => props.theme.space.large};
  width: 37rem;
`;

const StyledImage = styled(HoveredImageLink)`
  width: 37rem;
  height: 20rem;
`;

const StyledText = styled(Text)`
  opacity: 0.9;
`;

const PostShort = ({
  post: { slug, title, description, metaImage },
}) => {
  return (
    <Container>
      <PostLink to={slug}>
        <StyledImage metaImage={metaImage} slug={slug} />
        <Heading as="h4" mb={2} mt={3}>
          {title}
        </Heading>
      </PostLink>
      <StyledText>{description}</StyledText>
      <ReadMoreLink slug={slug} />
    </Container>
  );
};

PostShort.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string,
    metaImage:PropTypes.shape({
      fluid: PropTypes.shape().isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostShort;
