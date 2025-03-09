import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../../shared/types/sockets';

export interface MessagesState {
  messages: Message[];
}

const initialState: MessagesState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addNewMessage: (state, action: PayloadAction<Message>) => {
      const uniqueMessages = new Set([...state.messages, action.payload]);

      state.messages = Array.from(uniqueMessages);
    },
  },
});

export const { setMessages, addNewMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
