import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { EditModal } from '@components/EditModal';
import { Picture } from '@components/Picture';
import { TweetFeed } from '@components/TweetFeed';
import { useAppSelector } from '@root/hooks';
import { ITweetResponse, IUserData } from '@root/types/firebase';
import { getTweetsById, getUserBySlug } from '@utils/firestore';

import {
  EditButton,
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
  const paramSlug = params.userSlug;

  const [profileData, setProfileData] = useState<IUserData | null>(null);
  const [tweetsData, setTweetsData] = useState<ITweetResponse[] | null>(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  useEffect(() => {
    if (paramSlug) {
      getUserBySlug(paramSlug)
        .then((data) => {
          setProfileData(data);
        })
        .catch(() => {
          setProfileData(null);
        });
    }
  }, [paramSlug]);

  useEffect(() => {
    if (profileData?.userId) {
      getTweetsById(profileData.userId)
        .then((data) => {
          setTweetsData(data);
        })
        .catch(() => {
          setTweetsData(null);
        });
    }
  }, [paramSlug, profileData?.userId]);

  if (!paramSlug) {
    return <Navigate to={`/profile/${userData?.slug}`} />;
  }

  const onEditButtonClick = () => {
    setIsEditModalVisible((prevState) => !prevState);
  };

  return (
    <StyledProfilePage>
      <ProfileHeader>
        <HeaderText>
          <HeaderName>{profileData?.name}</HeaderName>
          <HeaderFollowers>1231 Tweets</HeaderFollowers>
        </HeaderText>
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
