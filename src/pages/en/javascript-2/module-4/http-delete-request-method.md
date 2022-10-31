---
title: HTTP DELETE request method
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We are going to take a deeper look at the HTTP DELETE request method.

The HTTP DELETE request method will _delete_ data from a specified location.

When deleting a request, we usually need to indicate something, such as an id, so that the resource knows what item to delete.

For example, we would usually need a URL like `www.example.com/1`, where 1 is the ID of the post we want to delete. The server would then use that ID to delete the item.

## Example

Let's have a look at how we can do a delete request.

In the example below, we are passing an ID of 1 to the end-point. Take a note of how there is a 1 at the end of the URL:

```
fetch('https://jsonplaceholder.typicode.com/posts/1
```

We now use this URL with the method of `DELETE`. If successful, this will delete the item with an ID of `1` from the server.

```js
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});
```

## Adding the Response object

In the request above, we have requested to have the post deleted, but we have no indication if this was successful or not in our code.

We can look at the `Response` object to see if our request was successful or not.

In this example, we are adding the `Response` object to check the status. We can see this is successful by two indicators.

1. We can see that the status `400`

2. We can see that `ok` is `true`.

This is an indication that our `DELETE` request was successful.

```js
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
}).then((response) => {
  console.log(response);
});
// Logs:
// body: (...)
// bodyUsed: false
// headers: Headers {}
// ok: true
// redirected: false
// status: 200
// statusText: ""
// type: "cors"
// url: "https://jsonplaceholder.typicode.com/posts/1"
```

If our response wasn't successful, then we wouldn't have a `status` of `200` and `ok` would be `false`. We can use these to our advantage.

If we had a status of `404`, the resource could not be found. If we had an error of `401`, then that would be that a user wasn't authenticated to make this request. These different error messages could be used to display different messages to the user.

## Additional resources

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)
