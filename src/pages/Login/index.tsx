import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { FormInput } from '@components/FormInput';
import { LogoIcon } from '@constants/icons';
import { useAppDispatch } from '@root/hooks';
import { setUser } from '@store/features/user/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import {
  FormField,
  LoginForm,
  LoginTitle,
  StyledLoginPage,
  SubmitButton,
} from './styled';
import { ILoginFormValues } from './types';

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<ILoginFormValues>();

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
        <FormField>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange } }) => (
              <FormInput
                type="text"
                placeholder="Phone number, email address"
                onChange={onChange}
              />
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
        <SubmitButton type="submit" value="Log In" />
      </LoginForm>
    </StyledLoginPage>
  );
};
