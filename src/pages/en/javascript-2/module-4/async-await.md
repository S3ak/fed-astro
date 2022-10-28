---
title: Async/Await
description: sample
tags: JavaScript 2
sidebar: javascript-2
---

## Introduction

Async/Await is the next step to learning about asynchronous code in JavaScript. It was added to the ECMAScript 2017 release and is considered a substantial improvement to the way we deal with asynchronous code in JavaScript.

We are used to writing our code in a sequential format, and asynchronous code changed that as our code no longer ran in sequential format.

Async/Await addresses this by allowing us to write our code in a sequential way while still handling asynchronous code.

## How it works

Async/Await gives us two new keywords:

**`async`**: This keyword must be added to the start of a function declaration so that it becomes an "async" function.
**Note:** We have to include this to make use of the `await` keyword.

**`await`**: This keyword must be added at the start of any function call that needs to be dealt with asynchronously.

```js
// The "async" keyword is added at the front of the function
// turning it into an asynchronous function.
async function myAsyncFunction() {
  // The "await" keyword is added before the function call of "getFetch()"
  const result = await doFetch();
}
```

Let's look at a basic implementation. In this example, you will see that we have added `async` to the start of the function. We have also added `await` to the front of our `fetch` function.

```js
async function doFetch() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
}
```

## Example

Let's take a look at a practical example of `async await`. In this example we will get data from an API, parse it as JSON and then return the data.

```js
async function doFetch(url) {
  const data = await fetch(url);
  const json = await data.JSON();
  return json;
}
```

This function will return a promise so we will need to `async await` to get our data.

The example below looks at how we could make use of above `doFetch()` function:

```js
// Fetches data from the URL passed in
async function doFetch(url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

// Our main function that will call the data
// using await. If we don't use await then we will
// instead get a promise
async function main() {
  const articles = await doFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(articles);
  // Returns:
  // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
}

// Execute our code
main();
```

## Try/catch blocks

When we deal with APIs there is a chance that something will go wrong, such as the server being down or our internet not working.

We, therefore, need to deal with handling errors.

When we use `async await`, we generally want to have our code wrapped in `try catch` code blocks.

### Try/catch/finally syntax

The try/catch/finally blocks break down into the following:

`try`: This is our main code that we attempt to run, such as fetching data from an API.

`catch`: This block of code will only execute if there was a problem with the code in the `try` block, such as an error being thrown.

`finally`: This is an optional block of code which will run regardless of whether the `try` block was successful or if an error was thrown and the `catch` block was executed.

```js
try {
  // This is the code that will run
} catch (error) {
  // This is where we can handle errors
} finally {
  // This code will execute at the end regardless of
  // whether we had an error or not
}
```

### Try/catch/finally example

Let's extend our API call example to include a try/catch block:

```js
async function doFetch(url) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("API call is done");
  }
}
```

## Multiple parallel requests

We can use the `Promise.all()` helper function to get data from multiple API end points.

It takes multiple promises and then returns a single array containing all of the results as different items in the array.

If we were to use `async await`, then we would have to wait for each request to finish sequentially, which may not be efficient.

The syntax looks as follows:

```js
const promise1 = Promise.resolve("Promise 1 result");
const promise2 = Promise.resolve("Promise 2 result");
const promise3 = Promise.resolve("Promise 3 result");

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Logs:
// ["Promise 1 result", "Promise 2 result", "Promise 3 result"];
```

### Practical example of Promise.all()

Let's take a look at a more practical example that uses the previous `doFetch` function we created.

```js
async function doFetch(url) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const data = await Promise.all([
    doFetch("https://jsonplaceholder.typicode.com/todos/1"),
    doFetch("https://jsonplaceholder.typicode.com/todos/2"),
    doFetch("https://jsonplaceholder.typicode.com/todos/3"),
  ]);
}

main();
```

## Additional resources

[MDN Docs: How to use promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

[MDN Docs: Async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

[StackOverflow: Any difference between await Promise.all() and multiple await?](https://stackoverflow.com/questions/45285129/any-difference-between-await-promise-all-and-multiple-await)

[MDN: Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
