import { ConfigProvider } from '@services/ConfigProvider';
import { render } from '@testing-library/react';

import { Picture } from '.';
import { IPictureProps } from './types';

const mockedProps: IPictureProps = {
  width: 50,
  height: 50,
  image: 'example.jpg',
  alt: 'Example Image',
};

describe('Picture component', () => {
  test('component should render correctly', () => {
    render(<Picture {...mockedProps} />, { wrapper: ConfigProvider });
  });
});
