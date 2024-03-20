import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { FormInput } from '@components/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LogoIcon, urls } from '@root/constants';
import { useAppDispatch } from '@root/hooks';
import { setUser } from '@store/features/user/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { inputControllers, validationSchema } from './config';
import {
  LoginForm,
  LoginTitle,
  SignLink,
  StyledLoginPage,
  SubmitButton,
} from './styled';
import { ILoginFormValues } from './types';

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onLoginFormSubmit = (data: ILoginFormValues) => {
    const { email, password } = data;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      // eslint-disable-next-line
      const { email, uid, accessToken } = user as any;

      dispatch(
        setUser({
          email,
          id: uid,
          token: accessToken,
        }),
      );
      navigate(urls.profile);
    });
  };

  return (
    <StyledLoginPage>
      <LogoIcon />
      <LoginTitle>Log in to Twitter</LoginTitle>
      <LoginForm onSubmit={handleSubmit(onLoginFormSubmit)}>
        {inputControllers.map(({ id, name, type, placeholder, baseValue }) => (
          <Controller
            key={id}
            name={name}
            control={control}
            render={({ field: { onChange } }) => (
              <FormInput
                type={type}
                baseValue={baseValue}
                placeholder={placeholder}
                onChange={onChange}
                validationText={errors?.[name]?.message}
              />
            )}
          />
        ))}
        <SubmitButton data-testid="login-submit" type="submit" value="Log In" />
      </LoginForm>
      <SignLink data-testid="login-link" to="/signup">
        Sign up to Twitter
      </SignLink>
    </StyledLoginPage>
  );
};
