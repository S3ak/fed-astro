---
title: Promises
description: sample
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

A `Promise` object is designed for asynchronous code. It will handle different states for you when dealing with asynchronous code, such as a success or failed state.

Promises were introduced to JavaScript ES6 (ES2015). They are built on top of callbacks. They offer a cleaner way of dealing with asynchronous code and are meant to be a replacement for asynchronous callbacks.

## How they work

A promise will be in one of these states when you are working with them:

- `pending`: Initial state. When it is not in `fulfilled` or `rejected` it will be in this state.
- `fulfilled`: The operation was successful.
- `rejected`: The operation failed.

Once you have initiated a promise, it will eventually either end up in a `fulfilled` or a `rejected` state and then go back to a pending state.

## Basic example

Let's have a look at a basic example of a promise:

In this example, we created a variable (`shouldResolve`) that is hardcoded. Change `shouldResolve` to true or false to see the success and fail states of the promise.

```js
const myPromise = new Promise((resolve, reject) => {
  // We are hardcoding a value for this example
  const shouldResolve = true;
  if (shouldResolve) {
    // If the code inside of the promise was able to do what
    // it needed to do, then it will call this 'resolve' callback
    resolve("Promise resolved successfully.");
  } else {
    // If the code inside of the promise failed to do what
    // it needed to do then it will call this 'reject' callback
    reject("Promise has failed");
  }
});

myPromise.then((result) => {
  // Logs either the 'resolve' or 'reject' returns based on
  // whether the promise succeeded or failed
  console.log(result);
});
```

## .then() and chaining

We will often have to have multiple events happen after each other. When we looked at asynchronous callbacks, we saw how this led to "callback hell" or the "pyramid of doom".

In Promises we use a `.then()` method. The code in this `then()` block will run only after the previous code has finished running.

In the following example, we are chaining `.then()` methods one after each other:

```js
getData.then().then().then();
```

Let's now take a look at a more practical example. In this example, we are going to use `fetch`. When the data is returned it also has to be parsed to JSON so we can make use of it.

```js
// We fetch the data from the URL
fetch("https://jsonplaceholder.typicode.com/todos/1")
  // We have to asynchronously parse the data into JSON
  //   so we can make use of it
  .then((response) => response.json())
  // Data is now available as
  .then((json) => console.log(json));
```

## .catch()

What if something goes wrong during our asynchronous call? The server might have problems, or our internet might be down.

We have a `.catch` method to handle this.

Any errors that get thrown will be caught by this `.catch` method.

The `.catch` method includes the error as the first parameter.

```js
doSomething()
  .then()
  .catch(error =>
    // Handle the error here
  );
```

Let's have a look at a more practical example. The `fetch` method from earlier has been expanded to include a `.catch` method. The URL has been changed to `abc`, which is not a real URL, so it will always cause the method to fail.

```js
fetch("abc")
  .then((response) => response.json())
  .then((json) => console.log(json))
  // An error is going to be thrown causing the code below
  // to run
  .catch((error) => {
    console.log("An error has been thrown");
    console.log(error);
  });
```

## .finally()

This is the last method of Promises we will be looking at it.

It gets added to the end of the Promise chain. It will always run regardless of whether there was an error or not. We use it to handle any kind of "tear down", i.e. things that should happen after our asynchronous code is done.

A common use case of this is dealing with a Loading Spinner. We first show a Loading Spinner when our asynchronous code starts, and then we hide the Loading Spinner at the end. This Loading Spinner needs to be hidden at the end regardless of whether or not we have an error. The `.finally()` method makes this trivial to deal with.

Let's look at a basic example of how you use a `.finally()` method:

```js
doSomething()
  .then()
  .catch()
  .finally
  // Handle tear down here
  ();
```

Let's look at a more practical example. In this example, we have a `isLoading` variable which we set to `true` before we start the asynchronous call. This variable would be used to show a Loading Spinner or similar. When the asynchronous call is finally finished we set `isLoading` to false, which in theory would hide the Loading Spinner:

```js
let isLoading = true;
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
  .catch((error) => console.log(error))
  .finally(
    isLoading = false;
  )

```

## Additional resources

[MDN Web Docs: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
