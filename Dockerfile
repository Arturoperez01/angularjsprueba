# Create image based on the official Node 6 image from dockerhub
FROM node:9-alpine

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
ADD ./package.json /app

# Install dependecies
RUN npm install

# Expose the port the app runs in
EXPOSE 3000

# Link current folder to container
ADD . /app

# Serve the app
CMD ["npm", "start"]