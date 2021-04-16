import styled from '@emotion/styled';

const ModalWrapper = styled.div`
  display: grid;
  overflow-y:auto;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
`;

export default ModalWrapper;
