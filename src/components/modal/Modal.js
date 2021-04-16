import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useTransition, animated } from 'react-spring';

import ModalClose from './ModalClose';
import ModalWrapper from './ModalWrapper';

const AnimatedWrapper = animated(ModalWrapper);

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 67rem;
  border-radius: 4px;
  padding: 3rem;
  position: relative;
  background: ${props => props.theme.colors.white};
`;

const AnimatedModalContainer = animated(ModalContainer);

const Modal = ({ isActive, hide, children }) => {
  const modalRef = useRef(null);

  const cleanUp = () => clearAllBodyScrollLocks();

  useEffect(() => {
    if (isActive) disableBodyScroll(modalRef);
    return cleanUp;
  }, [isActive]);

  const transitions = useTransition(isActive, null, {
    from: { opacity: 0, transform: 'translateY(-300px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-100vh)' },
    config: { tension: 60, friction: 5, mass: 0.25 },
  });
  return (
    transitions.map(({ item, key, props }) => item && (
      <AnimatedWrapper
        key={key}
        ref={modalRef}
        style={{ position: props.position, opacity: props.opacity }}
      >
        <AnimatedModalContainer style={{ transform: props.transform, opacity: props.opacity }}>
          <ModalClose onClick={hide} />
          {children}
        </AnimatedModalContainer>
      </AnimatedWrapper>
    )));
};

Modal.propTypes = {
  hide: PropTypes.func,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
};

Modal.defaultProps = {
  hide() {},
  isActive: false,
};


export default Modal;
