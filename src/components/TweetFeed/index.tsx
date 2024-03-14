import { TweetItem } from '@components/TweetItem';
import { TweetMenu } from '@components/TweetMenu';

import { TweetsList } from './styled';
import { ITweetFeedProps } from './types';

export const TweetFeed = (props: ITweetFeedProps) => {
  const { tweets, isMenuVisible } = props;
  return (
    <>
      {isMenuVisible && <TweetMenu />}
      <TweetsList>
        {tweets
          .slice()
          .sort((a, b) => b.date - a.date)
          .map((tweet) => (
            <TweetItem
              key={tweet.tweetId}
              date={tweet.date}
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
