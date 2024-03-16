import { ITweetResponse } from '@root/types/firebase';

export interface ITweetFeedProps {
  tweets: ITweetResponse[];
  isMenuVisible: boolean;
}
