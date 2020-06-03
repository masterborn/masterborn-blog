import React from 'react';
import styled from '@emotion/styled';
import { layout, space } from 'styled-system';

import mbLogo from '../assets/masterborn-logo.svg';

const BaseLogo = styled.img(space, layout);

BaseLogo.defaultProps = {
  height: '5.5rem',
};

const Logo = props => {
  return <BaseLogo src={mbLogo} alt="Masterborn logo" {...props} />;
};

export default Logo;
