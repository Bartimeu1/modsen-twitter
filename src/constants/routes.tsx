import { HomePage } from '@pages/Home';
import { LoginPage } from '@pages/Login';
import { ProfilePage } from '@pages/Profile';
import { RegisterPage } from '@pages/Register';
import { SignUpPage } from '@pages/SignUp';
import { TweetPage } from '@pages/Tweet';

export const urls = {
  stub: '*',
  base: '/',
  home: '/home',
  profile: '/profile',
  tweet: '/tweet',
  signup: '/signup',
  register: 'register',
  login: '/login',
};

export const publicRoutes = [
  { id: 1, path: urls.signup, element: <SignUpPage /> },
  { id: 2, path: urls.register, element: <RegisterPage /> },
  { id: 3, path: urls.login, element: <LoginPage /> },
];

export const privateRoutes = [
  {
    id: 1,
    path: `${urls.profile}/:userSlug`,
    element: <ProfilePage />,
  },
  {
    id: 2,
    path: urls.profile,
    element: <ProfilePage />,
  },
  {
    id: 3,
    path: urls.home,
    element: <HomePage />,
  },
  {
    id: 4,
    path: `${urls.tweet}/:tweetId`,
    element: <TweetPage />,
  },
];
