import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { NotFoundPage } from '.';

describe('Not Found page', () => {
  test('page should render correctly', () => {
    render(<NotFoundPage />, { wrapper: ConfigProvider });
  });
});
