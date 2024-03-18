import styled from 'styled-components';

import { IToggleButton } from './types';

export const StyledToggleButton = styled.input<IToggleButton>`
  border: 2px solid ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.background};
  appearance: none;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  margin: 0;
  vertical-align: top;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  &::after {
    border: 2px solid ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.background};
    content: '';
    display: inline-block;
    position: absolute;
    left: -1px;
    top: -1px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transform: translateX(0);
    transition: 0.3s;

    ${({ $isChecked }) =>
      $isChecked && `transform: translateX(calc(100% - 4px));`}
  }
`;
