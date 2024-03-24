import { memo, useRef, useState } from 'react';

import { ChevronIcon } from '@root/constants';
import { useOnClickOutside } from '@root/hooks';

import {
  Dropdown,
  DropdownOption,
  Label,
  LabelPlaceholder,
  LabelValue,
  StyledFormSelect,
  ValidationText,
} from './styled';
import { IFormSelectProps } from './types';

export const FormSelect = memo(function FormSelect(props: IFormSelectProps) {
  const { width, placeholder, onChange, options, validationText } = props;

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
      <Label
        onClick={onHeaderClick}
        $isSelectVisible={isSelectVisible}
        data-testid="select-label"
      >
        {targetValue ? (
          <LabelValue>{targetValue}</LabelValue>
        ) : (
          <LabelPlaceholder>{placeholder}</LabelPlaceholder>
        )}
        <ChevronIcon />
      </Label>
      {validationText && <ValidationText>{validationText}</ValidationText>}
      {isSelectVisible && (
        <Dropdown data-testid="select-dropdown">
          {options.map(({ id, value }) => (
            <DropdownOption
              key={id}
              onClick={onDropdownOptionClick(value)}
              data-testid="select-dropdown-option"
            >
              {value}
            </DropdownOption>
          ))}
        </Dropdown>
      )}
    </StyledFormSelect>
  );
});
