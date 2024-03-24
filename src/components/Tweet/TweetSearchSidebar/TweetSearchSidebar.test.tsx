import { ConfigProvider } from '@services/ConfigProvider';
import { fireEvent, render } from '@testing-library/react';

import { TweetSearchSidebar } from '.';

describe('TweetSearchSidebar component', () => {
  test('component should render correctly', () => {
    render(<TweetSearchSidebar />, { wrapper: ConfigProvider });
  });

  test('updates search input value correctly', () => {
    const { getByPlaceholderText } = render(<TweetSearchSidebar />, {
      wrapper: ConfigProvider,
    });

    const input = getByPlaceholderText('Search Tweets') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test tweet' } });

    expect(input.value).toBe('test tweet');
  });
});
