import { HashRouter, Route, Routes } from 'react-router-dom';

import { pageRoutes } from '@constants/routes';
import { useAppSelector } from '@root/hooks';
import { GlobalStyles, theme } from '@root/theme';
import { ThemeProvider } from 'styled-components';

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
