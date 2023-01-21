import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
  const io = res.socket.server.io || new Server(res.socket.server);

  io.on('connection', (socket) => {
    socket.on('newMessage', (msg) => {
      console.log(msg);

      socket.broadcast.emit('update', msg);
    })
  })

  res.json('Okay.');
};

export default SocketHandler;