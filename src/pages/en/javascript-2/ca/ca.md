---
title: Course assignment
description: CA, API, JavaScript
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Goal

To apply knowledge of JavaScript techniques to implement the front-end functionality for a social media application.

## Duration

You have 1 weeks in total.

## Learning outcomes

- To be able to build a website using HTML, CSS and JavaScript.

## API

You will have the option is creating your own API or using the one provided by Noroff.

The API you are using for this project can be found under **Social EndPoints** in the [Noroff API documentation](https://docs.noroff.dev/social-endpoints/posts).

## Brief

You have been tasked with producing a new JavaScript front-end client for an existing social media platform. The client application must be attractive and responsive, but you have an otherwise blank slate in terms of theme design language.

Using the provided API and API documentation, create a functioning user interface that allows for **viewing, posting, editing and deleting** social media content.

Social API routes require authorisation via JWT (JSON Web Tokens). You will need to register an account and login to access your token.

To complete the required features, you will also need to make use of `GET`, `POST`, `PUT`, and `DELETE` HTTP methods.

Using localStorage is highly recommended, especially for storing JWT tokens.

A finished project fulfils the requirements below with an easy to use and error-free user interface.

### Your own **custom** API

If you do use your own backend APIs. You do not have to have protected routes but you should have a route top manage loggin in/ Authentication. I recommend you use either:

- [NextAuth](https://github.com/nextauthjs/next-auth-example)
- [Clerk](https://github.com/vercel/next.js/tree/canary/examples/with-clerk)
- [Supabase](https://github.com/vercel/next.js/tree/canary/examples/with-supabase)

### Mininum Acceptence Criteria

The following user stories are required for a passing submission:

- User with `@noroff.no` or `@stud.noroff.no` email can register profile
- Registered user can login
- User can view a post content feed
- User can filter the post content feed
- User can search the post content feed
- User can view a post content item by ID
- User can create a post content item
- User can update a post content item
- User can delete a post content item

### Customer success criteria

The following user stories are optional:

- User can create a comment on a post
- User can edit profile media
- User can follow/unfollow a profile
- User can react to a post content item

### Team work

This assignment is for teams. Students forming a work group will need to coordinate closely throughout the planning, development and testing processes.

Commit regularly and use branches to prevent conflicts with your teammate as you work on the same codebase.

## Development process

1. Create or select one repository to use throughout this project.
2. Create a `js2` branch from the default `master` or `main` branch.
3. You may use either Trello or GitHub Projects to manage your development tasks. If you are using Trello, please make sure that your board is public and that a link is provided in your `readme.md` file. Make sure to detail tasks accurately and divide them evenly if working a group.

   Examples of overly vague tasks:

   - Make the HTML for the post page
   - Website Styling
   - JavaScript for API
   - Test the website

   Examples of detailed & accurate tasks:

   - Create search form HTML
   - Search form SCSS styling
   - Filter posts function
   - Implement search event listener

4. Review the [API Guide](https://noroff-api-docs.netlify.app/social-endpoints/authentication) and [API Documentation](https://nf-api.onrender.com/docs).
5. Plan your approach, desired features and work strategy.
6. Implement the required features as per your work plan.

   > **Note:** All PRs should be made to `js2`, not to the default branch. For example, branch `search-functionality` should be created from, and merged into, branch `js2`.

7. Submit a link to your repository at the correct branch on the Moodle forum for peer review.
8. Review 2 of your peers projects. (4 per team)

   > **Watch:** [Video: Branching and providing feedback](https://vimeo.com/725676411/fabede2ebb)

9. Open a Pull Request from `js2` into the default branch. Contact a teacher on Discord for their feedback. If there is a particular area of concern, please ensure to pass this on with your request. Add this teacher as a reviewer on your PR. Please make sure to plan for this review prior to your deadline.
10. Implement the feedback gathered from your review, but leave the PR open.
11. Deliver the link to this PR in Moodle. A passing submission will be approved and merged by the reviewer. This is a direct analogue of the professional review process.

## Restrictions

- You must use HTML, CSS and JavaScript to build your website, You can use a react framework like NextJS(React).
- Required functionality must be implemented yourself and not use a library.
- A CSS Framework may be used to build the application UI.
- A `.gitignore` file must be provided including `node_modules`. This folder must be untracked.
- Content posted on the API is public and associated with your identity. Be appropriate and respectful.

## Required Delieverables

- [ ] A link to your deployment production website (Netlify/ Vercel/ GitHub Pages).
- [ ] A link to your Public GitHub repo.
- [ ] A report of your project.
- [ ] A link to High fidelity design (Figma).

## Optional Deliverables

- [ ] A link to your report.
- [ ] A link to your gantt chart or Kanban project board.
- [ ] A video summary of you explaing your project.
- [ ] A link to Low fidelity design (Figma)
- [ ] A link to Prototype (Figma)

## Resources

- [API Guide](https://noroff-api-docs.netlify.app/social-endpoints/authentication)
- [API Documentation](https://nf-api.onrender.com/docs).
