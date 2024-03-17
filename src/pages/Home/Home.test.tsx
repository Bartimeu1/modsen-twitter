import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { HomePage } from '.';

describe('Home page', () => {
  test('page should render correctly', () => {
    render(<HomePage />, { wrapper: ConfigProvider });
  });
});
