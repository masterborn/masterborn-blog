import styled from '@emotion/styled';
import { space, typography, color } from 'styled-system';

const ListItem = styled('li')`
  list-style: none;
  border-left-style: solid;
  border-left-width: 2px;
  font-size: ${props => props.theme.fontSizes.bodySmall};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-color: ${props =>
    props.isActive ? props.theme.colors.primary : 'transparent'};
  color: ${props =>
    props.isActive ? props.theme.colors.tableOfContent.itemColorActive : props.theme.colors.tableOfContent.itemColor};
  font-weight: ${props => (props.isActive ? '600' : '300')};
  padding-left: ${props => (props.level === 2 ? '3rem' : '2rem')} !important;
  opacity: ${props => (props.isActive ? '1' : '0.9')};
`;

const TableOfContentItem = styled(ListItem)(space, typography, color);

TableOfContentItem.defaultProps = {
  fontSize: 'small',
};

export default TableOfContentItem;
