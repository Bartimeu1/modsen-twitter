import { Link } from 'react-router-dom';

import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledNotFound = styled.div`
  ${FlexMixin({ align: 'center', direction: 'column' })}

  padding-top: 150px;

  & svg {
    margin-bottom: 50px;
  }
`;

export const NotFoundText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 50px;
`;

export const BackLink = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.background};
  background: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  padding: 10px 18px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    background: inherit;
    transition: 0.3s;
  }
`;
