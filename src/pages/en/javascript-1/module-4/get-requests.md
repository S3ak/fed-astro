---
title: Query strings and GET requests
description: sample
tags: JavaScript 1
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

In this lesson, we will look at what truthy and falsy values are, and then examine query strings and GET requests.

## Truthy and falsy values

Each value in JavaScript has a Boolean value associated with it, known as truthy or falsy.

The following values are falsy:

- false
- 0 - the number zero
- "", '' or - empty strings
- null
- undefined
- Nan - Not a Number

Every other value is truthy.

If we are trying to check if a value exists (if it isn't null or undefined) for example, we can do this:

```js
if (someVariable) {
  console.log("someVariable exists");
}
```

rather than having to check for both null and undefined like this:

```js
if (someValue !== null && someValue !== undefined) {
  console.log("someValue exists");
}
```

That applies to all the falsy values, so we can check that a variable's value is not one of the falsy values by writing an if statement like this:

```js
if (someVariable) {
  // someVariable has a truthy value
}
```

[Scrimba video](https://scrimba.com/c/c7qJwDS4)

## Query strings

The query string is the part of the URL after the ?. It can be used to pass values around.

In the URL: https://youtube.com/watch?v=abcd1234  
**?v=abcd1234** is the query string. It has one parameter called v with a value of **abcd1234**.

<iframe src="https://player.vimeo.com/video/449681615?h=89157e550d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Query strings"></iframe>

## Introduction to GET requests

One of the main things you will need to do as a front-end developer is connect to APIs.

In this introduction to GET requests we are going make a call to fetch data from an API.

This data will be in JSON format, and we can loop over it to create HTML like we have before with arrays of objects.

<iframe src="https://player.vimeo.com/video/449846877?h=6f1810d53d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="GET requests - Introduction"></iframe>

The following video takes another look at the same code.

<iframe src="https://player.vimeo.com/video/450070174?h=77cfd12556&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="GET requests Introduction - Part 2"></iframe>

[Code](https://github.com/NoroffFEU/get-requests-introduction) from the video.

<hr>

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module3-lesson1).

Attempt to answer the questions before checking them against the [answers branch](https://github.com/NoroffFEU/lesson-task-js1-module3-lesson1/tree/answers) of the repo.
