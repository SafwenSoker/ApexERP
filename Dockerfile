# Use an official Node.js runtime as a parent image
FROM node:18-alpine3.18  as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the Angular app for production with the Angular CLI
RUN ng build

# Use Node.js as a base image for serving the Angular app
FROM node:18-alpine3.18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy built Angular app from the 'build' stage
COPY --from=build /usr/src/app/dist/app /usr/src/app/dist

# Install express server
RUN npm install express --save

# Copy custom server file
COPY server.js .

# Expose port 3000
EXPOSE 3000

# Command to run the Angular app with Node.js Express server
CMD ["node", "server.js"]