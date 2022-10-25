---
title: Callbacks
description: sample
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

A callback is a function you pass to another function as an argument.

We can use asynchronous callbacks to deal with asynchronous code.

## How callbacks work

Let's look at the basic principle behind a callback.

```js
// Example function that will get passed as a callback
function exampleFunction() {
  console.log("Example function called");
}

// Our main function that will run the callback function
// being passed to it
function doSomethingWithCallback(callbackFunction) {
  // Calling the function that is being passed
  callbackFunction();
}

// Pass "exampleFunction" function into our main
// "doSomethingWithCallback" function
doSomethingWithCallback(exampleFunction);
```

Let's now take a look at a more practical example.

In this example, we will use the Array `filter` method and pass in a callback function instead of using an inline callback function:

```js
const values = [5, 10, 15, 20];

function isBiggerThan10(value) {
  if (value > 10) {
    return true;
  }
}

const newValues = values.filter(isBiggerThan10);
console.log(newValues);
// Logs:
// [15, 20]
```

## Asynchronous callbacks

Asynchronous callbacks work by nesting callbacks.

Let's look at a fake example to understand how this would look.

**Note:** This fake example has example functions that we call but were not added to the example to reduce complexity.

The following steps take place:

1. We call `showArticles`
2. We do an API call
3. We filter the articles
4. We sort the articles
5. We map through the articles.
6. We display an article.

```js
function showArticles() {
  doAPICall(function (data)) {
    filterArticles(function (data)) {
      sortArticles(function (data)) {
        data.map(function (item) {
          displayArticle(function(item) {
            // Display the article
          })
        })
      }
    }
  }
}
```

The above code looks very complex and difficult to understand, and we haven't even begun adding our actual code.

We went through a normal set of steps one could expect to take when displaying articles from a CMS (Content Management System).

This shows how callbacks can become complex to work with when dealing with asynchronous code.

## Callback hell

Using asynchronous callbacks had a problem where you kept chaining asynchronous callbacks inside of other asynchronous callbacks, giving you something that resembles a pyramid shape, otherwise known as the "pyramid of doom":

```js
asyncFunction(function () {
  asyncFunction(function () {
    asyncFunction(function () {
      asyncFunction(function () {
        // ...
      });
    });
  });
});
```

Fortunately, newer tools (promises and async await) were released that allows us to write cleaner code. When it comes to dealing with asynchronous code, you should lean towards using Promises and Async/Await, both of which will be covered soon.

## Additional Resources

[MDN Docs: Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

[CallbackHell.com](http://callbackhell.com/)

[Wes Bos: The Event Loop and Callback Hell](https://wesbos.com/javascript/12-advanced-flow-control/66-the-event-loop-and-callback-hell)
