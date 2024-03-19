import defaultAvatar from '@assets/images/defaultAvatar.png';

import { StyledUserAvatar } from './styled';
import { IUserAvatarProps } from './types';

export const UserAvatar = (props: IUserAvatarProps) => {
  const { image, size } = props;

  return <StyledUserAvatar $background={image || defaultAvatar} $size={size} />;
};
