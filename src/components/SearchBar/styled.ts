import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  position: relative;

  & svg {
    position: absolute;
    left: 25px;
    top: 14px;
  }
`;

export const SearchInput = styled.input`
  background: ${({ theme }) => theme.color.searchInput};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.color.primary};
  outline: none;
  width: 100%;
  padding: 15px 0 19px 64px;
  border: none;
  margin-bottom: 32px;
`;
