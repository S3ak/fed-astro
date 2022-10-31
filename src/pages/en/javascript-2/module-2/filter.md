---
title: filter()
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

The `.filter` array method loops through the array and filters out items which are then returned as a new array. If you return `true` for an element, it is kept in the new array, otherwise, returning `false` will remove it from that new array.

The `filter` array method being able to exclude items from the returning array makes it ideal for removing items from a list, however, this is not the only use case.

## Syntax

**NOTE:** The `.filter` array method does not modify the original array and instead returns a new array.

```js
const values = [100, 200, 300, 400, 500];

const newArray = values.filter((element, index, array) => {
  // Return true if you want to keep the item in the array being returned
  // Return false if you don't want the item to be included in the array being returned
});
```

### Parameters

**element:** The current element in the array that we are working with

**index:** (Optional) The current index of where we are in the array

**array:** (Optional) The original array `filter` was called on

## Additional notes

### Implicit `false` return

The `filter` method has an implicit `false` return meaning that it will always return false if you haven't returned a value. This means that in most cases, you usually only have to check for `true` conditions.

### Returning a conditional check

In every `if` statement, the conditional check evaluates to either true or false, no matter how complex this conditional check is.

We can use this to our advantage. If the conditional check is evaluating to either `true` or `false`, then we could simply return the conditional check in an arrow function.

Consider the following example, which filters out numbers that are equal to or above 3.

```js
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((number) => {
  if (number >= 3) {
    return true;
  } else {
    return false;
  }
});
console.log(filteredNumbers);
// Returns:
// [3, 4, 5]
```

In line 3 of the example above, we check if the `number` is greater than or equal to 3. This always evaluates to either true or false, regardless of how complex this conditional check is:

```js
// This always evaluates to either true or false
if (number >= 3) {
```

Our `.filter` method relies on the value being a boolean (either `true` or `false`), so we could simplify the above example to return the conditional check:

```js
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((number) => number >= 3);
console.log(filteredNumbers);
// Returns:
// [3, 4, 5]
```

You can see that our `.filter` method is now doing the exact same job with 1 line of code instead of 7.

#### Practical examples

##### **Example 1: Filter numbers above 100**

In this example, we have a list of numbers. If a number is equal to or above 100 then we keep it in our new array that gets returned.

```js
const numbers = [0, 25, 50, 75, 100, 125, 150, 175, 200];
const filteredNumbers = numbers.filter((number) => {
  if (number >= 100) {
    // If the number is equal to or above 100 then we return true
    // This will keep this element in the new array
    return true;
  } else {
    // If we return false then the item will not be included in the new array
    return false;
  }
});
console.log(filteredNumbers);
// Returns:
// [100, 125, 150, 175, 200]
```

We can refactor the above code to be more concise:

```js
const numbers = [0, 25, 50, 75, 100, 125, 150, 175, 200];
const filteredNumbers = numbers.filter((number) => number >= 100);
console.log(filteredNumbers);
// Returns:
// [100, 125, 150, 175, 200]
```

##### **Example 2: Filter ages >= 18**

In this example, we filter through a list of people and only select adults over the age of 18. Our array is a list of people objects that all contain a `name` and `age` property, so we will need to check these nested properties.

```js
const people = [
  { name: "Kari", age: 28 },
  { name: "Astrid", age: 32 },
  { name: "Hans", age: 22 },
  { name: "Inger", age: 19 },
  { name: "Liv", age: 42 },
  { name: "Kristoffer", age: 12 },
  { name: "Anne", age: 12 },
  { name: "Martin", age: 17 },
  { name: "Joakim", age: 45 },
  { name: "Ellen", age: 7 },
];

const adults = people.filter((person) => {
  if (person.age >= 18) {
    return true;
  }
});

console.log(adults);
// Returns:
// [
//   {name: 'Kari', age: 28},
//   {name: 'Astrid', age: 32},
//   {name: 'Hans', age: 22},
//   {name: 'Inger', age: 19},
//   {name: 'Liv', age: 42},
//   {name: 'Joakim', age: 45}
// ]
```

We can refactor the above example to be more concise:

```js
const people = [
  { name: "Kari", age: 28 },
  { name: "Astrid", age: 32 },
  { name: "Hans", age: 22 },
  { name: "Inger", age: 19 },
  { name: "Liv", age: 42 },
  { name: "Kristoffer", age: 12 },
  { name: "Anne", age: 12 },
  { name: "Martin", age: 17 },
  { name: "Joakim", age: 45 },
  { name: "Ellen", age: 7 },
];

const adults = people.filter((person) => person.age >= 18);

console.log(adults);
// Returns:
// [
//   {name: 'Kari', age: 28},
//   {name: 'Astrid', age: 32},
//   {name: 'Hans', age: 22},
//   {name: 'Inger', age: 19},
//   {name: 'Liv', age: 42},
//   {name: 'Joakim', age: 45}
// ]
```

##### **Example 3**

In this example, we have a list of games. We want to filter the games that have multiplayer and a rating of 8 or higher.

```js
const games = [
  { title: "Mayhem Fighter", isMultiplayer: true, rating: 8 },
  { title: "Build-a-farm", isMultiplayer: true, rating: 9 },
  { title: "Ghost Story", isMultiplayer: false, rating: 8 },
  { title: "Fast Car Racer", isMultiplayer: true, rating: 7 },
  { title: "Elf and Dwarf RPG", isMultiplayer: false, rating: 8 },
];

const filteredGames = games.filter((game) => {
  if (game.isMultiplayer === true && game.rating >= 8) {
    return true;
  }
});

console.log(filteredGames);
// Returns:
// [
//   {
//     name: 'Mayhem Fighter',
//     isMultiplayer: true,
//     rating: 8,
//   },
//   {
//     name: 'Build-a-farm',
//     isMultiplayer: true,
//     rating: 9,
//   },
// ];
```

The above example can be refactored to be more concise:

```js
const games = [
  { title: "Mayhem Fighter", isMultiplayer: true, rating: 8 },
  { title: "Build-a-farm", isMultiplayer: true, rating: 9 },
  { title: "Ghost Story", isMultiplayer: false, rating: 8 },
  { title: "Fast Car Racer", isMultiplayer: true, rating: 7 },
  { title: "Elf and Dwarf RPG", isMultiplayer: false, rating: 8 },
];

const filteredGames = games.filter(
  (game) => game.isMultiplayer && game.rating >= 8
);

console.log(filteredGames);
// Returns:
// [
//   {
//     name: 'Mayhem Fighter',
//     isMultiplayer: true,
//     rating: 8,
//   },
//   {
//     name: 'Build-a-farm',
//     isMultiplayer: true,
//     rating: 9,
//   },
// ];
```

## Video on array .filter() method

<iframe src="https://player.vimeo.com/video/739188522?h=3a5336506f" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://player.vimeo.com/video/739188522?h=3a5336506f" target="_blank" alt="Classes video">Link to video</a>

<hr>

## Lesson task

Knowing how to use the `filter` array method is very important and it can significantly reduce the complexity of your code.

### Goal

You will practise using the `filter` array method.

### Brief

Complete the Level 1 process.

> <b>NOTE:</b> Lesson Tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Fork the [Array Method Exercises repo](https://github.com/NoroffFEU/array-method-exercises) and complete the exercises in the `filter` directory.

> <b>NOTE:</b> You will only need to fork this repo once. You will reuse it for all of your array method exercises.
