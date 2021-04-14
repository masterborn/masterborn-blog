import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Button from '../Button';
import Link from '../Link';

const StyledContactButton = styled(Button)`
  margin-left: 5rem;
  padding: .7rem 5rem;
  border: 1px solid ${props => props.theme.colors.contactButton.borderColor};
`

const ContactButton = ({ isCollapsedHeader, onClick, href, ...rest }) => {
  return (
    <StyledContactButton
      {...rest}
      as={Link}
      href={href}
      variant="cta"
      size="cta"
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
