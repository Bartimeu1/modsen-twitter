import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { FormInput } from '@components/FormInput';
import { LogoIcon } from '@constants/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@root/hooks';
import { setUser } from '@store/features/user/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { inputControllers,validationSchema } from './config';
import { LoginForm, LoginTitle, StyledLoginPage, SubmitButton } from './styled';
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
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledLoginPage>
      <LogoIcon />
      <LoginTitle>Log in to Twitter</LoginTitle>
      <LoginForm onSubmit={handleSubmit(onLoginFormSubmit)}>
        {inputControllers.map(({ id, name, type, placeholder }) => (
          <Controller
            key={id}
            name={name}
            control={control}
            render={({ field: { onChange } }) => (
              <FormInput
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                validationText={errors?.[name]?.message}
              />
            )}
          />
        ))}
        <SubmitButton type="submit" value="Log In" />
      </LoginForm>
    </StyledLoginPage>
  );
};
