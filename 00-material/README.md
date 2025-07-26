# Docker

<details>
<summary>Docker</summary>

## Index

- Introduction
- Terminology
- Docker Installation
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

</details>

---

<details>
<summary>Documentation</summary>

## Documentation

- Official Docker Documentation: [https://docs.docker.com/reference/]
</details>
