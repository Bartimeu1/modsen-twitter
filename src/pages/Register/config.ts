import { passwordRegex, phoneRegex } from '@constants/regex';
import {
  emailValidationText,
  passwordValidationText,
  phoneValidationText,
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
  phone: yup
    .string()
    .matches(phoneRegex, phoneValidationText)
    .required(requiredValidationText),
  name: yup.string().min(2).max(20).required(requiredValidationText),
  birthMonth: yup.string().required(requiredValidationText),
  birthDay: yup.string().required(requiredValidationText),
  birthYear: yup.number().required(requiredValidationText),
});

export const inputControllers: IInputController[] = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    placeholder: 'Name',
  },
  {
    id: 2,
    name: 'phone',
    type: 'text',
    placeholder: 'Phone number',
  },
  { id: 3, name: 'email', type: 'text', placeholder: 'Email' },
  { id: 4, name: 'password', type: 'password', placeholder: 'Password' },
];

export const monthSelectOptions = [
  {
    id: '1',
    value: 'January',
  },
  {
    id: '2',
    value: 'February',
  },
  {
    id: '3',
    value: 'March',
  },
  {
    id: '4',
    value: 'April',
  },
  {
    id: '5',
    value: 'May',
  },
  {
    id: '6',
    value: 'June',
  },
  {
    id: '7',
    value: 'July',
  },
  {
    id: '8',
    value: 'August',
  },
  {
    id: '9',
    value: 'September',
  },
  {
    id: '10',
    value: 'October',
  },
  {
    id: '11',
    value: 'November',
  },
  {
    id: '12',
    value: 'December',
  },
];
