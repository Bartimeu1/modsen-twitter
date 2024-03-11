import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledHomePage = styled.section`
  width: 100%;
  max-width: 930px;
  position: relative;
  padding: 0 15px;

  &:before,
  &:after {
    background: ${({ theme }) => theme.color.primary};
    opacity: 10%;
    position: absolute;
    width: 1px;
    height: 100%;
    max-height: 870px;
    content: '';
    top: 0;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }
`;

export const HomeHeader = styled.header`
  ${FlexMixin({ justify: 'space-between', align: 'center' })}

  margin-bottom: 17px;
`;

export const HomeTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const ToggleButton = styled.input`
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
