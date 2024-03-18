import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { NavSidebar } from '.';
import { INavSidebarProps } from './types';

const mockedProps: INavSidebarProps = {
  isBurgerActive: false,
  onLinkClick: jest.fn(),
};

describe('NavSidebar component', () => {
  test('component should render correctly', () => {
    render(<NavSidebar {...mockedProps} />, { wrapper: ConfigProvider });
  });
});
