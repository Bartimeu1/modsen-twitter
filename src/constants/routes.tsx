import { RegisterPage } from '@pages/Register';
import { SignUpPage } from '@pages/SignUp';

export const pageRoutes = [
  { id: 1, path: '/', element: <SignUpPage /> },
  { id: 2, path: '/register', element: <RegisterPage /> },
];
