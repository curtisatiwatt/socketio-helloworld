# Socket.io Hello World

This is a simple tutorial-like "Hello World" application demonstrating how to use Socket.io in Node.js. It provides a basic example of setting up a Socket.io server and handling client connections and messages.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

1. `git clone https://github.com/curtisatiwatt/socketio-helloworld.git`
2. `cd socketio-helloworld`
3. `npm i`
4. `node index.js`
5. Open your browser and navigate to `http://localhost:5000` to see the "Hello World" express.js HTML message.
6. Go to Postman and add a new Socket.io connection to `http://localhost:5000`, add and enable a `message` event to see the `Hello World from socket.io node.js backend!` message.

## How It Works

- The server is set up using Express and an HTTP server is created.
- Socket.io is initialized to handle real-time communication.
- A root route (`/`) is defined to serve a simple HTML page.
- The server listens for client connections and handles `connection`, `message`, and `disconnect` events.
- Clients can connect to the server using a Socket.io client, and they will receive a "Hello World" message upon connection.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
