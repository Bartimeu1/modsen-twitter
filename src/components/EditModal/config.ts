import { emailValidationText, requiredValidationText } from '@constants/text';
import * as yup from 'yup';

import { IInputController } from './types';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(emailValidationText)
    .required(requiredValidationText),
  name: yup.string().min(2).max(20).required(requiredValidationText),
  bio: yup.string().max(50),
  slug: yup.string().min(2).max(10).required(requiredValidationText),
});

export const inputControllers: IInputController[] = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Name',
  },
  {
    id: 2,
    name: 'email',
    type: 'text',
    label: 'Email',
    placeholder: 'Email',
  },
  { id: 3, name: 'bio', type: 'text', label: 'Bio', placeholder: 'Bio' },
  { id: 4, name: 'slug', type: 'text', label: 'Slug', placeholder: 'Slug' },
];
