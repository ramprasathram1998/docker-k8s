## RECAP:
- Container - Isolation of Process with its own unique Filesystem, Networking
- Container vs Virtual Machine
- Different - OS | ENVIRONMENT | VERSIONS | SERVICES | DATA CENTERS | 


## DOCKERFILES && IMAGE:

**DockerFiles**
- configuration to Package our App
- Configurations Such as -  BaseImage | Commands to Initialize | EntryPoints etc..

**Image**
- Package | Templates | Snapshots
- Contains -	Source Code | Dependecies | Library
- Save each command as Layer 
- Cache Each Layer
- Reuse it in every Build, if no changes
- Parent Image - Image which Our App Image Based on
- Base Image  - Image Which Parent Image Based on.

**To build an Image:**

```
docker build -t <IMAGE_NAME>:<TAG_NAME> -f <Dockerfile Path> <Context Path>

docker build -t docker-session:basic -f dockerfiles/basic .
```

**Provide Dynamic Values**
- Declare ARG in dockerFile (like ARG KEY=VALUE).
- Use it wherever needs by Prefix $ (like $IMAGE_NAME).
- Pass ARG by using --build-arg command.

`
docker build -t docker-session:dynamic -f dockerFiles/dynamicValuesByArg --build-arg PARENT_IMAGE=node:15.0.0 .
`


## DOCKER && CONTAINER:

- Container Runtime Engine
- Provide Set of commands to Handle Containers


**To run Container:**

```
docker run <OPTIONS > <IMAGE_NAME>

docker run -dp 9092:9091 docker-session:basic
```


**To create Volume:**

- To persist data | DB
- Mount Container files to Host Machine
- Types - Named Volume | Bind Mount

*Named Volume:*
- Mount to location(/var/lib/....)
- Cannot Provide specific location to Store data

```
docker volume create <VOLUME_NAME>

docker volume create apiStatus
```

**To use Volume**

```
docker run -v <VOLUME_NAME>:<PATH TO PERSIST> <IMAGE_NAME>`

docker run -dp 9091:9091 -v apiStatus:/docker_basics/data docker-session:persistence

```

**To Use Bind Mount**

*Bind Mount:*
 - Can provide specific location to Store data
 - Useful in development Mode

```
docker run <OPTIONS> <IMAGE_NAME>

docker run -p 9091:9091 \
	--env PORT=9091  \
	-w /docker_basics \
	-v "$(pwd):/docker_basics" \
	node:14.5.0-alpine \
	sh -c "npm install && npm run bindMount"
```

## To be Continued:
- Docker Network
- Docker compose
