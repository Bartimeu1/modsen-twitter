import defaultAvatar from '@assets/images/defaultAvatar.png';
import { Picture } from '@components/Picture';
import { LogOutIcon } from '@root/constants';
import { useAppDispatch, useAppSelector } from '@root/hooks';
import { removeUser } from '@store/features/user/userSlice';
import { persistor } from '@store/store';
import { getAuth, signOut } from 'firebase/auth';

import {
  LogoutButton,
  LogoutButtonText,
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

    persistor.purge();
    dispatch(removeUser());
    signOut(auth);
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
      <LogoutButton onClick={onLogoutButtonClick}>
        <LogOutIcon />
        <LogoutButtonText>Log out</LogoutButtonText>
      </LogoutButton>
    </StyledUserPanel>
  );
};
