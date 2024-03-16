import { Link } from 'react-router-dom';

import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

import { INavigationLink } from './types';

export const StyledNavMenu = styled.nav`
  ${FlexMixin({ direction: 'column' })}

  margin-top: 30px;
`;

export const NavigationLink = styled(Link)<INavigationLink>`
  ${FlexMixin({ align: 'center' })}

  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

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
      stroke: ${theme.color.primary}
    }
  `}
`;
