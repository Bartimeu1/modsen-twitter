import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { TweetPage } from '.';

describe('Tweet page', () => {
  test('page should render correctly', () => {
    render(<TweetPage />, { wrapper: ConfigProvider });
  });
});
