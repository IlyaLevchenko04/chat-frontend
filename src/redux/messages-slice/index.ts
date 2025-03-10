import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessagesState } from "@shared/types/redux";
import { Message } from "@shared/types/sockets";

const initialState: MessagesState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addNewMessage: (state, action: PayloadAction<Message>) => {
      const isDuplicated = state.messages
        .map((item) => item._id)
        .includes(action.payload._id);

      if (isDuplicated) return;

      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { setMessages, addNewMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
