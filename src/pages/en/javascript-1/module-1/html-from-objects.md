---
title: Creating HTML from Objects
description: sample
tags: JavaScript 1
sidebar: javascript-1
---

## Introduction

In this lesson we'll look at:

- Arrays as properties of objects.
- JSON - JavaScript Object Notation.
- Loading multiple JavaScript files.
- Creating HTML from objects.

## Arrays as properties of objects

We've seen that objects can have strings, numbers, Booleans and functions as property values.

Object properties can also hold arrays:

```js
const dogs = { breeds: ["golden retriever", "labrador", "poodle"] };
```

[Scrimba video](https://scrimba.com/c/cKg2e7uP)

## JSON

**JSON** stands for JavaScript Object Notation.

It is used to exchange data and is used by REST APIs to send data between browsers (or apps) and servers.

It looks like a normal JavaScript object.

This video looks at how JSON is sent from a server via an API call.

<iframe src="https://player.vimeo.com/video/444361111?h=3f57c9b751&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Introduction to JSON"></iframe>

##Loading multiple JavaScript files

You can link to multiple JavaScript files from an HTML page, and variables and functions will be available in the order they are included.

If you load multiple files like this:

```js
<script src="js/script1.js"></script>
<script src="js/script2.js"></script>
```

Anything declared in script1.js will be available to the code in script2.js.

<iframe src="https://player.vimeo.com/video/444338027?h=73615fb5ff&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Using multiple JavaScript files"></iframe>

## Creating HTML from objects

The next three videos examine creating HTML from objects.

### 1. Using a single object to create HTML

The first video looks at creating HTML from a single object's properties and adding default values for missing properties.

<iframe src="https://player.vimeo.com/video/444562202?h=3290e75a25&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Creating HTML from objects - Part 1"></iframe>

[Code](https://github.com/NoroffFEU/creating-html-from-an-array-of-objects) from the video.

### 2. Setting the innerHTML of individual elements

This video looks at setting the innerHTML property of individual DOM elements from a single object.

<iframe src="https://player.vimeo.com/video/444582197?h=4a27b67841&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Creating HTML from objects - Part 2"></iframe>

[Code](https://github.com/NoroffFEU/creating-html-from-an-array-of-objects/tree/part-2) from the video.

### 3. Creating HTML from an array of objects

In this video HTML is created by looping through an array of objects.

<iframe src="https://player.vimeo.com/video/444696340?h=adfa854388&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Creating HTML from objects - Part 3"></iframe>

[Code](https://github.com/NoroffFEU/creating-html-from-an-array-of-objects/tree/part-3) from the video.

<hr>

## Lesson Task

### Brief

There are practise questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module1-lesson3).

Attempt to answer the questions before checking them against the answers in the [answer branch](https://github.com/NoroffFEU/lesson-task-js1-module1-lesson3/tree/answers) of the repo.
