import styled from '@emotion/styled';

import { media } from '../../utils/emotion';

const ModalTitle = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  margin: 1rem 0 3rem;
  opacity: 0.9;
  ${media.desktop`
    font-size: 2.6rem;
  `}
`;

export default ModalTitle;
