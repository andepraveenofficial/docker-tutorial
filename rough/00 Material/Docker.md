# Docker

<details>
<summary>Index</summary>

## Index

- Docker Build Process
- Docker Commands
- Dockerfile
- yaml
- Docker Compose

</details>

---

<details>
<summary>Dockerfile</summary>

### Dockerfile

- Dockerfile keywords
  - FROM
  - MAINTAINER
  - COPY
  - RUN
  - CMD
  - EXPOSE
  - WORKDIR
  - ENTRYPOINT

### Dockerfile keyword

- WORKDIR : It is used to specify working directory (path change).
  Ex : `WORKDIR /user/app`

### 2. Docker Image

- `docker build -t <image_name> . ` -> dot is the current working directory
- Ex : `docker build -t app1 .` - **-t** means tagName
- `docker build -t <image_name> -f <file_name>` - if docker file name is other than Dockerfile
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

### Run Docker Application

1. `git clone <repo>`
2. `cd <dir_name>`
3. `docker build -t <docker_image>`
4. `docker images` - check docker image
5. `docker run -d -p 5000:5000 <docker_image>`

</details>

---

<details>
<summary>yaml</summary>

## yaml

- **yaml** stands for **Ain't Markup Language**
- YAML is a human-readable data serialization language that is often used for writing configuration files.
- YAML is a superset of JSON, which means that any valid JSON document is also a valid

### yaml docs

https://docs.ansible.com/ansible/latest/playbook_guide/playbooks.html#working-with-playbooks

### Write yaml file

- fileName.yaml
- yaml uses Indentation
- with indentation we can create object (`key:value`)

</details>

---

<details>
<summary>Docker Compose</summary>

## Docker Compose

- It is used to manage multi container based applications.
- when we are working with microservices based app we will have multiple services. Every service will have its own docker image.
- To work with docker compose we need to create docker-compose.yaml file.

### write docker-compose

- Write Docker Compose file - use yaml
- Run Docker Compose file `docker-compose -f fileName.yaml up`

### Without Docker Compose

- every thing you need to do manually, lot of time consuming.
- we create and run all containers individually.

```Dockerfile
docker run -d -p 8080:8080 --name hotels <image_name>
docker run -d -p 8080:8080 --name flights <image_name>
docker run -d -p 8080:8080 --name trains <image_name>
docker run -d -p 8080:8080 --name cabs <image_name>
```

### Docker Compose

- Docker Compose is used to manage multiple docker containers.

- we can start the multiple containers at a time.
- we can stop the multiple containers at a time.

* `docker-compose up` - it creates multiple containers at a time
* `docker-compose down` - it delete multiple containers at a time

- when we are working with microservices based app we will have multiple services. Every service will have its own docker image.

### create docker-compose

- src -> source code of the project
- pom -> libraries information
- Dockerfile -> Dependencies
- docker-compose -> containers information

* `docker-compose build` These are created the images
* `docker-compose up` It will read docker-compose yaml then it creates containers according to 'docker-compose.yaml'
* `docker-compose up -d` creates containers in the detached mode
* `docker-compose down` stops and removes all containers defined in your docker-compose.yml.

* `docker-compose down && docker-compose build && docker-compose up -d` - run all the commands

### steps to write docker-compose file

1. version
2. services
   1. service_name
      1. depends_on
      2. environment
      3. build
      4. restart
      5. container_name
      6. ports
      7. healthCheck
      8. network
      9. volumes
3. networks
   1. commonNetwork
      - `driver: bridge`
4. volumes
   - db_database

```py
version: "3.8"

services:

  # 01 Database Server
  db: # Defines the 'db' service for MySQL database
    image: mysql:8.0 # Uses the MySQL 8.0 Docker image
    container_name: db
    environment: # Sets environment variables for the database configuration
      - MYSQL_USER=database # username
      - MYSQL_PASSWORD=pass123 # Sets the password for the MySQL user
      - MYSQL_DATABASE=appdb # Specifies the name of the database
      - MYSQL_ROOT_PASSWORD=pass123 # Sets the root password for MySQL
    ports:
      - 3307:3306 # Maps the container's port 3306 to the host's port 3307
    networks:
      - sameNetworkAsMysql # Connects the service to the 'sameNetworkAsMysql' network
    volumes:
      - db_data:/var/lib/mysql

  # 02 Backend Server
  api: # Defines the 'api' service for the backend API
    depends_on:
      - db # Specifies that the 'api' service depends on the 'db' service
    environment:
      - DB_HOST=db
      - DB_USER=database
      - DB_PASSWORD=pass123
      - DB_NAME=appdb
      - DB_PORT=3306
    build: # Builds the backend API using the provided Dockerfile
      context: ./backend # Specifies the build context directory for the backend
      dockerfile: Dockerfile # Specifies the Dockerfile to use for building the backend
    restart: on-failure # Restarts the container if it fails
    container_name: api
    ports:
      - 5000:5000 # Maps the container's port 3000 to the host's port 3000
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:5000/"]  # Adjust your backend health endpoint
      interval: 10s
      retries: 5
    networks:
      - sameNetworkAsMysql # Connects the service to the 'sameNetworkAsMysql' network

  # 03 Frontend Server
  frontend: # Defines the 'frontend' service for the frontend app
    depends_on:
      api: # Specifies that the 'frontend' service depends on the 'api' service
        condition: service_healthy  # Wait until the backend service is healthy
    build: # Builds the frontend app using the provided Dockerfile
      context: ./frontend # Specifies the build context directory for the frontend
    restart: on-failure # Restarts the container if it fails
    container_name: frontend
    ports:
      - 3000:3000 # Maps the container's port 3000 to the host's port 3001
    networks:
      - sameNetworkAsMysql # Connects the service to the 'sameNetworkAsMysql' network

networks:
  sameNetworkAsMysql: # Defines the 'sameNetworkAsMysql' network
    driver: bridge # Specifies the network driver as 'bridge'

volumes:
  db_data:

```

### Execute the docker-compose file

1. kill the running ports that are using in docker-compose
2. docker-compose up --build
</details>

---

<details>
<summary>Docker Debugging</summary>

## Docker Debugging

### Open docker Container shell

- `docker ps` - show running containers
- `docker exec -it <container_name_or_id> /bin/bash`
</details>

---
