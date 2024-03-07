import { useEffect, useState } from 'react';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { Picture } from '@components/Picture';
import { useAppSelector } from '@root/hooks';
import { IUserData } from '@root/types/firebase';
import { getUserByEmail } from '@utils/firestore';

import {
  LogoutButton,
  StyledUserPanel,
  UserDetails,
  UserInfo,
  UserName,
  UserSlug,
} from './styled';

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
  }, [userEmail]);

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
