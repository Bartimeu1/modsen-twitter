import { useEffect,useState } from 'react';

import { TweetFeed } from '@components/TweetFeed';
import { useAppDispatch } from '@root/hooks';
import { ITweetResponse } from '@root/types/firebase';
import { toggleTheme } from '@store/features/theme/themeSlice';
import { getAllTweets } from '@utils/firestore';

import { HomeHeader, HomeTitle, StyledHomePage, ToggleButton } from './styled';

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const [tweetsData, setTweetsData] = useState<ITweetResponse[] | null>(null);

  useEffect(() => {
    getAllTweets().then((data) => setTweetsData(data));
  }, []);

  const onToggleButtonClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledHomePage>
      <HomeHeader>
        <HomeTitle>Home</HomeTitle>
        <ToggleButton type="checkbox" onClick={onToggleButtonClick} />
      </HomeHeader>
      {tweetsData && <TweetFeed tweets={tweetsData} />}
    </StyledHomePage>
  );
};
