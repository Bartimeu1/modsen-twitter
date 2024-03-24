import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { BackPanel } from '@components/BackPanel';
import { EditModal } from '@components/EditModal';
import { Loader } from '@components/Loader';
import { ToggleButton } from '@components/ToggleButton';
import { TweetFeed } from '@components/Tweet';
import { UserAvatar, UserSearchSidebar } from '@components/User';
import { urls } from '@root/constants';
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
    {
      skip: !paramSlug,
    },
  );

  const { data: tweetsData, isLoading: isTweetsLoading } =
    useGetTweetsByUserIdQuery({
      userId: profileData?.userId || '',
    });

  const onEditButtonClick = () => {
    setIsEditModalVisible((prevState) => !prevState);
  };

  const closeEditModal = () => {
    setIsEditModalVisible(false);
  };

  if (!paramSlug) {
    return <Navigate to={`${urls.profile}/${userData?.slug}`} />;
  }

  if (isTweetsLoading || isUserLoading) {
    return <Loader />;
  }

  return (
    <>
      <StyledProfilePage>
        <ProfileHeader>
          {isMyProfile ? (
            <HeaderContent>
              <HeaderText>
                <HeaderName>{profileData?.name}</HeaderName>
                <HeaderFollowers>
                  {tweetsData ? tweetsData.length : 0} Tweets
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
            <UserAvatar image={profileData?.avatar} size={150} />
            <UserName data-testid="profile-name">{profileData?.name}</UserName>
            <UserSlug>{profileData?.slug && '@' + profileData?.slug}</UserSlug>
            <UserDesc data-testid="profile-bio">{profileData?.bio}</UserDesc>
          </UserInfo>
          {isMyProfile && (
            <EditButton
              data-testid="open-edit-button"
              onClick={onEditButtonClick}
            >
              Edit profile
            </EditButton>
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
