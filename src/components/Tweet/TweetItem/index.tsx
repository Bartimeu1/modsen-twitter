import { useMemo, useRef, useState } from 'react';

import { UserAvatar } from '@components/User';
import { LikeIcon, urls } from '@root/constants';
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
  const { image, text, tweetId, likes, tweetUserId, date } = props;

  const userId = useAppSelector((state) => state.user.id);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const [likesAmount, setLikesAmount] = useState(likes ? likes.length : 0);
  const [isTweetLiked, setIsTweetLiked] = useState(
    userId && likes ? likes.includes(userId) : false,
  );

  const { data: userData } = useGetUserByIdQuery({ userId: tweetUserId });
  const [likeTweet] = useLikeTweetMutation();

  const onLikeButtonClick = () => {
    setIsTweetLiked((prevState) => !prevState);

    setLikesAmount((prevState) =>
      isTweetLiked ? prevState - 1 : prevState + 1,
    );

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (userId) {
        likeTweet({ tweetId, userId });
      }
    }, 400);
  };

  const formattedDate = useMemo(() => formatDate(new Date(date)), [date]);

  if (!userData) {
    return null;
  }

  return (
    <StyledTweetItem data-testid="tweet-item">
      <UserLink to={`${urls.profile}/${userData.slug}`}>
        <UserAvatar image={userData.avatar} size={50} />
      </UserLink>
      <TweetContent>
        <TweetHeader>
          <UserName>{userData.name}</UserName>
          <UserSlug>@{userData.slug}</UserSlug>
          <TweetDate>{formattedDate}</TweetDate>
        </TweetHeader>
        <TweetText>{text}</TweetText>
        {image && <TweetImage alt="tweet-image" src={image} />}
        <TweetLikes $isLiked={isTweetLiked}>
          <LikeButton
            onClick={onLikeButtonClick}
            data-testid="tweet-like-button"
          >
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
