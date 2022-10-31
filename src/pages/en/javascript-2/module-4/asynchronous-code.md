---
title: Asynchronous code
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Asynchronous code is code that can run independently of our program flow. An example of this is when we fetch data from an API, such as a backend server, and we have to wait for this data to arrive.

We will often be dealing with asynchronous code, so we must learn how to deal with it.

## Synchronous code

Synchronous code runs in sequence (line after line) and is very predictable, as you know exactly what will happen next. There is no unpredictability, and you expect each line of code to run how it can be read in the code.

In the following example, we do some basic arithmetics and then console.log them.

```js
const a = 50;
const b = 10;

const resultOne = a + b; // 60
const resultTwo = a - b; // 40

console.log("resultOne", resultOne);
// Logs: 60
console.log("resultTwo", resultTwo);
// Logs: 40
```

![Synchronous code example](../images/javascript-2/async/asynchronous-code-example.png)

## Asynchronous code

Asynchronous code will run without blocking or blocking the main thread. We would have many problems on our hands if our application had to pause or stop each time we had to perform an account that took some time to complete.

Asynchronous programming allows us to concurrently run our code that takes X amount of time to complete so that it doesn't block our main program.

### Example

In this following example, we are:

1. Console.logging a value before a timer
2. Setting a timer to run for 3 seconds
3. Console.logging a value after a timer

```js
console.log("Console.log BEFORE timer");
// Creating a timer
setTimeout(() => {
  console.log("Code inside of timer");
}, 3000);
console.log("Console.log AFTER timer");
```

![Asynchronous code example](../images/javascript-2/async/asynchronous-code-example.png)

Take note of how the timer code inside the timer runs _after_ the other console.logs.

If the code were synchronous, then our last console.log would only have been executed _after_ the timer had finished.

## Additional resources

[MDN Docs: Introducing asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

[LogRocket.com: Understanding (and effectively using) asynchronous JavaScript](https://blog.logrocket.com/understanding-asynchronous-javascript/)
