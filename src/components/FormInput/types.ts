import { FieldValues } from 'react-hook-form';

export interface IFormInputProps {
  name: string;
  placeholder: string;
  type: string;
  validation: object;
  register: FieldValues;
}
