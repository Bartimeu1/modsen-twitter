export interface IFormInputProps {
  placeholder: string;
  type: string;
  onChange: (value: string) => void;
  validationText?: string;
  baseValue?: string;
}
