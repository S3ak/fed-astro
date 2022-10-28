---
title: find() and findIndex()
description: sample
tags: JavaScript 2
sidebar: javascript-2
---

## Syntax

```js
const values = [100, 200, 300, 400, 500];

const newArray = values.find((element, index, array) => {
  // Return true if you find the element you want
  // Return false if you haven't found the element you want
});
```

#### Parameters

**element:** The current element in the array that we are working with

**index:** (Optional) The current index of where we are in the array

**array:** (Optional) The original array `filter` was called on

## Introduction

The `find()` and `findIndex()` array methods will search for an item and then completely stop traversing through the array once the element is found.

When using the `find()` array method, the element from the array will be returned. If no element is found, then `undefined` is returned.

When using the `findIndex()` method, the _index_ of the element is returned. If no element is found then `-1` is returned.

The `find()/findIndex()` array methods breaking out of the loop is a significant difference when compared with something like the `filter()` array method. Imagine you had an array of a million+ elements. Now imagine you used the `filter()` array method to find a single item, and this item was at the very first index of the array. It would have found this item on the first iteration, but then needlessly continued looking for the same item in the million+ other elements. If you used `find()/findIndex()`, it would have stopped after the first element. This is a significant reduction in computation time.

This is an example demonstrating that `find()/findIndex()` will break out once the value has been found:

```js
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const foundValue = values.find((currentValue, index) => {
  console.log("Current index: ", index);
  if (currentValue === 3) {
    return true;
  }
});

console.log("Found value:", foundValue);
// The console logs the following:
// Current index:  0
// Current index:  1
// Current index:  2
// Current index:  3
// Found value: 3
```

## Practical examples

#### Example 1: Finding a temperature above a point

In this example, we have a list of temperatures that are sorted in ascending order. We try and find the first temperate above 120.

```js
const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];

const valueFound = temperatures.find((currentTemperature) => {
  if (currentTemperature >= 120) {
    return true;
  }
});

console.log(valueFound);
// Returns:
// 120.8
```

##### Refactor

```js
const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];

const valueFound = temperatures.find(
  (currentTemperature) => currentTemperature >= 120
);

console.log(valueFound);
// Returns:
// 120.8
```

#### Example 2: Find the first name available beginning with a specific letter

In this example, we have a list of names. We find the first name that starts with the letter `j`.

```js
const users = [
  { name: "Kari", id: 19313 },
  { name: "Hans", id: 40202 },
  { name: "Joakim", id: 59230 },
  { name: "Inger", id: 14023 },
  { name: "Ellen", id: 76339 },
];

const foundUser = users.find((user) => {
  // Find a name with 'j' as the first letter
  if (user.name[0].toLowerCase() === "j") {
    return true;
  }
});

console.log(foundUser);
// Returns:
// {name: 'Joakim', id: 59230}
```

##### Refactor

```js
const users = [
  { name: "Kari", id: 19313 },
  { name: "Hans", id: 40202 },
  { name: "Joakim", id: 59230 },
  { name: "Inger", id: 14023 },
  { name: "Ellen", id: 76339 },
];

const foundUser = users.find(({ name }) => name[0].toLowerCase() === "j");

console.log(foundUser);
```

#### Example 3: Find if a book is in stock

In this example, we look at no items being found by the `find()` array method.

We have an array of book objects. Each element has a `title` string for the name, and an `inStock` boolean indicating if the book is in stock. All of the books have `inStock` set to false, so the `find()` array method will not be able to find any books. At the end, we check if our result is `undefined`, meaning no book has been found, and then display a relevant message.

```js
const books = [
  { title: "Building a Spaceship", inStock: false },
  { title: "Growing Orchids", inStock: false },
  { title: "River Fisher", inStock: false },
];

const foundBook = books.find((book) => {
  if (book.inStock === true) {
    return true;
  }
});

// 'foundBook' will be 'undefined' if no book was
//    found by the find() array method
if (foundBook === undefined) {
  console.log("No books in stock!");
} else {
  console.log("First book in stock:", foundBook);
}
// Returns:
// No books in stock!
```

##### Refactor

```js
const books = [
  { title: "Building a Spaceship", inStock: false },
  { title: "Growing Orchids", inStock: false },
  { title: "River Fisher", inStock: false },
];

// Destructured the props and moved logic to the return
const foundBook = books.find(({ inStock }) => inStock);

if (!foundBook) {
  console.log("No books in stock!");
} else {
  console.log("First book in stock:", foundBook);
}
// Returns:
// No books in stock!
```

<hr>

## Lesson task

`find` can prevent a lot of unnecessary processing from taking place. We should know when to use it and how to use it.

### Goal

You will practise using the `find` array method.

### Brief

Complete the Level 1 process.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Fork the [Array Method Exercises repo](https://github.com/NoroffFEU/array-method-exercises) and complete the exercises in the `find` directory.

> <b>NOTE:</b> You will only need to fork this repo once. You will reuse it for all of your array method exercises.

### Additional resources

[MDN Docs: Array.prototype.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

[MDN Docs: Array.prototype.findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
