import { useState } from 'react';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { Picture } from '@components/Picture';
import { SearchBar } from '@components/SearchBar';
import { useSearchUsersByNameQuery } from '@store/features/user/userApi';

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

  const { data: foundedUsers, refetch } = useSearchUsersByNameQuery({
    value: searchInputValue,
  });

  const onSearchInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
    refetch();
  };

  return (
    <StyledSearchSidebar>
      <SearchBar value={searchInputValue} onChange={onSearchInputValueChange} />
      {foundedUsers?.length ? (
        <SearchResults>
          <ResultsTitle>Search results</ResultsTitle>
          <ResultsList>
            {foundedUsers.map((user) => (
              <UserItem key={user.userId}>
                <UserContent>
                  <Picture
                    width={60}
                    alt="search-avatar"
                    image={user.avatar || defaultAvatar}
                  />
                  <UserInfo>
                    <UserName>{user.name}</UserName>
                    <UserSlug>@{user.slug}</UserSlug>
                  </UserInfo>
                </UserContent>
                <VisitLink to={`profile/${user.slug}`}>Visit</VisitLink>
              </UserItem>
            ))}
          </ResultsList>
        </SearchResults>
      ) : null}
    </StyledSearchSidebar>
  );
};
