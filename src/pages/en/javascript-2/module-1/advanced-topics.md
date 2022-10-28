---
title: Advanced topics
description: sample
tags: JavaScript 2
sidebar: javascript-2
---

## Introduction

We are going to cover a list of advanced topics that are very important to know. These topics are often asked in an interview and you should be able to understand and explain these topics yourself.

It is fine if you don't immediately understand the topic being discussed. Keep revisiting the content every day and reading over it again, you'll eventually understand.

## Block of code

A block of code is code inside curly braces.

Here are examples of blocks of code:

**Example 1: A function is a block of code**

```js
function myFunction() {
  // This is a block of code
}
```

**Example 2: Block of code inside an if statement**

```js
const value = 1;
if (value === 1) {
  // This is a block of code
}
```

## Scope

Scope is a concept where code is only accessible through a region or portion of code.

Scopes offer a number of advantages:

1. Avoids namespace collisions:
   Variables with the same name but in different scopes can exist with there being a problem.
2. Security:
   Variables inside of a scope cannot be accessed outside of that scope, protecting these variables from being accessed or altered.
3. Saving memory:
   Variables inside of a block of code will stop existing once the block of code has finished running. For example, a variable created in an if statement will no longer exist once the if statement block of code has finished running.

### Global scope variables

A variable in global scope will be accessible throughout your app.

**NOTE:** You should avoid using global variables as much as possible. They can be changed anywhere in the app which can lead to errors and unpredictable results.

```js
let value = "Hello";

function displayValue() {
  console.log(value);
  // Logs:
  // Hello
}

displayValue();
```

A global variable can be changed anywhere in the app as it's accessible anywhere in the app:

```js
let value = "Hello";

function displayValue() {
  value = "World";
  console.log(value);
  // Logs:
  // World
}

displayValue();
```

### Local scope variables

Local scoped variables are only accessible in the block of code they are created in.

```js
function displayValue() {
  let value = "Hello";
}

// We are going to log 'value` which will throw an error because
//    it was created in the scope of the 'displayValue()' function
console.log(value);
// Logs:
// Uncaught ReferenceError: value is not defined
```

### Lexical scope

Lexical scope refers to the environment where a variable was defined, and how this variable can be accessed by nested functions. In other words, it refers to a function being able to access variables from the parent scope.

```js
function outsideFunction() {
  const value = "Hello world";

  function insideFunction() {
    // 'value' from the outside function can be accessed inside
    // of this nested function.
    console.log(value);
    // Logs:
    // 'Hello world'
  }

  insideFunction();
}

outsideFunction();
```

### Closure

A closure is the combination of a function and the lexical environment the function was declared in. The lexical environment contains any local variables that were in the scope at the time of creation.

```js
function makeFunction(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeFunction(5);

console.log(add5(2));
console.log(add5(5));

const add10 = makeFunction(10);
console.log(add10(20));
```

In the example above, `add5()` and `add10()` are closures. They have the same function logic, but also have their own lexical environments that have different values.

## Pass by Value and Pass by Reference

JavaScript objects and arrays are passed by reference, which means that modifying them as arguments in a function can modify the original variable being passed. This is different to primitive variables which are passed by value and do not alter the original variable.

Let's look at the two different concepts and how they differ.

### Pass by Value

Primitive types in JavaScript (string, number, boolean etc.) are immutable meaning that the value cannot be changed.

Primitive types are "Passed by Value" in functions. When a primitive type is being passed as an argument to a function, it's being passed as that value. The original variable outside of the function will not be changed at all if the parameter gets modified inside of the function.

In this example, we have a variable `myValue` that we pass to a function, and then see how the `myValue` variable doesn't change when we change the parameter:

```js
function setToNewValue(oldValue) {
  // oldValue is 20, but we set it to 100
  oldValue = 100;
  // When we console.log oldValue it's going to be 100
  //    as expected
  console.log(oldValue);
  // Logs:
  // 100
}

let myValue = 20;
// We call 'setToNewValue' which sets the parameter
//    to 100, however this will not change 'myValue'
//    outside of the function
setToNewValue(myValue);
console.log(myValue);
// Logs:
// 20
```

### Pass by Reference

Arrays and Objects are passed by reference.

A reference to the variable, not the value itself, is passed as an argument. This means that modifying an array/object parameter will modify the original array/object being passed to the function.

Let's have a look at an example that puts the above in effect. In this example, we have an array `initialArray` that we pass into a function `changeValue`. This function pushes a new value to the parameter of the function, however, this ends up reflecting in the initial array we passed to the function.

```js
function changeValue(arrayIn) {
  arrayIn.push("Hello world");
}

const initialArray = [0, 1, 2];
// The function 'changeValue' pushes a new value to the
//    parameter, but this ends up adding the value to the
//    array we're passing into the function
changeValue(initialArray);
console.log(initialArray);
// Logs:
// [0, 1, 2, 'Hello world']
```

## Spread syntax

The spread syntax (`...`) allows you to "spread out" an array or object. This lets you very easily copy an array or object.

In this example, we create a new array from another array by spreading it out:

```js
const oldArray = [0, 1, 2];

const newArray = [...oldArray];
console.log(newArray);
// Logs:
// [0, 1, 2]
```

Arrays and objects being passed by reference can be problematic. Spreading out arrays as a parameter is an easy way to solve this.

In this example, we use the spread syntax to create a new array which prevents us from mutating the initial array.

```js
function changeValue(arrayIn) {
  const newArray = [...arrayIn];
  newArray.push("Hello world");
  console.log(newArray);
  // Logs:
  // [0, 1, 2, 'Hello world']
}

const initialArray = [0, 1, 2];
changeValue(initialArray);

console.log(initialArray);
// Logs:
// [0, 1, 2];
```

### Copying one array to another

The spread syntax allows us to very easily combine arrays.

In this example, we spread out two arrays to make a new array.

```js
const array1 = [0, 1, 2];
const array2 = [3, 4, 5];

const newArray = [...array1, ...array2];
```

### Spreading objects

We can also spread objects.

In this example, we duplicate an object by spreading it out.

```js
const myObject = {
  firstName: "Ola",
  lastName: "Nordmann",
};

const newObject = { ...myObject };
console.log(newObject);
// Logs
// {firstName: 'Ola', lastName: 'Nordmann'}
```

<hr>

## Lesson task

### Goal

To be able to explain advanced concepts.

### Brief

These advanced topics are questions you will need to be able to answer once you become more familiar with JavaScript. It is quite common to be asked about some of these concepts in an interview so knowing about them is important.

> <b>NOTE:</b> Lesson Tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

Be able to explain, in your own words, what the following is:

1. A block of code
2. Scope
3. Global scope variables
4. Local scope variables
5. Lexical scope
6. Closures
7. Pass by value and pass by reference

## Additional resources

[MDN Docs: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

[freeCodeCamp: JavaScript closures explained with example](https://www.freecodecamp.org/news/javascript-closures-explained-with-example/)

[MDN Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[Garbage Collection](https://javascript.info/closure#garbage-collection)
