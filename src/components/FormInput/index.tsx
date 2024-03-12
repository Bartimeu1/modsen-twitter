import { ChangeEvent, useEffect, useState } from 'react';

import { FormInputField, Input, ValidationText } from './styled';
import { IFormInputProps } from './types';

export const FormInput = (props: IFormInputProps) => {
  const { placeholder, type, onChange, validationText, baseValue } = props;

  const [inputValue, setInputValue] = useState(baseValue);

  useEffect(() => {
    if (baseValue) {
      onChange(baseValue);
    }
  }, [baseValue, onChange]);

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
