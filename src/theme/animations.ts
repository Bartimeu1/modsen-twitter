import { keyframes } from 'styled-components';

export const swing = keyframes`
  0%, 100% {
    transform: rotate(0deg) scale(1);
  }
  20% {
    transform: rotate(-10deg) scale(1.05);
  }
  40% {
    transform: rotate(10deg) scale(1.1);
  }
  60% {
    transform: rotate(-10deg) scale(1.05);
  }
  80% {
    transform: rotate(5deg) scale(1.03);
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
