import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isArray from 'lodash/isArray';

import BaseHeading from '../Heading';
import { media } from '../../utils/emotion';
import useActiveHashInViewport from '../../hooks/useActiveHashInViewport';

import TableOfContentItem from './TableOfContentItem';

const StickyContainer = styled.div`
  display: none;
  margin-bottom: 4rem;
  ${media.desktop`
    display: block;
  `}
`;

const Heading = styled(BaseHeading)`
  font-weight: 600;
  margin-bottom: 3rem;
  line-height: 2rem;
  opacity: 0.9;
  font-size: 1.6rem;
`;

const List = styled.ul`
  margin-left: 0;
  margin-bottom: 0;
  padding-left: 0;
  border-left: 1px solid
    ${props => props.theme.colors.tableOfContent.separatorBorder};
  ${TableOfContentItem} {
    margin: 0.5rem 0;
  }
`;

const isStartFromFirstLevel = items => isArray(items) && items.length > 1;

const Item = ({ item, level, isActive }) => (
  <TableOfContentItem level={level} isActive={isActive}>
    <a href={item.url}>{item.title}</a>
  </TableOfContentItem>
);

Item.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  level: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const getHashesFromItems = items => {
  if (!isArray(items)) return [];
  return items.reduce((acc, lvl1Item) => {
    acc.push(lvl1Item.url);
    if (lvl1Item.items) {
      lvl1Item.items.forEach(lvl2Item => {
        acc.push(lvl2Item.url);
      });
    }
    return acc;
  }, []);
};

const TableOfContent = ({ items }) => {
  const itemsWithoutRoot = isStartFromFirstLevel(items)
    ? items
    : items[0].items;
  const hashes = itemsWithoutRoot ? getHashesFromItems(itemsWithoutRoot) : [];
  const activeHash = useActiveHashInViewport(hashes);

  return (
    <StickyContainer>
      <Heading as="h5">Table of Content</Heading>
      <List>
        {itemsWithoutRoot.map(lvl1Item => (
          <React.Fragment key={lvl1Item.url}>
            <Item
              item={lvl1Item}
              level={1}
              isActive={activeHash === lvl1Item.url}
            />
            {lvl1Item.items &&
              lvl1Item.items.map(lvl2Item => (
                <Item
                  key={lvl2Item.url}
                  item={lvl2Item}
                  level={2}
                  isActive={activeHash === lvl2Item.url}
                />
              ))}
          </React.Fragment>
        ))}
      </List>
    </StickyContainer>
  );
};

TableOfContent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
          title: PropTypes.string,
        })
      ),
    })
  ),
};

TableOfContent.defaultProps = {
  items: [],
};

export default TableOfContent;
