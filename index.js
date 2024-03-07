const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);

// Initialize Socket.IO
const io = socketIo(server);

// Set the root route to provide a simple web page
app.get('/', (req, res) => {
    res.send('<h1>Hello World, connect to socket.io server with Postman or socket.io client</h1>');
});

// Triggered when a client connects
io.on('connection', (socket) => {
    console.log('A user connected');

    // Send a "Hello World" message to the client
    socket.emit('message', 'Hello World from socket.io!');

    // Listen for messages from the client
    socket.on('message', function incoming(message) {
        console.log('Received message from client: %s', message);
    });

    // Triggered when a client disconnects
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server on port 5000
server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
