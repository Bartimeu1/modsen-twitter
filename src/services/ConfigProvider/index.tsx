import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { ErrorBoundary } from '@components/ErrorBoundary';
import { GlobalStyles, theme } from '@root/theme';
import { store } from '@store/store';
import { ThemeProvider } from 'styled-components';

import { IConfigProviderProps } from './types';

export const ConfigProvider = ({ children }: IConfigProviderProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme['dark']}>
        <GlobalStyles />
        <ErrorBoundary>
          <HashRouter>{children}</HashRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};
