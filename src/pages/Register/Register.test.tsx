import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { RegisterPage } from '.';

describe('Register page', () => {
  test('page should render correctly', () => {
    render(<RegisterPage />, { wrapper: ConfigProvider });
  });
});
