import { useTheme } from '@emotion/react';
import { useCallback } from 'react';

import useLocation from './useLocation';

const isMatchingPathname = (currentPathname, toCheck) =>
  currentPathname.match(toCheck);

const useActiveMenuStyles = () => {
  const location = useLocation();
  const theme = useTheme();

  const headerActiveLinkStyle = {
    color: theme.colors.menuTextActive,
    fontWeight: theme.fontWeights.heading,
    borderBottom: `2px solid ${theme.colors.primary}`,
  };

  const footerActiveLinkStyle = {
    color: theme.colors.primary,
  };

  const getActiveStyleForPathname = useCallback(
    (pathname, position) => {
      const activeStyle =
        {
          header: headerActiveLinkStyle,
          footer: footerActiveLinkStyle,
        }[position] || {};

      return isMatchingPathname(location.pathname, pathname) ? activeStyle : {};
    },
    [location, theme]
  );

  return {
    getActiveStyleForPathname,
  };
};

export default useActiveMenuStyles;
