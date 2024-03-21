import { FlexMixin, FontsMixin } from '@root/theme';
import styled from 'styled-components';

import { IStyledSidebar } from './types';

export const StyledSidebar = styled.aside<IStyledSidebar>`
  width: 25%;
  margin-right: 53px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    width: auto;
    margin-right: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    display: none;

    ${({ $isBurgerActive, theme }) =>
      $isBurgerActive &&
      `
      background: ${theme.color.background};
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      z-index: 6;
    `};
  }
`;

export const Logo = styled.div`
  margin-bottom: 20px;

  & svg {
    width: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    ${FlexMixin({ align: 'center', justify: 'center' })}

    & svg {
      width: 35px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    margin-bottom: 0;
  }
`;

export const TweetButton = styled.button`
  background: ${({ theme }) => theme.color.blue};
  border-radius: ${({ theme }) => theme.borderRadius.xs}px;
  border: 1px solid ${({ theme }) => theme.color.blue};
  display: inline-block;
  padding: 15px 0 19px 0;
  width: 100%;
  transition: 0.3s;
  margin-bottom: 80px;

  & svg {
    display: none;
  }

  &:hover {
    background: inherit;
    transition: 0.3s;

    & p {
      color: ${({ theme }) => theme.color.blue};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    padding: 10px;
    margin-bottom: 40px;

    & svg {
      width: 24px;
      display: block;

      & path {
        fill: white;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: auto;
  }
`;

export const TweetButtonText = styled.p`
  ${FontsMixin({ size: 'xs', weight: 'bold' })}
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    display: none;
  }
`;
