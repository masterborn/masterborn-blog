import styled from '@emotion/styled';
import { space, typography } from 'styled-system';

const ListOrdered = styled('ol')(
  ({ theme }) => ({
    listStyle: 'decimal',
    li: {
      marginBottom: theme.space.xSmall,
      marginTop: theme.space.none,
      marginLeft: theme.space.none,
      paddingLeft: theme.space.none,
      lineHeight: theme.lineHeights.body,
      fontSize: theme.fontSizes.body,
    },
  }),
  space,
  typography
);

ListOrdered.defaultProps = {
  paddingLeft: 'medium',
};

export default ListOrdered;
