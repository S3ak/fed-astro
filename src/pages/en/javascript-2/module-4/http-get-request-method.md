---
title: HTTP GET request method
description: sample
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We are going to take a deeper look at the HTTP GET request method.

The HTTP `GET` request method will get data from a specified location.

## Example

Let's have a look at how we can do a `GET` request.

The `GET` request mode is the default mode when doing a `fetch`.

Below is an example of doing a `GET` request using `fetch`.

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
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

## Request options

We can modify the options we are using when doing a `fetch` request. However, this isn't usually necessary when doing a `GET` request as that is the default mode.

```js
fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "GET",
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

## Additional resources

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
