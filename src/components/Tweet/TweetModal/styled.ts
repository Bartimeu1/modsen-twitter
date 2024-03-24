import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledTweetModal = styled.div`
  ${FlexMixin({ align: 'center', justify: 'center' })}

  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 13;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: 0.5s all;
`;

export const TweetModalContent = styled.div`
  ${FlexMixin({ direction: 'column' })}

  border: 1px solid ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.xs2}px;
  padding: 10px 0;
  margin: 0 10px;
  position: relative;
  width: 100%;
  max-width: 600px;

  & > div {
    margin-bottom: 0;

    &::before,
    &::after {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    & > div {
      padding: 18px 10px 13px 10px;
    }
  }
`;

export const CloseButton = styled.button`
  border: none;
  position: absolute;
  padding: 0;
  z-index: 20;
  right: 20px;
  top: 20px;
`;
