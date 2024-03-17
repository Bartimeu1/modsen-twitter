import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { ProfilePage } from '.';

describe('Profile page', () => {
  test('page should render correctly', () => {
    render(<ProfilePage />, { wrapper: ConfigProvider });
  });
});
