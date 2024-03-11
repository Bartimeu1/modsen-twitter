import { useNavigate } from 'react-router';

import { GoogleIcon, LogoIcon } from '@constants/icons';
import { provider } from '@root/config/firebase';
import { useAppDispatch } from '@root/hooks';
import { setUser } from '@store/features/user/userSlice';
import { createUser } from '@utils/firestore';
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

  const onSignWithGoogleClick = () => {
    const auth = getAuth();

    signInWithPopup(auth, provider).then(({ user }) => {
      // eslint-disable-next-line
      const { email, accessToken, uid, displayName } = user as any;
      dispatch(
        setUser({
          email,
          id: uid,
          token: accessToken,
        }),
      );

      createUser({ userId: uid, email, name: displayName });
      navigate('/profile');
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
