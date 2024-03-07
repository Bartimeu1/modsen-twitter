import { createSlice } from '@reduxjs/toolkit';

import { IUserSliceState } from './types';

const initialState: IUserSliceState = {
  id: null,
  email: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { id, email, token } = action.payload;

      state.id = id;
      state.email = email;
      state.token = token;
    },
    setUserData(state, action) {
      state.data = action.payload;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
    },
  },
});

export const { setUser, setUserData, removeUser } = userSlice.actions;

export default userSlice.reducer;
