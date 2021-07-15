import styled from '@emotion/styled';
import { space, typography } from 'styled-system';

const List = styled('ul')(
  ({ theme }) => ({
    listStyle: 'initial',
    li: {
      marginBottom: theme.space.xSmall,
      marginTop: theme.space.none,
      marginLeft: theme.space.none,
      paddingLeft: theme.space.none,
      lineHeight: theme.lineHeights.body,
      fontSize: theme.fontSizes.bodySmall,
      color: theme.colors.heading,
      "p": {
        marginTop: theme.space.none,
        marginBottom: theme.space.none,
      }
    },
  }),
  space,
  typography
);

List.defaultProps = {
  paddingLeft: 'medium',
};

export default List;
