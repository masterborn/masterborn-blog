import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import LinesEllipsis from 'react-lines-ellipsis'
import get from 'lodash/get';

import Heading from '../Heading';
import ReadMoreLink from '../ReadMoreLink';
import HoveredImageLink from '../HoveredImageLink';
import Link from '../Link';

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
  color: ${({ theme, color }) => get(theme.colors, color)};
  font-weight: 300;
`;

const LeftSide = styled.div`
  margin: auto auto auto 0;
  max-width: 47rem;
`;

const StyledImage = styled(HoveredImageLink)`
  height: 37rem;
`;

const StyledHeading = styled(Heading)`
  line-height: 4.8rem;
`;

const MouseOverHandler = ({ children, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
    {children}
  </div>
);

const FeaturePost = ({ post }) => {
  const [isHovered, setHovered] = useState(false);
  const { title, description, slug, metaImage } = post;
  const colorsCategory = isHovered ? 'featurePostHover' : 'featurePost';
  return (
    <Container>
      <LeftSide>
        <MouseOverHandler setHovered={setHovered}>
          <Link to={slug}>
            <StyledHeading
              color={`${colorsCategory}.header`}
              fontWeight={600}
              as="h2"
            >{title}
            </StyledHeading>
          </Link>
          <Description
            color={`${colorsCategory}.description`}
            text={description}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='words'
          >
            {description}
          </Description>
          <ReadMoreLink
            isHovered={isHovered}
            slug={slug}
          />
        </MouseOverHandler>
      </LeftSide>
      <MouseOverHandler setHovered={setHovered}>
        <StyledImage
          slug={slug}
          metaImage={metaImage}
          isHovered={isHovered}
          withShadow
        />
      </MouseOverHandler>
    </Container>
  );
};

MouseOverHandler.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  setHovered: PropTypes.func.isRequired,
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
