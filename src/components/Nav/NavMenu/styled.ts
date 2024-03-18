import { Link } from 'react-router-dom';

import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

import { INavigationLink } from './types';

export const StyledNavMenu = styled.nav`
  ${FlexMixin({ direction: 'column' })}

  margin-top: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    ${FlexMixin({ direction: 'column', align: 'center', justify: 'center' })}

    margin-top: 15px;
  }
`;

export const NavigationLink = styled(Link)<INavigationLink>`
  ${FlexMixin({ align: 'center' })}

  margin-bottom: 20px;

  & svg {
    margin-right: 15px;

    & path {
      fill: ${({ theme }) => theme.color.primary};
    }
  }

  ${({ $isTarget, theme }) =>
    $isTarget &&
    `
    font-weight: ${theme.fontWeight.bold};

    & svg {
      stroke: ${theme.color.primary};
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    ${FlexMixin({ align: 'center', justify: 'center' })}

    & svg {
      margin-right: 0;
    }
  }
`;

export const LinkText = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    display: block;
    margin-left: 10px;
  }
`;
