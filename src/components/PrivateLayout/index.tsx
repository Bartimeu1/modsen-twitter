import { Navigate, Outlet } from 'react-router-dom';

import Sidebar from '@components/Sidebar';
import { useAppSelector } from '@root/hooks';
import { Container } from '@root/theme';

export const PrivateLayout = () => {
  const authToken = useAppSelector((state) => state.user.token);

  return authToken ? (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  ) : (
    <Navigate to="/signup" />
  );
};
