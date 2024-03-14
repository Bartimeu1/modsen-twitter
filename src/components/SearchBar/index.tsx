import { SearchIcon } from '@constants/icons';

import { SearchInput, StyledSearchBar } from './styled';
import { ISearchBarProps } from './types';

export const SearchBar = (props: ISearchBarProps) => {
  const { value, onChange, placeholder } = props;

  return (
    <StyledSearchBar>
      <SearchIcon />
      <SearchInput
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
      />
    </StyledSearchBar>
  );
};
