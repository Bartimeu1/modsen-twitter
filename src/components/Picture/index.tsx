import { StyledPicture } from './styled';
import { IPictureProps } from './types';

export const Picture = (props: IPictureProps) => {
  const { width, image, height, alt } = props;

  return (
    <StyledPicture src={image} alt={alt} $width={width} $height={height} />
  );
};
