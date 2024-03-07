import { HashRouter, Navigate,Route, Routes } from 'react-router-dom';

import { PrivateLayout } from '@components/PrivateLayout';
import { PublicLayout } from '@components/PublicLayout';
import { privateRoutes, publicRoutes } from '@constants/routes';
import { useAppSelector } from '@root/hooks';
import { GlobalStyles, theme } from '@root/theme';
import { ThemeProvider } from 'styled-components';

export const App = () => {
  const currentTheme = useAppSelector(({ theme }) => theme.currentTheme);

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
            <Route path="/" element={<Navigate to="/profile" />} />
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
