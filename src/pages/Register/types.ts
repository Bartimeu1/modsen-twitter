export interface IRegisterFormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
  birthMonth?: string;
  birthYear?: number;
  birthDay?: string;
}

type inputNamesType =
  | 'name'
  | 'phone'
  | 'email'
  | 'password'
  | 'birthMonth'
  | 'birthDay'
  | 'birthYear';

export interface IInputController {
  id: number;
  name: inputNamesType;
  type: string;
  baseValue: string;
  placeholder: string;
}
