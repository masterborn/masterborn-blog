import styled from 'styled-components';

import { media } from '../../utils/emotion';

const Container = styled.nav`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  padding: ${props => (props.isCollapsedHeader ? '0.8rem 0' : '1.5rem 0')};
  position: relative;
  width: inherit;
  padding: 0 3rem;
  color: ${props => props.theme.colors.menuText};
  ${media.desktop`
    padding: 0;
  `}
`;

export default Container;
