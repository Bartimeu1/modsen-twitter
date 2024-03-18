import { ConfigProvider } from '@services/ConfigProvider';
import { fireEvent,render } from '@testing-library/react';

import { NavMenu } from '.';
import { INavMenuProps } from './types';

const mockedProps: INavMenuProps = {
  onLinkClick: jest.fn(),
};

describe('NavMenu component', () => {
  test('component should render correctly', () => {
    render(<NavMenu {...mockedProps} />, { wrapper: ConfigProvider });
  });

  test('calls onLinkClick when a link is clicked', () => {
    const { getByText } = render(<NavMenu {...mockedProps} />, {
      wrapper: ConfigProvider,
    });

    const homeLink = getByText('Home');
    fireEvent.click(homeLink);

    expect(mockedProps.onLinkClick).toHaveBeenCalled();
  });
});
