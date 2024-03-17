import { ConfigProvider } from '@services/ConfigProvider';
import { fireEvent,render } from '@testing-library/react';

import { SearchBar } from '.';
import { ISearchBarProps } from './types';

const mockedProps: ISearchBarProps = {
  value: '',
  placeholder: 'test-placeholder',
  onChange: jest.fn(),
};

describe('SearchBar component', () => {
  test('component should render correctly', () => {
    render(<SearchBar {...mockedProps} />, { wrapper: ConfigProvider });
  });

  test('calls onChange prop after input change', () => {
    const { getByTestId } = render(<SearchBar {...mockedProps} />, {
      wrapper: ConfigProvider,
    });

    const searchInput = getByTestId('search-bar-input');

    fireEvent.change(searchInput, { target: { value: 'test-search-value' } });

    expect(mockedProps.onChange).toHaveBeenCalled();
  });
});
