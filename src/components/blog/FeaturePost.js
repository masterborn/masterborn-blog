import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Heading from '../Heading';
import Text from '../Text';
import ReadMoreLink from '../ReadMoreLink';
import HoveredImageLink from '../HoveredImageLink';
import Link from '../Link';

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

  return (
    <Container>
      <LeftSide>
        <MouseOverHandler setHovered={setHovered}>
          <Link to={slug}>
            <Heading
              isHovered={isHovered}
              color="featurePost.header"
              fontWeight={600}
              as="h2"
            >{title}
            </Heading>
          </Link>
          <Description
            isHovered={isHovered}
            opacity="0.9"
            lineHeight="2.6rem"
            fontSize="1.6rem"
            color="featurePost.description"
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
