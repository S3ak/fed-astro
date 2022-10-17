---
title: Kanban and User Stories
keywords: sample
tags: Project Methodology
sidebar: proj-meth
permalink: project-methodology/kanban-user-stories.html
folder: project-methodology
---

## Introduction

The toughest part of a project is always how to start, prioritize, and when to finish a project. Introduced by the Japanese in the automotive industry to manage the workflow, Kanban is a workflow process which assists in how to run a project. It helps in starting, analyzing, improving and finalizing projects by using a workflow method. The Kanban method is a visual tool to see what exactly is being worked on during a project. Kanban also manages the Work in Progress limits (WIP).

## Kanban workflow

A basic workflow in Kanban looks like this:

![Kanban](../images/project-methodology/1-3-kanban.jpg)

## Kanban values, principles and agenda

Like Agile, Kanban also has values and principles.

## Kanban values

![Kanban values](../images/project-methodology/1-3-kanbanvalues.png)

## Kanban principles

![Kanban principles](../images/project-methodology/1-3-kanbanprinciples.png)

### The general practices of Kanban

As Kanban is a workflow system, there are general practices used to make the workflow visible and manageable. The general practices are as follows:

- Visualize
- Limit work in progress
- Manage flow
- Make policies explicit
- Implement feedback loops
- Improve collaboratively, evolve experimentally

## Kanban roles

Kanban has 2 specific roles, namely:

![Kanban roles](../images/project-methodology/1-3-kanbanroles.png)

To use an example: imagine a Toyota Corolla workshop is installing 10 new doors onto various cars. When you only have 5 doors left in a pack, you use a Kanban card to write an order for another 10 doors. By the time you have reached your last door in your first pack, you can be sure that you will have a pack of 10 new doors manufactured and ready to be used.

In this way, there are no spare parts lying around and creating cluttered warehouses for weeks or months on end. Kanban has allowed for the ability to scale down the amount of work that is in progress.

## Differences between Scrum and Kanban

Scrum and Kanban are both iterative processes which rely on workflows to manage and prioritize projects.

However, there are a few differences between Scrum and Kanban which is shown below: Scrum Kanban Roles & Responsibilities Predefined roles No predefined roles. Everyone assists as they're available Due Dates & Timelines Project is divided into sprints with a set time to deliver Projects and work are delivered continuously Delegation & Prioritization Work is completed in batches, and not as the need arises Work is only assigned when the last task is completed. Changes & Modifications No changes mid-sprint Changes happen as need arises, thus creating iterations. Best for... Best for teams whose objectives change over time. Best for teams with stable and well-set priorities that hardly change over time.

## User stories, epics, themes and features

When planning a project, it’s important that we understand what needs to be done and why. This requires both a high-level and low-level view. Using Themes and Epics allow us to get a high-level view of our tasks, while features and user stories let us get more specific and detailed about exactly what must be achieved.

### User story

We covered user stories earlier when discussing functional specifications, but to recap, a user story is a short description - usually from a user to the system - to describe what they need to be enhanced or fixed by the system. The user will describe it as:

- Role of the user
- What they want
- Why they want it

User stories are normally written down on sticky note sized sheets. They are stuck on a board for everyone to see and are then discussed in detail.

### Theme

![Theme](../images/project-methodology/1-3-theme.jpg)

A theme is a collection of stories within a category and often has organization-wide importance and is generally quite broad in its focus. An example of a theme might be ‘customer contact’.

This theme can then be broken down into Epics.

### Epic

An epic is a large user story. It is the full requirement which needs to be broken down in smaller parts for development. An example of an epic would be:

As a customer I can get in contact with the business via the website so that I can find out about the product.

### Feature

A feature is a distinct element of functionality which can provide capabilities to the business.

Our Epic of getting in contact via the website can then be broken down into features like including a contact form or adding a live chat widget to the site. It generally takes many iterations to deliver a feature.

### User Story

A user story is a part of the feature. By splitting a feature into smaller stories, the user can give early feedback to the developers on issues quickly. The user stories can then be broken down further into tasks that the developers need to complete.

### Understanding the language

It should be noted that you may find some discrepancy online between user stories, epics, themes and features. Some refer to features as being the same as epics, whereas others see features and user stories as the same things. Ultimately, every individual or company will have a slightly different interpretation but the above is a basic understanding of each concept.

## Continuous Integration

Continuous Integration (CI) is a development practice which is used by developers to integrate code into a shared repository several times a day. Normally this is done within a testing environment. Once the developer’s check-in their code, the check-in is then verified by an automated build thus allowing for problems or bugs to be detected early on.

The benefits of CI are as follows:

- No more time consuming and tense integrations and builds
- Increased visibility enabling better communication with the development team
- Early detection of build problems and bugs

### How does continuous integration work?

Let's discuss:

- A single repository is kept.
- Builds are automated.
- Your build should be tested.
- Create an automated test to test your build against the code to detect bugs which are then sorted out immediately.
- Once a bug is detected, all developers stop working and jump in to debug and correct the code.
- Keep the builds simple.
- Everyone should have visibility of the build.
- Always clone the production environment and build on there. (It is bad practice to code and build on the production environment.)
- Anyone should be able to access the latest build and version of the code.
- Continuous integration works well with continuous deployment. These two methods go hand-in-hand.

## Continuous Deployment

Continuous deployment is deploying the latest, successful build into production - making it available to the users. Once a build has passed and is successful and user tested, it can be deployed to production. This ensures that bug fixes to the users are dealt with quickly and will not slow down business processes.

## Feature Branching

Unlike continuous integration, feature branching is where a branch is created from the master branch for a new feature. All developers will then code their separate tasks using this branch. You cannot merge a feature branch to the master branch if all developers are not done with their code. This will result in merge conflicts which will then have to be resolved.

<hr>

## Activities

**WATCH**

- Video: [What is "Kanban" and how does it work?](https://www.linkedin.com/learning/becoming-a-product-manager/what-is-kanban-and-how-does-it-work?u=43268076) (2m 46s)
- Video: [Themes, Features, Epics and User Stories](https://www.linkedin.com/learning/agile-product-owner-role-foundations/themes-features-epics-and-user-stories-8951981?autoAdvance=true&autoSkip=false&autoplay=true&resume=false&u=43268076) (4m 45s)

<hr>

## Lesson Task

### Brief

Gain a better understanding of Kanban by relaying its definition, values and practices in your own words.

### Level 1 Process

1. In your own words define Kanban.
2. List the values and the agenda of Kanban.

### Level 2 Process

1. Discuss the general practices of Kanban and include all role players, if any are involved.
2. Draw a diagram of a simple workflow in the software development cycle.
