import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "@redux/messages-slice";
import userReducer from "@redux/user-slice";

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    user: userReducer,
  },
});
