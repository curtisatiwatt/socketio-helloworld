# Socket.io Hello World

This is a simple tutorial-like "Hello World" application demonstrating how to use Socket.io in Node.js. It provides a basic example of setting up a Socket.io server and handling client connections and messages.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

1. Clone the repository to your machine
```bash
git clone https://github.com/curtisatiwatt/socketio-helloworld.git
```
2. Change directory into the folder
```bash
cd socketio-helloworld
```
3. Install all the dependencies
```bash
npm install
```
4. Run the project with node
```bash
node index.js
```
5. Open your browser and navigate to `http://localhost:5000` to see the "Hello World" express.js HTML message.
6. Go to Postman and add a new Socket.io connection to `http://localhost:5000`, add and enable a `message` event to see the `Hello World from socket.io node.js backend!` message.

## How It Works

- The server is set up using Express and an HTTP server is created.
- Socket.io is initialized to handle real-time communication.
- A root route (`/`) is defined to serve a simple HTML page.
- The server listens for client connections and handles `connection`, `message`, and `disconnect` events.
- Clients can connect to the server using a Socket.io client, and they will receive a "Hello World" message upon connection.

## Docker
### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed on your machine.

### Running with Docker

You can run this project using Docker by following these steps:

1. Run the Docker container:
```bash
docker run -p 5000:5000 ghcr.io/curtisatiwatt/socketio-helloworld:latest
```
2. Open your browser and navigate to `http://localhost:5000` to see the "Hello World" express.js HTML message.

### Running with Docker Compose

You can run this project using Docker Compose as well. 
1. Clone and cd into the repository
```bash
git clone https://github.com/curtisatiwatt/socketio-helloworld.git && cd socketio-helloworld
```
2. Run the project with Docker Compose
```bash
docker compose up -d
```

If you want to stop and REMOVE everything created by the docker compose file
```bash
docker compose down -v
```

## Development and Contributing

If you're interested in contributing to this project or want to build and run the Docker image locally during development, please refer to my [Docker GitHub Build Guide](./docs/DockerGithubBuildGuide.md) for detailed instructions on building and publishing the Docker image, as well as setting up multi-platform builds.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
