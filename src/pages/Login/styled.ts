import { Link } from 'react-router-dom';

import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledLoginPage = styled.div`
  ${FlexMixin({ direction: 'column' })}

  width: 100%;
  padding: 30px 0;
  max-width: 450px;
  margin: 0 auto;

  & svg {
    margin-bottom: 33px;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  margin-bottom: 35px;
`;

export const SubmitButton = styled.input`
  background: ${({ theme }) => theme.color.ltBlue};
  border-radius: ${({ theme }) => theme.borderRadius.xl2}px;
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 15px 0 19px 0;
`;

export const LoginTitle = styled.h3`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.xl3}px;
  font-weight: ${({ theme }) => theme.fontWeight.black};
  margin-bottom: 30px;
`;

export const SignLink = styled(Link)`
  color: ${({ theme }) => theme.color.ltBlue};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: end;
`;
