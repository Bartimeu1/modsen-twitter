import { IUserData } from '@root/types/firebase';

export interface IEditModalProps {
  profileData: IUserData | undefined;
  closeEditModal: () => void;
}

export interface IEditFormValues {
  name: string;
  email: string;
  slug: string;
  bio?: string;
}

type inputNamesType = 'name' | 'email' | 'bio' | 'slug';

export interface IInputController {
  id: number;
  name: inputNamesType;
  type: string;
  label: string;
  placeholder: string;
}
