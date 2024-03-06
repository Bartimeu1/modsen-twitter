import { ChangeEvent,useState } from 'react';

import { StyledFormInput } from './styled';
import { IFormInputProps } from './types';

export const FormInput = (props: IFormInputProps) => {
  const { placeholder, type, onChange } = props;

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);
    onChange(value);
  };

  return (
    <StyledFormInput
      value={inputValue}
      type={type}
      placeholder={placeholder}
      onChange={onInputChange}
    />
  );
};
