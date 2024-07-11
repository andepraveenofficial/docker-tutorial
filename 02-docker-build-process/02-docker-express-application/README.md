# Docker Express Application

### 1. development simple Express application

- Setup Node Environment
- write express code

### 2. Write Dockerfile

```Dockerfile

# Base Image -> NodeJS Environment
FROM node:alpine

# Set the working directory where all the commands run and where the application will run
WORKDIR /app

# Copy package.json to the working directory.
COPY package*.json ./

# It is used to execute instructions while creating docker image.
RUN npm install

# copies all the remaining application files from your local machine to the working directory
COPY . .

#  run the application on 3000 -> understanding purpose
EXPOSE 5000

# It is used to execute instructions while creating docker container.
CMD ["npm", "start"]

```

### 3. ignore files

- create `.dockerignore` to avoid node_modules folder

### 4. create Docker Image

- Create Docker Image in the current working directory.
- `docker build -t <image_name>:<version> . `
- Ex : `docker build -t andepraveen/express:one .`

### 5. Create Container and Run The Application

- `docker run -d -p 5000:5000 --name my-express-one andepraveen/express:one`

### 5. Store Docker Image in DockerHub

- `docker login` - Login into Your Docker hub Account
- `docker push <image_name>`
- `docker push andepraveen/express:one` - it stores in the Docker hub
