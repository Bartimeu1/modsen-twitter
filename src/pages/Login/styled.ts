import { Link } from 'react-router-dom';

import { FlexMixin, FontsMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledLoginPage = styled.div`
  ${FlexMixin({ direction: 'column' })}

  width: 100%;
  padding: 70px 15px;
  max-width: 450px;
  margin: 0 auto;

  & > svg {
    margin-bottom: 33px;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  margin-bottom: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    margin-bottom: 20px;
  }
`;

export const SubmitButton = styled.input`
  ${FontsMixin({ size: 'sm', weight: 'bold' })}

  background: ${({ theme }) => theme.color.ltBlue};
  border-radius: ${({ theme }) => theme.borderRadius.xl2}px;
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.ltBlue};
  cursor: pointer;
  width: 100%;
  padding: 15px 0 19px 0;
  transition: 0.3s;

  &:hover {
    background: inherit;
    color: ${({ theme }) => theme.color.ltBlue};
    transition: 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: ${({ theme }) => theme.fontSize.xs}px;
    padding: 10px 0 15px 0;
  }
`;

export const LoginTitle = styled.h3`
  ${FontsMixin({ size: 'xl3', weight: 'black' })}

  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: ${({ theme }) => theme.fontSize.xl2}px;
    margin-bottom: 20px;
  }
`;

export const SignLink = styled(Link)`
  ${FontsMixin({ size: 'xs' })}

  color: ${({ theme }) => theme.color.ltBlue};
  text-align: end;
`;
