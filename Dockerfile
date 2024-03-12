# Use the official Node.js 20.11.1 image with Alpine Linux 3.19
FROM node:20.11.1-alpine3.19

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD ["node", "index.js"]