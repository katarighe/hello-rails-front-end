import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import messageReducer from './messageSlice';

const logger = createLogger();

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export default store;
