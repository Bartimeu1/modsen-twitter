import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from '@components/ErrorBoundary';
import { PrivateLayout, PublicLayout } from '@components/Layout';
import { ToastList } from '@components/Toast';
import { NotFoundPage } from '@pages/NotFound';
import { privateRoutes, publicRoutes, urls } from '@root/constants';
import { useAppSelector } from '@root/hooks';
import { GlobalStyles, theme } from '@root/theme';
import { ThemeProvider } from 'styled-components';

export const App = () => {
  const currentTheme = useAppSelector(({ theme }) => theme.currentTheme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <ErrorBoundary>
        <HashRouter>
          <Routes>
            <Route path={urls.stub} element={<NotFoundPage />} />
            <Route element={<PublicLayout />}>
              {publicRoutes.map(({ id, path, element }) => (
                <Route key={id} path={path} element={element} />
              ))}
            </Route>
            <Route element={<PrivateLayout />}>
              <Route
                path={urls.base}
                element={<Navigate to={urls.profile} />}
              />
              {privateRoutes.map(({ id, path, element }) => (
                <Route key={id} path={path} element={element} />
              ))}
            </Route>
          </Routes>
        </HashRouter>
        <ToastList />
        <GlobalStyles />
      </ErrorBoundary>
    </ThemeProvider>
  );
};
