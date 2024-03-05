import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { FormInput } from '@components/FormInput';
import { FormSelect } from '@components/FormSelect';
import { endRegisterSelectYear } from '@constants/date';
import { LogoIcon } from '@constants/icons';
import { RegisterBirthText } from '@constants/text';
import {
  generateDaysArray,
  generateYearsArray,
  getTargetYear,
} from '@utils/date';

import { monthSelectOptions } from './config';
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
import { IRegisterFormValues } from './types';

export const RegisterPage = () => {
  const { register, control, handleSubmit, watch } =
    useForm<IRegisterFormValues>();

  const [selectedYear, selectedMonth] = watch(['birthYear', 'birthMonth']);

  const onRegisterFormSubmit = (data: IRegisterFormValues) => {
    console.log(data);
  };

  const yearSelectOptions = useMemo(
    () => generateYearsArray(endRegisterSelectYear, getTargetYear()),
    [],
  );

  const daySelectOptions = useMemo(() => {
    if (selectedYear && selectedMonth) {
      return generateDaysArray(selectedYear, selectedMonth);
    }

    return [];
  }, [selectedYear, selectedMonth]);

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
          <Controller
            name="birthMonth"
            control={control}
            render={({ field: { onChange } }) => (
              <FormSelect
                width="50%"
                placeholder="Month"
                onChange={onChange}
                options={monthSelectOptions}
              />
            )}
          />
          <Controller
            name="birthYear"
            control={control}
            render={({ field: { onChange } }) => (
              <FormSelect
                width="25%"
                placeholder="Year"
                onChange={onChange}
                options={yearSelectOptions}
              />
            )}
          />
          <Controller
            name="birthYear"
            control={control}
            render={({ field: { onChange } }) => (
              <FormSelect
                width="25%"
                placeholder="Day"
                onChange={onChange}
                options={daySelectOptions}
              />
            )}
          />
        </BirthSelects>
        <SubmitButton type="submit" value="Next" />
      </RegisterForm>
    </StyledRegisterPage>
  );
};
