import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from './Text';
import Link from './Link';

const YellowArrow = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15pt;
  font-family: sans-serif;
  margin-top: -3px;
`;

const StyledLink = styled(Link)`
  display: flex;
`;

const ReadMoreText = styled(Text)`
  opacity: 0.9;
  font-weight: 600;
  font-size: 1.4rem;
  margin-right: 1rem;
`;

const ReadMoreLink = ({ slug, className }) => (
  <StyledLink className={className} to={slug}>
    <ReadMoreText color="featurePost.readMore">Read more</ReadMoreText>
    <YellowArrow>&#8594;</YellowArrow>
  </StyledLink>
);

ReadMoreLink.propTypes = {
  slug: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ReadMoreLink;
