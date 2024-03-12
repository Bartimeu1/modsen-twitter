import { combineReducers } from '@reduxjs/toolkit';

import themeReducer from './features/theme/themeSlice';
import { tweetApi } from './features/tweet/tweetApi';
import { userApi } from './features/user/userApi';
import userReducer from './features/user/userSlice';

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [tweetApi.reducerPath]: tweetApi.reducer,
  theme: themeReducer,
  user: userReducer,
});

export default rootReducer;
