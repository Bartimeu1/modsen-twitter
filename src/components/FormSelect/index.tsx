import { useRef,useState } from 'react';

import { ChevronIcon } from '@constants/icons';
import { useOnClickOutside } from '@root/hooks';

import {
  Dropdown,
  Label,
  LabelPlaceholder,
  LabelValue,
  StyledFormSelect,
} from './styled';
import { IFormSelectProps } from './types';

export const FormSelect = (props: IFormSelectProps) => {
  const { width, placeholder } = props;

  const selectRef = useRef(null);

  const [targetValue, setTargetValue] = useState('');
  const [isSelectVisible, setIsSelectVisible] = useState(false);

  const onHeaderClick = () => {
    setIsSelectVisible((prevValue) => !prevValue);
  };

  const onSelectClickOutside = () => {
    setIsSelectVisible(false);
  };

  useOnClickOutside(selectRef, onSelectClickOutside);

  return (
    <StyledFormSelect ref={selectRef} $width={width}>
      <Label onClick={onHeaderClick} $isSelectVisible={isSelectVisible}>
        {targetValue ? (
          <LabelValue>targetValue</LabelValue>
        ) : (
          <LabelPlaceholder>{placeholder}</LabelPlaceholder>
        )}
        <ChevronIcon />
      </Label>
      {isSelectVisible && <Dropdown>123</Dropdown>}
    </StyledFormSelect>
  );
};
