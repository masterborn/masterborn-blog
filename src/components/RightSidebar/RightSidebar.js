import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import TableOfContent from '../TableOfContent';
import SocialBox from '../SocialBox';

import SidebarCta from './SidebarCta';

const checkIsEmptyTableOfContent = items => {
  if (!items || items.length === 0) return true;
  if (items.length > 1) return false;
  return !items.some(lvl1 => lvl1.items && lvl1.items.length > 0);
};

// seems broken without position: sticky;

const Container = styled('div')`
  padding-top: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  height: auto;
`;

const RightSidebar = ({ tableOfContents, relativePath, isInPoland }) => {
  const isEmptyTableOfContent = checkIsEmptyTableOfContent(
    tableOfContents.items
  );
  return (
    <Container>

      <>
        {!isEmptyTableOfContent && (
        <TableOfContent items={tableOfContents.items} />
          )}
        <SocialBox filePath={relativePath} />
      </>
    </Container>
  );
};

RightSidebar.propTypes = {
  tableOfContents: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  relativePath: PropTypes.string.isRequired,
  isInPoland: PropTypes.bool,
};

RightSidebar.defaultProps = {
  tableOfContents: {},
  isInPoland: null,
};

export default RightSidebar;