---
title: DevOps Kubernetes
nextjs:
  metadata:
    title: DevOps Kubernetes
    description: DevOps Kubernetes
---

## Prerequisites:
Create a repository in your Github account for the assignments, every assignment should be a pull request to the master/main branch in the repository. Expectation is that this repo will have 3 pull requests at the end of assignments.

1. Once above process is complete setup Kubernetes cluster on local machine using Minikube, Kind, Docker Kubernetes, etc (You can even use cloud based kubernetes cluster in case available under free tier or available with free credits)
2. Now deploy the Keycloak application on Kubernetes cluster, ensure all required manifests like deployment, replicas, pods, services are setup as needed
3. Code needs to be pushed to Github repository as a Pull Request
4. Figure a way to expose this service over internet, the keycloak deployed on the local cluster should be available on internet(Hint: use tunnels like Ngrok, to be showcased on call)
- Feel free to showcase kubernetes best practices for brownie points