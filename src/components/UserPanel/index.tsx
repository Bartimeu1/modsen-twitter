import { useState, useEffect } from 'react';

import {
  StyledUserPanel,
  UserInfo,
  UserDetails,
  UserName,
  UserSlug,
  LogoutButton,
} from './styled';

import { getUserByEmail } from '@utils/firestore';

import { IUserData } from '@root/types/firebase';

import { Picture } from '@components/Picture';

import defaultAvatar from '@assets/images/defaultAvatar.png';

import { useAppSelector } from '@root/hooks';

export const UserPanel = () => {
  const userEmail = useAppSelector((state) => state.user.email);
  const [userData, setUserData] = useState<IUserData | null>(null);

  useEffect(() => {
    if (userEmail) {
      getUserByEmail(userEmail).then((data) => {
        const userDataFromFirestore: IUserData = {
          name: data.name,
          slug: data.slug,
        };
        setUserData(userDataFromFirestore);
      });
    }
  }, []);

  return (
    <StyledUserPanel>
      <UserInfo>
        <Picture alt="panelAvatar" image={defaultAvatar} width={50} />
        <UserDetails>
          <UserName>{userData?.name}</UserName>
          <UserSlug>{userData?.slug && '@' + userData.slug}</UserSlug>
        </UserDetails>
      </UserInfo>
      <LogoutButton>Log out</LogoutButton>
    </StyledUserPanel>
  );
};
