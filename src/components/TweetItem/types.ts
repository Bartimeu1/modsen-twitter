export interface ITweetItemProps {
  tweetId: string;
  userId: string;
  likes: string[] | null;
  text: string | null;
  image: string | null;
}

export interface ITweetLikes {
  $isLiked: boolean;
}
