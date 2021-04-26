import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

import Heading from '../Heading';
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

const StyledDescription = styled(LinesEllipsis)`
  margin-top: 0;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
  font-weight: 300;
  font-size: 1.6rem;
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
      <StyledDescription
        text={description}
        maxLine='3'
        ellipsis='...'
        trimRight
        basedOn='words'
      />
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
