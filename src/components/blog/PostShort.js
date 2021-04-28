import styled from '@emotion/styled';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import get from 'lodash/get';

import Heading from '../Heading';
import ReadMoreLink from '../ReadMoreLink';
import HoveredImageLink from '../HoveredImageLink';
import Link from '../Link';

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
  color: ${({ theme, color }) => get(theme.colors, color)};
  line-height: 1.5;
  font-weight: 300;
  font-size: 1.6rem;
`;

const PostShort = ({ slug, title, description, image }) => {
  const [hover, setHover] = useState(false);
  const colorsCategory = hover ? 'featurePostHover' : 'featurePost';

  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StyledImage isHovered={hover} withShadow metaImage={image} slug={slug} />
      <Link to={slug}>
        <Heading
          color={`${colorsCategory}.header`}
          lineHeight="3.2rem"
          as="h4"
          mb={2}
          mt={3}
        >
          {title}
        </Heading>
      </Link>
      <StyledDescription
        color={`${colorsCategory}.description`}
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
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.shape().isRequired,
  }).isRequired,
};

export default PostShort;
