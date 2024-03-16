import { PortalWrapper } from '@components/PortalWrapper';
import { ToastItem } from '@components/Toast';
import { useAppSelector } from '@root/hooks';

import { StyledToastList } from './styled';

export const ToastList = () => {
  const currentToasts = useAppSelector(({ toast }) => toast.currentToasts);

  return (
    <PortalWrapper>
      <StyledToastList>
        {currentToasts.map(({ id, content, type }) => (
          <ToastItem key={id} id={id} type={type} content={content} />
        ))}
      </StyledToastList>
    </PortalWrapper>
  );
};
