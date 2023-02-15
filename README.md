# helloworldapp

The repo contains a sample node web app. Main file is app.js. It can be run by typing `node app.js` on the terminal. The app can be accessed via Browser hitting `localhost://3000`

## Dockerfile

Dockerfile consists the step to build a container image.

```
FROM node:16
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]
```

- The first line has to start with the FROM keyword. It tells docker, from which base image you want to base your image from. In our example, we are creating an image from the node image as we are building a node application.

- COPY command copies the code from source to destination. In our case the source is current directory and destination is the working directory of the container.

- The expose instruction informs Docker that the container listens on the specified network ports at runtime.

- The CMD command specifies the instruction that is to be executed when a Docker container starts.

## Deployment file

It conatins the details about where the container should run, the number of replicas, labels and seclectors associated with pods etc

## Service file

It helps expose the application to the outside world. Here the service type used is node port.

## Tekton folder

### Listner file

It describes the event listner, trigger and pipeline template.

### Pipeline file

It describes the tasks to be run in the pipeline.

### Taks file

It describes the code to be run during each task.


