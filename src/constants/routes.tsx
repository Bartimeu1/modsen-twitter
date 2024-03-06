import { LoginPage } from '@pages/Login';
import { RegisterPage } from '@pages/Register';
import { SignUpPage } from '@pages/SignUp';

export const publicRoutes = [
  { id: 1, path: '/', element: <SignUpPage /> },
  { id: 2, path: '/register', element: <RegisterPage /> },
  { id: 3, path: '/login', element: <LoginPage /> },
];

export const privateRoutes = [
  {
    id: 1,
    path: '/profile',
    element: <div>test</div>,
  },
];
