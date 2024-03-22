import { ConfigProvider } from '@services/ConfigProvider';
import { fireEvent, render } from '@testing-library/react';

import { TweetItem } from '.';
import { ITweetItemProps } from './types';

const mockedProps: ITweetItemProps = {
  tweetId: '1',
  tweetUserId: '1',
  text: 'tweet 1 text',
  image: null,
  date: 1710625134308,
  likes: [],
};

describe('TweetItem component', () => {
  test('component should render correctly', () => {
    render(<TweetItem {...mockedProps} />, { wrapper: ConfigProvider });
  });

  test('increments likes when like button is clicked', () => {
    const { getByTestId } = render(<TweetItem {...mockedProps} />, {
      wrapper: ConfigProvider,
    });

    const likesCounter = getByTestId('tweet-like-counter');
    const likeButton = getByTestId('tweet-like-button');

    expect(likesCounter).toHaveTextContent('0');
    fireEvent.click(likeButton);
    expect(likesCounter).toHaveTextContent('1');
  });
});
