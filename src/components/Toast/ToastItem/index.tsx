import { useAppDispatch, useTimeout } from '@root/hooks';
import { IToast } from '@root/types/toast';
import { deleteToast } from '@store/features/toast/toastSlice';

import { StyledToastItem } from './styled';

export const ToastItem = (props: IToast) => {
  const { id, content, type } = props;

  const dispatch = useAppDispatch();

  useTimeout(() => dispatch(deleteToast(id)), 4000);

  return <StyledToastItem $type={type}>{content}</StyledToastItem>;
};
