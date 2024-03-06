import styled from 'styled-components';

export const FormInputField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.xs4}px;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  width: 100%;
  padding: 19px 0 20px 20px;
  outline: none;
`;

export const ValidationText = styled.p`
  position: absolute;
  bottom: -16px;
  left: 20px;
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.xs3}px;
`;
