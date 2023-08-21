---
title: Course Assignment Resit
keywords: Workflow
tags: Workflow
permalink: workflow/ca/resit.html
folder: workflow
---

## Goal

Using the skills and knowledge from this course, improve the quality of a `package` by establishing helpful `workflows` that make the development process more efficient. This is a repeat of the original brief with a new repo.

## Brief

Although Quality Assurance is a practice we should be concerned with throughout the development cycle, it is common to `sprint` towards an `MVP` version of an application before later improving the quality. In this exercise you are tasked with improving the quality of an existing application by providing various development workflows as well as a testing strategy.

### The following features must be automatically tested with `Unit` tests

<assignment-guideline group="Unit Testing" points="1">The login function fetches and stores a token in browser storage</assignment-guideline>
<assignment-guideline group="Unit Testing" points="1">The logout function clears the token from browser storage</assignment-guideline>

### The following features must be automatically tested with `End-to-End` tests

<assignment-guideline group="E2E Testing" points="1">The user can log in and access their profile</assignment-guideline>
<assignment-guideline group="E2E Testing" points="1">The user cannot submit the login form with invalid credentials and is shown a message</assignment-guideline>
<assignment-guideline group="E2E Testing" points="1">The user can log out with the logout button</assignment-guideline>

## Important Notes

**Test Failure:** In some cases, a well written test will still fail if the project does not meet the expectations. For example, the project may not show user error messages. In this case the test case `The user cannot submit the login form with invalid credentials and is shown a message.` **should** fail. Writing tests that always pass is not the purpose of this assignment.

**Issues:** While working on another project you may encounter bugs or issues with this project. If a test is failing, create a new Issue to contact the project owner. If you wish to offer a fix for this bug, please do so in a separate Pull Request, for example from the branch `worfklow-fixes`.

**Formatting Changes:** Please do not run prettier/eslint over the project files in your submission branch. This is best done in a separate `workflow-formatting` branch with it's own Pull Request to avoid too many changes appearing in the Pull Request. This assignment asks you to `setup` but not to `run` prettier/eslint.

## Process

1. Find a partner to work with or select the example repository.
2. `Fork` the project repository to your GitHub account.
3. Create a new branch called `workflow`.
4. Record any bugs found during this process in the Issues tab.
5. Configure the project for Jest and Cypress.
6. Create tests to cover the required test cases.
7. Create a Pull Request from `workflow` into the `default branch`.
8. Request a review from a teacher and/or your peers to help improve your submission.
9. Make any final changes based on this feedback.
10. Submit a link to the **Open Pull Request** on Moodle.

## Delivery

Please deliver an **open** Pull Request from branch `workflow` into your fork's default branch.

You may open a PR from `workflow` into the `upstream` default branch in addition, but this will not be graded.

## Resources

- [Noroff Live Social Application](https://github.com/NoroffFEU/live-social)
