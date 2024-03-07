import { useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { PrivateLayout } from '@components/PrivateLayout';
import { PublicLayout } from '@components/PublicLayout';
import { privateRoutes, publicRoutes } from '@constants/routes';
import { useAppDispatch, useAppSelector } from '@root/hooks';
import { GlobalStyles, theme } from '@root/theme';
import { setUserData } from '@store/features/user/userSlice';
import { getUserByEmail } from '@utils/firestore';
import { ThemeProvider } from 'styled-components';

export const App = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(({ theme }) => theme.currentTheme);
  const userEmail = useAppSelector(({ user }) => user.email);
  const userSlug = useAppSelector(({ user }) => user.data?.slug);

  useEffect(() => {
    if (userEmail) {
      getUserByEmail(userEmail).then((data) => {
        dispatch(setUserData(data));
      });
    }
  }, [dispatch, userEmail]);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <HashRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            {publicRoutes.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Route>
          <Route element={<PrivateLayout />}>
            <Route
              path="/"
              element={<Navigate to={`/profile/ ${userSlug}`} />}
            />
            {privateRoutes.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </HashRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
};
