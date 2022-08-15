
import express from 'express';
import cors from 'cors';
import { mapGengerator } from './utility.js';
const app = express();
import { createServer } from 'http';
const server = createServer(app);
import { Server } from "socket.io";
const io = new Server(server);
app.use(cors())

app.get('/', (req, res) => {
  res.send("HI")
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
  var maps = []
  mapGengerator(maps)
  // if(verifyMap != 1)
  //   console.log("error generating map")
});


