import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Button from '../Button';
import Link from '../Link';


const StyledContactButton = styled(Button)`
  margin-left: 5rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.black};
  padding: .9rem 5rem;
  border: 1px solid ${props => props.theme.colors.contactButton.borderColor};
`

const ContactButton = ({ isCollapsedHeader, onClick, href, ...rest }) => {
  return (
    <StyledContactButton
      {...rest}
      size={isCollapsedHeader ? 'big' : 'default'}
      borderRadius="20px"
      as={Link}
      href={href}
      onClick={onClick}
    >
      Contact us
    </StyledContactButton>
  );
};

ContactButton.propTypes = {
  isCollapsedHeader: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
};

ContactButton.defaultProps = {
  isCollapsedHeader: false,
};

export default ContactButton;
