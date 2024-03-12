import { createPortal } from 'react-dom';

import { useLockBodyScroll } from '@root/hooks';

import { IPortalWrapperProps } from './types';

export function PortalWrapper({ children }: IPortalWrapperProps) {
  useLockBodyScroll();

  return createPortal(<>{children}</>, document.body);
}
