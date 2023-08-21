---
title: Introduction to front-end frameworks
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Front-end frameworks allow us to write applications faster by allowing us to write code that is reusable and better optimised.

## Why front-end frameworks?

Websites have gone from static pages to web applications, featuring an impressive amount of functionality and interactivity. Entire applications, such as Figma, can now be run in the browser.

It is difficult, and possibly even problematic, to create web applications from scratch using only vanilla JavaScript.

Front-end frameworks simplify the process by providing functionality already built for us. This allows us to focus on building the app instead of building a framework ourselves.

Front-end frameworks also solve problems we encounter while building apps using vanilla JavaScript. A common issue is getting the DOM to update and reflect changes made in our code, such as an item being added or deleted from a list. Trying to manage the different states our app is in can be very challenging. A front-end framework will automatically handle this for us, so we don't have to worry about our states updating, allowing us to focus on building out our app.

## Different front-end frameworks

We will be making use of React in this course; however, there are a variety of other front-end frameworks available.

You can see the popularity of frameworks in 2021 from [The State of JS: Front-end Frameworks report](https://2021.stateofjs.com/en-US/libraries/front-end-frameworks/).

The most known frameworks are:

- React
- AngularJS
- Angular 2
- Vue
- Ember

There are also newer frameworks that have come about, such as:

- Solid
- Svelte
- Alpine.js
- Lit
- Preact

Some frameworks, such as React, also have additional frameworks built off them. For example, the frameworks below are built off of React:

- Next.js
- Gatsby

> **NOTE:** Only React is supported in this course and is to be used in assignments. You are not required to learn the other frameworks. You are free to experiment with other front-end frameworks in your own time, but they are not permitted to be used in assignments.

## What is React?

React is a free and open-source framework created by Jordan Walke of Facebook in 2013. It is currently the most popular front-end framework.

It is used for building user interfaces that "react" to user input; hence the name "React". An example of this would be clicking a Like 👍🏼Thumbs Up icon and having the UI reflect this.

### Framework vs library

A front-end framework will make very opinionated decisions, meaning that you will have to write code and use the tools provided. An example of this would be being forced to use TypeScript instead of choosing between JavaScript and TypeScript.

React is, in fact, a front-end library and not a front-end framework. This is because React leaves some decisions open to you, such as how your app's state (variables being stored) or page routing (page links) is managed. This makes it unopinionated in many ways and is one of the appeals of React, as it allows React to be very flexible.

In Angular 2, a front-end framework, decisions are already made for you, such as state management and page routing. You have to write code using the tools provided to you. This makes Angular 2 very opinionated and leaves you with little flexibility. This way of working is what makes it a true framework. Angular makes it challenging to quickly build proof of concepts due to all the setup required, and is typically preferred in enterprise applications where there are very strict code standards and ways of working.

### React features

These are some of the following features that React provides, which we will look at in detail at a later stage:

- SPA (Single-Page Application): React is a SPA; only a single HTML page will load.
- JSX (JavaScript XML): HTML-like syntax which features JavaScript functionality.
- Virtual DOM: A DOM that is stored in memory allows for more efficient DOM updates.
- Components: We create reusable blocks of code called components.
- One-way data binding: A unidirectional data flow leads to better efficiency.

<hr>

## Lesson task

### Goal

The student will become familiar with the React website.

### Brief

You will be navigating the ReactJS.org website to become familiar with its contents and view a glossary to help you with React terms.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Navigate to [https://www.reactjs.org](https://www.reactjs.org). Browse the website by clicking on different links to become familiar with it.

2. Navigate to [https://reactjs.org/docs/glossary.html](https://reactjs.org/docs/glossary.html) to find the Glossary. You can refer to this if you're ever unsure about React terminology.

## Additional resources

[MDN Web Docs: Introduction to client-side frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)

[State of JS 2021: Front-end Frameworks](https://2021.stateofjs.com/en-US/libraries/front-end-frameworks/)

[ReactJS.org](https://reactjs.org/)

[ReactJS.org: Docs - Getting Started](https://reactjs.org/docs/getting-started.html)

[ReactJS.org: Beta React Docs](https://beta.reactjs.org/)

[ReactJS.org: Glossary of React Terms](https://reactjs.org/docs/glossary.html)
