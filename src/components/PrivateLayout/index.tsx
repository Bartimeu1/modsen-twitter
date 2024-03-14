import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { NavSidebar } from '@components/NavSidebar';
import { useAppDispatch, useAppSelector, useTimeout } from '@root/hooks';
import { Container } from '@root/theme';
import { useLazyGetUserByIdQuery } from '@store/features/user/userApi';
import { setUserData } from '@store/features/user/userSlice';

export const PrivateLayout = () => {
  const authToken = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();
  const userId = useAppSelector(({ user }) => user.id) || '';

  const [trigger, userData] = useLazyGetUserByIdQuery();

  useEffect(() => {
    if (userData) {
      dispatch(setUserData(userData.data));
    }
    //eslint-disable-next-line
  }, [userData]);

  const getUser = () => {
    trigger({ userId });
  };

  useTimeout(getUser, 500);

  return authToken ? (
    userData.data ? (
      <Container>
        <NavSidebar />
        <Outlet />
      </Container>
    ) : (
      <p>loading</p>
    )
  ) : (
    <Navigate to="/signup" />
  );
};
