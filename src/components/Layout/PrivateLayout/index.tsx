import { useCallback, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { BurgerMenu } from '@components/BurgerMenu';
import { Loader } from '@components/Loader';
import { NavSidebar } from '@components/Nav';
import { useAppDispatch, useAppSelector, useTimeout } from '@root/hooks';
import { Container } from '@root/theme';
import { useLazyGetUserByIdQuery } from '@store/features/user/userApi';
import { setUserData } from '@store/features/user/userSlice';

export const PrivateLayout = () => {
  const dispatch = useAppDispatch();
  const {
    id: userId,
    token: userToken,
    data: userData,
  } = useAppSelector((state) => state.user);

  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const [trigger] = useLazyGetUserByIdQuery();

  const getUser = () => {
    if (userId && !userData) {
      trigger({ userId }).then(({ data }) => {
        dispatch(setUserData(data));
      });
    }
  };

  const onBurgerMenuClick = useCallback(() => {
    setIsBurgerActive((prevState) => !prevState);
  }, []);

  useTimeout(getUser, 1000);

  if (!userToken) {
    return <Navigate to="/signup" />;
  }

  return userData ? (
    <Container>
      <BurgerMenu isActive={isBurgerActive} onClick={onBurgerMenuClick} />
      <NavSidebar
        isBurgerActive={isBurgerActive}
        onLinkClick={onBurgerMenuClick}
      />
      <Outlet />
    </Container>
  ) : (
    <Loader />
  );
};
