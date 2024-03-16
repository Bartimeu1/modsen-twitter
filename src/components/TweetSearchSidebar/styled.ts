import { Link } from 'react-router-dom';

import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledSearchSidebar = styled.aside`
  width: 100%;
  max-width: 373px;
  margin-left: 28px;
`;

export const SearchResults = styled.div`
  ${FlexMixin({ direction: 'column' })}

  width: 100%;
  padding: 43px 12px 2px 15px;
  background: ${({ theme }) => theme.color.resultsPanel};
  border-radius: ${({ theme }) => theme.borderRadius.xs3}px;
`;

export const ResultsTitle = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  margin-bottom: 29px;
`;

export const VisitLink = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.background};
  background: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  padding: 10px 18px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    background: inherit;
    transition: 0.3s;
  }
`;

export const TweetItem = styled.div`
  ${FlexMixin({ align: 'center', justify: 'space-between' })}

  margin-bottom: 25px;

  & svg {
    width: 40px;
    margin-right: 13px;
  }
`;

export const TweetContent = styled.div`
  ${FlexMixin({ align: 'center' })}
`;

export const TweetText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.color.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
