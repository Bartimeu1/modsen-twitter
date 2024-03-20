import { useNavigate } from 'react-router-dom';

import {
  failureText,
  GoogleIcon,
  LogoIcon,
  successText,
  urls,
} from '@root/constants';
import { provider } from '@root/firebase/firebase';
import { useAppDispatch } from '@root/hooks';
import { ToastTypesEnum } from '@root/types/toast';
import { addToast } from '@store/features/toast/toastSlice';
import { useCreateUserMutation } from '@store/features/user/userApi';
import { setUser } from '@store/features/user/userSlice';
import { getAuth, signInWithPopup } from 'firebase/auth';

import { NavLinks } from './config';
import {
  Banner,
  Buttons,
  Content,
  InfoLink,
  LogInText,
  Nav,
  NavLink,
  SignButton,
  SignLink,
  StyledSignUp,
  Subtitle,
  TermsText,
  Title,
  Topper,
} from './styled';

export const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [createUser, { isError }] = useCreateUserMutation();

  const onSignWithGoogleClick = () => {
    const auth = getAuth();

    signInWithPopup(auth, provider).then(({ user }) => {
      // eslint-disable-next-line
      const { email, accessToken, uid, displayName } = user as any;

      createUser({ data: { userId: uid, email, name: displayName } }).then(
        () => {
          dispatch(
            setUser({
              email,
              id: uid,
              token: accessToken,
            }),
            addToast({
              type: isError ? ToastTypesEnum.error : ToastTypesEnum.success,
              content: isError ? failureText : successText,
            }),
          );

          navigate(urls.base);
        },
      );
    });
  };

  return (
    <StyledSignUp>
      <Topper>
        <Banner />
        <Content>
          <LogoIcon />
          <Title>Happening now</Title>
          <Subtitle>Join Twitter today</Subtitle>
          <Buttons>
            <SignButton onClick={onSignWithGoogleClick}>
              <GoogleIcon />
              Sign up with Google
            </SignButton>
            <SignLink to="/register">Sign up with email</SignLink>
          </Buttons>
          <TermsText>
            By singing up you agree to the
            <InfoLink to="#">Terms of Service </InfoLink>
            and <InfoLink to="#"> Privacy Policy</InfoLink>, including
            <InfoLink to="#"> Cookie Use</InfoLink>.
          </TermsText>
          <LogInText>
            Already have an account? <InfoLink to="/login">Log in</InfoLink>
          </LogInText>
        </Content>
      </Topper>
      <Nav>
        {NavLinks.map(({ id, href, text }) => (
          <NavLink key={id} to={href}>
            {text}
          </NavLink>
        ))}
      </Nav>
    </StyledSignUp>
  );
};
