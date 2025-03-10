import { io, Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "@shared/types/sockets";

const SOCKET_SERVER_URL = import.meta.env.VITE_API_URL;

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  SOCKET_SERVER_URL,
  {
    autoConnect: false,
  }
);
