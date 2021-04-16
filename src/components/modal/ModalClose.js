import styled from '@emotion/styled';

import cross from '../../assets/cross.svg';


const ModalClose = styled.button`
  cursor: pointer;
  font-size: 2rem;
  background-image: url(${cross});
  background-size: 100% 100%;
  background-color: transparent;
  border: none;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export default ModalClose;
