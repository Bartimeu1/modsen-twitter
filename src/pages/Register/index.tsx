import { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { FormInput } from '@components/FormInput';
import { FormSelect } from '@components/FormSelect';
import { endRegisterSelectYear } from '@constants/date';
import { LogoIcon } from '@constants/icons';
import { RegisterBirthText } from '@constants/text';
import { useAppDispatch } from '@root/hooks';
import { setUser } from '@store/features/user/userSlice';
import {
  generateDaysArray,
  generateYearsArray,
  getTargetYear,
} from '@utils/date';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit, watch } = useForm<IRegisterFormValues>();

  const [selectedYear, selectedMonth] = watch(['birthYear', 'birthMonth']);

  const onRegisterFormSubmit = (data: IRegisterFormValues) => {
    const { email, password } = data;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      // eslint-disable-next-line
      const { email, uid, accessToken } = user as any;

      dispatch(
        setUser({
          email,
          id: uid,
          token: accessToken,
        }),
      );
      navigate('/profile');
    });
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
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange } }) => (
              <FormInput type="text" placeholder="Name" onChange={onChange} />
            )}
          />
        </FormField>
        <FormField>
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange } }) => (
              <FormInput
                type="text"
                placeholder="Phone number"
                onChange={onChange}
              />
            )}
          />
        </FormField>
        <FormField>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange } }) => (
              <FormInput type="text" placeholder="Email" onChange={onChange} />
            )}
          />
        </FormField>
        <FormField>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange } }) => (
              <FormInput
                type="text"
                placeholder="Password"
                onChange={onChange}
              />
            )}
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
