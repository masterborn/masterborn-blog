import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  width: 100%;
  ${({ withShadow }) =>
    withShadow && 'box-shadow: 0 35px 30px -37px rgba(0,0,0,0.2);'};
`;

export default function VanillaImage({ metaImage, slug }) {
  const {
    gatsbyImageData: {
      images: {
        fallback: {
          src: fallbackSrc,
          srcSet: fallbackSrcSet,
          sizes: fallbackSizes,
        },
      },
    },
  } = metaImage;
  const { srcSet, type } = metaImage.gatsbyImageData.images.sources[0];

  return (
    <picture>
      <source srcSet={srcSet} type={type} />
      <source srcSet={fallbackSrcSet} type="image/jpeg" />
      <StyledImage alt={slug} sizes={fallbackSizes} src={fallbackSrc} />
    </picture>
  );
}
