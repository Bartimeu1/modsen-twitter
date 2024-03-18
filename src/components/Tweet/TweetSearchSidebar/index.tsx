import { useCallback, useEffect, useState } from 'react';

import { SearchBar } from '@components/SearchBar';
import { LogoIcon } from '@root/constants';
import { useThrottle } from '@root/hooks';
import { useLazySearchTweetsByTextQuery } from '@store/features/tweet/tweetApi';

import {
  ResultsTitle,
  SearchResults,
  StyledSearchSidebar,
  TweetContent,
  TweetItem,
  TweetText,
  VisitLink,
} from './styled';

export const TweetSearchSidebar = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const throttledSearchValue = useThrottle(searchInputValue, 800);

  const [searchTweets, { data: foundedTweets }] =
    useLazySearchTweetsByTextQuery();

  useEffect(() => {
    if (throttledSearchValue) {
      searchTweets({ value: throttledSearchValue });
    }
  }, [throttledSearchValue, searchTweets]);

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
        placeholder="Search Tweets"
      />
      {foundedTweets && searchInputValue ? (
        <SearchResults>
          <ResultsTitle>Search results</ResultsTitle>
          {foundedTweets.map(({ tweetId, text }) => (
            <TweetItem key={tweetId}>
              <TweetContent>
                <LogoIcon />
                <TweetText>{text}</TweetText>
              </TweetContent>
              <VisitLink to={`/tweet/${tweetId}`}>Visit</VisitLink>
            </TweetItem>
          ))}
        </SearchResults>
      ) : null}
    </StyledSearchSidebar>
  );
};
