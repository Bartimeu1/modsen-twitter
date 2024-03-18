import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { ToastList } from '.';

describe('ToastList component', () => {
  test('component should render correctly', () => {
    render(<ToastList />, { wrapper: ConfigProvider });
  });
});
