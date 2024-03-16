export interface IPictureProps {
  image: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface IStyledPicture {
  src: string;
  alt: string;
  $width?: number;
  $height?: number;
}
