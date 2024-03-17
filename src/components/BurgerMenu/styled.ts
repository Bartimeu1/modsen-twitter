import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

import { IBurgerMenu } from './types';

export const StyledBurgerMenu = styled.div`
  ${FlexMixin({ align: 'center', justify: 'center' })}

  box-shadow: 0px 5px 10px 0px ${({ theme }) => theme.color.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  background: ${({ theme }) => theme.color.background};
  position: fixed;
  right: 10px;
  bottom: 30px;
  z-index: 10;
  padding: 15px;
  transition: 0.3s;
`;

export const BurgerContent = styled.div<IBurgerMenu>`
  border: none;
  display: none;
  width: 20px;
  height: 15px;
  position: relative;
  transition: 0.3s;
  &::before,
  &::after {
    background: ${({ theme }) => theme.color.primary};
    position: absolute;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    border-radius: 2px;
    transition: 0.3s;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
  &::before {
    transform: rotate(-45deg);
    top: 6.5px;
  }

  &::after {
    transform: rotate(45deg);
    bottom: 6.5px;
  }
  
  & span {
    display: none;
  }
`}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    display: block;
  }
`;

export const BurgerRow = styled.span`
  background: ${({ theme }) => theme.color.primary};
  position: absolute;
  width: 100%;
  height: 2px;
  top: 6px;
  border-radius: 2px;
  left: 0;
  transition: 0.3s;
`;
