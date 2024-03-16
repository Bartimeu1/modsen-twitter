import { useAppDispatch,useTimeout } from '@root/hooks';
import { IToast } from '@root/types/toast';
import { deleteToast } from '@store/features/toast/toastSlice';

import { StyledToast } from './styled';

export const Toast = (props: IToast) => {
  const { id, content, type } = props;

  const dispatch = useAppDispatch();

  useTimeout(() => dispatch(deleteToast(id)), 4000);

  return <StyledToast $type={type}>{content}</StyledToast>;
};
