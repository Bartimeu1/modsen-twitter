import { createSlice } from '@reduxjs/toolkit';

import { IUserSliceState } from './types';

const initialState: IUserSliceState = {
  id: null,
  email: null,
  token: null,
  data: null,
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
      const newUserData = action.payload;
      const newAvatar = newUserData.avatar || state.data?.avatar;

      state.data = {
        ...newUserData,
        avatar: newAvatar,
      };
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
      state.data = null;
    },
  },
});

export const { setUser, setUserData, removeUser } = userSlice.actions;

export default userSlice.reducer;
