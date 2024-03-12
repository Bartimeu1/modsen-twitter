import { ToggleButton } from '@components/ToggleButton';
import { TweetFeed } from '@components/TweetFeed';
import { useGetAllTweetsQuery } from '@store/features/tweet/tweetApi';

import { HomeHeader, HomeTitle, StyledHomePage } from './styled';

export const HomePage = () => {
  const { data: tweetsData } = useGetAllTweetsQuery({});

  return (
    <StyledHomePage>
      <HomeHeader>
        <HomeTitle>Home</HomeTitle>
        <ToggleButton />
      </HomeHeader>
      {tweetsData && <TweetFeed tweets={tweetsData} />}
    </StyledHomePage>
  );
};
