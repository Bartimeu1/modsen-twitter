import { ConfigProvider } from '@services/ConfigProvider';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { EditModal } from '.';
import { IEditModalProps } from './types';

const mockedProps: IEditModalProps = {
  profileData: {
    userId: 'test-user-id',
    name: 'test-user-name',
    email: 'test-user-email',
    bio: 'test-user-bio',
  },
  closeEditModal: jest.fn(),
};

describe('EditModal component', () => {
  test('component should render correctly', () => {
    render(<EditModal {...mockedProps} />, { wrapper: ConfigProvider });
  });

  test('should call closeEditModal after outside click', async () => {
    render(<EditModal {...mockedProps} />, {
      wrapper: ConfigProvider,
    });

    userEvent.click(document.body);

    await waitFor(() => {
      expect(mockedProps.closeEditModal).toHaveBeenCalled();
    });
  });

  test('should call closeEditModal after close button click', async () => {
    const { getByTestId } = render(<EditModal {...mockedProps} />, {
      wrapper: ConfigProvider,
    });

    const closeButton = getByTestId('edit-modal-close-button');

    userEvent.click(closeButton);

    await waitFor(() => {
      expect(mockedProps.closeEditModal).toHaveBeenCalled();
    });
  });

  test('should call the onSubmit function when data is correct', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <EditModal {...mockedProps} />,
      {
        wrapper: ConfigProvider,
      },
    );

    await act(async () => {
      fireEvent.change(getByPlaceholderText('Name'), {
        target: { value: 'test-name' },
      });
      fireEvent.change(getByPlaceholderText('Email'), {
        target: { value: 'email@test.com' },
      });
      fireEvent.change(getByPlaceholderText('Bio'), {
        target: { value: 'test-bio' },
      });
      fireEvent.change(getByPlaceholderText('Slug'), {
        target: { value: 'test-slug' },
      });
    });

    const submitButton = getByTestId('edit-modal-submit');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(mockedProps.closeEditModal).toHaveBeenCalled();
    });
  });

  test('should call closeEditModal after submit with correct data', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <EditModal {...mockedProps} />,
      {
        wrapper: ConfigProvider,
      },
    );

    await act(async () => {
      fireEvent.change(getByPlaceholderText('Name'), {
        target: { value: 'test-name' },
      });
      fireEvent.change(getByPlaceholderText('Email'), {
        target: { value: 'email@test.com' },
      });
      fireEvent.change(getByPlaceholderText('Bio'), {
        target: { value: 'test-bio' },
      });
      fireEvent.change(getByPlaceholderText('Slug'), {
        target: { value: 'test-slug' },
      });
    });

    const submitButton = getByTestId('edit-modal-submit');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(mockedProps.closeEditModal).toHaveBeenCalled();
    });
  });
});
