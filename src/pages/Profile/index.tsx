import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { BackPanel } from '@components/BackPanel';
import { EditModal } from '@components/EditModal';
import { Loader } from '@components/Loader';
import { Picture } from '@components/Picture';
import { ToggleButton } from '@components/ToggleButton';
import { TweetFeed } from '@components/Tweet';
import { UserSearchSidebar } from '@components/User';
import { useAppSelector } from '@root/hooks';
import { useGetTweetsByUserIdQuery } from '@store/features/tweet/tweetApi';
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
  const isMyProfile = paramSlug === userData?.slug;

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const { data: profileData, isLoading: isUserLoading } = useGetUserBySlugQuery(
    {
      slug: paramSlug,
    },
  );

  const { data: tweetsData, isLoading: isTweetsLoading } =
    useGetTweetsByUserIdQuery({
      userId: profileData?.userId || '',
    });

  const onEditButtonClick = () => {
    setIsEditModalVisible((prevState) => !prevState);
  };

  if (!paramSlug) {
    return <Navigate to={`/profile/${userData?.slug}`} />;
  }

  if (isTweetsLoading || isUserLoading) {
    return <Loader />;
  }

  const closeEditModal = () => {
    setIsEditModalVisible(false);
  };

  return (
    <>
      <StyledProfilePage>
        <ProfileHeader>
          {isMyProfile ? (
            <HeaderContent>
              <HeaderText>
                <HeaderName>{profileData?.name}</HeaderName>
                <HeaderFollowers>
                  {tweetsData?.length || 0} Tweets
                </HeaderFollowers>
              </HeaderText>
              <ToggleButton />
            </HeaderContent>
          ) : (
            <BackPanel />
          )}
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
          <TweetFeed tweets={tweetsData} isMenuVisible={isMyProfile} />
        )}
        {isEditModalVisible && (
          <EditModal
            profileData={profileData}
            closeEditModal={closeEditModal}
          />
        )}
      </StyledProfilePage>
      <UserSearchSidebar />
    </>
  );
};
