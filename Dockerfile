# Build on top of a Node.js + npm image.
FROM node:lts

# Make a codebase directory and work in it
RUN mkdir codebase
WORKDIR /codebase

# Load the package.json and package-lock.json files
COPY package*.json /codebase

# Install packages
RUN npm install
RUN npm install -g @vue/cli

# Copy over all project files to container
COPY . /codebase

# Review needed
EXPOSE 8080
RUN npm run serve:website