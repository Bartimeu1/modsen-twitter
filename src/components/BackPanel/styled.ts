import { Link } from 'react-router-dom';

import { FlexMixin, FontsMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledBackPanel = styled.header`
  padding-bottom: 17px;
`;

export const BackLink = styled(Link)`
  ${FontsMixin({ size: 'xl', family: 'secondary', weight: 'bold' })};

  color: ${({ theme }) => theme.color.primary};

  & svg {
    margin-right: 13px;

    & path {
      fill: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const Content = styled.div`
  ${FlexMixin({ justify: 'space-between', align: 'center' })}

  padding: 0 15px;
`;
