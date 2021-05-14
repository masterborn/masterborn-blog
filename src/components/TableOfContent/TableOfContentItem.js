import styled from '@emotion/styled';
import { space, typography, color } from 'styled-system';

const ListItem = styled('li')`
  list-style: none;
  border-left-style: solid;
  border-left-width: 2px;
  font-size: ${props => props.theme.fontSizes.small};
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  line-height: 2.4rem;
  border-color: ${props =>
    props.isActive ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.isActive 
    ? props.theme.colors.tableOfContent.itemColorActive 
    : props.theme.colors.tableOfContent.itemColor};
  font-weight: ${props => (props.isActive ? '600' : '300')};
  padding-left: ${props => (props.level === 2 ? '2.8rem' : '1.9rem')} !important;
  opacity: ${props => (props.isActive ? '1' : '0.9')};
`;

const TableOfContentItem = styled(ListItem)(space, typography, color);

TableOfContentItem.defaultProps = {
  fontSize: 'small',
};

export default TableOfContentItem;
