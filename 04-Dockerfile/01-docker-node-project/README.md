# node project

## Dependencies

- node

### Steps

- Create basic setup of node Application
- write Dockerfile
- Create Image and check
- push Image to Docker hub
- push code to github

### Start the Application

- `npm start`

### Dockerfile

```dockerfile

# Base Image -> NodeJS Environment
FROM node:latest

# set working directory where all the commands run
WORKDIR /app

# Copy package.json to the working directory.
COPY package*.json ./
RUN npm install

# copies all the remaining application files from your local machine to the working directory
COPY . .
EXPOSE 3000

# command to run when the container starts
CMD ["npm", "start"]

```
