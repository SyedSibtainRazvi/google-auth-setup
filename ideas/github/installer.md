# Installer

Github gives out of box actions that can be added to the repository. This installer
feature is already available, but it is not context aware. It will be nice to have
a kit which has all the best practices baked in. With a simple command, it should
be able to install all required yaml files.

## Rails example

Say, there is a Rails app, bare necessities are:

- CI - Tests - Rspec/Minitest
- CI - Run bullet gem
- CI - Run rubocop
- CD - Deploy to Heroku
- CD - Deploy to AWS
- CD - Deploy to Kubernetes
- CD - Release mailer

## React example

For react it would be:

- CI - Tests - Jest
- CI - Run eslint
- CI - Run tsc
- CD - Deploy to Netlify
- CD - Deploy to Vercel
- CD - Deploy to AWS
- CD - Release mailer

## Usage example

CLI can be in this form:

```sh
> ./installer ci
Detected Rails app...
Detected Rspec
Failed to detect rspec action. Install? Y/n
Failed to detect bullet action. Install? Y/n
Failed to detect rubocop action. Install? Y/n

> ./installer ci
Detected Rails app...
Detected Sidekiq
Failed to detect Dockerfile. Use buildkit? Y/n
Do you want to deploy to AWS? Y/n
```
