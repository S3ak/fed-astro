---
title: JSON
description: json
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

JSON stands for JavaScript Object Notation.

It is a way for us to store JavaScript data in a pure text format so that it can easily be shared, such as between applications or outside of a JavaScript environment.

## How it works

JSON is actually a very simple process and only contains two main aspects to it.

We convert our JavaScript data to JSON using `JSON.stringify()`. Then when we get JSON, we convert it to JavaScript data by using `JSON.parse()`.

## Convert to JSON (`JSON.stringify`)

We convert our JavaScript data to JSON so that it can easily be transferred. This is our JavaScript data that has been converted to pure text, like a string.

In this example, we convert a `person` object into JSON.

**NOTE:** Take note how the JSON we log has quotation marks around the keys whereas our JavaScript object doesn't.

```js
const person = {
  name: "Ola Nordmann",
  id: 9,
  isAdmin: true,
};

const personJSON = JSON.stringify(person);

console.log(personJSON);
// Logs:
// {"name":"Ola Nordmann","id":9,"isAdmin":true}
```

## Converting JSON back to JavaScript (`JSON.parse`)

When we get JSON data we need to convert it to JavaScript so that we can start using it in our code. This is where we parse the JSON, which is pure text, into JavaScript code.

In this example we have JSON data which we convert into JavaScript code:

```js
const personJSON = '{ "name": "Ola Nordmann", "id": 9, "isAdmin": true }';

const person = JSON.parse(personJSON);

console.log(person);
// Logs:
// {name: 'Ola Nordmann', id: 9, isAdmin: true}
```

## JSON video

In this video, we look at JSON and how it works.

<iframe src="https://player.vimeo.com/video/738251385?h=352f3f0588&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="localStorage"></iframe>

<a href="https://player.vimeo.com/video/738251385?h=352f3f0588" target="_blank" alt="Classes video">Link to video</a>

<hr>

## Lesson task

Converting between JSON and back is quite a common occurrence in JavaScript web development. We will practice doing so.

### Goal

To be able to convert to JSON and back.

### Brief

Complete the Level 1 process.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Create an object. You can use the one provided below if you prefer.

2. Convert the object to JSON and console.log it. Note how it's only white text and cannot be interacted with in the console.

3. Convert the JSON back to a workable JavaScript object and console.log it. Note how the out has different coloured text and can be interacted with.

```js
// Template object
const myCountry = {
  country: "Norway",
  city: "Oslo",
  currency: "Krone",
};
```

## Additional resources

[MDN Docs: JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

[JSON Website](https://www.json.org/)
