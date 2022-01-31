import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dropRight from 'lodash/dropRight';
import isString from 'lodash/isString';

import Link from '../Link';
import useLocation from '../../hooks/useLocation';

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${props => props.theme.colors.primary};
`;

const isRelativePath = path => {
  return path.match(/^\.\/+/);
};

const getBasePathToFolder = path => {
  let basePath = path;
  if (basePath.charAt(basePath.length) === '/')
    basePath = basePath.substring(0, basePath.length);
  return dropRight(basePath.split('/'), 2).join('/');
};

const getDestination = ({ href, location, isRelative, isAnchor }) => {
  if (isRelative && !isAnchor) {
    const toPath = href.substr(2);
    const basePath = getBasePathToFolder(location.pathname);
    return `${basePath}/${toPath}`;
  }
  return href;
};

const isAnchorFunction = href => isString(href) && href.charAt(0) === '#';

const AnchorTag = ({ children: link, href }) => {
  const isAnchor = isAnchorFunction(href);
  const location = useLocation();

  if (!link) return null;
  if (isAnchor) return <StyledLink href={href}>{link}</StyledLink>;
  const isRelative = isRelativePath(href);
  const to = getDestination({ href, location, isRelative, isAnchor });

  const isExternalLink = !href.startsWith('/');
  return (
    <StyledLink to={to} target={isExternalLink ? '_blank' : null}>
      {link}
    </StyledLink>
  );
};

AnchorTag.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string.isRequired,
};

export default AnchorTag;
