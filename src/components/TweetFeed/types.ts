import { ITweetResponse } from '@root/types/firebase';

export interface ITweetFeedProps {
  tweets: ITweetResponse[];
  refetch: () => void;
  isMenuVisible: boolean;
}
