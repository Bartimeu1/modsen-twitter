import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { EditModal } from '@components/EditModal';
import { Picture } from '@components/Picture';
import { ToggleButton } from '@components/ToggleButton';
import { TweetFeed } from '@components/TweetFeed';
import { useAppSelector } from '@root/hooks';
import { useGetTweetsByIdQuery } from '@root/store/features/tweet/tweetApi';
import { useGetUserBySlugQuery } from '@store/features/user/userApi';

import {
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

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const { data: profileData } = useGetUserBySlugQuery({
    slug: paramSlug,
  });

  const { data: tweetsData } = useGetTweetsByIdQuery({
    userId: profileData?.userId || '',
  });

  const onEditButtonClick = () => {
    setIsEditModalVisible((prevState) => !prevState);
  };

  if (!paramSlug) {
    return <Navigate to={`/profile/${userData?.slug}`} />;
  }

  return (
    <StyledProfilePage>
      <ProfileHeader>
        <HeaderContent>
          <HeaderText>
            <HeaderName>{profileData?.name}</HeaderName>
            <HeaderFollowers>1231 Tweets</HeaderFollowers>
          </HeaderText>
          <ToggleButton />
        </HeaderContent>
        <HeaderWallpaper />
      </ProfileHeader>
      <ProfileContent>
        <UserInfo>
          <Picture
            alt="profileAvatar"
            image={userData?.avatar || defaultAvatar}
            width={150}
          />
          <UserName>{profileData?.name}</UserName>
          <UserSlug>{profileData?.slug && '@' + profileData.slug}</UserSlug>
          <UserDesc>{userData?.bio}</UserDesc>
        </UserInfo>
        <EditButton onClick={onEditButtonClick}>Edit profile</EditButton>
      </ProfileContent>
      <SubscriptionInfo>
        <SubscriptionBlock>67 Following</SubscriptionBlock>
        <SubscriptionBlock>47 Followers</SubscriptionBlock>
      </SubscriptionInfo>
      {tweetsData && <TweetFeed tweets={tweetsData} />}
      {isEditModalVisible && (
        <EditModal
          profileData={profileData}
          setIsVisible={setIsEditModalVisible}
        />
      )}
    </StyledProfilePage>
  );
};
