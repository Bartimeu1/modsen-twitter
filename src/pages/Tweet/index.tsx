import { useParams } from 'react-router-dom';

import { BackPanel } from '@components/BackPanel';
import { Loader } from '@components/Loader';
import { TweetItem,TweetSearchSidebar } from '@components/Tweet';
import { useGetTweetByIdQuery } from '@store/features/tweet/tweetApi';

import { StyledTweetPage } from './styled';

export const TweetPage = () => {
  const params = useParams();
  const paramTweetId = params.tweetId || '';

  const { data: tweetData } = useGetTweetByIdQuery({ tweetId: paramTweetId });

  if (!tweetData) {
    return <Loader />;
  }

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
