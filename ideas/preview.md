# Preview environments

Disposable environments, or preview environments have become a standard across all
the leading PaaS, like Heroku, Netlify, Vercel etc. They really shine in testing
the changes quickly and deploying those changes. However, having those preview
environments on AWS/GCP/Azure is not easy. We need a way to provison them and then
setup auto deploys. Setting up auto deploys is part of continuous deployments.
What is actually needed is: Way to compose several apps and tie them together

## `preview` command

Enter `preview` command. I feel this command can be powerful, just like `docker`.
The idea is to provide a bunch of primitives so that preview environments can be
provisioned and deployed. Some ideas around this command are as follows

## `preview accounts`

This command helps in setting up accounts. Any account, ie AWS, GCP or Azure can
be added by providing their credentials

```sh
$ preview accounts list  # lists accounts added
$ preview accounts add --provider=aws --key=<key> --id=<id> --secret=<secret>
$ preview accounts delete <account-id>
```

## `preview deploy`

This command will do all the heavy lifting. There are 2 main steps here that will
happen automatically:

- Provisioning: Behind the scenes, this command will use some IaaC tools like
  Terraform or Pulumi or CDK to manage provisioning. State will be stored in
  Dynamo db and S3 or other equivalents. This command will also figure out
  the type of application and automatically provision required resources. Say,
  if the app is a backend application, this command will setup ECR. Say if the
  app is a frontend application, this command will setup S3 + CloudFront.
- Deployment: This command will also deploy the app. Deployment logs will be
  tailed and the output will contain the exposed url if any along with the app
  identifier. Applications can be listed out separately.

```sh
$ preview deploy
$ preview deploy --url=<url-of-your-choice>
```

## `preview apps`

This command will help in managing all the applications deployed by `preview`
command.

```sh
$ preview apps list
$ preview apps delete <app-id>
```

## `preview bind`

This command helps in binding 2 applications together. This is very crucial, if
the applications are dependent on other preview applications. This can also
prevents deletion of dependent applications

```sh
$ preview bind add <app1-id> --dependency=<app2-id>
$ preview bind remove <app1-id> --dependency=<app2-id>
$ preview bind list <app1-id>
```

## `preview secrets`

This command will manage secrets. It will use AWS secret manager, or Vault.
Commands are yet to be finalized

## `preview convo`

This command will introduce LLM to the preview command. On calling this command,
a prompt will be started where a user can ask questions. Need to be hashed out
better

```sh
$ preview convo
> What is the nature of this app? Is it backend or frontend?

> I need a new preview for this app. How can I do it?

> Can you do it for me?

> How many preview envs are there for this app?

> What are the dependent apps for this app?

> Deploy this app and tie it with git@github.com/code-mancers/wiki

> Destroy all the preview environments

> Upgrade Rails and create a preview environment
```

There can be other questions as well. The basic idea is to give an interactive
environment where user can go wild.

## `Previewfile`

Something similar to Dockerfile. Not sure if this is a good idea. This will
overlap a lot with docker-compose
