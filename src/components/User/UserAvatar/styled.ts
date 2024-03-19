import styled from 'styled-components';

import { IStyledUserAvatar } from './types';

export const StyledUserAvatar = styled.div<IStyledUserAvatar>`
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  background: url(${({ $background }) => $background});
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
