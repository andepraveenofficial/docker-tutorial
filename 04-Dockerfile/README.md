# Dockerfile

- we write some instructions to build Docker image.
- Dockerfile is used to specify dependencies are required for the application.

* **Dockerfile -> Docker Image -> Docker Registry**

### Steps :

1. Dockerfile
2. Docker Image
3. Docker Registry
4. Docker Container

---

### Dockerfile

- It contains instructions to build image.
- we will specify application dependencies here.
- Dockerfile keywords
  - FROM
  - MAINTAINER
  - COPY
  - RUN
  - CMD
  - EXPOSE
  - WORKDIR
  - ENTRYPOINT

### Dockerfile keywords

- FROM : Every dockerfile starts with `FROM` keyword.
  It is used to specify base image required for our application. The software (dependency) is required to run our code.
  Ex : `FROM : node` , `FROM : mysql`, `FROM : python`

- MAINTAINER : It is used to specify author of Dockerfile.
  EX : `MAINTAINER <andepraveen>`

- COPY : It is used to copy the files from host machine to container machine.
  EX : `COPY <src> <des>`
  EX : `COPY target/app.war /user/app/node/webapp.war`

- RUN : It is used to execute instructions while creating docker image.
  EX :`RUN git clone <url>`
  EX :`RUN git clone <url>`

  Note : We can run write multiple RUN instructions in Dockerfile and they will be processed from top to bottom.

- CMD : It is used to execute instructions while creating docker container. Here overriding possible.

EX : `CMD npm install`

Note : If we write multiple CMD instructions docker will process only last CMD instruction.

- ENTRYPOINT : - CMD : It is used to execute instructions while creating docker container. Here, overriding not possible.
  EX : `ENTRYPOINT npm install`

- EXPOSE : It is used to specify container port number. It is just readability and documentation purpose.
  EX : `EXPOSE 8080`

- WORKDIR : It is used to specify working directory (path change).
  Ex : `WORKDIR /user/app`

### 1. Dockerfile

- Docker file is used to build an image

* Naming Convention : Dockerfile
* Write Dockerfile

```dockerfile

# sample Dockerfile
FROM node:22-alpine3.19
MAINTAINER <andepraveen>
RUN 'echo run msg - 1'
RUN 'echo run msg - 2'
CMD 'echo cmd msg - 1'
CMD 'echo cmd msg - 2'
```

### 2. Docker Image

- `docker build -t <image_name> . ` -> dot is the current working directory
- Ex : `docker build -t app1 .`
- `docker build -t <image_name> -f <file_name>`
- Ex : `docker build -t app2 -f praveenDockerfile`

### 3. Docker Container

- Run the Container
- `docker run app1`

### 4. Docker Registry

- Create Docker Image - `docker build -t andepraveen/app1 .`
- `docker login` - Login into Your Docker hub Account
- `docker push andepraveen/app1` - it store in the Docker hub
- use tagnames
  - `andepraveen/app:v1`
  - `andepraveen/app:0.0.1`
  - `andepraveen/app:latest`
