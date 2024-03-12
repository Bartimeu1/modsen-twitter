import { useEffect, useState } from 'react';

import { ToggleButton } from '@components/ToggleButton';
import { TweetFeed } from '@components/TweetFeed';
import { ITweetResponse } from '@root/types/firebase';
import { getAllTweets } from '@utils/firestore';

import { HomeHeader, HomeTitle, StyledHomePage } from './styled';

export const HomePage = () => {
  const [tweetsData, setTweetsData] = useState<ITweetResponse[] | null>(null);

  useEffect(() => {
    getAllTweets().then((data) => setTweetsData(data));
  }, []);

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
