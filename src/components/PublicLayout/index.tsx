import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@root/hooks';

export const PublicLayout = () => {
  const authToken = useAppSelector((state) => state.user.token);

  return !authToken ? <Outlet /> : <Navigate to="/profile" />;
};
