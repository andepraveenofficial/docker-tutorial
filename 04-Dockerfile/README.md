# Dockerfile

- Dockerfile is a text file that contains commands to build a Docker image.
- ![Dockerfile](./assets/01-dockerfile.png)

### Flow

- Dockerfile -> Docker Image -> Docker Registry

### Dockerfile

- Dockerfile contains instructions to create a Docker image.
- Naming Convention: `Dockerfile`

### Dockerfile Commands

1. FROM
2. MAINTAINER
3. COPY
4. RUN
5. CMD
6. ENTRYPOINT
7. EXPOSE
8. WORKDIR

### 1. FROM

- Every Dockerfile starts with a `FROM` command.
- It is used to specify the base image required for our application.
- Ex : `FROM node`, `FROM postgresql`, `FROM redis`, `FROM kafka`

### 2. MAINTAINER

- The `MAINTAINER` instruction is used to specify the maintainer of the Dockerfile.
- Ex : `LABEL MAINTAINER <name>`

### 3. COPY

- The `COPY` instruction is used to copy files or directories from the host machine to the container.
- Ex : `COPY <src> <dest>`
- Ex : `COPY . .`

### 4. RUN

- The `RUN` instruction is used to execute commands in the container during the image build process.
- EX :`RUN npm install`
- Note : We can run write multiple RUN instructions in Dockerfile.

### 5. CMD

- `CMD` command runs when the container starts.
- Ex : `CMD ["node", "app.js"]`
- Note : If we write multiple CMD instructions docker will process only last CMD instruction.

### 6. ENTRYPOINT

- The `ENTRYPOINT` instruction is used to configure a container that will run as an executable.
- Ex : `ENTRYPOINT ["node", "app.js"]`
- Note : If we write multiple ENTRYPOINT instructions docker will process only last ENTRYPOINT instruction.

### 7. EXPOSE

- It is used to specify container port number. It is just readability and documentation purpose.
  EX : `EXPOSE 8080`

### 8. WORKDIR

- The `WORKDIR` instruction sets the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, and `ADD` instructions that follow it in the Dockerfile.
- Ex : `WORKDIR /app`

### Example Dockerfile

```Dockerfile
FROM node:alpine:3.21
LABEL MAINTAINER="Ande Praveen"
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 5000
```

### Build and Run Dockerfile

- `docker build -t <tag_name> .`

- `.` indicates the current directory where the Dockerfile is located.
- `t` flag is a tag name.

```bash
# Build the Docker image
docker build -t app1 .
```

- if docker file name is other than Dockerfile
- Ex : `docker build -t app2 -f praveenDockerfile`

- run Docker Image : `docker run -d -p 5000:5000 --name <custom_container_name> <docker_image_id>`

### Docker Registry

- Create Docker Image - `docker build -t andepraveen/app1 .`
- `docker login` - Login into Your Docker hub Account
- `docker push andepraveen/app1` - it store in the Docker hub
- use tagnames
  - `andepraveen/app:v1`
  - `andepraveen/app:0.0.1`
  - `andepraveen/app:latest`
