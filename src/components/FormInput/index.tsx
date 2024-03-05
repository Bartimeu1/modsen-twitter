import { StyledFormInput } from './styled';
import { IFormInputProps } from './types';

export const FormInput = (props: IFormInputProps) => {
  const { name, placeholder, validation, type, register } = props;

  return (
    <StyledFormInput
      type={type}
      placeholder={placeholder}
      {...register(name, {
        ...validation,
      })}
    />
  );
};
