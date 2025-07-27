# Docker

<details>
<summary>Docker</summary>

## Index

- Introduction
- Terminology
- Docker Installation
- Docker Build Process
- Docker
- Documentation

</details>

---

<details>
<summary>Introduction</summary>

## Introduction

- Docker is a tool that puts your app and its dependencies into a box called a container. This container works the same on any computer.

- Docker is a containerization software.
- containerization means the process of executing application inside the container is called containerization.
- With Docker we can execute our application in any machine,
  we no need to bather about OS (windows / linux / mac) or any dependency versions, it run same way on every environment.

### without Docker

- You build the app on your computer.
- It works fine for you.
- But it doesn’t work on other computers.
- Why? Because other computers might not have the same tools — like the right operating system, libraries, software versions, ...etc that your app needs.

### with Docker

- You build the app and pack everything it needs into a container.
- That container runs the same way everywhere.
- No more "It works on my machine" issues.

</details>

---

<details>
<summary>Terminology</summary>

## Terminology

1. Virtualization

### 1. Virtualization

Running one operating system inside another operating system is called Virtualization.

### 2. Containerization

- A container is a box that holds your app and everything it needs.
- Containerization means running your app inside that box.
- Each container is like its own small computer (using Linux).
- This way, your app works the same on any computer.
  ![Containerization](./assets/01-introduction/01-containerization.jpg)

</details>

---

<details>
<summary>Docker Installation</summary>

## Docker Installation

1. Uninstall any previous Docker installation.
2. Enable virtualization on your machine.
   ![Enable Virtualization](./assets/02-setup/01-enable-virtualization.png)
3. Download and install Docker from Docker Hub. - [https://hub.docker.com/]
   ![Install Docker](./assets/02-setup/02-docker-install.png)
4. Check Docker Version
   ![Check Docker Version](./assets/02-setup/03-check-docker-version.png)
5. Enable necessary Windows features for Docker.
   ![Turn on Windows Features](./assets/02-setup/04-turn-windows-features.png)
6. Start the Docker
   ![Start the Docker](./assets/02-setup/05-start-docker.png)
7. Set Google & Cloudflare DNS for Wi-Fi

- Open PowerShell as Administrator, then run:

```powershell
netsh interface ipv4 set dns name="Wi-Fi" static 8.8.8.8
netsh interface ipv4 add dns name="Wi-Fi" 1.1.1.1 index=2
```

</details>

---

<details>
<summary>Docker Build Process</summary>

## Docker Build Process

1. Dockerfile -> It contains instructions to create Docker Image.
2. Docker Image -> It is a bundled package of your application that includes the code, libraries, and all necessary tools it needs to run, so it works the same on any computer.
3. Docker hub -> An online storage (like GitHub, but for images) where you can upload, download, and share Docker images.
   ![Docker Build Process](./assets/03-docker/01-docker-build-process.png)

</details>

---

<details>
<summary>Docker</summary>

## Docker

1. Images: Blueprints or templates used to create containers.
2. Containers: Running instances of images — they are isolated environments that execute your application.
3. Volumes: Persistent storage areas used by containers to store data, even after the container stops.

</details>

---

<details>
<summary>Documentation</summary>

## Documentation

- Official Docker Documentation: [https://docs.docker.com/reference/]
</details>
