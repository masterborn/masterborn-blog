import React, { forwardRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  position,
} from 'styled-system';

const ActionLink = styled('a')`
  cursor: pointer;
`;

// eslint-disable-next-line complexity
const BaseLink = forwardRef(({ to, children, ...rest }, ref) => {
  const isAnchor = to ? false : to.charAt(0) === '#';
  if (isAnchor || isAbsoluteUrl(to)) {
    return (
      <a href={to} ref={ref} {...rest}>
        {children}
      </a>
    );
  }
  if (!to) {
    return (
      <ActionLink ref={ref} {...rest}>
        {children}
      </ActionLink>
    );
  }
  return (
    <GatsbyLink ref={ref} to={to} {...rest}>
      {children}
    </GatsbyLink>
  );
});

const Link = styled(BaseLink)`
  ${space};
  ${color};
  ${typography};
  ${layout};
  ${flexbox}
  ${position}
  color: ${props => props.theme.colors.header.color};
  margin: 2rem;
  padding: 1rem 0;
  transition: all .3s;
  border-bottom: 2px solid transparent;
  :hover {
    color: ${props => props.theme.colors.menuTextActive};
    fontw-weight: ${props => props.theme.fontWeights.heading};
    border-bottom: 2px solid ${ props => props.theme.colors.primary};
    svg {
      color: ${props => props.theme.colors.link.hover};
    }
  }
`;

BaseLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

BaseLink.defaultProps = {
  to: '',
};

export default Link;
