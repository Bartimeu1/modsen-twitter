import { Link } from 'react-router-dom';

import { FlexMixin, FontsMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledRegisterPage = styled.main`
  ${FlexMixin({ direction: 'column', align: 'center' })}

  width: 100%;
  padding: 30px 15px;
  max-width: 670px;
  margin: 0 auto;

  & > svg {
    width: 40px;
    margin-bottom: 30px;
  }
`;

export const RegisterForm = styled.form`
  ${FlexMixin({ direction: 'column', justify: 'start' })}

  width: 100%;
`;

export const RegisterTitle = styled.h2`
  ${FontsMixin({ size: 'xl2', family: 'secondary', weight: 'bold' })}

  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    margin-bottom: 20px;
  }
`;

export const AuthLink = styled(Link)`
  ${FontsMixin({ size: 'sm' })}

  color: ${({ theme }) => theme.color.ltBlue};
  margin-bottom: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    margin-bottom: 15px;
  }
`;

export const BirthTitle = styled.h4`
  ${FontsMixin({ size: 'sm', weight: 'bold', family: 'secondary' })}

  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    margin-bottom: 20px;
  }
`;

export const BirthInfoText = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  line-height: 24px;
  opacity: 60%;
  margin-bottom: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: ${({ theme }) => theme.fontSize.xs3}px;
    line-height: 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    font-size: ${({ theme }) => theme.fontSize.xs4}px;
    margin-bottom: 15px;
  }
`;

export const BirthSelects = styled.div`
  ${FlexMixin({ align: 'center', justify: 'space-between' })}

  margin: 0 -10px 38px 0;

  & > div {
    margin: 0 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    margin: 0 -10px 20px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    ${FlexMixin({ align: 'center', direction: 'column' })}

    margin: 0 auto;
    width: 100%;

    & > div {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

export const SubmitButton = styled.input`
  ${FontsMixin({ size: 'sm', weight: 'bold', family: 'secondary' })}

  background: ${({ theme }) => theme.color.ltBlue};
  border-radius: ${({ theme }) => theme.borderRadius.xl2}px;
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.ltBlue};
  cursor: pointer;
  padding: 15px 0 19px 0;
  transition: 0.3s;

  &:hover {
    background: inherit;
    color: ${({ theme }) => theme.color.ltBlue};
    transition: 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    width: 90%;
    margin: 0 auto;
    padding: 10px 0 15px 0;
  }
`;
