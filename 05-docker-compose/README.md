# Docker Compose

- It is used to manage multi container based applications.
- when we are working with microservices based app we will have multiple services. Every service will have its own docker image.
- To work with docker compose we need to create docker-compose.yaml file.

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

* First create images
* `docker-compose up` It will read docker-compose yaml the it creates containers according to docker-compose yaml
* `docker-compose down` delete the containers

* detached mode - `docker-compose up -d`
