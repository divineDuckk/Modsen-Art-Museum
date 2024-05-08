import styled, { keyframes } from 'styled-components';
const WIDTH = 416;
const HEIGHT = 130;
const skeletonAnimation = keyframes`
  0% {
    background-position: -${WIDTH}px 0;
  }
  100% {
    background-position: ${WIDTH} 0;
  }
`;

export const CardSkeleton = styled.div`
  width: ${WIDTH};
  height: ${HEIGHT};
  background-color: #f2f2f2;
  background-image: linear-gradient(90deg, #f2f2f2, #e6e6e6, #f2f2f2);
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
`;
