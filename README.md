# spike-kubctl-scaling
Spike to test auto scaling of the pods

# 1. Created a node app which simply returns the request body as it is
Simple index.js file

# 2. Added docker container config
Nothing fancy here node container simple install and start

# 3. Added github action to publish the container
Github action builds and uploads the container image to the github container registry

# 4. Added K8s deployment config
I am using colima cluster but feel free to used anything you'd like since rest of the commands are just kubectl commands.
```
colima start --with-kubernetes
```

```
kubectl apply -f ./k8s-deployment-config/deployment.yml
```