import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../types/sockets';

const SOCKET_SERVER_URL = 'http://localhost:3000';

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  SOCKET_SERVER_URL,
  {
    autoConnect: false,
  }
);
