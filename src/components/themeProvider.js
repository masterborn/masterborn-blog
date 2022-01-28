import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const ThemeProvider = ({ children, theme }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ThemeProvider;
