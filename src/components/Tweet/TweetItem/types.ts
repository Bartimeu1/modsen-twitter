export interface ITweetItemProps {
  tweetId: string;
  tweetUserId: string;
  date: number;
  likes: string[] | null;
  text: string | null;
  image: string | null;
}

export interface ITweetLikes {
  $isLiked: boolean;
}
