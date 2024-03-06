import styled from 'styled-components';

import { ISelectLabel, IStyledFormSelect } from './types';

export const StyledFormSelect = styled.div<IStyledFormSelect>`
  width: ${({ $width }) => $width || '100%'};
  position: relative;
`;

export const Label = styled.div<ISelectLabel>`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.xs4}px;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  padding: 19px 0 20px 20px;
  position: relative;
  transition: 0.3s all;
  cursor: pointer;

  & svg {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translate(0, -50%);
    transition: 0.3s all;

    ${({ $isSelectVisible }) =>
      $isSelectVisible &&
      `
      transform: translate(0, -50%) rotate(180deg);
    `}
  }
`;

export const LabelPlaceholder = styled.p`
  opacity: 60%;
`;

export const LabelValue = styled.p``;

export const Dropdown = styled.div`
  background: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.xs4}px;
  position: absolute;
  z-index: 5;
  bottom: -120px;
  max-height: 120px;
  left: 0;
  width: 100%;
  overflow-y: scroll;
  padding: 10px 0 10px 20px;
`;

export const DropdownOption = styled.div`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const ValidationText = styled.p`
  position: absolute;
  bottom: -16px;
  left: 20px;
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.xs3}px;
`;
