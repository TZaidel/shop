import { configureStore } from '@reduxjs/toolkit';
import userReducer from './auth/UserSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
