
import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';
import { ChevronUp } from '@styled-icons/fa-solid';
import { useTransition, animated } from 'react-spring';

import { media } from '../utils/emotion';

const BackTopContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  animation: fadeIn 700ms ease-in-out 1s both;
  cursor: pointer;
  z-index: 12;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50rem;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${props => props.theme.colors.primary};
  ${media.desktop`
    bottom: 4rem;
    right: 4rem;
  `}
`

const AnimatedWrapper = animated(BackTopContainer);

const StyledIcon = styled(ChevronUp)`
  fill: ${props => props.theme.colors.black};
  margin-left: -1px;
`

const BackToTop = () =>{
  const [showScroll, setShowScroll] = useState(false);
  const transitions = useTransition(
    showScroll,
    null,
    {
      from: { opacity: 0, transform: 'translateY(-5vh)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0, transform: 'translateY(-5vh)' },
      config: { tension: 60, friction: 5, mass: 0.55 },
    }
  );

  const checkScrollTop = () => {
    if (window.pageYOffset > 400){
      setShowScroll(true);
    } else if (window.pageYOffset <= 400){
      setShowScroll(false);
    }
  };

  const throttleScroll = useCallback(throttle(checkScrollTop, 300), [showScroll]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', throttleScroll);
    return () => window.removeEventListener('scroll', throttleScroll);
  }, []);

  return (
    transitions.map(({ item, key, props }) => item && (
      <AnimatedWrapper
        key={key}
        style={{ transform: props.transform, opacity: props.opacity }}
        onClick={scrollTop}
      >
        <StyledIcon size="11" />
      </AnimatedWrapper>
  )));
}

export default BackToTop;