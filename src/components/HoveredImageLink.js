import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import Link from './Link';

const StyledImage = styled(Image)`
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: ${({ theme }) => theme.colors.primary};
  display: grid;
  
  &:hover {
    opacity: 0.85;
  }
`;

const BlackArrow = styled.span`
  font-size: 20pt;
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.black};
  margin: auto;
`;

const Container = styled.div`
  margin: auto 0;
  position: relative;
`;


const HoveredImageLink = ({ slug, metaImage, className }) => (
  <Container className={className}>
    <Link to={slug}>
      <StyledImage fluid={metaImage.fluid} />
      <Overlay>
        <BlackArrow>&#8594;</BlackArrow>
      </Overlay>
    </Link>
  </Container>
);

HoveredImageLink.propTypes = {
  className: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  metaImage: PropTypes.shape({
    fluid: PropTypes.shape({
      src: PropTypes.string,
    }),
  }).isRequired,
};

export default HoveredImageLink;