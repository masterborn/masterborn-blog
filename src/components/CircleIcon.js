import styled from 'styled-components';

const CircleIcon = styled.div`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.black};

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.icon});
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 0.2s linear;
  }
`;

export default CircleIcon;
