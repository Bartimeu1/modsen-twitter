import { IToast } from '@root/types/toast';
import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { ToastItem } from '.';

const mockedProps: IToast = {
  id: '1',
  type: 'success',
  content: 'test-toast-content',
};

describe('ToastItem component', () => {
  test('component should render correctly', () => {
    render(<ToastItem {...mockedProps} />, { wrapper: ConfigProvider });
  });
});
