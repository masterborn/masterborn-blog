import React from 'react';
import styled from 'styled-components';

import StarIcon from '../assets/star-icon.svg';

const StarsWrapper = styled.div`
  display: flex;
`;

const STARS_LIMIT = 5;

const StarRating = () => (
  <StarsWrapper>
    {Array.from({ length: STARS_LIMIT }, (_, index) => (
      <img src={StarIcon} alt={index} key={index} />
    ))}
  </StarsWrapper>
);

export default StarRating;
