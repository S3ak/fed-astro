---
title: map()
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

The `.map` method loops through an array and returns a new array that contains the exact same number of elements as the original array.

The array returned from the `.map` array method always contains the exact number of items as the original array making it ideal for cases where you need to perform an action on each element and have a result for each element.

Some other use cases include displaying a message for each element after you've chained other array methods, or rendering a list in the UI.

**NOTE:** If you aren't using the returned array from a `map` then you should instead be using `forEach` / `for` loop / `for...of`.

### Syntax

**NOTE:** The .map array method returns a new array.

**callbackFn**: The function that is called for each element

**element:** The current element in the array that we are working with

**index:** (Optional) The current index of where we are in the array

**array:** (Optional) The original array `map` was called on

#### Separate callback function

```js
const values = [100, 200, 300, 400, 500];

function callbackFn(element, index, array) {
  // Modify and return element here
}

const newArray = values.map(callbackFn);
```

#### Not using a separate callback function

```js
const values = [100, 200, 300, 400, 500];

const newArray = values.map((element, index, array) => {
  // Modify and return element here
});
```

### Practical examples

Let's have a look at more practical examples of `map`.

#### Combining names

In this example, we have an array of objects that contain a first name and a last name. We use `map` to combine the first names and last names to give us an array of combined full names.

```js
const names = [
  { firstName: "Ola", lastName: "Nordmann" },
  { firstName: "John", lastName: "Doe" },
  { firstName: "Mario", lastName: "Rossi" },
  { firstName: "Jan", lastName: "Jansen" },
];

// Returns:
// [ "Ola Nordmann", "John Doe", "Mario Rossi", "Jan Jansen" ]
const combinedNames = names.map((person) => {
  return `${person.firstName} ${person.lastName}`;
});
```

#### Calculate area of rectangle

In this example, we calculate the areas of different rectangles. We have an array of objects where each element contains a `length` and a `width` for a rectangle. To calculate an area of a rectangle, we simply multiply `length` by `width` (`area = length * width`).

```js
const rectangles = [
  { length: 30, width: 20 },
  { length: 10, width: 10 },
  { length: 40, width: 40 },
];

// Returns:
// [ 600, 100, 1600 ]
const areas = rectangles.map((rectangle) => rectangle.length * rectangle.width);
```

## Video on array .map() method

<iframe src="https://player.vimeo.com/video/739185000?h=2de01cb516" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://player.vimeo.com/video/739185000?h=2de01cb516" target="_blank" alt="Classes video">Link to video</a>

<hr>

## Lesson task

`map` is used very often, especially in React. It's fairly simple to use. It's 1-to-1 input-to-output relationship makes it powerful when trying to create something from an array.

### Goal

You will practise using the `map` array method.

### Brief

Complete the Level 1 process.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Fork the [Array Method Exercises repo](https://github.com/NoroffFEU/array-method-exercises) and complete the exercises in the `map` directory.

> <b>NOTE:</b> You will only need to fork this repo once. You will reuse it for all of your array method exercises.

## Additional Resources

[MDN Docs: Array Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
