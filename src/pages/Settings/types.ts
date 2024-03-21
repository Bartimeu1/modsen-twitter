export interface IResetFormValues {
  password: string;
  confirmPassword: string;
}

export interface IInputController {
  id: number;
  name: keyof IResetFormValues;
  type: string;
  placeholder: string;
  baseValue: string;
}
