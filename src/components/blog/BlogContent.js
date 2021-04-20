import styled from '@emotion/styled';

import Content from '../pages/Content';
import { media } from '../../utils/emotion';

const BlogContent = styled(Content)`
  background-color: ${props => props.theme.colors.blogTextBackground};
  padding: 10rem 3rem 0 3rem;
  ${media.desktop`
    padding: 6.5rem 5.5rem 6.5rem 5.5rem;
      width: 100%;
      max-width: 100%;
  `};
  ${media.ultraWide`
      width: 116rem;
      max-width: 116rem;
  `}
`;

export default BlogContent;
