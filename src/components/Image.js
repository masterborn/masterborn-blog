import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import getMemoizedAltForFilepath from '../utils/getMemoizedAltForFilepath';

const Image = ({ src, alt, ...rest }) => {
  const imageAlt = alt || getMemoizedAltForFilepath(src);
  return <img src={src} alt={imageAlt} {...rest} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
};

const StyledImage = styled(Image)`
  border-radius: 4px;
  box-shadow: 0 35px 30px -37px rgba(0,0,0,0.2) !important;
}
`

export default StyledImage;
