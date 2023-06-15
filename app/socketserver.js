const http = require('http');
// const express = require('express');
const {Server} = require('socket.io');
const cors = require('cors');

// const server = express();
const server = http.createServer();
// server.use(cors());

const io = new Server(server);
io.on('connection', (socket) => {
  console.log('A user connected');
});

server.listen(3010, () => {
  console.log('Server listening on port 3010');
})