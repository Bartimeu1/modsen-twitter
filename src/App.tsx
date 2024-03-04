import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { pageRoutes } from '@constants/routes';
import { GlobalStyles, theme } from '@root/theme';

import { useAppSelector } from '@root/hooks';

export const App = () => {
  const currentTheme = useAppSelector(({ theme }) => theme.currentTheme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <HashRouter>
        <Routes>
          {pageRoutes.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Routes>
      </HashRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
};
