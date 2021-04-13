import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Scrollbar from '../Scrollbar';
import TableOfContent from '../TableOfContent';
import SocialBox from '../SocialBox';
import ConditionalWrapper from '../ConditionalWrapper';
import useMatchBreakpoint from '../../hooks/useMatchBreakpoint';

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

const RightSidebar = ({ tableOfContents, relativePath }) => {
  const isEmptyTableOfContent = checkIsEmptyTableOfContent(
    tableOfContents.items
  );
  const isDesktop = useMatchBreakpoint('desktop');
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
};

RightSidebar.defaultProps = {
  tableOfContents: {},
};

export default RightSidebar;