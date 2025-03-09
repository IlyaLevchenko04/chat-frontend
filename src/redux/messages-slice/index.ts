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
      const isDuplicated = state.messages
        .map(item => item._id)
        .includes(action.payload._id);

      if (isDuplicated) return;

      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { setMessages, addNewMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
