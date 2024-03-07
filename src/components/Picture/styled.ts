import styled from 'styled-components';

import { IStyledPicture } from './types';

export const StyledPicture = styled.img<IStyledPicture>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
`;
