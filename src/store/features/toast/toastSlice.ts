import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import { IToastSliceState } from './types';

const initialState: IToastSliceState = {
  currentToasts: [],
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action) => {
      const { content, type } = action.payload;
      const newToast = {
        id: v4(),
        type,
        content,
      };

      state.currentToasts.push(newToast);
    },
    deleteToast: (state, action) => {
      const toastId = action.payload;

      state.currentToasts = state.currentToasts.filter(
        (toast) => toast.id !== toastId,
      );
    },
  },
});

export const { addToast, deleteToast } = toastSlice.actions;

export default toastSlice.reducer;
