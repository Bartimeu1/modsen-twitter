import { FlexMixin, FontsMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledSettingsPage = styled.main`
  ${FlexMixin({ align: 'center', direction: 'column' })}

  width: 100%;
  max-width: 930px;
  position: relative;
  padding: 10px 20px 0;

  &:before,
  &:after {
    background: ${({ theme }) => theme.color.primary};
    opacity: 10%;
    position: absolute;
    width: 1px;
    height: 100%;
    max-height: 870px;
    content: '';
    top: 0;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }
`;

export const ResetForm = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h4`
  ${FontsMixin({ size: 'lg', weight: 'bold' })}

  margin-bottom: 30px;
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
