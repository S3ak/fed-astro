---
title: Skipping certain API results
description: sample
tags: JavaScript 1
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

In this lesson we will look at:

- Inspecting the results of API calls.
- Skipping certain objects when looping over an array of objects.

## Inspecting the results of API calls

When making API calls, the most important thing to do is to inspect the JSON that the call returns.

You can't make assumptions about what the JSON will contain and what properties you can access.

You can use a simple **console.log** or software like [Postman](https://www.postman.com/downloads/).

<iframe src="https://player.vimeo.com/video/452802372?h=41b688b066&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Inspecting the results of API calls"></iframe>

[Code](https://github.com/NoroffFEU/inspecting-the-results-of-api-calls) from the video.

## Skipping certain results

Sometimes you will want to ignore certain objects in an array. Perhaps they are missing specific properties, or the properties have useless values.

We can do this using the **continue** keyword inside a for loop.

**continue** causes the loop not to execute the code in its current iteration and jumps to the next iteration.

Like **break**, continue cannot be used inside a forEach function.

- **break** - exit the loop entirely.
- **continue** - skip this particular iteration of the loop.

<iframe src="https://player.vimeo.com/video/452856488?h=7bd3c974a7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Skipping certain objects when looping over an array of objects"></iframe>

[Code](https://github.com/NoroffFEU/get-requests-skipping-certain-results) from the video.

<hr>

## Lesson Task

### Brief

There are practise questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module4-lesson1).

Attempt to answer the questions before checking them against the [answers branch](https://github.com/NoroffFEU/lesson-task-js1-module4-lesson1/tree/answers) of the repo.
