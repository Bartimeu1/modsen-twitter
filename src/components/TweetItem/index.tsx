import { useEffect, useState } from 'react';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { Picture } from '@components/Picture';
import { LikeIcon } from '@constants/icons';
import { useAppSelector } from '@root/hooks';
import { IUserData } from '@root/types/firebase';
import { getUserById } from '@utils/firestore';
import { likeTweet } from '@utils/firestore';

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

  const [userData, setUserData] = useState<IUserData | null>(null);
  const [isTweetLiked, setIsTweetLiked] = useState(() => {
    if (userId && likes) {
      return likes?.includes(userId);
    }

    return false;
  });
  const [likesAmount, setLikesAmount] = useState(() => {
    if (likes) {
      return likes.length;
    }

    return 0;
  });

  useEffect(() => {
    if (userId) {
      getUserById(userId).then((data) => setUserData(data));
    }
  }, [userId]);

  const onLikeButtonClick = () => {
    if (userId) {
      likeTweet(tweetId, userId);
    }
    setLikesAmount((prevState) =>
      isTweetLiked ? prevState - 1 : prevState + 1,
    );

    setIsTweetLiked((prevState) => !prevState);
  };

  return (
    <StyledTweetItem>
      <UserLink to={`/profile/${userData?.slug}`}>
        <Picture image={defaultAvatar} alt="tweet-avatar" width={50} />
      </UserLink>
      <TweetContent>
        <TweetHeader>
          <UserName>{userData?.name}</UserName>
          <UserSlug>@{userData?.slug}</UserSlug>
        </TweetHeader>
        <TweetText>{text}</TweetText>
        {image && <TweetImage src={image} />}
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
