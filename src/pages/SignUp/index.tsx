import { GoogleIcon, LogoIcon } from '@constants/icons';

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
  StyledSignUp,
  Subtitle,
  TermsText,
  Title,
  Topper,
} from './styled';

export const SignUpPage = () => {
  return (
    <StyledSignUp>
      <Topper>
        <Banner />
        <Content>
          <LogoIcon />
          <Title>Happening now</Title>
          <Subtitle>Join Twitter today</Subtitle>
          <Buttons>
            <SignButton to="#">
              <GoogleIcon />
              Sign up with Google
            </SignButton>
            <SignButton to="/register">Sign up with email</SignButton>
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
