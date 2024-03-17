import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { BackPanel } from '.';

describe('BackPanel component', () => {
  test('component should render correctly', () => {
    render(<BackPanel />, { wrapper: ConfigProvider });
  });
});
