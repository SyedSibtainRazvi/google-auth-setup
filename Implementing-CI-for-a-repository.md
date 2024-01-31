### Jenkins ### 
Jenkins is a self-contained, open source automation server which can be used to automate all sorts of tasks such as building, testing, and deploying software.

We have our Jenkins server setup at [http://build.codemancers.com:8080/](http://build.codemancers.com:8080/).
It already has Git plugin setup for the codemancers repositories to enable source code management. You'd just have to define the pipeline for the repository.

To create a continuous delivery pipeline:
* Open Blue Oceans to build a new visual pipeline.
* Give the necessary information of your repository.
* Use the visual tool to create new stages.

### Jenkins Pipeline ###
A Jenkins pipeline can have n numbers of named stages and each of these can have n steps. Stages imply things in the context of Build/Test/Deploy. 
Steps can be anything from the various options you get to choose from. So add the required steps to your stages and save them. This then gives you an option to commit the changes to a new branch or the master branch. (Never commit directly to master!)

A Jenkinsfile will be committed to the opted branch, which is simply a text file that defines the pipeline. This is checked into your source control, after which all further commits will be run through the pipeline.

It basically helps to implement the three stage continuous delivery pipeline. Here is a sample of what a Jenkinsfile will typically look like.

```
pipeline {
        agent any

        stages {
            stage('Build') {
                steps {
                    echo 'Building..'
                }
            }
            stage('Test') {
                steps {
                    echo 'Testing..'
                }
            }
            stage('Deploy') {
                steps {
                    echo 'Deploying....'
                }
            }
        }
    }
```

### Pipeline syntax ###
All declarative pipeline must be enclosed within a pipeline block.

****agent directive:**** The agent section specifies where the entire Pipeline, or a specific stage, will execute in the Jenkins environment depending on where the agent section is placed. 

****stages directive:**** Containing a sequence of one or more stage directives, the stages section is where the bulk of the "work" described by a Pipeline will be located. 

****steps directive:**** The steps section define a series of one or more steps to be executed in a given stage directive.

### Example ###
Here is a pipeline defined for a rails application. Jenkins have a number of plugins that we could use. Here we make use of shell steps 'sh', which assumes the system is Unix/Linux based.
```
pipeline {
  agent any
  stages {
    stage("Build") {
      steps {
        sh '''#!/bin/bash
        set -e
        echo "Starting sampleApp build script"
        bundle install --path vendor/bundle
        echo "Completed sampleApp build script"'''
      }
    }
    stage("Test") {
      steps {
        sh '''#!/bin/bash
        set -e
        echo "Starting sampleApp test script"
        export RAILS_ENV=test
        bundle exec rake db:test:prepare
        bundle exec rspec
        echo "Completed sampleApp test script"'''
      }
    }
    stage("Deploy") {
      when {
        branch 'master'
      }
      steps {
        sh '''#!/bin/bash
          set -e
          echo "Starting sampleApp Deploy"
          echo "Checking if remote exists"
          if ! git ls-remote heroku; then
            echo "Adding heroku remote"
            heroku git:remote -a sampleapp
          fi
          echo "Starting push to heroku"
          git push heroku origin/master:master
          echo "Heroku push completed"
          echo "Starting migration"
          heroku run rails db:migrate
          echo "Completed running migrations"
          echo "Completed sampleApp Deploy"
        '''
      }
    }
  }
}
```

There are many other things you could define using a Jenkinsfile. Do refer the [Jenkins documentation](https://jenkins.io/doc/) for more information.
