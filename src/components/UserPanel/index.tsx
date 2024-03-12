import defaultAvatar from '@assets/images/defaultAvatar.png';
import { Picture } from '@components/Picture';
import { useAppDispatch, useAppSelector } from '@root/hooks';
import { removeUser } from '@store/features/user/userSlice';
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
  const userData = useAppSelector(({ user }) => user.data);

  const onLogoutButtonClick = () => {
    const auth = getAuth();

    signOut(auth);
    dispatch(removeUser());
  };

  return (
    <StyledUserPanel>
      <UserInfo>
        <Picture
          alt="panelAvatar"
          image={userData?.avatar || defaultAvatar}
          width={50}
        />
        <UserDetails>
          <UserName>{userData?.name}</UserName>
          <UserSlug>{userData?.slug && '@' + userData.slug}</UserSlug>
        </UserDetails>
      </UserInfo>
      <LogoutButton onClick={onLogoutButtonClick}>Log out</LogoutButton>
    </StyledUserPanel>
  );
};
