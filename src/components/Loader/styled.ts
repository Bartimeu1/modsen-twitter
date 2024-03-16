import { FlexMixin, swing } from '@root/theme';
import styled from 'styled-components';

export const StyledLoader = styled.div`
  ${FlexMixin({ align: 'center', justify: 'center' })}

  background: ${({ theme }) => theme.color.loaderBg};
  z-index: 40;
  position: fixed;
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & svg {
    animation: ${swing} 1s linear infinite;
  }
`;
