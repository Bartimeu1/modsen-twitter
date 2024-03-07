import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { INavigationLink } from './types';

import { FlexMixin } from '@root/theme';

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
  }

  ${({ $isTarget, theme }) =>
    $isTarget &&
    `
    font-weight: ${theme.fontWeight.bold};

    & svg {
      stroke: black;
    }
  `}
`;
