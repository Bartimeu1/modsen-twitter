import { passwordRegex } from '@constants/regex';
import {
  passwordMatchText,
  passwordValidationText,
  requiredValidationText,
} from '@constants/text';
import * as yup from 'yup';

import { IInputController } from './types';

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(6)
    .max(20)
    .matches(passwordRegex, passwordValidationText)
    .required(requiredValidationText),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], passwordMatchText)
    .min(6)
    .max(20)
    .matches(passwordRegex, passwordValidationText)
    .required(requiredValidationText),
});

export const inputControllers: IInputController[] = [
  {
    id: 1,
    name: 'password',
    type: 'password',
    baseValue: '',
    placeholder: 'New password',
  },
  {
    id: 2,
    name: 'confirmPassword',
    type: 'password',
    baseValue: '',
    placeholder: 'Confirm password',
  },
];
