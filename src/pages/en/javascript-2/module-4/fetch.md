---
title: fetch()
keywords: sample
tags: JavaScript 2
sidebar: javascript-2
permalink: javascript-2/fetch.html
folder: javascript-2
---

## Introduction

The Fetch API (`fetch()`) provides a global `fetch` method. It is used to send network requests to a server.

Examples of this can be to get data, send data, update data and delete data.

`fetch` is modern and more versatile, and you should use it over XMLHttpRequests. There are some unique use cases for XMLHttpRequests, such as monitoring transfer progress, but the vast majority of the time, you'll be using `fetch` when doing API calls and dealing with network requests.

## Syntax

The syntax for fetch is as follows:

```js
fetch(url, options);
```

`url`: This is what you will be fetching data from.

`options`: This is an **optional** options parameter where you can modify the request you are making. You can change the type of HTTP request method, change headers, add data etc.

## Basics

A basic fetch request is actually very simple. Let's have a look at a basic example.

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
// Logs:
// {
// 	"userId": 1,
// 	"id": 1,
// 	"title": "delectus aut autem",
// 	"completed": false
// }
```

Let's break this example down step by step.

### 1. `fetch('https://jsonplaceholder.typicode.com/todos/1')`

Here we have called `fetch()` with a URL, `'https://jsonplaceholder.typicode.com/todos/1'`.

### 2. `.then((response) => response.json())`

We now chain a `.then` in which the parameter automatically passed through is a [`Response` object](https://developer.mozilla.org/en-US/docs/Web/API/Response). This object contains a representation of the entire HTTP response.

We can't simply just use the entire HTTP response; we need to convert the data it sends into a usable format. We could turn this into plain text, but what would be perfect for us is to turn it into JSON. This is then immediately usable by us as we're coding in JavaScript.

We call `response.json()`, but this returns a promise, so we will need to chain another `.then` that contains our JSON result.

### 3. `.then((json) => console.log(json));`

This is the last line of our code. We are chaining another `.then`, and the parameter passed this time is our JSON data.

We now have our data from the URL we specified and are ready to use it.

## Options

There is an optional parameter we can pass to our `fetch()` function.

```js
fetch(url, options);
```

This `options` object lets us modify our network request and include data if we are sending data instead of fetching it.

Examples of the options we can include are:

- `method`: This is the type of request, such as `GET`, `POST`, `PUT`, `DELETE` etc. We will be covering these in more detail later. By default a `GET` request is used.

- `headers`: This is a nested object that allows you to change the type of headers. Usually, we will make use of `'Content-Type': 'application/json'`, indicating that the data we are sending is JSON.

- `body`: This is where we pass in data that we want to send to a server. The data type we send here must match the `Content-Type` we set in the header. We will typically convert our data to JSON before adding it to the body e.g. `body: JSON.stringify(data)`.

### Options example

In this example, we will do a `POST` request, which is when we _send_ data to a server.

**Note:** Do not be concerned about knowing about the different `POST`, `GET`, `PUT` etc. methods yet. We will cover these in detail at a later stage.

In this example, we are going to create a new blog post on the server:

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

### Using a separate options object

We can use our own `options` object and pass this into the `fetch()` function. This can make our code more concise and neater to work with.

```js
// An object that contains our options
const fetchOptions = {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

// Using the `fetchOptions` object we created aboves
fetch('https://jsonplaceholder.typicode.com/posts', fetchOptions)
  .then((response) => response.json())
  .then((json) => console.log(json));
```

## Additional resources

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

[JavaScript.info](https://javascript.info/fetch)
