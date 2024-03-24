import { ConfigProvider } from '@services/ConfigProvider';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TweetModal } from '.';
import { ITweetModalProps } from './types';

const mockedProps: ITweetModalProps = {
  closeTweetModal: jest.fn(),
};

describe('TweetModal component', () => {
  test('component should render correctly', () => {
    render(<TweetModal {...mockedProps} />, { wrapper: ConfigProvider });
  });

  test('should call closeTweetModal after outside click', async () => {
    render(<TweetModal {...mockedProps} />, {
      wrapper: ConfigProvider,
    });

    userEvent.click(document.body);

    await waitFor(() => {
      expect(mockedProps.closeTweetModal).toHaveBeenCalled();
    });
  });

  test('should call closeTweetModal after close button click', async () => {
    const { getByTestId } = render(<TweetModal {...mockedProps} />, {
      wrapper: ConfigProvider,
    });

    const closeButton = getByTestId('tweet-modal-close-button');

    userEvent.click(closeButton);

    await waitFor(() => {
      expect(mockedProps.closeTweetModal).toHaveBeenCalled();
    });
  });
});
