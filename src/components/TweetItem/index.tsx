import { useState } from 'react';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { Picture } from '@components/Picture';
import { LikeIcon } from '@constants/icons';
import { useAppSelector } from '@root/hooks';
import { useLikeTweetMutation } from '@store/features/tweet/tweetApi';
import { useGetUserByIdQuery } from '@store/features/user/userApi';

import {
  LikeButton,
  LikesCounter,
  StyledTweetItem,
  TweetContent,
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
  const { image, text, tweetId, likes } = props;

  const [isTweetLiked, setIsTweetLiked] = useState(() => {
    return userId && likes ? likes.includes(userId) : false;
  });

  const [likesAmount, setLikesAmount] = useState(() => {
    return likes ? likes.length : 0;
  });

  const { data: userData } = useGetUserByIdQuery({ userId: userId || '' });
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

  return (
    <StyledTweetItem>
      <UserLink to={`/profile/${userData?.slug}`}>
        <Picture
          image={userData?.avatar || defaultAvatar}
          alt="tweet-avatar"
          width={50}
        />
      </UserLink>
      <TweetContent>
        <TweetHeader>
          <UserName>{userData?.name}</UserName>
          <UserSlug>@{userData?.slug}</UserSlug>
        </TweetHeader>
        <TweetText>{text}</TweetText>
        {image && <TweetImage alt="tweet-image" src={image} />}
        <TweetLikes $isLiked={isTweetLiked}>
          <LikeButton onClick={onLikeButtonClick}>
            <LikeIcon />
          </LikeButton>
          <LikesCounter>{likesAmount}</LikesCounter>
        </TweetLikes>
      </TweetContent>
    </StyledTweetItem>
  );
};
