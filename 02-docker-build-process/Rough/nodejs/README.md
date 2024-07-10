# Setup NodeJS in Docker

- Install Docker
- Install NodeJS
- `npm init -y`
- `npm install express`
- Create `Dockerfile`
- login to the docker hub - `docker login`
- Create Docker Image `docker build -t andepraveen/my-nodejs:0.0.1.RELEASE .`
- Run the Image - `docker container run -d -p 3000:3000 andepraveen/my-nodejs:0.0.1.RELEASE`
- Stop the container - `docker container stop andepraveen/my-nodejs:0.0.1.RELEASE`
- `docker push andepraveen/my-nodejs:0.0.1.RELEASE`
- pull from Hub - `docker pull andepraveen/my-nodejs:0.0.1.RELEASE`
