import { useForm } from 'react-hook-form';

import { FormInput } from '@components/FormInput';
import { FormSelect } from '@components/FormSelect';
import { LogoIcon } from '@constants/icons';
import { RegisterBirthText } from '@constants/text';

import {
  AuthLink,
  BirthInfoText,
  BirthSelects,
  BirthTitle,
  FormField,
  RegisterForm,
  RegisterTitle,
  StyledRegisterPage,
  SubmitButton,
} from './styled';

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onRegisterFormSubmit = () => {
    console.log('test');
  };

  return (
    <StyledRegisterPage>
      <LogoIcon />
      <RegisterForm onSubmit={handleSubmit(onRegisterFormSubmit)}>
        <RegisterTitle>Create an account</RegisterTitle>
        <FormField>
          <FormInput
            type="text"
            register={register}
            name="name"
            placeholder="Name"
            validation={{ required: true }}
          />
        </FormField>
        <FormField>
          <FormInput
            type="text"
            register={register}
            name="phone"
            placeholder="Phone number"
            validation={{ required: true }}
          />
        </FormField>
        <FormField>
          <FormInput
            type="text"
            register={register}
            name="email"
            placeholder="Email"
            validation={{ required: true }}
          />
        </FormField>
        <AuthLink to="#">Use email</AuthLink>
        <BirthTitle>Date of birth</BirthTitle>
        <BirthInfoText>{RegisterBirthText}</BirthInfoText>
        <BirthSelects>
          <FormSelect width="50%" placeholder="Month" />
          <FormSelect width="25%" placeholder="Day" />
          <FormSelect width="25%" placeholder="Year" />
        </BirthSelects>
        <SubmitButton type="submit" value="Next" />
      </RegisterForm>
    </StyledRegisterPage>
  );
};
