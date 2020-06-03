import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Link from '../Link';

const ContactButton = ({ isCollapsedHeader, onClick, href }) => {
  return (
    <Button
      variant="primary"
      outline="primary"
      size={isCollapsedHeader ? 'small' : 'default'}
      as={Link}
      href={href}
      ml={{
        _: 0,
        lg: 3,
      }}
      onClick={onClick}
    >
      Contact us
    </Button>
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
