import { TweetItem } from '@components/TweetItem';
import { TweetMenu } from '@components/TweetMenu';

import { TweetsList } from './styled';
import { ITweetFeedProps } from './types';

export const TweetFeed = (props: ITweetFeedProps) => {
  const { tweets } = props;

  return (
    <>
      <TweetMenu />
      <TweetsList>
        {tweets.map((tweet) => (
          <TweetItem
            key={tweet.tweetId}
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
