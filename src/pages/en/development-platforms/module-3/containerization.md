---
title: Containerization
keywords: containerization
tags: containerization
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Containerization is a method of packaging software where an application and its dependencies are bundled together in a `container`. Containers provide a consistent and isolated environment for software to run, regardless of the underlying infrastructure. This allows for easier deployment and scaling of applications.

Imagine a digital child’s toy, for example, a video game console with an assortment of preloaded game files. Compare this with a modern game’s system that uses high-capacity discs to store key game files. In this analogy, the child’s toy represents a containerized application, and the game disc represents software delivered in a more traditional configuration. The child’s game does not require any additional hardware configuration to use; the game is ready to play because its environment is delivered along with the game file itself. On the other hand, possessing the wrong generation or brand of game system renders the game disc unplayable due to incompatibility or DRM.

A containerized application ships with all dependencies preinstalled and a runtime capable of handling the application. As this configuration data is stored in a static file, this environment can be endlessly recreated without variation.

## Brief history

Before containerization, software was typically deployed as a monolithic application. This meant that the entire application was packaged together in a single unit, which was then deployed to a server. This approach was simple and easy to manage but had several drawbacks. For example, if the application was written in a language not supported by the server or had dependencies that were not installed on the server, it would not be able to run. This meant that the application would have to be re-written or re-packaged to run on a particular server. This was a time-consuming and costly process, which was not scalable.

The history of containerization can be traced back to the early 2000s when the concept of "lightweight virtualization" was first proposed. In 2013, Docker, a popular open-source containerization platform, was released. This marked the beginning of the widespread adoption of containerization in the software industry. Since then, other containerization platforms have emerged, such as Kubernetes and Mesosphere. Containerization has become an essential tool in modern software development and deployment, especially in the field of microservices architecture.

Google created Kubernetes in 2014. It is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It is designed to work with Docker containers but can also be used with other containerization platforms. Kubernetes is a popular choice for container orchestration, as it is easy to use and provides a wide range of features.

Due to the significant advantages of containerization, it has become an essential tool in modern software development and deployment. It is especially useful in the field of microservices architecture, which is a popular approach to software development.

## Core principles

### Isolation

Containers provide a consistent and isolated environment for software to run, regardless of the underlying infrastructure. This means that the software will run the same way, whether deployed on a developer’s laptop, a testing environment, or a production server. This allows for greater consistency and predictability in the software’s behaviour.

### Portability

Containers can be easily moved between different environments, from development to production. This allows for greater flexibility in the software development process, as developers can easily test their code in different environments. Additionally, containers can be deployed to different cloud platforms, making it easy to move an application from one provider to another.

### Scalability

Containers can be easily added or removed to scale applications up or down as needed. This allows for greater efficiency and cost savings, as resources can be allocated dynamically as needed. Containers can be easily replicated and deployed on multiple machines to handle an increase in traffic.

### Microservices

Containers are often used in microservices architecture, where a single application will comprise of many smaller applications performing a specific role. This allows for greater flexibility and scalability, as each service can be developed, tested, and deployed independently. Additionally, it allows for easier fault isolation and faster development cycles.

### Orchestration

Managing and coordinating multiple containers can be a complex task, and container orchestration tools such as Kubernetes, Docker Swarm, and Mesosphere are often used to automate this process. These tools provide a centralised management interface for containers, allowing for automated deployment, scaling, and monitoring of containerized applications.

### Security

Containers provide a level of security by isolating the application and its dependencies from the host system. A security breach in one container should not affect the other containers running on the same host. Additionally, containers can make applying security updates and patches easier.

## A Docker example

TThe code samples below show a straightforward example of a containerized application using Docker. This application is a simple API that has a single endpoint written using NodeJS with ExpressJS.

`index.js`

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello, World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
```

`Dockerfile`

```docker
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]
```

`docker-compose.yml`

```yaml
version: "3"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    command: "node index.js"
```

These three files are enough to create a containerized application. The `Dockerfile` contains the instructions for building the container, and the `index.js` file contains the source code for the application. The `docker-compose.yml` file contains instructions for running the container.

The `Dockerfile` is a text file that contains a list of instructions for building the container. Each instruction in the `Dockerfile` creates a new layer in the container. The layers are created in the order they are written in the `Dockerfile`. This means that the first instruction in the `Dockerfile` will be executed first, and the last instruction will be executed last.

1. `FROM node:14` - This instruction specifies the base image that will be used to build the container. In this case, the base image is the official NodeJS image, version 14.
2. `WORKDIR /usr/src/app` - This instruction sets the working directory for the container. All subsequent instructions will be executed relative to this directory.
3. `COPY package*.json ./` - This instruction copies the `package.json` and `package-lock.json` files from the current directory to the working directory in the container.
4. `RUN npm install` - This instruction runs the `npm install` command to install the dependencies specified in the `package.json` file.
5. `COPY . .` - This instruction copies all files from the current directory to the working directory in the container.
6. `EXPOSE 3000` - This instruction exposes port 3000 on the container. This allows other containers to connect to this container on port 3000.
7. `CMD [ "node", "index.js" ]` - This instruction specifies the command that will be executed when the container starts. This is equivalent to running `node index.js` in the terminal.

Meanwhile, the `docker-compose.yml` file contains instructions for running the container. It is similar to the `Dockerfile` but is used to run containers rather than build them. In this file, we determine the specifics of how a container should run, such as how much memory or CPU it can access and which ports are mapped to which.

We can run our container without the `docker-compose.yml` file, but it is useful to have this file as it allows us to easily run the container in different environments. For example, we can run the container in development mode, which will map port 3000 on the container to port 3000 on the host. This allows us to access the application at `http://localhost:3000`. We can also run the container in production mode, which will map port 3000 on the container to port 80 on the host. This allows us to access the application at `http://localhost`.

If an application uses more than one container, then the `docker-compose.yml` file can be used to run multiple containers at the same time. This allows us to run the application in a production environment, where the application is split into multiple containers, each performing a specific role.

### Building a Docker image

To use this image to create a container, we first need to build the image. This can be done using the `docker build` command. The command below will build an image from the `Dockerfile` in the current directory and tag the image with the name `hello-world`.

```bash
docker build -t hello-world .
```

The `-t` flag is used to specify the name of the image. The `.` at the end of the command specifies the directory that contains the `Dockerfile`.

### Running a single Docker container

If we want to run our container on its own, without any other containers, then we can use the `docker run` command. The command below will run the `hello-world` image as a container and map port 3000 on the container to port 3000 on the host.

```bash
docker run -p 3000:3000 hello-world
```

The `-p` flag is used to map a port on the host to a port on the container. In this case, port 3000 on the host is mapped to port 3000 on the container.

### Composing a Docker application up

We can also run our container using the `docker-compose` command. The command below will run the `hello-world` image as a container and map port 3000 on the container to port 3000 on the host.

```bash
docker-compose up
```

This command will build and run the container using the configuration data specified in the `docker-compose.yml` file.

### Composing a Docker application down

If we want to stop the container, we can use the `docker-compose down` command. This will stop the container and remove it from the host.

```bash
docker-compose down
```

### Listing all Docker images

To list all images that are currently available on the host, we can use the `docker images` command. This will list all images, along with their ID, name, and size.

```bash
docker images
```

This will produce a table in the terminal that looks something like this:

```bash
REPOSITORY        TAG        IMAGE ID        CREATED        SIZE
hello-world       latest     4ab4c602aa5e    3 months ago   13.3MB
```

### Listing running Docker containers

To list all running containers, we can use the `docker ps` command. This will list all running containers, along with their ID, name, image, and ports.

```bash
docker ps
```

This will produce a table in the terminal that looks something like this:

```bash
CONTAINER ID        IMAGE        NAMES               ........         .......

b02459af2b9c        ......       hello-world         ........         .......
```

### Stopping a Docker container

We can use the `docker stop` command to stop a specific running container. The command below will stop the container with the ID `b02459af2b9c`.

```bash
docker stop b02459af2b9c
```

## Resources

- [Docker - get started](https://docs.docker.com/get-started/)
- [What are containers](https://cloud.google.com/learn/what-are-containers)
- [Play with Docker](https://www.docker.com/play-with-docker/)

### Reading list

- _Docker Deep Dive_ (by Nigel Poulton)
- _Docker in Action_ (by Jeff Nickoloff, Stephen Kuenzli)
- _Learn Docker in a Month of Lunches_ (by Elton Stoneman)
