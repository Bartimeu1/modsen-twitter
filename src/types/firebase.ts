export interface IUserData {
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
}
