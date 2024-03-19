import { useState } from 'react';

import { UserAvatar } from '@components/User';
import { LikeIcon } from '@root/constants';
import { useAppSelector } from '@root/hooks';
import { formatDate } from '@root/utils';
import { useLikeTweetMutation } from '@store/features/tweet/tweetApi';
import { useGetUserByIdQuery } from '@store/features/user/userApi';

import {
  LikeButton,
  LikesCounter,
  StyledTweetItem,
  TweetContent,
  TweetDate,
  TweetHeader,
  TweetImage,
  TweetLikes,
  TweetText,
  UserLink,
  UserName,
  UserSlug,
} from './styled';
import { ITweetItemProps } from './types';

export const TweetItem = (props: ITweetItemProps) => {
  const userId = useAppSelector((state) => state.user.id);
  const { image, text, tweetId, likes, tweetUserId, date } = props;

  const [isTweetLiked, setIsTweetLiked] = useState(() => {
    return userId && likes ? likes.includes(userId) : false;
  });

  const [likesAmount, setLikesAmount] = useState(() => {
    return likes ? likes.length : 0;
  });

  const { data: userData } = useGetUserByIdQuery({ userId: tweetUserId });

  const [likeTweet] = useLikeTweetMutation();

  const onLikeButtonClick = () => {
    if (userId) {
      likeTweet({ tweetId, userId });
    }

    setLikesAmount((prevState) =>
      isTweetLiked ? prevState - 1 : prevState + 1,
    );
    setIsTweetLiked((prevState) => !prevState);
  };

  const formattedDate = formatDate(new Date(date));

  return (
    <StyledTweetItem data-testid="tweet-item">
      <UserLink to={`/profile/${userData?.slug}`}>
        <UserAvatar image={userData?.avatar} size={50} />
      </UserLink>
      <TweetContent>
        <TweetHeader>
          <UserName>{userData?.name}</UserName>
          <UserSlug>@{userData?.slug}</UserSlug>
          <TweetDate>{formattedDate}</TweetDate>
        </TweetHeader>
        <TweetText>{text}</TweetText>
        {image && <TweetImage alt="tweet-image" src={image} />}
        <TweetLikes $isLiked={isTweetLiked}>
          <LikeButton
            onClick={onLikeButtonClick}
            data-testid="tweet-like-button">
            <LikeIcon />
          </LikeButton>
          <LikesCounter data-testid="tweet-like-counter">
            {likesAmount}
          </LikesCounter>
        </TweetLikes>
      </TweetContent>
    </StyledTweetItem>
  );
};
