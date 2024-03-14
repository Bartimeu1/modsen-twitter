import { useParams } from 'react-router-dom';

import { BackPanel } from '@components/BackPanel';
import { TweetItem } from '@components/TweetItem';
import { TweetSearchSidebar } from '@components/TweetSearchSidebar';
import { useGetTweetByIdQuery } from '@store/features/tweet/tweetApi';

import { StyledTweetPage } from './styled';

export const TweetPage = () => {
  const params = useParams();
  const paramTweetId = params.tweetId || '';

  const { data: tweetData } = useGetTweetByIdQuery({ tweetId: paramTweetId });

  return (
    <>
      <StyledTweetPage>
        <BackPanel />
        {tweetData && (
          <TweetItem
            key={tweetData.tweetId}
            date={tweetData.date}
            userId={tweetData.userId}
            likes={tweetData.likes}
            tweetId={tweetData.tweetId}
            text={tweetData.text}
            image={tweetData.image}
          />
        )}
      </StyledTweetPage>
      <TweetSearchSidebar />
    </>
  );
};
