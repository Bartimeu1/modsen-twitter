import { TweetItem } from '@components/TweetItem';
import { TweetMenu } from '@components/TweetMenu';

import { TweetsList } from './styled';
import { ITweetFeedProps } from './types';

export const TweetFeed = (props: ITweetFeedProps) => {
  const { tweets, refetch, isMenuVisible } = props;

  return (
    <>
      {isMenuVisible && <TweetMenu refetch={refetch} />}
      <TweetsList>
        {tweets.map((tweet) => (
          <TweetItem
            key={tweet.tweetId}
            userId={tweet.userId}
            likes={tweet.likes}
            tweetId={tweet.tweetId}
            text={tweet.text}
            image={tweet.image}
          />
        ))}
      </TweetsList>
    </>
  );
};
