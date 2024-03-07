import { useEffect, useState } from 'react';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { Picture } from '@components/Picture';
import { useAppDispatch,useAppSelector } from '@root/hooks';
import { IUserData } from '@root/types/firebase';
import { removeUser } from '@store/features/user/userSlice';
import { getUserByEmail } from '@utils/firestore';
import { getAuth, signOut } from 'firebase/auth';

import {
  LogoutButton,
  StyledUserPanel,
  UserDetails,
  UserInfo,
  UserName,
  UserSlug,
} from './styled';

export const UserPanel = () => {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector((state) => state.user.email);

  const [userDetailsData, setUserDetailsData] = useState<IUserData | null>(
    null,
  );

  useEffect(() => {
    if (userEmail) {
      getUserByEmail(userEmail).then((data) => {
        console.log(data)
        const userDataFromFirestore: IUserData = {
          name: data.name,
          slug: data.slug,
        };
        setUserDetailsData(userDataFromFirestore);
      });
    }
  }, [userEmail]);

  const onLogoutButtonClick = () => {
    const auth = getAuth();

    signOut(auth);
    dispatch(removeUser());
  };

  return (
    <StyledUserPanel>
      <UserInfo>
        <Picture alt="panelAvatar" image={defaultAvatar} width={50} />
        <UserDetails>
          <UserName>{userDetailsData?.name}</UserName>
          <UserSlug>
            {userDetailsData?.slug && '@' + userDetailsData.slug}
          </UserSlug>
        </UserDetails>
      </UserInfo>
      <LogoutButton onClick={onLogoutButtonClick}>Log out</LogoutButton>
    </StyledUserPanel>
  );
};
