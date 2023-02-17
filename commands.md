# Code repository
https://github.com/Afreen1998/hellloworldapp

# Build the image
docker build -t <IMAGE_NAME> <PATH_TO_DOCKER_FILE>
docker build -t helloworldapp .

# Run the image
docker run [OPTIONS] <IMAGE_NAME> [COMMAND] [ARG...]
docker run -d -p 5000:3000 helloworldapp

# Tag the image
docker tag helloworldapp us.icr.io/afrintest/helloworldapp

# Push the image
docker push us.icr.io/afrintest/helloworldapp

# Login to container registry
ibmcloud cr login

# Adding new namespace
ibmcloud cr namespace-add <my_namespace>

# List the namespace
ibmcloud cr namespace-list

# Login to cluster 
ibmcloud ks cluster login --sso

# Create a namespace
kubectl create namespace test

# Create a pull secret
kubectl --namespace test create secret docker-registry pull-secret --docker-server=us.icr.io --docker-username=iamapikey --docker-password=$api-key --docker-email=test@ibm.com


# Get secrets
kubectl get secrets -n test

# Apply deployment file
kubectl apply -f deployment.yaml

# Get deployments
kubectl get deployments -n test

# Get pods
kubectl get pods -n test

# Expose service
kubectl expose deployment helloworldapp --type=NodePort --name=helloworldapp -n test

# Apply service file
kubectl apply -f service.yaml

# Get the service
kubectl get service -n test

# List the worker nodes 
ibmcloud ks worker ls -c mycluster-free

# Scale the deployment
kubectl scale --replicas=2 deployment/helloworldapp -n test

# Access the application

http://159.122.174.143:30007