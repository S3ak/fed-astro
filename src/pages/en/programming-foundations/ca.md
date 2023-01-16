---
title: Course Assignment
description: Assignments
tags: Programming Foundations
layout: ../../../layouts/MainLayout.astro
---

## Brief

To complete this assignment, you will use your knowledge of programming `logic` and `syntax` to describe the world around you.

Using `JavaScript Notation`, describe a real item from your everyday life as an `object`.

### Required Properties

This object must contain well-named properties that describe your chosen item.

The item must have at least one property of the following `type`:

1. String
1. Number
1. Boolean
1. Array
1. Function

### Project Structure

Follow [this link](https://classroom.github.com/a/Jejkhxp7) and clone the blank repository to begin.

> All of your work should be done in this repository so that teachers have access later.

Your project should have at least two files:

1. _object_.js (Named appropriately for your choice)
2. readme.md

Save your object in a well-named JavaScript file, for example, `motorbike.js`:

```js
const motorbike = {
  brand: "Yamaha",
  speed: 0,
  revs: 0,
  kilometres: 10000,
  cc: 250,
  on: false,
  gearbox: ["Neutral", "First", "Second", "Third"],
  ignition: function () {
    motorbike.on = !motorbike.on;
  },
};
```

Write a `readme.md` file to describe your `object` and how to use it. For example:

```md
# Motorbike Object

This object has the following properties:

- Brand (String), the manufacturer of the vehicle
- Speed (Number), the vehicle velocity in `kmph`
- etc
```

## Delivery

Copy the URL of your Classroom Repository and submit this as `onlinetext`.

Delivery should include the following:

1. Your object code in a `.js` file.
2. Your project description in a `readme.md` file.
3. (Optional) Additional coding practice, objects or UI work.

## Optional Goals

If you have completed the core requirements and would like to continue practising, consider attempting one or more of the following goals:

### User Interface

Build a `user interface` for this object using `HTML`, `CSS` and your `JavaScript` file.

For example, the dashboard of a motorbike shows statistics about the vehicle and a button to start or stop the engine.

### Nested Objects

Extend your object to feature at least one nested `object property`, for example:

```js
const motorbike = {
  brand: {
    name: "Yamaha",
    hq: "Japan",
  },
};
```

### Array of Objects

Extend your object to feature at least one `array of objects`, for example:

```js
const motorbike = {
  gears: [
    {
      name: "Neutral",
      ratio: 0,
    },
    {
      name: "First",
      ratio: 1.3,
    },
    {
      name: "Second",
      ratio: 1,
    },
    {
      name: "Third",
      ratio: 0.9,
    },
  ],
};
```
