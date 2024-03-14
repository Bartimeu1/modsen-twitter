import { Loader } from '@components/Loader';
import { ToggleButton } from '@components/ToggleButton';
import { TweetFeed } from '@components/TweetFeed';
import { TweetSearchSidebar } from '@components/TweetSearchSidebar';
import { useGetAllTweetsQuery } from '@store/features/tweet/tweetApi';

import { HomeHeader, HomeTitle, StyledHomePage } from './styled';

export const HomePage = () => {
  const { data: tweetsData, refetch } = useGetAllTweetsQuery({});

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
        {tweetsData && (
          <TweetFeed
            tweets={tweetsData}
            refetch={refetch}
            isMenuVisible={true}
          />
        )}
      </StyledHomePage>
      <TweetSearchSidebar />
    </>
  );
};
