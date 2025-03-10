import { store } from "@redux/store";
import { Message } from "./sockets";
import { User } from "./user";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface MessagesState {
  messages: Message[];
}

export interface UserState {
  user: User | null;
}
