---
title: HTTP PUT request method
description: sample
tags: JavaScript 2
sidebar: javascript-2
---

## Introduction

We are going to take a deeper look at the HTTP PUT request method.

The HTTP PUT request method will _replace_ data at the target resource.

We are targeting a resource so we will need to add an identifier at the end of the URL, such as an ID. The exact value needed here will depend on what the server is using. It need not be an id.

We will also need to include the new data inside the `body` of the optional `options` parameter we supply to the fetch.

## Example

Let's have a look at how we can do a `PUT` request.

```js
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
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
```

## Additional resources

[MDN Web Docs: PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)
