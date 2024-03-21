import { Controller, useForm } from 'react-hook-form';

import { FormInput } from '@components/Form';
import { UserSearchSidebar } from '@components/User';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@root/hooks';
import { removeUser } from '@store/features/user/userSlice';
import { persistor } from '@store/store';
import { updatePassword } from 'firebase/auth';
import { getAuth, signOut } from 'firebase/auth';

import { inputControllers, validationSchema } from './config';
import { ResetForm, StyledSettingsPage, SubmitButton, Title } from './styled';
import { IResetFormValues } from './types';

export const SettingsPage = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetFormValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onResetFormSubmit = ({ password }: IResetFormValues) => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      updatePassword(currentUser, password).then(() => {
        signOut(auth);
        dispatch(removeUser());
        persistor.purge();
      });
    }
  };

  return (
    <>
      <StyledSettingsPage>
        <Title>Reset Password</Title>
        <ResetForm onSubmit={handleSubmit(onResetFormSubmit)}>
          {inputControllers.map(
            ({ id, name, type, placeholder, baseValue }) => (
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
            ),
          )}
          <SubmitButton
            data-testid="reset-submit"
            type="submit"
            value="Reset"
          />
        </ResetForm>
      </StyledSettingsPage>
      <UserSearchSidebar />
    </>
  );
};
