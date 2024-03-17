import { ConfigProvider } from '@services/ConfigProvider';
import { fireEvent,render } from '@testing-library/react';

import { FormSelect } from '.';
import { IFormSelectProps } from './types';

const mockedProps: IFormSelectProps = {
  width: '100%',
  placeholder: 'test-placeholder',
  onChange: jest.fn(),
  options: [
    { id: '1', value: 'first' },
    { id: '2', value: 'second' },
  ],
  validationText: '',
};

describe('FormSelect component', () => {
  test('component should render correctly', () => {
    render(<FormSelect {...mockedProps} />, { wrapper: ConfigProvider });
  });

  test('opens dropdown when select is clicked', () => {
    const { getByTestId } = render(<FormSelect {...mockedProps} />, {
      wrapper: ConfigProvider,
    });

    const selectLabel = getByTestId('select-label');
    fireEvent.click(selectLabel);

    const selectDropdown = getByTestId('select-dropdown');
    expect(selectDropdown).toBeInTheDocument();
  });

  test('should call onChange prop with correct value after select', () => {
    const { getByTestId, getAllByTestId } = render(
      <FormSelect {...mockedProps} />,
      {
        wrapper: ConfigProvider,
      },
    );

    const selectLabel = getByTestId('select-label');
    fireEvent.click(selectLabel);

    const firstSelectOption = getAllByTestId('select-dropdown-option')[0];
    fireEvent.click(firstSelectOption);

    expect(mockedProps.onChange).toHaveBeenCalledWith(
      mockedProps.options[0].value,
    );
  });
});
