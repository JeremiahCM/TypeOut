const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5000


const router = require('./router');
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('New connection established.');

    socket.on('disconnect', () => {
        console.log('User has disconnected.');
    })
});

app.use(router);

/*middleware - Considering database for web app
app.use(cors());
app.use(express.json());
*/

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

