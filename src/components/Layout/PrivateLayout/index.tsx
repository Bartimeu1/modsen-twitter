import { Navigate, Outlet } from 'react-router-dom';

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

  const [trigger] = useLazyGetUserByIdQuery();

  const getUser = () => {
    if (userId && !userData) {
      trigger({ userId }).then(({ data }) => {
        dispatch(setUserData(data));
      });
    }
  };

  useTimeout(getUser, 1000);

  if (!userToken) {
    return <Navigate to="/signup" />;
  }

  return userData ? (
    <Container>
      <NavSidebar />
      <Outlet />
    </Container>
  ) : (
    <Loader />
  );
};
