import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Text from './Text';
import Link from './Link';


const YellowArrow = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15pt;
  font-family: sans-serif;
`;

const StyledLink = styled(Link)`
  display: flex;
  grid-auto-flow: column;
`;

const ReadMoreText = styled(Text)`
  opacity: 0.9;
  font-weight: 600;
  font-size: 1.4rem;
  margin-right: 0.5rem;
`;

const ReadMoreLink = ({ slug }) => (
  <StyledLink to={slug}>
    <ReadMoreText color="featurePost.readMore">
      Read more
    </ReadMoreText>
    <YellowArrow>&#8594;</YellowArrow>
  </StyledLink>
);


ReadMoreLink.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ReadMoreLink;