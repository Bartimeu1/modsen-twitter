import { IUserData } from '@root/types/firebase';

export interface IUserSliceState {
  id: string | null;
  token: string | null;
  email: string | null;
  data: IUserData | null;
}
