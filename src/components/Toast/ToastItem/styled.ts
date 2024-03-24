import { fadeOut } from '@root/theme';
import { ToastTypesEnum } from '@root/types/toast';
import styled from 'styled-components';

import { IToastStyles } from './types';

export const StyledToastItem = styled.div<IToastStyles>`
  color: ${({ theme }) => theme.color.white};
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  animation: ${fadeOut} 8s forwards;

  ${({ $type, theme }) =>
    $type === ToastTypesEnum.error
      ? `background: ${theme.color.red}`
      : $type === ToastTypesEnum.success
        ? `background: ${theme.color.success}`
        : ''};
`;
