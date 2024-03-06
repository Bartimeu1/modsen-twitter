import styled from 'styled-components';

export const StyledFormInput = styled.input`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.xs4}px;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  width: 100%;
  padding: 19px 0 20px 20px;
  outline: none;
`;
