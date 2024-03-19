import { useCallback, useEffect, useState } from 'react';

import { SearchBar } from '@components/SearchBar';
import { UserAvatar } from '@components/User';
import { useThrottle } from '@root/hooks';
import { useLazySearchUsersByNameQuery } from '@store/features/user/userApi';

import {
  ResultsList,
  ResultsTitle,
  SearchResults,
  StyledSearchSidebar,
  UserContent,
  UserInfo,
  UserItem,
  UserName,
  UserSlug,
  VisitLink,
} from './styled';

export const UserSearchSidebar = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const throttledSearchValue = useThrottle(searchInputValue, 800);

  const [searchUsers, { data: foundedUsers }] = useLazySearchUsersByNameQuery();

  useEffect(() => {
    if (throttledSearchValue) {
      searchUsers({ value: throttledSearchValue });
    }
  }, [throttledSearchValue, searchUsers]);

  const onSearchInputValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInputValue(e.target.value);
    },
    [],
  );

  return (
    <StyledSearchSidebar>
      <SearchBar
        value={searchInputValue}
        onChange={onSearchInputValueChange}
        placeholder="Search Users"
      />
      {foundedUsers && searchInputValue ? (
        <SearchResults>
          <ResultsTitle>Search results</ResultsTitle>
          <ResultsList>
            {foundedUsers.map(({ userId, avatar, name, slug }) => (
              <UserItem key={userId}>
                <UserContent>
                  <UserAvatar size={60} image={avatar} />
                  <UserInfo>
                    <UserName>{name}</UserName>
                    <UserSlug>@{slug}</UserSlug>
                  </UserInfo>
                </UserContent>
                <VisitLink to={`/profile/${slug}`}>Visit</VisitLink>
              </UserItem>
            ))}
          </ResultsList>
        </SearchResults>
      ) : null}
    </StyledSearchSidebar>
  );
};
