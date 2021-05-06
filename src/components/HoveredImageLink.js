import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import Link from './Link';

const StyledImage = styled(Image)`
  height: 100%;
  border-radius: 4px;
  ${({ withShadow })=> withShadow && 
    'box-shadow: 0 35px 30px -37px rgba(0,0,0,0.2);'
  };
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
  
  ${({ isHovered })=> isHovered && `
    opacity: 0.85;
  `}
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


const HoveredImageLink = ({ slug, metaImage, className, isHovered, withShadow }) => (
  <Container className={className}>
    <Link to={slug}>
      <StyledImage withShadow={withShadow} fluid={metaImage.fluid} />
      <Overlay isHovered={isHovered}>
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
  isHovered: PropTypes.bool,
  withShadow: PropTypes.bool,
};

HoveredImageLink.defaultProps = {
  isHovered: false,
  withShadow: false,
}

export default HoveredImageLink;