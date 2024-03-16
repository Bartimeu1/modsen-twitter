import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Loader } from '@components/Loader';
import { NavSidebar } from '@components/NavSidebar';
import { useAppDispatch, useAppSelector, useTimeout } from '@root/hooks';
import { Container } from '@root/theme';
import { useLazyGetUserByIdQuery } from '@store/features/user/userApi';
import { setUserData } from '@store/features/user/userSlice';

export const PrivateLayout = () => {
  const dispatch = useAppDispatch();
  const authToken = useAppSelector(({ user }) => user.token);
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

  if (!userData.data) {
    return <Loader />;
  }

  return authToken ? (
    <Container>
      <NavSidebar />
      <Outlet />
    </Container>
  ) : (
    <Navigate to="/signup" />
  );
};
