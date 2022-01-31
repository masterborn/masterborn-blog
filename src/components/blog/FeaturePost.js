import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis';
import get from 'lodash/get';

import { media } from '../../utils/emotion';
import Heading from '../Heading';
import ReadMoreLink from '../ReadMoreLink';
import HoveredImageLink from '../HoveredImageLink';
import Link from '../Link';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 1px solid
    ${props => props.theme.colors.header.headerBorderColor};
  padding: 0 0 2rem;
  ${media.desktop`
    border: 0;
    grid-gap: 5rem;
    padding: 0;
    grid-template-columns: 1fr 1fr;
  `}
`;

const Description = styled(LinesEllipsis)`
  margin: 2rem 0;
  opacity: 0.9;
  line-height: 2.6rem;
  font-size: 1.6rem;
  color: ${({ theme, color }) => get(theme.colors, color)};
  font-weight: 300;
  order: 3;
  ${media.desktop`
    margin-top: 0;
    margin-bottom: 1.6rem;
  `}
`;

const LeftSide = styled.div`
  margin: auto auto auto 0;
  width: 100%;
  ${media.desktop`
    max-width: 47rem;
  `}
`;

const StyledHeading = styled(Heading)`
  line-height: 3.4rem;
  font-size: 2.9rem;
  order: 1;
  ${media.desktop`
    order: 2;
    line-height: 4.8rem;
    font-size: 3.8rem;
  `}
`;

const StyledImage = styled(HoveredImageLink)`
  display: none;
  ${media.desktop`
    height: 37rem;
    display: block;
  `}
`;

const StyledImageMobile = styled(StyledImage)`
  display: block;
  height: 20rem;
  margin: 1rem 0;
  order: 2;
  ${media.desktop`
    display: none;
  `}
`;

const MouseOverHandlerContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop`
    display: block;
  `}
`;

const StyledReadMoreLink = styled(ReadMoreLink)`
  order: 4;
`;

const MouseOverHandler = ({ children, setHovered }) => (
  <MouseOverHandlerContainer
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
    {children}
  </MouseOverHandlerContainer>
);

const FeaturePost = ({ post, isFirst }) => {
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
            >
              {title}
            </StyledHeading>
          </Link>
          <Description
            color={`${colorsCategory}.description`}
            text={description}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="words"
          >
            {description}
          </Description>
          <StyledReadMoreLink isHovered={isHovered} slug={slug} />
          <StyledImageMobile
            isFirst={isFirst}
            slug={slug}
            metaImage={metaImage}
            isHovered={isHovered}
            withShadow
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
    slug: PropTypes.string.isRequired,
    metaImage: PropTypes.shape({
      fluid: PropTypes.shape({
        src: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default FeaturePost;
