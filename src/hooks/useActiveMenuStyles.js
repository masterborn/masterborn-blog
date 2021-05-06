import { useTheme } from '@emotion/react';
import { useCallback } from 'react';

import useLocation from './useLocation';

const isMatchingPathname = (currentPathname, toCheck) =>
  currentPathname.match(toCheck);

const useActiveMenuStyles = () => {
  const location = useLocation();
  const theme = useTheme();

  const getActiveStyleForPathname = useCallback(
    pathname => {
      return isMatchingPathname(location.pathname, pathname)
        ? {
            color: theme.colors.menuTextActive,
            fontWeight: theme.fontWeights.heading,
            borderBottom: `2px solid ${theme.colors.primary}`,
          }
        : {};
    },
    [location, theme]
  );

  return {
    getActiveStyleForPathname,
  };
};

export default useActiveMenuStyles;
