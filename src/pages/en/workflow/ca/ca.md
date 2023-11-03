---
title: Course Assignment Overview
keywords: workflow
tags: Workflow
layout: ../../../../layouts/MainLayout.astro
---

## Goal

Using the skills and knowledge from this course, Create unit and e2e tests that improve the confidence of the code. Establish a baseline of test suits that ensure the project is working as expected. Configure the project to run these tests automatically and provide feedback to the developer.

## Learning Outcomes

The main focus of this assiugnemnt is to assess the learners ability to setup and write tests which detect regressions and ensure the application is working as expected. The learner should be able to:

- Setup a project to run tests automatically
- Trigger test when a pull request is created
- Write unit tests for a function
- Write e2e tests for a user journey

## Brief

Although Quality Assurance is a practice we should be concerned with throughout the development cycle, it is common to `sprint` towards an `MVP` version of an application before later improving the quality. In this exercise you are tasked with improving the quality of an existing application by providing various development workflows as well as a testing strategy.

There are two ways to complete this assignment:

1. Teams developers working on their collective applications. You will selected a prexisting project which uses the Noroff API. The Web app should be able to login, logout. In additon the web app should allow a end-user to create, edit and delete a post. Finally the suer should be able to view their profile page or another users profile.
2. Solo developers, working on the [provided application (Vanilla JS)](https://github.com/noroffFEU/social-media-client)

The existing application package must feature:

- A front-end login form connected to an API JWT endpoint
- A front-end logout button connected to browser storage
- Front-end CRUD functionality for at least one object type
- A front-end profile page

> The Noroff API Social Media client works well with this exercise.

### The following workflows/hooks are required:

<assignment-guideline group="Configuration" points="1">Project is configured to run Prettier on commit</assignment-guideline>
<assignment-guideline group="Configuration" points="1">Project is configured to run ESLint on commit</assignment-guideline>
<assignment-guideline group="Configuration" points="1">Project code is versioned and branching conventions have been followed.</assignment-guideline>
<assignment-guideline group="Configuration" points="1">Project is configured to build and deploy to pages on merge to default branch</assignment-guideline>

### The following project file changes are required:

<assignment-guideline group="Configuration" points="1">Project readme file is updated to include new configuration information and workflow status badges</assignment-guideline>
<assignment-guideline group="Configuration" points="1">Deployed project has been checked for 404 errors</assignment-guideline>
<assignment-guideline group="Configuration" points="1">Any bugs found have been communicated in the Issues tab</assignment-guideline>

### The following features must be automatically tested with `Unit` tests:

<assignment-guideline group="Unit Testing" points="1">The login function fetches and stores a token in browser storage</assignment-guideline>
<assignment-guideline group="Unit Testing" points="1">The logout function clears the token from browser storage</assignment-guideline>

### The following features must be automatically tested with `End-to-End` tests:

<assignment-guideline group="E2E Testing" points="1">The user can log in and access their profile</assignment-guideline>
<assignment-guideline group="E2E Testing" points="1">The user cannot submit the login form with invalid credentials and is shown a message</assignment-guideline>
<assignment-guideline group="E2E Testing" points="1">The user can log out with the logout button</assignment-guideline>

## Important Notes

**Test Failure:** In some cases, a well written test will still fail if the project does not meet the expectations. For example, the project may not show user error messages. In this case the test case `The user cannot submit the login form with invalid credentials and is shown a message.` **should** fail. Writing tests that always pass is not the purpose of this assignment.

**Issues:** While working on another project you may encounter bugs or issues with this project. If a test is failing, create a new Issue to contact the project owner. If you wish to offer a fix for this bug, please do so in a separate Pull Request, for example from the branch `worfklow-fixes`.

**Formatting Changes:** Please do not run prettier/eslint over the project files in your submission branch. This is best done in a separate `workflow-formatting` branch with it's own Pull Request to avoid too many changes appearing in the Pull Request. This assignment asks you to `setup` but not to `run` prettier/eslint.

## Process

1. Create a new vite react project.
2. `Fork` the project repository to your GitHub account.
3. Create a new branch called `workflow`.
4. Configure the project with eslint, prettier and commit hooks.
5. Configure the project with GitHub Actions for build/deploy if required.
6. Record any bugs found during this process in the Issues tab.
7. Configure the project for Jest/ Vitest and Cypress.
8. Create tests to cover the required test cases.
9. Create a Pull Request from `workflow` into the `staging branch`.
10. Request a review from a teacher and/or your peers to help improve your submission.
11. Make any final changes based on this feedback.
12. Submit a link to the **Open Pull Request** on Moodle.

## Delivery

Please deliver an **open** Pull Request from branch `workflow` into your fork's default branch.

You may open a PR from `workflow` into the `upstream` default branch in addition, but this will not be graded.

Please post your PR to the peer review forum and provide feedback to your peers when requested.

If you would like a teacher review please request this at least 5 days before the deadline.

You must complete the course evaluation to unlock delivery.

## Resources

- [Noroff Social Media Application](https://github.com/noroffFEU/social-media-client)
