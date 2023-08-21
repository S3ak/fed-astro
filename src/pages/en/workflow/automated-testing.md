---
title: Automated Testing
keywords: workflow
tags: Workflow
layout: ../../../layouts/MainLayout.astro
---

## Introduction

So far we have been introduced to `unit` and `e2e` testing paradigms, however we have not discussed _when_ we should run our tests. Remembering to do this manually as we work is not reliable, as one mistake could result in faulty code being added to our repository. In this lesson we will cover automating our tests so that they run for us at helpful times in our process.

> Select a project where you have setup both Jest and Cypress tests. A simple Jest unit test and the provided Cypress examples are enough to proceed.

Create a new branch called `automated-testing`.

## Configuring your project

In order to use both `Jest` and `Cypress` in the same project, we will need to merge the two `.eslintrc.json` files together:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "files": ["**/*.cy.js"],
      "env": { "cypress/globals": true },
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "rules": {
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off"
      }
    },
    {
      "files": ["**/*.test.js"],
      "env": { "jest": true },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": { "jest/prefer-expect-assertions": "off" }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

We should also make sure that our `package.json` file is up to date:

```json
{
  "scripts": {
    "test": "npm run test-unit && npm run test-e2e-cli",
    "test-unit": "jest",
    "test-e2e": "cypress open",
    "test-e2e-cli": "cypress run"
  }
}
```

Try the `npm test` command out to make sure the tests are passing.

## Testing on Pull Request

Since we have created tests for a project, it makes sense to require that these tests pass on any new code that is due to be merged into the default branch. We can use GitHub Actions and settings to prevent a Pull Request that does not pass our tests.

> If you have not completed the lesson on [GitHub Actions](/workflow/intro-to-actions.html), please do so before continuing.

Let's create a new Action by heading to your project repository page on GitHub, selecting "Actions" and "New Workflow". Next click "set up a workflow yourself" to open a blank `YAML` file. Name this file `/unit-test.yml` and add the following content:

```yml
name: Automated Unit Testing
on:
  - pull_request
  - workflow_dispatch

jobs:
  run-unit-tests:
    name: Run Unit Tests
    runs-on: ubuntu-latest

    steps:
      - name: Checkout under $GITHUB_WORKSPACE
        uses: actions/checkout@main

      - name: Set up NodeJS
        uses: actions/setup-node@v1
        with:
          node-version: 16

      - name: Install all dependencies
        run: npm install

      - name: Run Tests
        run: npm run test-unit
```

This will run our unit tests, but for e2e tests we should take a slightly different approach to minimise the server resources required to test this change. Instead of running our `npm` script as above, we will use the official action from `cypress.io`. Create a new file in the workflow folder called `e2e-test.yml` with the following content:

```yml
name: Automated E2E Testing
on:
  - pull_request
  - workflow_dispatch

jobs:
  run-e2e-tests:
    name: Run E2E Tests
    runs-on: ubuntu-latest
    steps:
      - name: Checkout under $GITHUB_WORKSPACE
        uses: actions/checkout@main

      - name: run cypress tests with electron
        uses: cypress-io/github-action@v4
        with:
          browser: electron
```

Commit this file

Together these actions will run every time we create a Pull Request. We can run this suite by creating a new branch, making a change, committing and completing a PR into the default branch.

Run each of these workflows manually before moving to the next step using the manual trigger.

## Guarding Pull Requests

Now that our test workflow is working correctly, we can force GitHub to wait for these tests to run before allowing the completion of a PR. This means that it will be impossible to merge code that does not meet the requirements of the provided tests.

Navigate to your repository settings in GitHub and select "Branches". If you have not already setup branch protection rules, you will see this empty page:

![No branch protection rules defined yet.](/images/workflow/testing/branch-protection.png)

Click on the "Add rule" button to proceed:

![New branch protection rule](/images/workflow/testing/add-rule.png)

Enter the name of your default branch here (`master` or `main`).

Next, read through the options below. We will be setting the following:

- Require a pull request before merging
- Require status checks before merging
  - Require branches to be up to date before merging
  - Search for `Run Unit Tests` status check and select this
  - Search for `Run E2E Tests` status check and select this
- Require conversation resolution before merging
- Do not allow bypassing the above settings

Together these settings should look like this:

![Completed Branch Protection Rule](/images/workflow/testing/branch-protection-config.png)

Save this change and initiate a new Pull Request to view this status check in action:

![Status Check](/images/workflow/testing/status-check.png)

![Checks passing](/images/workflow/testing/checks-passing.png)

## Displaying Test Status with Badges

You can add a dynamic status badge showing the status of a particular branch by visiting Actions page, manually triggering a test run for both `e2e` and `unit tests` and selecting "Create Status Badge" from the menu in the top right corner:

![Create Badge](/images/workflow/testing/badge.png)

Proceed with this to view the `markdown` for this badge:

![Badge Markdown](/images/workflow/testing/badge-markdown.png)

Copy this markdown text and create a new branch to add this to the `readme.md` file.

Open a Pull Request and merge this change. To test that this has worked, visit the homepage for your repository and look for the status badges. If there are problems with your repository, they will be marked as failing. If they are healthy, they will be marked as passing.

## Lesson Task

Using a repository that has either unit testing, e2e testing or both configured already - protect the main branch using the steps above.

Consider your test coverage to ensure that you are testing important aspects of the code. Review the runs section of GitHub actions to explore what went wrong in failing tests, and how these issues can be resolved.

## Additional resources

- [Cypress Actions](https://docs.cypress.io/guides/continuous-integration/github-actions)
- [Monitoring and Debugging Workflows](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)
- [Adding a status badge](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)
