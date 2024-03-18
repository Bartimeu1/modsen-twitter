import { ConfigProvider } from '@services/ConfigProvider';
import { fireEvent,render } from '@testing-library/react';

import { UserSearchSidebar } from '.';

describe('UserSearchSidebar component', () => {
  test('component should render correctly', () => {
    render(<UserSearchSidebar />, { wrapper: ConfigProvider });
  });

  test('updates search input value correctly', () => {
    const { getByPlaceholderText } = render(<UserSearchSidebar />, {
      wrapper: ConfigProvider,
    });

    const input = getByPlaceholderText('Search Users') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test user' } });

    expect(input.value).toBe('test user');
  });
});
