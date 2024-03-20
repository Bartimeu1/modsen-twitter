import { ConfigProvider } from '@services/ConfigProvider';
import { fireEvent, render } from '@testing-library/react';

import { BurgerMenu } from '.';
import { IBurgerMenuProps } from './types';

const mockedProps: IBurgerMenuProps = {
  isActive: false,
  onClick: jest.fn(),
};

describe('BurgerMenu component', () => {
  test('component should render correctly', () => {
    render(<BurgerMenu {...mockedProps} />, { wrapper: ConfigProvider });
  });

  test('should call function after click', () => {
    const { getByTestId } = render(<BurgerMenu {...mockedProps} />, {
      wrapper: ConfigProvider,
    });

    const burgerMenu = getByTestId('burger-menu');
    fireEvent.click(burgerMenu);

    expect(mockedProps.onClick).toHaveBeenCalled();
  });

  test('should change isActive after click', () => {
    const { getByTestId } = render(<BurgerMenu {...mockedProps} />, {
      wrapper: ConfigProvider,
    });

    const burgerMenu = getByTestId('burger-menu');
    fireEvent.click(burgerMenu);

    expect(mockedProps.isActive).toBe(false);
  });
});
