---
title: Semester Project 2 brief
keywords: Exam, Semester Project 2
tags: Semester Project 2
layout: ../../../layouts/MainLayout.astro
---

## Goal

To take the skills learned over the past three semesters and create an auction website. This is an individual assessment of your learning. You must demonstrate your ability to take a business problem and create and end to end solution using web technologies.

## Learning outcomes

- To be able to build a website using HTML, CSS and JavaScript.
- To be able to use a REST API to fetch data from a Headless CMS.
- To ba able to test your website.
- To be able to use a JavaScript to add functionality to your website.
- To be able deploy your website to a hosting platform.

![Learning by examining a light bulb](/images/Seak_ZA_death_stranding_learning_lightbulb_moment_futurism.png)

## Duration

You have five weeks in total.

## Brief

An auction site is looking to launch a fully responsive website where users can add items to be bid on and bid on items other users have put up for auction.

When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.

## Requirements

> All API functionality is managed by an existing application. This project only covers the front-end application for the API.

## API

The API you are using for this project can be found under Auction EndPoints in the [Noroff API documentation](https://docs.noroff.dev/auctionhouse-endpoints/authentication).

### Resources

[API Swagger](https://api.noroff.dev/docs/)
[Latest API Docs](https://docs.noroff.dev/)

### User stories/ Minimum acceptence criteria

The client has specified the following requirements in the form of _User Stories_:

1. A user with a `stud.noroff.no` email may register
2. A registered user may login
3. A registered user may logout
4. A registered user may update their avatar
5. A registered user may view their total credit
6. A registered user may create a `Listing` with a title, deadline date, media gallery and description
7. A registered user may add a `Bid` to another user's `Listing`
8. A registered user may view `Bid`s made on a `Listing`
9. An unregistered user may search through `Listing`s

### Optional success criteria

- Write a e2e test for Login usesr journey
- Write a e2e test for Non-registred users can search through listings
- Write a e2e test for Registered users can add a bid to another user's listing
- Write a e2e test for Registered users can careate bids made on a listing
- Repo has a staging enviroment.
- Repo has a production enviroment.

### Technical restrictions

The company CTO has set the following technical restrictions:

1. Must use an approved `CSS Framework`
2. Must be hosted on an approved `Static Host`
3. Must use an approved `Design Application`
4. Must use an approved `Planning Application`

### Required links

The Product Owner has requested links to the following:

1. A Gantt chart for project timing
2. A design prototype
3. A style guide
4. A kanban project board
5. A repository link
6. A hosted application demo link

## Approved resources

This list covers libraries and services that have been vetted by the company and approved for use.

### CSS processors

- SASS/SCSS
- PostCSS
- Tailwind (version >3.0.0)
- Modules CSS

### CSS frameworks

You are free to use a component library such as ShadeCN, Bootstrap, DaisyUI, etc.

- Bootstrap (version >5.0.1)
- MUI (version >5.11.8)
- Styled-components
- Emotion

### Hosting services

- GitHub Pages
- Netlify
- Vercel
- Misc: Any other static hosting service.

### Design applications

- Figma (Preferred)
- Adobe XD
- Sketch

### Planning applications

You are free to use any planning application you wish, but it must be able to produce a Gantt chart.

- GitHub Projects
- Figma
- Trello
- Jira
- Asana

## Delivery

Include the required links in the Moodle delivery window using [this template format](delivery-template.html).

All final changes must be merged into the default branch `main` or `master`. Other branches will not be checked.

Ensure that the `readme.md` file describes your project thoroughly, including how to setup and run the project locally and any special instructions for testers.

### Required Delieverables

- [ ] A link to your deployment production website (Netlify/ Vercel/ GitHub Pages)
- [ ] A link to your Public GitHub repo
- [ ] A report of your project.
- [ ] A link to High fidelity design (Figma)

### Optional Deliverables

- [ ] A link to your report.
- [ ] A link to your gantt chart or Kanban project board.
- [ ] A video summary of you explaing your project.
- [ ] A link to Low fidelity design (Figma)
- [ ] A link to Prototype (Figma)

## Recommended stack

- [React](https://react.dev/)
- [Vitest with RTL (React testing library)](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress e2e Testing](https://www.cypress.io/)
- [TanStack/Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [shadcn UI](https://ui.shadcn.com/)
- [formkit/auto-animate](https://github.com/formkit/auto-animate)
- [MSW (Mock Service Worker)](https://mswjs.io/)
- [React Router](https://reactrouter.com/en/main)

## Examples

- [Demo 1](https://tactikerl.github.io/SP2-Noroff-Auction-Application/)
- [Demo 2](https://starlit-lamington-b689b0.netlify.app/)
- [Demo 3](https://noroffauctionhouse.imdev.no/home/index.html)
