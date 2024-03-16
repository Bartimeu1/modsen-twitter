import { Loader } from '@components/Loader';
import { ToggleButton } from '@components/ToggleButton';
import { TweetFeed, TweetSearchSidebar } from '@components/Tweet';
import { useGetAllTweetsQuery } from '@store/features/tweet/tweetApi';

import { HomeHeader, HomeTitle, StyledHomePage } from './styled';

export const HomePage = () => {
  const { data: tweetsData } = useGetAllTweetsQuery({});

  if (!tweetsData) {
    return <Loader />;
  }

  return (
    <>
      <StyledHomePage>
        <HomeHeader>
          <HomeTitle>Home</HomeTitle>
          <ToggleButton />
        </HomeHeader>
        {tweetsData && <TweetFeed tweets={tweetsData} isMenuVisible={true} />}
      </StyledHomePage>
      <TweetSearchSidebar />
    </>
  );
};
