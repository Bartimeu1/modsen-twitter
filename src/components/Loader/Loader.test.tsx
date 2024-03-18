import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { Loader } from '.';

describe('Loader component', () => {
  test('component should render correctly', () => {
    render(<Loader />, { wrapper: ConfigProvider });
  });
});
