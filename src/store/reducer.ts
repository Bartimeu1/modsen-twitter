import { combineReducers } from '@reduxjs/toolkit';

import themeReducer from './features/theme/themeSlice';
import userReducer from './features/user/userSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
});

export default rootReducer;
