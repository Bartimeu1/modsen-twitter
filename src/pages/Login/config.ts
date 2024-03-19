import { passwordRegex } from '@constants/regex';
import {
  emailValidationText,
  passwordValidationText,
  requiredValidationText,
} from '@constants/text';
import * as yup from 'yup';

import { IInputController } from './types';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(emailValidationText)
    .required(requiredValidationText),
  password: yup
    .string()
    .min(6)
    .max(20)
    .matches(passwordRegex, passwordValidationText)
    .required(requiredValidationText),
});

export const inputControllers: IInputController[] = [
  {
    id: 1,
    name: 'email',
    type: 'text',
    placeholder: 'Email address',
  },
  {
    id: 2,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
];
