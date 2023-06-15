// utils/chatSocket.js

import io from 'socket.io-client';

const socket = io('http://localhost:3022'); // Replace with your WebSocket server URL

export default socket;
