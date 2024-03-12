import { Fragment, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { FormInput } from '@components/FormInput';
import { Picture } from '@components/Picture';
import { PortalWrapper } from '@components/PortalWrapper';
import { CloseIcon, EditUpload } from '@constants/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useOnClickOutside } from '@root/hooks';
import { useUpdateUserDataMutation } from '@store/features/user/userApi';
import { generateImageURL } from '@utils/helpers';

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
  const { profileData, setIsVisible, refetch } = props;

  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const [updateUserData] = useUpdateUserDataMutation();

  const modalRef = useRef(null);

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

  const closeModal = () => {
    setIsVisible(false);
  };

  const onEditFormSubmit = async (data: IEditFormValues) => {
    if (profileData?.userId) {
      updateUserData({
        userId: profileData.userId,
        data: { ...data, avatar: uploadedImage },
      });
    }

    refetch();
    closeModal();
  };

  useOnClickOutside(modalRef, closeModal);

  return (
    <PortalWrapper>
      <StyledEditModal>
        <ModalContent ref={modalRef}>
          <CloseButton onClick={closeModal}>
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
            <SubmitButton type="submit" value="Save" />
          </EditForm>
        </ModalContent>
      </StyledEditModal>
    </PortalWrapper>
  );
};
