# Use the official Node.js 20 Alpine base image for a lightweight container
FROM node:20-alpine

# Set the working directory inside the container to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install the dependencies listed in package.json
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Use Nodemon to run the app, auto-restarting the server when changes are detected
CMD ["npx", "nodemon", "app.js"]
