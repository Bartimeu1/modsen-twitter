import { combineReducers } from '@reduxjs/toolkit';

import themeReducer from './features/theme/themeSlice';
import toastReducer from './features/toast/toastSlice';
import { tweetApi } from './features/tweet/tweetApi';
import { userApi } from './features/user/userApi';
import userReducer from './features/user/userSlice';

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [tweetApi.reducerPath]: tweetApi.reducer,
  theme: themeReducer,
  user: userReducer,
  toast: toastReducer,
});

export default rootReducer;
