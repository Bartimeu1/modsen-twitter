export enum ToastTypesEnum {
  error = 'error',
  success = 'success',
}

export interface IToast {
  id: string;
  content: string;
  type: keyof typeof ToastTypesEnum;
}
