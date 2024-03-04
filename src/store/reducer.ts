import { combineReducers } from '@reduxjs/toolkit';

import themeReducer from './features/theme/themeSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
