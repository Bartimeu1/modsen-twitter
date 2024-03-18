import { createPortal } from 'react-dom';

import { IPortalWrapperProps } from './types';

export function PortalWrapper({ children }: IPortalWrapperProps) {
  return createPortal(<>{children}</>, document.body);
}
