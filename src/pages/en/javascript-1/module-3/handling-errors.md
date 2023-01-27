---
title: Handling Errors
description: sample
tags: JavaScript 1
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

In this lesson we will focus on:

- default parameter values in functions.
- creating dynamic HTML inside a function based on arguments.
- handling errors with a try-catch-finally statement.

## Default parameter values

To provide default values for parameters we assign values in the function parameter list, e.g.

```js
function printMessage(message = "No message provided") {
  // do something
}
```

If we call printMessage() and don't pass in an argument to the message parameter, message will have the default value of "No message provided".

[Scrimba video](https://scrimba.com/c/cB3qn6u7)

## A reusable HTML function

In this video we look at passing arguments to a function that will return different HTML based on what we pass in.

We might call this function a **component**. It will return a limited amount of HTML that we can use elsewhere in our code.

<iframe src="https://player.vimeo.com/video/450469640?h=6418d40dd5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="A reusable HTML function"></iframe>

[Code](https://github.com/NoroffFEU/reusable-html-function) from the video.

## Handling errors

In the following video we look at how to use the **try-catch-finally** statement to catch errors and provide feedback to the user, rather than simply logging an error to the console that the user will never see.

<iframe src="https://player.vimeo.com/video/450419821?h=90aad7a333&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="try-catch-finally"></iframe>

[Code](https://github.com/NoroffFEU/try-catch-finally) from the video.

## API call error handling

In this video we will add error handling to our API call with a try-catch statement.

<iframe src="https://player.vimeo.com/video/450417105?h=28c585beaa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="GET requests - handling errors"></iframe>

[Code](https://github.com/NoroffFEU/get-requests-handling-errors) from the video.

---

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module3-lesson2).

Attempt to answer the questions before checking them against the [answers branch](https://github.com/NoroffFEU/lesson-task-js1-module3-lesson2/tree/answers) of the repo.
