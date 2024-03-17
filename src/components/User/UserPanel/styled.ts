import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledUserPanel = styled.div`
  ${FlexMixin({ direction: 'column' })}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    ${FlexMixin({ direction: 'column', align: 'center' })}
  }
`;

export const UserInfo = styled.div`
  ${FlexMixin({ align: 'center' })}

  margin-bottom: 30px;

  & img {
    border-radius: ${({ theme }) => theme.borderRadius.circle};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    margin-bottom: 15px;
  }
`;

export const UserDetails = styled.div`
  ${FlexMixin({ direction: 'column' })}

  margin-left: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopL}) {
    margin-left: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    display: none;
  }
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
  background: ${({ theme }) => theme.color.lightGrey};
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  padding: 15px 0 19px 0;
  transition: 0.3s;

  & svg {
    display: none;
  }

  &:hover {
    background: inherit;
    transition: 0.3s;

    & p {
      color: ${({ theme }) => theme.color.lightGrey};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    padding: 10px;
    border-radius: ${({ theme }) => theme.borderRadius.circle};

    & svg {
      width: 24px;
      display: block;

      & path {
        fill: white;
      }
    }
  }
`;

export const LogoutButtonText = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.xs}sm;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    display: none;
  }
`;
