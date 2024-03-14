import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { EditModal } from '@components/EditModal';
import { Picture } from '@components/Picture';
import { ToggleButton } from '@components/ToggleButton';
import { TweetFeed } from '@components/TweetFeed';
import { BackArrowIcon } from '@constants/icons';
import { UserSearchSidebar } from '@root/components/UserSearchSidebar';
import { useAppSelector } from '@root/hooks';
import { useGetTweetsByIdQuery } from '@root/store/features/tweet/tweetApi';
import { useGetUserBySlugQuery } from '@store/features/user/userApi';

import {
  BackLink,
  EditButton,
  HeaderContent,
  HeaderFollowers,
  HeaderName,
  HeaderText,
  HeaderWallpaper,
  ProfileContent,
  ProfileHeader,
  StyledProfilePage,
  SubscriptionBlock,
  SubscriptionInfo,
  UserDesc,
  UserInfo,
  UserName,
  UserSlug,
} from './styled';

export const ProfilePage = () => {
  const userData = useAppSelector(({ user }) => user.data);
  const params = useParams();
  const paramSlug = params.userSlug || '';
  const isMyProfile = paramSlug === userData?.slug;

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const { data: profileData, refetch: refetchProfile } = useGetUserBySlugQuery({
    slug: paramSlug,
  });

  const { data: tweetsData, refetch: refetchTweets } = useGetTweetsByIdQuery({
    userId: profileData?.userId || '',
  });

  const onEditButtonClick = () => {
    setIsEditModalVisible((prevState) => !prevState);
  };

  if (!paramSlug) {
    return <Navigate to={`/profile/${userData?.slug}`} />;
  }

  return (
    <>
      <StyledProfilePage>
        <ProfileHeader>
          <HeaderContent>
            {isMyProfile ? (
              <HeaderText>
                <HeaderName>{profileData?.name}</HeaderName>
                <HeaderFollowers>1231 Tweets</HeaderFollowers>
              </HeaderText>
            ) : (
              <BackLink to="/home">
                <BackArrowIcon />
                Home
              </BackLink>
            )}
            <ToggleButton />
          </HeaderContent>
          <HeaderWallpaper />
        </ProfileHeader>
        <ProfileContent>
          <UserInfo>
            <Picture
              alt="profileAvatar"
              image={profileData?.avatar || defaultAvatar}
              width={150}
            />
            <UserName>{profileData?.name}</UserName>
            <UserSlug>{profileData?.slug && '@' + profileData.slug}</UserSlug>
            <UserDesc>{profileData?.bio}</UserDesc>
          </UserInfo>
          {isMyProfile && (
            <EditButton onClick={onEditButtonClick}>Edit profile</EditButton>
          )}
        </ProfileContent>
        <SubscriptionInfo>
          <SubscriptionBlock>67 Following</SubscriptionBlock>
          <SubscriptionBlock>47 Followers</SubscriptionBlock>
        </SubscriptionInfo>
        {tweetsData && (
          <TweetFeed
            refetch={refetchTweets}
            tweets={tweetsData}
            isMenuVisible={isMyProfile}
          />
        )}
        {isEditModalVisible && (
          <EditModal
            refetch={refetchProfile}
            profileData={profileData}
            setIsVisible={setIsEditModalVisible}
          />
        )}
      </StyledProfilePage>
      <UserSearchSidebar />
    </>
  );
};
