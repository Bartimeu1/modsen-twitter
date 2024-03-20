import { ChangeEvent, memo, useEffect, useMemo, useState } from 'react';

import { PassClosed, PassOpened } from '@root/constants';

import {
  FormInputField,
  Input,
  PasswordVisibilityButton,
  ValidationText,
} from './styled';
import { IFormInputProps } from './types';

export const FormInput = memo(function FormInput(props: IFormInputProps) {
  const { placeholder, type, onChange, validationText, baseValue } = props;

  const [inputValue, setInputValue] = useState(baseValue);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordInput = useMemo(() => type === 'password', [type]);

  const currentInputType = useMemo(() => {
    if (isPasswordInput) {
      return isPasswordVisible ? 'text' : 'password';
    } else {
      return type;
    }
  }, [type, isPasswordInput, isPasswordVisible]);

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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <FormInputField>
      <Input
        data-testid="form-input"
        value={inputValue}
        type={currentInputType}
        placeholder={placeholder}
        onChange={onInputChange}
      />
      {isPasswordInput && (
        <PasswordVisibilityButton
          data-testid="password-visibility-button"
          onClick={togglePasswordVisibility}
          type="button"
        >
          {isPasswordVisible ? <PassOpened /> : <PassClosed />}
        </PasswordVisibilityButton>
      )}
      {validationText && <ValidationText>{validationText}</ValidationText>}
    </FormInputField>
  );
});
