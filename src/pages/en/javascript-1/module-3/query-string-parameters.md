---
title: Query string parameters
description: sample
tags: JavaScript 1
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

In this lesson we will look at:

- Retrieving parameters from the query string.
- Passing variables to other pages in the query string.

## Retrieving parameters

In this video, we will look at how we can retrieve parameter values (essential variables) from the query string using code like the below:

```js
// get the query string
const queryString = document.location.search;

// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);

// get the id parameter from the query string
const id = params.get("id");
```

<iframe src="https://player.vimeo.com/video/453021027?h=cc9e8cce3f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Retrieving parameters from the querystring"></iframe>

[Code](https://github.com/NoroffFEU/retrieving-parameters-from-querystrings) from the video.

## Adding parameters

In this video, we will add a variable to the href value in an <a> tag, retrieve it from the query string on a separate page, and then use its value in an API call.

<iframe src="https://player.vimeo.com/video/453080750?h=328b6f90fd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Passing parameters from one page to another using the querystring"></iframe>

[Code](https://github.com/NoroffFEU/passing-variables-to-other-pages-in-the-querystring) from the video.

---

## Lesson Task

### Brief

There are practise questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module4-lesson3).

Attempt to answer the questions before checking them against the [answers branch](https://github.com/NoroffFEU/lesson-task-js1-module4-lesson3/tree/answers) of the repo.
