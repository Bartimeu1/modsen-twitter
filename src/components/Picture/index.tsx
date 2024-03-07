import { IPictureProps } from './types';

import { StyledPicture } from './styled';

export const Picture = (props: IPictureProps) => {
  const { width, image, height, alt } = props;

  return (
    <StyledPicture src={image} alt={alt} $width={width} $height={height} />
  );
};
