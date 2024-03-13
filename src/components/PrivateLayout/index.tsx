import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Sidebar from '@components/Sidebar';
import { useAppDispatch } from '@root/hooks';
import { useAppSelector } from '@root/hooks';
import { Container } from '@root/theme';
import { useGetUserByIdQuery } from '@store/features/user/userApi';
import { setUserData } from '@store/features/user/userSlice';

export const PrivateLayout = () => {
  const authToken = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();
  const userId = useAppSelector(({ user }) => user.id);

  const { data: userData } = useGetUserByIdQuery({
    userId: userId || '',
  });

  useEffect(() => {
    if (userData) {
      dispatch(setUserData(userData));
    }
  }, [dispatch, userData]);

  return authToken ? (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  ) : (
    <Navigate to="/signup" />
  );
};
