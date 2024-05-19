import styled, { keyframes } from 'styled-components';

export const NothingFoundHeader = styled.h2``;
const moveInCircle = keyframes`
  0% {
    transform: rotate(0deg) translateX(20px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(20px) rotate(-360deg);
  }
`;

export const MagnifierLoader = styled.img`
  animation: ${moveInCircle} 1.5s linear infinite;
`;
