import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messages-slice';
import userReducer from './user-slice';

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
