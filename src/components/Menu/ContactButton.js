import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { media } from '../../utils/emotion';
import Button from '../Button';
import Link from '../Link';

const StyledContactButton = styled(Button)`
  margin-left: 0;
  padding: .7rem 5rem;
  border: 1px solid ${props => props.theme.colors.contactButton.borderColor};
  ${media.desktop`
    margin-left: 5rem;
    font-size: 1.6rem;
    line-height: 2rem;
  `}

`

const ContactButton = ({ isCollapsedHeader, children, onClick, href, ...rest }) => {
  return (
    <StyledContactButton
      {...rest}
      as={Link}
      href={href}
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
