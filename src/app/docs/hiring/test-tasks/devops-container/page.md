---
title: DevOps Containers & CI/CD
nextjs:
  metadata:
    title: DevOps Containers & CI/CD
    description: DevOps Containers & CI/CD
---
  
## Prerequisites:
Create a repository in your Github account for the assignments, every assignment should be a pull request to the master/main branch in the repository. Expectation is that this repo will have 3 pull requests at the end of assignments.

## Containers & CI/CD
1. Write a Dockerfile and docker-compose file for Keycloak(https://github.com/keycloak/keycloak), ensure that docker-compose     setup is in working condition on your local machine for review call
2. Setup required dependencies like database via the docker-compose file
3. Code needs to go into the assignment repository
4. Setup a CI/CD pipeline for assignment repo
6. This pipeline should build the docker image for keycloak using the Dockerfile you have setup and then push it to your docker repository(You can use Jenkins or Github actions for the same)
7. Figure a way to expose this service over internet (Hint: use tunnels like Ngrok, to be showcased on call)
- Feel free to showcase Docker and CI/CD best practices for brownie points.
