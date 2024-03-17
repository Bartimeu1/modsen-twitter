import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { LoginPage } from '.';

describe('Login page', () => {
  test('page should render correctly', () => {
    render(<LoginPage />, { wrapper: ConfigProvider });
  });
});
