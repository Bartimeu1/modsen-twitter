import { FlexMixin, FontsMixin } from '@root/theme';
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
  ${FontsMixin({ size: 'xs', weight: 'semiBold' })}

  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 6px;
`;

export const UserSlug = styled.p`
  ${FontsMixin({ size: 'xs' })}

  color: ${({ theme }) => theme.color.primary};
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
  ${FontsMixin({ size: 'xs', family: 'secondary', weight: 'bold' })}

  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    display: none;
  }
`;
