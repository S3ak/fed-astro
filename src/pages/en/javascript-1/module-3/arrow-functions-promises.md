---
title: Arrow functions and promises
description: sample
tags: JavaScript 1
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

In this lesson we look at:

- arrow functions.
- asynchronous code.
- promises.
- making API calls with the **then** and **catch** methods - regular promise syntax.

## Arrow functions

Arrow functions don't use the function keyword and use the => characters instead, hence their name.

We can rewrite the following function:

```js
function logMessage(message) {
  console.log(message);
}
```

like this:

```js
const logMessage = (message) => console.log(message);
```

[Scrimba video](https://scrimba.com/c/cg29pns6)

## Asynchronous code

In the GET request API call we used the async and await keywords to make the call.

That was an example of **asynchronous code**.

Previously the code we wrote had been executed or returned a value as soon as it was encountered in the program, apart from in the setTimeout method where we deliberately delay the execution.

Async/await is a fairly recent addition to JavaScript that allows us to work with promises in a more readable fashion, but we need to also look at using promises in the regular way as you will encounter this syntax in other people's code.

If you log a message

```js
console.log("I am the first log");
```

the message is displayed as soon as the code is run.

If you declare a function

```js
function logMessage() {
  console.log("Function called");
}
```

the function is run as soon as it's called:

```js
logMessage(); // Function called
```

The following will be executed after the function has been called.

```js
console.log("I am the second log");
```

Running all the statements above will log:

```js
// I am the first log
// Function called
// I am the second log
```

The code is called statement by statement and each statement waits for the previous one to finish before running. This is called synchronous code.

![Asynchronous code](../images/js/3-3-asyncode.png)

That might seem obvious, but sometimes it's not a good idea to wait for the previous statement to finish before executing the next one.

If we made a call to a server and the user's Internet connection was slow or the server was busy, waiting for the call to return before running the next code would create a poor user experience as the interface would appear unresponsive.

**Asynchronous** code doesn't wait for the current statement to finish running before executing the next statement.

## Promises

Promises are a way to execute code asynchronously. When we call a promise, our code doesn’t wait for a response, but moves on to the next line of code.

![Promises](../images/js/3-3-promises.png)

Once executed, the promise is **pending**. At some point it will return and will either have been **fulfilled** or **rejected**.

![Promises2](../images/js/3-3-promises2.png)

From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):

A Promise is in one of these states:

- **pending**: initial state, neither fulfilled nor rejected.
- **fulfilled**: meaning that the operation completed successfully.
- **rejected**: meaning that the operation failed.

### Promise chaining

Sometimes what is executed in our fulfilled function also returns a promise. This is called promise chaining.

![Promises chaining](../images/js/3-3-promisechaining.png)

- **Fulfilled** states are handled by a Promise's **then** method.
- **Rejected** states are handled by a **catch** method.

Both these methods take a function as an argument. This is where we can write code to handle the return value of the promise.

These functions in turn receive an argument which is the return value of the promise (if successful and the promise has resolved) or the error from a rejected promise.

![Promises chaining 2](../images/js/3-3-promisechaining2.png)

Most of the time you won't write your own promises but will rather use libraries and other existing code built on promises.

## then/catch example

In this video we will rewrite the async/await API call to use regular promise syntax.

<iframe src="https://player.vimeo.com/video/450776515?h=1adda6b1fd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="GET request with regular promises"></iframe>

[Code](https://github.com/NoroffFEU/get-request-with-regular-promise-syntax) from the video.

<hr>

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module3-lesson3).

Attempt to answer the questions before checking them against the [answers branch](https://github.com/NoroffFEU/lesson-task-js1-module3-lesson3/tree/answers) of the repo.
