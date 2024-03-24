import { ConfigProvider } from '@services/ConfigProvider';
import { fireEvent, render } from '@testing-library/react';

import { FormInput } from '.';
import { IFormInputProps } from './types';

const mockedProps: IFormInputProps = {
  type: 'text',
  baseValue: '',
  placeholder: 'test-placeholder',
  validationText: 'test-validation-text',
  onChange: jest.fn(),
};

describe('FormInput component', () => {
  test('component should render correctly', () => {
    render(<FormInput {...mockedProps} />, { wrapper: ConfigProvider });
  });

  test('should call onChange prop with correct value after change', () => {
    const { getByTestId } = render(<FormInput {...mockedProps} />, {
      wrapper: ConfigProvider,
    });

    const inputElement = getByTestId('form-input');

    fireEvent.change(inputElement, { target: { value: 'input-test-change' } });

    expect(mockedProps.onChange).toHaveBeenCalledWith('input-test-change');
  });

  test('displays validation text when provided', () => {
    const { getByText } = render(
      <FormInput {...mockedProps} validationText="Required field" />,
      {
        wrapper: ConfigProvider,
      },
    );

    const validationTextElement = getByText('Required field');
    expect(validationTextElement).toBeInTheDocument();
  });

  test('should change password visibility after button click', () => {
    const { getByTestId } = render(
      <FormInput {...mockedProps} type="password" />,
      {
        wrapper: ConfigProvider,
      },
    );

    const formInput = getByTestId('form-input');
    expect(formInput).toHaveAttribute('type', 'password');

    const passwordVisibilityButton = getByTestId('password-visibility-button');
    fireEvent.click(passwordVisibilityButton);

    expect(formInput).toHaveAttribute('type', 'text');
  });
});
