import { Fragment, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { FormInput } from '@components/Form';
import { Loader } from '@components/Loader';
import { Picture } from '@components/Picture';
import { PortalWrapper } from '@components/PortalWrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  CloseIcon,
  EditUpload,
  failureText,
  successText,
} from '@root/constants';
import {
  useAppDispatch,
  useLockBodyScroll,
  useOnClickOutside,
} from '@root/hooks';
import { setUserData } from '@root/store/features/user/userSlice';
import { ToastTypesEnum } from '@root/types/toast';
import { generateImageURL } from '@root/utils';
import { addToast } from '@store/features/toast/toastSlice';
import { useUpdateUserDataMutation } from '@store/features/user/userApi';

import { inputControllers, validationSchema } from './config';
import {
  AvatarContainer,
  CloseButton,
  EditForm,
  FileInput,
  InputLabel,
  ModalContent,
  StyledEditModal,
  SubmitButton,
  UploadImageButton,
} from './styled';
import { IEditFormValues, IEditModalProps } from './types';

export const EditModal = (props: IEditModalProps) => {
  const { profileData, closeEditModal } = props;

  const dispatch = useAppDispatch();

  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const modalRef = useRef(null);

  const [updateUserData, { isLoading, isError }] = useUpdateUserDataMutation();

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedImage(e.target.files[0]);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditFormValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onEditFormSubmit = async (data: IEditFormValues) => {
    if (profileData?.userId) {
      updateUserData({
        userId: profileData.userId,
        data: { ...data, avatar: uploadedImage },
      }).then(() => {
        dispatch(
          setUserData({
            ...data,
            userId: profileData.userId,
            avatar: uploadedImage && generateImageURL(uploadedImage),
          }),
          addToast({
            type: isError ? ToastTypesEnum.error : ToastTypesEnum.success,
            content: isError ? failureText : successText,
          }),
        );
        closeEditModal();
      });
    }
  };

  useOnClickOutside(modalRef, closeEditModal);
  useLockBodyScroll();

  return (
    <PortalWrapper>
      {isLoading && <Loader />}
      <StyledEditModal data-testid="edit-modal">
        <ModalContent ref={modalRef}>
          <CloseButton
            onClick={closeEditModal}
            data-testid="edit-modal-close-button">
            <CloseIcon />
          </CloseButton>
          <AvatarContainer>
            <UploadImageButton>
              <FileInput type="file" onChange={onFileInputChange} />
              <EditUpload />
            </UploadImageButton>
            {uploadedImage ? (
              <Picture
                image={generateImageURL(uploadedImage)}
                alt="edit-avatar"
              />
            ) : (
              <Picture
                image={profileData?.avatar || defaultAvatar}
                alt="edit-avatar"
              />
            )}
          </AvatarContainer>
          <EditForm onSubmit={handleSubmit(onEditFormSubmit)}>
            {inputControllers.map(({ id, name, type, placeholder, label }) => (
              <Fragment key={id}>
                <InputLabel>{label}</InputLabel>
                <Controller
                  name={name}
                  control={control}
                  render={({ field: { onChange } }) => (
                    <FormInput
                      type={type}
                      placeholder={placeholder}
                      baseValue={profileData?.[name] ?? ''}
                      onChange={onChange}
                      validationText={errors?.[name]?.message}
                    />
                  )}
                />
              </Fragment>
            ))}
            <SubmitButton
              data-testid="edit-modal-submit"
              type="submit"
              value="Save"
            />
          </EditForm>
        </ModalContent>
      </StyledEditModal>
    </PortalWrapper>
  );
};
