import { Link } from 'react-router-dom';

import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledBackPanel = styled.header`
  padding-bottom: 17px;
`;

export const BackLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.primary};

  & svg {
    margin-right: 13px;
  }
`;

export const Content = styled.div`
  ${FlexMixin({ justify: 'space-between', align: 'center' })}
  padding: 0 15px;
`;
