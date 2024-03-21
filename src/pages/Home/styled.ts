import { FlexMixin, FontsMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledHomePage = styled.main`
  width: 100%;
  max-width: 930px;
  position: relative;

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

export const HomeHeader = styled.header`
  ${FlexMixin({ justify: 'space-between', align: 'center' })}

  margin-bottom: 17px;
  padding: 0 15px;
`;

export const HomeTitle = styled.h3`
  ${FontsMixin({ weight: 'bold', family: 'secondary', size: 'xl' })}

  color: ${({ theme }) => theme.color.primary};
`;
