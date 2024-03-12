import { IUserData } from '@root/types/firebase';

export interface IEditModalProps {
  profileData: IUserData | null;
  setIsVisible: (value: boolean) => void;
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
