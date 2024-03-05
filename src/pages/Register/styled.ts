import { Link } from 'react-router-dom';

import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledRegisterPage = styled.div`
  ${FlexMixin({ direction: 'column', align: 'center' })}

  width: 100%;
  max-width: 670px;
  margin: 0 auto;

  & svg {
    width: 40px;
    margin-bottom: 30px;
  }
`;

export const RegisterForm = styled.form`
  ${FlexMixin({ direction: 'column', justify: 'start' })}

  width: 100%;
`;

export const RegisterTitle = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.xl2}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin-bottom: 30px;
`;

export const FormField = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AuthLink = styled(Link)`
  color: ${({ theme }) => theme.color.ltBlue};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin-bottom: 35px;
`;

export const BirthTitle = styled.h4`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin-bottom: 30px;
`;

export const BirthInfoText = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  line-height: 24px;
  opacity: 60%;
  margin-bottom: 25px;
`;

export const BirthSelects = styled.div`
  ${FlexMixin({ align: 'center', justify: 'space-between' })}

  margin: 0 -10px 38px 0;

  & > div {
    margin: 0 10px;
  }
`;

export const SubmitButton = styled.input`
  background: ${({ theme }) => theme.color.ltBlue};
  border-radius: ${({ theme }) => theme.borderRadius.xl2}px;
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.color.white};
  border: none;
  cursor: pointer;
  padding: 15px 0 19px 0;
`;
