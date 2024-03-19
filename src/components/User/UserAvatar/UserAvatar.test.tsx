import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { UserAvatar } from '.';
import { IUserAvatarProps } from './types';

const mockedProps: IUserAvatarProps = {
  image: 'example.jpg',
  size: 50,
};

describe('UserAvatar component', () => {
  test('component should render correctly', () => {
    render(<UserAvatar {...mockedProps} />, { wrapper: ConfigProvider });
  });
});
