import { useState } from 'react';

import { SearchBar } from '@components/SearchBar';
import { LogoIcon } from '@constants/icons';
import { useSearchTweetsByTextQuery } from '@root/store/features/tweet/tweetApi';

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

  const { data: foundedTweets, refetch } = useSearchTweetsByTextQuery({
    value: searchInputValue,
  });

  const onSearchInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
    refetch();
  };

  return (
    <StyledSearchSidebar>
      <SearchBar
        value={searchInputValue}
        onChange={onSearchInputValueChange}
        placeholder="Search Tweets"
      />
      {foundedTweets?.length ? (
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
