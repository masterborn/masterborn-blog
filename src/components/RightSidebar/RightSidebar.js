import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Scrollbar from '../Scrollbar';
import TableOfContent from '../TableOfContent';
import SocialBox from '../SocialBox';
import ConditionalWrapper from '../ConditionalWrapper';
import useMatchBreakpoint from '../../hooks/useMatchBreakpoint';
import { media } from '../../utils/emotion';

const checkIsEmptyTableOfContent = items => {
  if (!items || items.length === 0) return true;
  if (items.length > 1) return false;
  return !items.some(lvl1 => lvl1.items && lvl1.items.length > 0);
};

const Container = styled('div')`
  padding-top: 0;
  position: sticky;
  top: 8rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  height: auto;

  ${media.desktop`
    height: calc(100vh - 8rem);
  `}
`;

const RightSidebar = ({ tableOfContents, relativePath }) => {
  const isEmptyTableOfContent = checkIsEmptyTableOfContent(
    tableOfContents.items
  );
  const isDesktop = useMatchBreakpoint('desktop');
  return (
    <Container>
      <ConditionalWrapper
        condition={isDesktop}
        wrapper={children => <Scrollbar>{children}</Scrollbar>}
      >
        <>
          {!isEmptyTableOfContent && (
            <TableOfContent items={tableOfContents.items} />
          )}
          <SocialBox filePath={relativePath} />
        </>
      </ConditionalWrapper>
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
