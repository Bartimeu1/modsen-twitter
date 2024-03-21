import { ConfigProvider } from '@services/ConfigProvider';
import { render, screen } from '@testing-library/react';

import { TweetFeed } from '.';
import { ITweetFeedProps } from './types';

const mockedProps: ITweetFeedProps = {
  isMenuVisible: true,
  tweets: [
    {
      tweetId: '1',
      userId: '1',
      text: 'tweet 1 text',
      image: null,
      date: 1710625134308,
      likes: [],
    },
    {
      tweetId: '2',
      userId: '2',
      text: 'tweet 2 text',
      image: null,
      date: 1710625134309,
      likes: [],
    },
  ],
};

describe('TweetFeed component', () => {
  test('component should render correctly', () => {
    const { getByTestId } = render(<TweetFeed {...mockedProps} />, {
      wrapper: ConfigProvider,
    });

    const tweetMenu = getByTestId('tweet-menu');
    expect(tweetMenu).toBeInTheDocument();
  });

  test('should not show menu if isMenuVisible equal false', () => {
    render(<TweetFeed {...mockedProps} isMenuVisible={false} />, {
      wrapper: ConfigProvider,
    });

    const tweetMenu = screen.queryByTestId('tweet-menu');
    expect(tweetMenu).not.toBeInTheDocument();
  });
});
