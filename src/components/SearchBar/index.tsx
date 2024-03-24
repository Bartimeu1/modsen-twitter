import { memo } from 'react';

import { SearchIcon } from '@root/constants';

import { SearchInput, StyledSearchBar } from './styled';
import { ISearchBarProps } from './types';

export const SearchBar = memo(function SearchBar(props: ISearchBarProps) {
  const { value, onChange, placeholder } = props;

  return (
    <StyledSearchBar>
      <SearchIcon />
      <SearchInput
        data-testid="search-bar-input"
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
      />
    </StyledSearchBar>
  );
});
