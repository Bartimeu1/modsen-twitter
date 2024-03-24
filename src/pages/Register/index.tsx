import { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { FormInput, FormSelect } from '@components/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  endRegisterSelectYear,
  LogoIcon,
  registerBirthText,
  successText,
  urls,
  userAlreadyExist,
} from '@root/constants';
import { useAppDispatch } from '@root/hooks';
import { IFirebaseUser } from '@root/types/firebase';
import { ToastTypesEnum } from '@root/types/toast';
import {
  generateDate,
  generateDaysArray,
  generateYearsArray,
  getTargetYear,
} from '@root/utils';
import { addToast } from '@store/features/toast/toastSlice';
import { useCreateUserMutation } from '@store/features/user/userApi';
import { setUser } from '@store/features/user/userSlice';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import {
  inputControllers,
  monthSelectOptions,
  validationSchema,
} from './config';
import {
  AuthLink,
  BirthInfoText,
  BirthSelects,
  BirthTitle,
  RegisterForm,
  RegisterTitle,
  StyledRegisterPage,
  SubmitButton,
} from './styled';
import { IRegisterFormValues } from './types';

export const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });
  const [createUser] = useCreateUserMutation();

  const [selectedYear, selectedMonth] = watch(['birthYear', 'birthMonth']);

  const onRegisterFormSubmit = async (data: IRegisterFormValues) => {
    const { email, name, password, phone, birthDay, birthMonth, birthYear } =
      data;

    let userBirthDate: Date;
    if (birthMonth && birthYear && birthDay) {
      userBirthDate = generateDate(birthYear, birthMonth, birthDay);
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const { email, uid, accessToken } = user as IFirebaseUser;

        dispatch(
          setUser({
            email,
            id: uid,
            token: accessToken,
          }),
        );
        createUser({
          data: {
            userId: uid,
            email,
            name,
            password,
            phone,
            birth: userBirthDate && userBirthDate.getTime(),
          },
        }).then(() => {
          dispatch(
            addToast({
              type: ToastTypesEnum.success,
              content: successText,
            }),
          );
          navigate(urls.base);
        });
      })
      .catch(() => {
        dispatch(
          addToast({
            type: ToastTypesEnum.error,
            content: userAlreadyExist,
          }),
        );
      });
  };

  const yearSelectOptions = generateYearsArray(
    endRegisterSelectYear,
    getTargetYear(),
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
        {inputControllers.map(({ id, name, type, placeholder, baseValue }) => (
          <Controller
            key={id}
            name={name}
            control={control}
            render={({ field: { onChange } }) => (
              <FormInput
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                baseValue={baseValue}
                validationText={errors?.[name]?.message}
              />
            )}
          />
        ))}
        <AuthLink to="/login">Use email</AuthLink>
        <BirthTitle>Date of birth</BirthTitle>
        <BirthInfoText>{registerBirthText}</BirthInfoText>
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
                validationText={errors?.birthMonth?.message}
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
                validationText={errors?.birthYear?.message}
              />
            )}
          />
          <Controller
            name="birthDay"
            control={control}
            render={({ field: { onChange } }) => (
              <FormSelect
                width="25%"
                placeholder="Day"
                onChange={onChange}
                options={daySelectOptions}
                validationText={errors?.birthDay?.message}
              />
            )}
          />
        </BirthSelects>
        <SubmitButton
          type="submit"
          value="Next"
          data-testid="register-submit"
        />
      </RegisterForm>
    </StyledRegisterPage>
  );
};
