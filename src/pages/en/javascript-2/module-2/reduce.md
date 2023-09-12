---
title: reduce()
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

[The `.reduce()` array method works a bit differently than other array methods. It is a bit more complex than the other methods, however, with some imagination, it allows one to perform very complex operations with very little code.

Usually, the array methods return a new array. However, in the `reduce` array method, only a single variable is returned. This single variable is passed into each loop and is accessed as the first parameter of the callback. You can then modify this single variable each loop which must also be returned each loop. This single variable then becomes the final result returned by the `reduce` array method once it has finished looping over all of the elements. This single variable can be considered an "accumulator" or "total" as you typically add to it on each loop.

In short, the `reduce` array method has a variable that allows us to modify each loop. You are _reducing_ your values from the original array down to a single value, hence the name `reduce`.

You can follow along with a live example of [Stackblitz](https://stackblitz.com/edit/js-flso65?file=index.js).

Let's have a look at a basic example before diving in a bit deeper:

```js
// Numbers that we will loop through
const values = [2, 3, 5, 10, 20];

const sum = values.reduce((total, value) => {
  // Add our current element from the array to our 'total' accumulator
  total += value;
  // We have to return our 'total' accumulator
  return total;

  // You can see we are setting an initial value of 0 after the callback function
}, 0);

console.log(sum);
// Returns:
// 40
```

### Syntax

**NOTE:** The `reduce` array method does not modify the original array. It returns a single value, however, this value can be an array or an object.

#### The Callback Function

This is the function that runs each time the array method loops, and gives you access to the following arguments:

- **previousValue:** This is the value that is passed from the previous loop, allowing you to build onto it each iteration of the loop

- **currentElement:** This is the current element from the array that you are working with

- **index:** (Optional) The current index of where we are in the array

- **array:** (Optional) The original array `reduce` was called on

#### initialValue (optional)

This is the initial value for the `previousValue` variable. If we don't specify an initial value then the `reduce` method will start with the first value in the array as `previousValue` and the second value in the array as `currentElement`.

```js
const values = [100, 200, 300, 400, 500];

const endResult = values.reduce(
  (previousValue, currentElement, index, array) => {
    return previousValue;
  }
);
```

### A note regarding the initial value

More often than not, you'll need to set the initial value for your `reduce` array methods. If you do not provide a value, it will set the `previousValue` as the element at index 0 of the array, and then the `currentElement` as index 1 of the array. Basically, it's starting one step forward. This works fine if your `previousValue` is the same data type as the `currentElement` and you would expect the end result of the array method to have the same data type.

Let's look at a case where a problem arises if we don't specify an initial value.

We have a bunch of values (`nestedValue`) that are nested inside of objects. We want to add these together:

```js
// Adding these values together should give us a result of 40
const values = [
  { nestedValue: 10 },
  { nestedValue: 10 },
  { nestedValue: 10 },
  { nestedValue: 10 },
];

const sumOfValues = values.reduce((total, currentObject) => {
  // Add the 'nestedValue' property from the current object in the array
  total += currentObject.nestedValue;
  return total;
});

// We do not get our expected answer of 40
console.log(sumOfValues);
// returns:
// [object Object]101010
```

We did not get our expected result of `40` and instead had `[object Object]101010` returned. This is because we didn't specify an initial value. JavaScript used our first value in the array `{ nestedValue: 10}` as `previousValue`. Then when it came to adding `currentObject.nestedValue` from the current element to `previousValue`, it was trying to perform the following equation: `{ nestedValue: 10 } += 10`. If we used an `initialValue` of `0`, this issue would not have occurred.

This issue arose because our `previousValue` was being set to the first element in the array, which was an object when we needed the `previousValue` to be of a number type as we are adding numbers to it.

### Practical examples

Let's have a look at some practical examples.

#### Practical example 1: Add all of the numbers

In this example, we have an array of integers. We add all of the numbers so that we get a total sum of all of the values.

```js
// Sum of these values is 25 (5 + 5 + 5 + 10)
const values = [5, 5, 5, 10];

const sumOfValues = values.reduce((total, value) => {
  // Add the current value to our total
  total += value;
  // Return the total
  return total;
});

console.log(sumOfValues);
// Returns:
// 25
```

Refactored to be more concise:

```js
// Sum of these values is 25 (5 + 5 + 5 + 10)
const values = [5, 5, 5, 10];

const sumOfValues = values.reduce((total, value) => (total += value));

console.log(sumOfValues);
// Returns:
// 25
```

#### Practical example 2: Get the total cost of all products

In this example, we have a list of product objects, each containing a title and a price. We add all of the product prices so that we can get a total for all of our products.

```js
const products = [
  { title: "Cheese", price: 15.0 },
  { title: "Milk", price: 8.99 },
  { title: "Bread", price: 22.0 },
  { title: "Egg", price: 5 },
];

const totalCost = products.reduce((total, currentProduct) => {
  total += currentProduct.price;
  return total;
  // Setting the initial 'total' to 0
}, 0);

console.log(totalCost);
// Returns:
// 50.99
```

Refactored to be more concise:

```js
const products = [
  { title: "Cheese", price: 15.0 },
  { title: "Milk", price: 8.99 },
  { title: "Bread", price: 22.0 },
  { title: "Egg", price: 5 },
];

const totalCost = products.reduce(
  (total, currentProduct) => (total += currentProduct.price),
  0
);

console.log(totalCost);
// Returns:
// 50.99
```

#### Practical example 3: Get the total cost of in-stock products

In this example, we add the prices of a list of products like the previous example. However, this time we need to check that the product is in stock. We also have a quantity for each product being purchased, so we need to calculate this as well.

```js
// All of the in-stock products added together equals 170.95
const products = [
  { title: "Cheese", inStock: false, quantity: 2, price: 15.0 },
  { title: "Milk", inStock: true, quantity: 5, price: 8.99 },
  { title: "Bread", inStock: true, quantity: 3, price: 22.0 },
  { title: "Egg", inStock: true, quantity: 12, price: 5 },
];

const totalCost = products.reduce((total, currentProduct) => {
  if (currentProduct.inStock === true) {
    total += currentProduct.price * currentProduct.quantity;
  }
  return total;
}, 0);

console.log(totalCost);
// Returns:
// 170.95
```

#### Refactored

You could refactor the function so that all of the logic is handled with a ternary in the return. However, one could strongly argue that turning this function into a one-liner makes it difficult to read and understand. In this case, the original logic might have been a better way forward.

```js
// All of the in-stock products added together equals 170.95
const products = [
  { title: "Cheese", inStock: false, quantity: 2, price: 15.0 },
  { title: "Milk", inStock: true, quantity: 5, price: 8.99 },
  { title: "Bread", inStock: true, quantity: 3, price: 22.0 },
  { title: "Egg", inStock: true, quantity: 12, price: 5 },
];

const totalCost = products.reduce(
  (total, currentProduct) =>
    inStock ? (total += currentProduct.price * currentProduct.quantity) : total,
  0
);

console.log(totalCost);
// Returns:
// 170.95
```

## Video on array .reduce() method

<iframe src="https://player.vimeo.com/video/739194782?h=1196f37777" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://player.vimeo.com/video/739194782?h=1196f37777" target="_blank" alt="Classes video">Link to video</a>

<hr>

## Lesson task

Knowing how to use `reduce` is important. You can reduce data down to single objects with some imagination, making it very powerful.

### Goal

You will practise using the `reduce` array method.

### Brief

Complete the Level 1 process.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Fork the [Array Method Exercises repo](https://github.com/NoroffFEU/array-method-exercises) and complete the exercises in the `reduce` directory.

> <b>NOTE:</b> You will only need to fork this repo once. You will reuse it for all of your array method exercises.

## Additional Resources

[MDN Docs: Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

[MDN Docs: reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)
