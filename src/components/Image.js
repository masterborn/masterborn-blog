import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
}
`;

export default StyledImage;
