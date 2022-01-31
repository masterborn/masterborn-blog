import styled from 'styled-components';

import Link from '../Link';

const PostLink = styled(Link)`
  &:hover {
    h4 {
      color: ${props => props.theme.colors.primary};
      text-decoration: underline;
    }
  }
`;

export default PostLink;
