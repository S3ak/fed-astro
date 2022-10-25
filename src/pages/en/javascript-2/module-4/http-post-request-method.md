---
title: HTTP POST request method
description: sample
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

The HTTP `POST` request is used to send data _to_ a specified destination.

The data we send is typically referred to as the `payload`.

We will need to make use of the optional `options` object so that we can change our `method` to `POST` so we can include our payload (data we're sending) in the `body`.

## Example

Let's have a look at how we can do a `POST` request.

Below is an example of doing a `POST` request using `fetch`.

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
// Logs:
// {
//   id: 101,
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// }
```

### Request object

Note how we are using a request object as the second parameter. We could instead create our own object and pass that in:

```js
const requestOptions = {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
  .then((response) => response.json())
  .then((json) => console.log(json));
// Logs:
// {
//   id: 101,
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// }
```

## Additional resources

[Typicode - JSON Placeholder](https://jsonplaceholder.typicode.com/guide/)
