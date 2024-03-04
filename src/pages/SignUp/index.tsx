import {
  StyledSignUp,
  Banner,
  Content,
  Title,
  Subtitle,
  Buttons,
  SignButton,
  TermsText,
  LogInText,
  InfoLink,
  Nav,
  NavLink,
  Topper,
} from './styled';

import { LogoIcon, GoogleIcon } from '@constants/icons';
import { NavLinks } from './config';

const SignUpPage = () => {
  return (
    <StyledSignUp>
      <Topper>
        <Banner />
        <Content>
          <LogoIcon />
          <Title>Happening now</Title>
          <Subtitle>Join Twitter today</Subtitle>
          <Buttons>
            <SignButton>
              <GoogleIcon />
              Sign up with Google
            </SignButton>
            <SignButton>Sign up with email</SignButton>
          </Buttons>
          <TermsText>
            By singing up you agree to the
            <InfoLink to="#">Terms of Service </InfoLink>
            and <InfoLink to="#"> Privacy Policy</InfoLink>, including
            <InfoLink to="#"> Cookie Use</InfoLink>.
          </TermsText>
          <LogInText>
            Already have an account? <InfoLink to="#">Log in</InfoLink>
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

export default SignUpPage;
