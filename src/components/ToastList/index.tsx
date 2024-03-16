import { PortalWrapper } from '@components/PortalWrapper';
import { Toast } from '@components/Toast';
import { useAppSelector } from '@root/hooks';

import { StyledToastList } from './styled';

export const ToastList = () => {
  const currentToasts = useAppSelector(({ toast }) => toast.currentToasts);

  return (
    <PortalWrapper>
      <StyledToastList>
        {currentToasts.map(({ id, content, type }) => (
          <Toast key={id} id={id} type={type} content={content} />
        ))}
      </StyledToastList>
    </PortalWrapper>
  );
};
