export interface ILoginFormValues {
  email: string;
  password: string;
}

type inputNamesType = 'email' | 'password';

export interface IInputController {
  id: number;
  name: inputNamesType;
  type: string;
  placeholder: string;
  baseValue: string;
}
