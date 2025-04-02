<h1 style="text-align: center;">CI/CD Demo</h1>

| Backend Build | Quality gate | Coverage |
| :---: | :----: | :------: | 
| ![Backend Build](https://github.com/StanYorgov/ci-demo/actions/workflows/build-backend.yml/badge.svg?branch=main) | [![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=fdiba-ci-demo-backend)](https://sonarcloud.io/summary/new_code?id=fdiba-ci-demo-backend)| [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=fdiba-ci-demo-backend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=fdiba-ci-demo-backend)|

## Introduction to GitHub Actions
GitHub Actions is a CI/CD platform that enables automation of software workflows directly within GitHub repositories. It can be used for building, testing, and deploying code.

## Workflow syntax
The workflows are stored in the `.github/workflows/` directory in your repo. They are defined with YAML files and must have `.yml` or `.yaml` as file extension.

`name:` - the display name of your workflow.

`on:` - define a trigger for your workflow. It can be automatically triggered by an event, such as push to a branch or PR creation. Alternatively, you can start it manually with a button press in the Actions console (`workflow_dispatch`).

`jobs:` -  contains a series of steps that execute commands or actions.

`runs-on:` - specifies the type of VM (runner) to run the job on, such as Ubuntu, Mac, Windows.

`steps:` - sequence of tasks to be executed as part of a job. Can be single action or a script.

`needs:` - dependencies between jobs, ensuring that a job waits for the completion of the jobs it depends on.

`uses:` - selects a reusable action to run as a step. It can be from the same repository, a public repository, or a Docker container.

`run:` - executes command-line programs using the operating system's shell within the runner environment, ex. bash in Linux.

`working-directory:` - sets the current directory for the commands in a step, so `cd` is not needed.

`if:` - conditional statement that determines whether a step should run based on the evaluation of an expression.

## Reusable actions
Resuable actions are a set of jobs and steps that can be called from other workflows, in order to follow the DRY principle, avoid duplication and make maintenance easier. They can accept inputs and return outputs to pass data back to the calling workflow and can be triggered using the `workflow_call` event.

Official actions, maintained by GitHub: https://github.com/actions. Some of them are:
- actions/checkout

- actions/setup-{node / java / go / ...}

- actions/cache

- actions/upload-artifact

- actions/download-artifact

Marketplace for actions: https://github.com/marketplace?type=actions

## Runners
Runners are the VMs which execute jobs. They can GitHub managed or self-hosted.


[About GitHub-hosted runners](https://docs.github.com/en/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories)

## Secrets and variables
Secrets are used to store sensitive information such as API keys, tokens, and passwords. They are encrypted and can be accessed within workflows using the secrets context. The sensitive data is not exposed in logs.<br />
Example: `${{ secrets.SOME_SECRET }}`

Variables store non-sensitive configuration data, such as environment settings or server names.<br />
Example: `${{ variables.JUST_A_VAR_NOTHING_CONFIDENTIAL }}`

Secrets are never displayed in the GitHub interface or logs once set, while variables are always visible and can be edited.

## Most common scenarios
### On event PR opened / updated:
Lint -> Static code analysis -> Test
### On merge to main branch:
Lint -> Static code analysis -> Test -> Build artifact -> Upload artifact
### On manual trigger (if GitOps is not implemented):
Deploy an artifact with a given tag.
