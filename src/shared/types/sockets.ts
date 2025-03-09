export interface Message {
  user: string;
  text: string;
  timestamp: Date;
  _id: string;
}

interface NewMessage {
  user: string;
  text: string;
}

export interface ServerToClientEvents {
  initial_messages: (messages: Message[]) => void;
  new_message: (message: Message) => void;
}

export interface ClientToServerEvents {
  new_message: (message: NewMessage) => void;
}
