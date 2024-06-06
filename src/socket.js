// src/socket.js

import { io } from "socket.io-client";

const socket = io("wss://coding-app-server-production.up.railway.app");

export default socket;
