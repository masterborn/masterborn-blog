import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import get from 'lodash/get';

import Heading from '../Heading';
import ReadMoreLink from '../ReadMoreLink';
import HoveredImageLink from '../HoveredImageLink';
import Link from '../Link';
import { media } from '../../utils/emotion';

const Container = styled.div`
  margin-bottom: ${props => props.theme.space.small};
  flex-direction: column;
  display: flex;
  ${media.desktop`
    margin-bottom: ${props => props.theme.space.large};
    width: 37rem;
  `}
`;

const StyledImage = styled(HoveredImageLink)`
  ${media.desktop`
    order: 1;
    width: 37rem;
  `}
  order: 2;
  margin: 2rem 0;
  height: 20rem;
`;

const StyledDescription = styled(LinesEllipsis)`
  margin-top: 0;
  margin-bottom: 1.6rem;
  color: ${({ theme, color }) => get(theme.colors, color)};
  line-height: 2.6rem;
  font-weight: 300;
  font-size: 1.6rem;
  order: 3;
  ${media.desktop`
    width: 37rem;
    order: 3;
  `}
`;

const StyledReadMoreLink = styled(ReadMoreLink)`
  order: 4;
`;

const StyledHeader = styled(Link)`
  order: 1;
  ${media.desktop`
    width: 37rem;
    order: 2;
  `}
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
      <StyledHeader to={slug}>
        <Heading
          color={`${colorsCategory}.header`}
          lineHeight="3.2rem"
          fontSize="2.2rem"
          as="h2"
          mb={2}
          mt={3}
        >
          {title}
        </Heading>
      </StyledHeader>
      <StyledDescription
        color={`${colorsCategory}.description`}
        text={description}
        maxLine="3"
        ellipsis="..."
        trimRight
        basedOn="words"
      />
      <StyledReadMoreLink slug={slug} />
    </Container>
  );
};

PostShort.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape().isRequired,
};

export default PostShort;
