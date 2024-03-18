import { ToastTypesEnum } from '@root/types/toast';

export interface IToastStyles {
  $type: keyof typeof ToastTypesEnum;
}
