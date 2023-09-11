---
title: Array Methods
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Array methods are a very important part of JavaScript. They are built-in methods usable only on Arrays, meaning that these methods will not work on any other data types unless we convert them to an array. Array methods allow us to significantly reduce the complexity of our code.

**NOTE:** It is fine if you do not grasp the array methods at first as we tend to only truly understand them once we have practical experience with them. Do not feel discouraged if you struggle with them at first. However, you will need to know them as they will allow you to write better code as well as achieve complex operations with very little code. Please ensure that you do all of the exercises supplied.

Follow alone with this [example](https://stackblitz.com/edit/js-oosfhe?file=index.js&view=editor)

## Basics

There are some important things to be aware of when it comes to array methods:

### A new array is returned

We generally do not want to mutate our variables when we work in JavaScript.

In JavaScript, arrays and objects are **passed by reference**. If we were to pass an array to a function and then modify the array in that function, the original array will get modified instead of a copy of that array. This can lead to many bugs and is typically considered an anti-pattern.

All of the Array Methods return a new array that contains the changes that happened. This prevents our original arrays from being mutated

```js
// Original array
const arrayValues = [5, 7, 9, 14];

// New array called 'newArray' that contains the result from the `.map` method
const newArray = arrayValues.map(/* code here */);
```

**NOTE:** If you need to loop through an array and don't need to return anything, then you likely need to be using a `forEach` instead.

### Callback functions

Each time our Array Methods loop, it runs a callback function.

This callback function can either be:

1. An anonymous function (more commonly used);
2. A separate named function.

We usually use an anonymous function (point 1 above) however in some cases you might want to have a separate callback function. Such cases might be

#### 1. Anonymous function (more commonly used)

This is an anonymous function which lets us make our Array Methods more concise. Note how our logic is part of the Array Method:

**`function` keyword:**

```js
const values = [100, 200, 300, 400, 500];

const newArray = values.map(function (element, index, array) {
  // Modify and return element here
});
```

**Arrow function:**

```js
const values = [100, 200, 300, 400, 500];

const newArray = values.map((element, index, array) => {
  // Modify and return element here
});
```

#### 2. Separate callback function

This is a separate callback function (`callbackFn`). Note how logic for the Array Method is handled in its own function.

```js
const values = [100, 200, 300, 400, 500];

function callbackFn(element, index, array) {
  // Modify and return element here
}

const newArray = values.map(callbackFn);
```

## Video on Array Methods

In this video we do an introduction to array methods:

<iframe src="https://player.vimeo.com/video/739177160?h=bcb5751808" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://player.vimeo.com/video/739177160?h=bcb5751808" target="_blank" alt="Classes video">Link to video</a>

## Additional resources

[MDN Docs: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[Javascript.info: Array methods](https://javascript.info/array-methods)
