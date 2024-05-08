import styled, { keyframes } from 'styled-components';
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinLoader = styled.img`
  animation: ${spin} 2s linear infinite;
`;
