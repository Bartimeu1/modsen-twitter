export interface ITweetItemProps {
  tweetId: string;
  likes: string[] | null;
  text: string | null;
  image: string | null;
}

export interface ITweetLikes {
  $isLiked: boolean;
}
