export interface IUserData {
  userId: string;
  name: string;
  email?: string;
  slug?: string;
  phone?: string;
  password?: string;
  birth?: Date;
}

export interface ITweetData {
  text: string | null;
  image: File | null;
  userId: string | null;
}

export interface ITweetResponse {
  tweetId: string;
  likes: string[] | null;
  text: string | null;
  image: string | null;
  userId: string | null;
}
