# Docker Cheat Sheet

## Installation

Docker Desktop is available for Mac, Linux and Windows
https://docs.docker.com/desktop

View example projects that use Docker
https://github.com/docker/awesome-compose

Check out our docs for information on using Docker
https://docs.docker.com

## Images

Docker images are a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

| Command | Description |
|---|---|
| `docker build -t <image_name> .` | Build an image from a Dockerfile |
| `docker build -t <image_name> . --no-cache` | Build an image from a Dockerfile without the cache |
| `docker images` | List local images |
| `docker rmi <image_name>` | Delete an image |
| `docker image prune` | Remove all unused images |

## Docker Hub

Docker Hub is a service provided by Docker for finding and sharing container images with your team. Learn more and find images at https://hub.docker.com

| Command | Description |
|---|---|
| `docker login -u <username>` | Log in to Docker |
| `docker push <username>/<image_name>` | Publish an image to Docker Hub |
| `docker search <image_name>` | Search Hub for an image |
| `docker pull <image_name>` | Pull an image from Docker Hub |

## General Commands

| Command | Description |
|---|---|
| `docker -d` | Start the Docker daemon |
| `docker --help` | Get help with Docker (also works as `--help` on any subcommand) |
| `docker info` | Display system-wide information |

## Containers

A container is a runtime instance of a Docker image. A container will always run the same, regardless of the infrastructure. Containers isolate software from its environment and ensure that it works uniformly despite differences, for instance, between development and staging.

| Command | Description |
|---|---|
| `docker run --name <container_name> <image_name>` | Create and run a container from an image, with a custom name |
| `docker run -p <host_port>:<container_port> <image_name>` | Run a container and publish a container's port(s) to the host |
| `docker run -d <image_name>` | Run a container in the background |
| `docker start\|stop <container_name>` | Start or stop an existing container (name or container ID) |
| `docker rm <container_name>` | Remove a stopped container |
| `docker exec -it <container_name> sh` | Open a shell inside a running container |
| `docker logs -f <container_name>` | Fetch and follow the logs of a container |
| `docker inspect <container_name>` | Inspect a running container (name or container ID) |
| `docker ps` | List currently running containers |
| `docker ps --all` | List all containers (running and stopped) |
| `docker container stats` | View resource usage stats |
