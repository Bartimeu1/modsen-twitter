import { Link } from 'react-router-dom';

import { FlexMixin, FontsMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledSearchSidebar = styled.aside`
  width: 40%;
  margin-left: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopM}) {
    display: none;
  }
`;

export const SearchResults = styled.div`
  ${FlexMixin({ direction: 'column' })}

  width: 100%;
  padding: 43px 12px 2px 15px;
  background: ${({ theme }) => theme.color.resultsPanel};
  border-radius: ${({ theme }) => theme.borderRadius.xs3}px;
`;

export const ResultsTitle = styled.h4`
  ${FontsMixin({ family: 'secondary', weight: 'bold', size: 'xl' })}

  margin-bottom: 29px;
`;

export const UserItem = styled.div`
  ${FlexMixin({ align: 'center', justify: 'space-between' })}

  margin-bottom: 25px;
`;

export const UserInfo = styled.div`
  ${FlexMixin({ direction: 'column' })}

  margin-left: 13px;
`;

export const UserContent = styled.div`
  ${FlexMixin({ align: 'center' })}
`;

export const UserName = styled.p`
  ${FontsMixin({ weight: 'semiBold', size: 'sm' })}

  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 4px;
`;

export const UserSlug = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.color.primary};
  opacity: 60%;
`;

export const VisitLink = styled(Link)`
  ${FontsMixin({ weight: 'bold', family: 'secondary', size: 'sm' })}

  color: ${({ theme }) => theme.color.background};
  background: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  padding: 10px 18px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    background: inherit;
    transition: 0.3s;
  }
`;
