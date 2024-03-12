import styled from 'styled-components';

export const StyledToggleButton = styled.input`
  border: 2px solid ${(props) => props.theme.color.primary};
  background: ${(props) => props.theme.color.background};
  appearance: none;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  margin: 0;
  vertical-align: top;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &::after {
    background: ${(props) => props.theme.color.background};
    border: 2px solid ${(props) => props.theme.color.primary};
    content: '';
    display: inline-block;
    position: absolute;
    left: -1px;
    top: -1px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transform: translateX(0);
    transition: 0.3s;
  }
  &:checked::after {
    transform: translateX(calc(100% - 4px));
    background-color: #fff;
    transition: 0.3s;
  }
  &:checked {
    background: ${(props) => props.theme.color.primary};
    transition: 0.3s;
  }
`;
