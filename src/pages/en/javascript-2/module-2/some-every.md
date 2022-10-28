---
title: some() and every()
description: sample
tags: JavaScript 2
sidebar: javascript-2
---

## Introduction: some()

`some()` will check an array to see if at least one of its elements passes the given condition. If it does, it will break out of the `some()` method and return `true`. If nothing matches the condition, then it will return `false`.

`some()` is ideal for finding if an array contains a value. This is very similar functionality to the `find()` array method, however, the key difference is that `some()` will return a `boolean` whereas `find()` will either return the element if found or `undefined`.

## Syntax

```js
const values = [100, 200, 300, 400, 500];

const newArray = values.some((element, index, array) => {
  // Return true if it matches your condition. If it does, it will stop iterating and return true for the result of the array
  // Return false if the condition is not matched
});
```

### Parameters

**element:** The current element in the array that we are working with

**index:** (Optional) The current index of where we are in the array

**array:** (Optional) The original array `some` was called on

## Basic example

Let's have a look at a couple of basic examples to help with the understanding of how `some()` will work.

#### Basic example 1: Condition matches

In this example, we have a matching condition. We check if the values are `>= 3` and we have a 3 in the array. As soon as we meet this condition, which we do when we have the value of `3`, you can see that the `some()` array method breaks out, stops looping, and returns a `true` value.

```js
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didMatchCondition = values.some((value, index) => {
  console.log({ index, value });
  if (value >= 3) {
    return true;
  }
});

console.log("didMatchCondition:", didMatchCondition);
// Return/output:
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// didMatchCondition: true
```

#### Basic example 2: Condition doesn't match

The code in this example is exactly the same as the last basic example. However, we now check if the values are `>= 100`, which none of them are.

You will see that all of the items are looped over, and the value returned from the `some()` array method is `false`.

```js
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didMatchCondition = values.some((value, index) => {
  console.log({ index, value });
  if (value >= 100) {
    return true;
  }
});

console.log("didMatchCondition:", didMatchCondition);
// Return/output:
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// index: 4 value: 4
// index: 5 value: 5
// index: 6 value: 6
// index: 7 value: 7
// index: 8 value: 8
// index: 9 value: 9
// didMatchCondition: false
```

## Practical examples

Let's look at more practical applications of using the `some()` array method.

### Practical example 1: Course Modules

In this example we have a list of modules as objects in an array. They each contain a `name` string and a `isComplete` boolean indicating if a module has been completed. We check each if each module has been completed with the `some()` array method which breaks out of the `some()` array method loop as soon as it finds a module that has been completed. When a module has been completed, `true` is returned and set as the value for `isSomeCoursesFinished`.

```js
const modules = [
  { name: "Introduction to Programming", isComplete: true },
  { name: "HTML", isComplete: true },
  { name: "CSS", isComplete: false },
  { name: "JavaScript", isComplete: true },
];

const isSomeCoursesFinished = modules.some((currentModule, index) => {
  console.log("index", index);
  return currentModule.isComplete === true;
});

console.log(isCourseFinished);
// Returns:
// index 0
// true
```

---

## Introduction: every()

`every()` will check if each of the values in an array matches the given condition. If all elements match the condition, it will return `true`. If it finds an element that does not match the condition, it will immediately break out of the `every()` array method and return `false`. In short, `every()` will check to ensure that every element in the array matches the given condition.

## Syntax

```js
const values = [100, 200, 300, 400, 500];

const newArray = values.every((element, index, array) => {
  // Return true if it matches your condition and every() will keep looping
  // Return false if the condition is not matched and it will immediately break out, and return false as the final result. This is because not "every" value is valid.
});
```

### Parameters

**element:** The current element in the array that we are working with

**index:** (Optional) The current index of where we are in the array

**array:** (Optional) The original array `every` was called on

## Basic examples

Let's look at some basic examples of `every()` so we can see how it works.

#### Basic example 1: Conditions all met

In this example, we check that all of our values are greater than/equal (`>=`) to 0, which they all are. You will see that the `every()` has traversed through the entire array and then returned a value of `true`.

```js
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didAllMatchCondition = values.every((value, index) => {
  console.log("index:", index, "value:", value);
  if (value >= 0) {
    return true;
  }
});

console.log("didAllMatchCondition:", didAllMatchCondition);
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// index: 4 value: 4
// index: 5 value: 5
// index: 6 value: 6
// index: 7 value: 7
// index: 8 value: 8
// index: 9 value: 9
// didAllMatchCondition: true
```

#### Basic example 2: Conditions not met

In this example, we are checking if any values are equal to or below 3. Once we get to `4`, this condition is no longer true so it breaks out of the loop and returns `false`.

```js
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didAllMatchCondition = values.every((value, index) => {
  console.log("index:", index, "value:", value);
  if (value <= 3) {
    return true;
  }
});

console.log("didAllMatchCondition:", didAllMatchCondition);
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// index: 4 value: 4
// didAllMatchCondition: false
```

## Practical examples

Let's look at more practical applications of using the `every()` array method.

#### Practical example 1: Course modules

In this example we have a list of modules as objects in an array. They each contain a `name` string and a `isComplete` boolean indicating if a module has been completed. We check each if each module has been completed with the `every()` array method which breaks out of the `every()` array method loop as soon as it finds a module that hasn't been completed. When a module has been completed, `false` is returned and set as the value for `isCourseFinished`.

```js
const modules = [
  { name: "Introduction to Programming", isComplete: true },
  { name: "HTML", isComplete: true },
  { name: "CSS", isComplete: false },
  { name: "JavaScript", isComplete: true },
];

const isCourseFinished = modules.every((currentModule) => {
  return currentModule.isComplete === true;
});

console.log(isCourseFinished);
// Returns:
// false
```

## Additional resources

[MDN Web Docs: Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

[MDN Web docs: Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

[GeekforGeeks.com: What is the difference between every() and some() methods in JavaScript ?](https://www.geeksforgeeks.org/what-is-the-difference-between-every-and-some-methods-in-javascript/)
