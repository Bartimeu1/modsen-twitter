import { useRef, useState } from 'react';

import { ChevronIcon } from '@constants/icons';
import { useOnClickOutside } from '@root/hooks';

import {
  Dropdown,
  DropdownOption,
  Label,
  LabelPlaceholder,
  LabelValue,
  StyledFormSelect,
} from './styled';
import { IFormSelectProps } from './types';

export const FormSelect = (props: IFormSelectProps) => {
  const { width, placeholder, onChange, options } = props;

  const selectRef = useRef(null);

  const [targetValue, setTargetValue] = useState('');
  const [isSelectVisible, setIsSelectVisible] = useState(false);

  const onHeaderClick = () => {
    setIsSelectVisible((prevValue) => !prevValue);
  };

  const closeSelect = () => {
    setIsSelectVisible(false);
  };

  const onDropdownOptionClick = (itemValue: string) => () => {
    setTargetValue(itemValue);
    onChange(itemValue);
    closeSelect();
  };

  useOnClickOutside(selectRef, closeSelect);

  return (
    <StyledFormSelect ref={selectRef} $width={width}>
      <Label onClick={onHeaderClick} $isSelectVisible={isSelectVisible}>
        {targetValue ? (
          <LabelValue>{targetValue}</LabelValue>
        ) : (
          <LabelPlaceholder>{placeholder}</LabelPlaceholder>
        )}
        <ChevronIcon />
      </Label>
      {isSelectVisible && (
        <Dropdown>
          {options.map(({ id, value }) => (
            <DropdownOption key={id} onClick={onDropdownOptionClick(value)}>
              {value}
            </DropdownOption>
          ))}
        </Dropdown>
      )}
    </StyledFormSelect>
  );
};
