import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '../../utils/emotion';
import Button from '../Button';

const StyledContactButton = styled(Button)`
  margin-left: 0;
  padding: 0.7rem 5rem;
  border: 1px solid ${props => props.theme.colors.contactButton.borderColor};
  cursor: pointer;
  ${media.desktop`
    margin-left: 5rem;
    font-size: 1.6rem;
    line-height: 2rem;
  `}
`;

const ContactButton = ({ isCollapsedHeader, children, onClick, ...rest }) => {
  return (
    <StyledContactButton
      {...rest}
      as="a"
      variant="cta"
      size="cta"
      onClick={onClick}
    >
      {children}
    </StyledContactButton>
  );
};

ContactButton.propTypes = {
  isCollapsedHeader: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

ContactButton.defaultProps = {
  isCollapsedHeader: false,
};

export default ContactButton;
