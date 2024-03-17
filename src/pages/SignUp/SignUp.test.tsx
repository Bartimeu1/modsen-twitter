import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { SignUpPage } from '.';

describe('Sign Up page', () => {
  test('page should render correctly', () => {
    render(<SignUpPage />, { wrapper: ConfigProvider });
  });
});
