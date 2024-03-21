import defaultWallpaper from '@assets/images/dafaultWallpaper.jpg';
import { FlexMixin, FontsMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledProfilePage = styled.main`
  width: 100%;
  max-width: 930px;
  position: relative;

  &:before,
  &:after {
    background: ${({ theme }) => theme.color.primary};
    opacity: 10%;
    position: absolute;
    width: 1px;
    height: 100%;
    max-height: 870px;
    content: '';
    top: 0;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }
`;

export const ProfileHeader = styled.header`
  padding-bottom: 17px;
`;

export const HeaderContent = styled.div`
  ${FlexMixin({ justify: 'space-between', align: 'center' })}
  padding: 0 15px;
  margin-bottom: 13px;
`;

export const HeaderText = styled.div`
  ${FlexMixin({ direction: 'column' })}
`;

export const HeaderName = styled.h3`
  ${FontsMixin({ size: 'md', weight: 'bold', family: 'secondary' })}

  margin-bottom: 6px;
`;

export const HeaderFollowers = styled.p`
  ${FontsMixin({ size: 'xs' })}

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
  padding: 0 15px;
  margin-bottom: 35px;
`;

export const UserInfo = styled.div`
  ${FlexMixin({ direction: 'column' })}

  color: ${({ theme }) => theme.color.primary};
  margin-top: -80px;

  & img {
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    margin-bottom: 5px;
  }
`;

export const UserName = styled.h3`
  ${FontsMixin({ size: 'xl', weight: 'bold', family: 'secondary' })}

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
  ${FontsMixin({ size: 'sm', weight: 'semiBold' })}

  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  padding: 10px 15px;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.background};
    transition: 0.3s;
  }
`;

export const SubscriptionInfo = styled.div`
  ${FlexMixin({ align: 'center' })}

  margin: 0 -15px 50px -15px;
  padding: 0 15px;
`;

export const SubscriptionBlock = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  margin: 0 15px;
`;
