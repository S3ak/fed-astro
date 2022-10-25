---
title: HTTP PATCH request method
description: sample
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We are going to take a deeper look at the HTTP PATCH request method.

The HTTP PATCH request method will _update_ (modify) data at a specified resource. This is intended to do a partial update instead of replacing an item entirely.

When doing a `PATCH` request, we will need to specify an item we are impacting, such as adding an id.

For example, if our post had an ID of 1, we could do a `PATCH` request to `www.example.com/posts/1`. Note how there is a `1` at the end of the URL.

We would also need to include data in the `body` of the `options` as we are updating an item. If we are updating an item, then it makes sense that we'd have to include the data we want to update. An example of this could be changing a user's email address or the title of a post.

## Example

Let's have a look at how we can do a `PATCH` request.

```js
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({
    title: "foo",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

## Additional resources

[MDN Web Docs: PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)
