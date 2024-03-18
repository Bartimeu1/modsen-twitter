import { monthNames } from '@constants/date';
import { v4 as uuidv4 } from 'uuid';

export const getTargetYear = () => {
  return new Date().getFullYear();
};

export const getMonthIndex = (year: number, month: string) => {
  return new Date(Date.parse(month + ' 1, ' + year)).getMonth() + 1;
};

export const getDaysInMonth = (year: number, month: string) => {
  const monthIndex = getMonthIndex(year, month);
  return new Date(year, monthIndex, 0).getDate();
};

export const generateYearsArray = (startYear: number, endYear: number) => {
  return Array.from({ length: endYear - startYear + 1 }, (_, index) => ({
    value: String(startYear + index),
    id: uuidv4(),
  })).reverse();
};

export const generateDaysArray = (year: number, month: string) => {
  const daysInMonth = getDaysInMonth(year, month);

  return Array.from({ length: daysInMonth }, (_, index) => ({
    value: String(index + 1),
    id: uuidv4(),
  }));
};

export const generateDate = (year: number, month: string, day: string) => {
  const monthIndex = getMonthIndex(year, month);

  return new Date(year, monthIndex, Number(day));
};

export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = monthNames[date.getMonth()];

  return `${month} ${day}`;
};
