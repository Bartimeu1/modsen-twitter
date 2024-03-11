import defaultWallpaper from '@assets/images/dafaultWallpaper.jpg';
import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledProfilePage = styled.main`
  width: 100%;
  max-width: 910px;
`;

export const ProfileHeader = styled.header`
  padding-bottom: 17px;
`;

export const HeaderText = styled.div`
  ${FlexMixin({ direction: 'column' })}
  margin-bottom: 13px;
`;

export const HeaderName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin-bottom: 6px;
`;

export const HeaderFollowers = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  opacity: 60%;
`;

export const HeaderWallpaper = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${defaultWallpaper});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProfileContent = styled.div`
  ${FlexMixin({ justify: 'space-between', align: 'start' })}

  width: 100%;
  margin-bottom: 35px;
`;

export const UserInfo = styled.div`
  ${FlexMixin({ direction: 'column' })}

  color: ${({ theme }) => theme.color.primary};
  margin-top: -80px;
`;

export const UserName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin-bottom: 4px;
`;

export const UserSlug = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  opacity: 60%;
  margin-bottom: 17px;
`;

export const UserDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;

export const EditButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  padding: 10px 15px;
`;

export const SubscriptionInfo = styled.div`
  ${FlexMixin({ align: 'center' })}

  margin: 0 -15px;
`;

export const SubscriptionBlock = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  margin: 0 15px;
`;
