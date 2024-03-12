import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledUserPanel = styled.div`
  ${FlexMixin({ direction: 'column' })}
`;

export const UserInfo = styled.div`
  ${FlexMixin({ align: 'center' })}

  margin-bottom: 30px;

  & img {
    border-radius: ${({ theme }) => theme.borderRadius.circle};
  }
`;

export const UserDetails = styled.div`
  ${FlexMixin({ direction: 'column' })}

  margin-left: 25px;
`;

export const UserName = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  margin-bottom: 6px;
`;

export const UserSlug = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  opacity: 60%;
`;

export const LogoutButton = styled.button`
  color: ${({ theme }) => theme.color.background};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  background: ${({ theme }) => theme.color.lightGrey};
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  font-size: ${({ theme }) => theme.fontSize.xs}sm;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 15px 0 19px 0;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.lightGrey};
    background: inherit;
    transition: 0.3s;
  }
`;
