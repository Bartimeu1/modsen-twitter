import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledEditModal = styled.div`
  ${FlexMixin({ align: 'center', justify: 'center' })}

  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 13;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: 0.5s all;
`;

export const ModalContent = styled.div`
  ${FlexMixin({ direction: 'column' })}

  padding: 25px 20px;
  position: relative;
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xs2}px;

  & img {
    max-width: 120px;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: auto;
  width: 120px;

  & img {
    border-radius: ${({ theme }) => theme.borderRadius.circle};
  }
`;

export const CloseButton = styled.button`
  border: none;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const UploadImageButton = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  padding: 10px;
  opacity: 50%;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 40px;
  opacity: 0;

  &::-webkit-file-upload-button {
    cursor: pointer;
  }
`;

export const EditForm = styled.form``;

export const InputLabel = styled.p`
  margin-bottom: 5px;
`;

export const SubmitButton = styled.input`
  background: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.xs}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primary};
    transition: 0.3s;
  }
`;
