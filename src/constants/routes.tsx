import { HomePage } from '@pages/Home';
import { LoginPage } from '@pages/Login';
import { ProfilePage } from '@pages/Profile';
import { RegisterPage } from '@pages/Register';
import { SignUpPage } from '@pages/SignUp';
import { TweetPage } from '@pages/Tweet';

export const publicRoutes = [
  { id: 1, path: '/signup', element: <SignUpPage /> },
  { id: 2, path: '/register', element: <RegisterPage /> },
  { id: 3, path: '/login', element: <LoginPage /> },
];

export const privateRoutes = [
  {
    id: 1,
    path: '/profile/:userSlug',
    element: <ProfilePage />,
  },
  {
    id: 2,
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    id: 3,
    path: '/home',
    element: <HomePage />,
  },
  {
    id: 4,
    path: '/tweet/:tweetId',
    element: <TweetPage />,
  },
];
