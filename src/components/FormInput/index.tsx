import { ChangeEvent, useState } from 'react';

import { FormInputField, Input, ValidationText } from './styled';
import { IFormInputProps } from './types';

export const FormInput = (props: IFormInputProps) => {
  const { placeholder, type, onChange, validationText } = props;

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);
    onChange(value);
  };

  return (
    <FormInputField>
      <Input
        value={inputValue}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
      />
      {validationText && <ValidationText>{validationText}</ValidationText>}
    </FormInputField>
  );
};
