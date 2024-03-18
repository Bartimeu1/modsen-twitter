export interface IFormSelectProps {
  placeholder?: string;
  width?: string;
  validationText?: string;
  onChange: (value: string) => void;
  options: { value: string; id: string }[];
}

export interface IStyledFormSelect {
  $width?: string;
}

export interface ISelectLabel {
  $isSelectVisible: boolean;
}
