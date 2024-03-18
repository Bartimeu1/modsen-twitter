import { ConfigProvider } from '@services/ConfigProvider';
import { fireEvent,render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TweetMenu } from '.';

const mockedImageFile = new File(['test image'], 'test.jpg', {
  type: 'image/jpeg',
});

describe('TweetMenu component', () => {
  test('component should render correctly', () => {
    render(<TweetMenu />, { wrapper: ConfigProvider });
  });

  test('should disable tweet button when no text or image is provided', () => {
    const { getByTestId } = render(<TweetMenu />, { wrapper: ConfigProvider });

    const tweetButton = getByTestId('create-tweet-button');
    const tweetTextarea = getByTestId('tweet-textarea');

    expect(tweetButton).toBeDisabled();
    fireEvent.change(tweetTextarea, { target: { value: 'Test tweet text' } });
    expect(tweetButton).not.toBeDisabled();
  });

  test('should upload image', async () => {
    const { getByTestId } = render(<TweetMenu />, {
      wrapper: ConfigProvider,
    });

    const fileInput = getByTestId('tweet-file-input');
    userEvent.upload(fileInput, mockedImageFile);
  });
});
