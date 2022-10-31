---
title: HTTP request methods
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

In web development, we have access to multiple HTTP request methods. These allow us to communicate with web servers.

The names of the HTTP request methods are verbs and typically indicate what will happen.

We will briefly look at the different types and then later take a deeper look at the more common requests.

## Request methods

We will first look at the four most common request methods:

### `GET`

The `GET` request **gets** data from the specified location. This is only for getting data from a resource. We wouldn't use this method to send data.

An example of a `GET` request would be fetching a list of articles from a server.

### `POST`

The `POST` method **sends** data to a specified location. This is for sending data to a resource, e.g. when we want to create a new item on the server.

An example of a `POST` request would be where we send data to a server, and a new item gets created, such as a new user.

### `PATCH`

The `PATCH` method is when we want to **update** data at a specified location.

An example of a `PATCH` request is if we had a user with information and we wanted to update their information, such as updating their e-mail address.

### `PUT`

The `PUT` method is when we want to **replace** data at a specified location. However, it will also create a new resource if it doesn't exist.

An example of a `PUT` request would be where we want to replace one product with another.

### `DELETE`

The `DELETE` method is when we want to **delete** data at a specified location.

An example of a `DELETE` request would be where we would delete an entire item, such as deleting an article or a user.

## Additional request methods

The following are more network requests; however, they are less commonly used.

### `HEAD`

The `HEAD` method is like a `GET` request, except it will only obtain header information (metadata) and not contain the body.

An example of using the `HEAD` request would be where you'd want to get meta-information about a server without needing response body.

### `CONNECT`

The `CONNECT` method starts two-way communication with a specified location and can be used to open a tunnel.

An example of the `CONNECT` request is when you want to access websites that use SSL.

### `OPTIONS`

The `OPTIONS` method will request options from a specified location so you can find out more about a specified location.

An example of the `OPTIONS` method is checking what methods a server would allow.

### `TRACE`

The `TRACE` method will perform a loop-back test to a specified location and is used for diagnostics. You would send a `TRACE` request to the server, and the server would respond with the same payload. This is usually disabled on production servers (servers out in the real world) but might be enabled on development servers so you could test that the server is working.

An example of a `TRACE` method is where you would want to test the server is responding.

## Classifying HTTP methods

### Safe and non-safe methods

Safe methods never modify resources or change the state of a server. An example of a safe method is `GET`, as it only obtains data.

The `POST` method is a non-safe method as it may change the state of the server by creating a new entry/record.

### Idempotent methods

Idempotent methods can be made once or several times in a row with the same effect while leaving the server in the same state. Examples of these are `GET`, `HEAD`, `PUT` and `DELETE`.

## Additional resources

[MDN Docs: HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

[MDN Web Docs: Idempotent](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent)

[Envato Tuts+: A Beginner's Guide to HTTP and REST](https://code.tutsplus.com/tutorials/a-beginners-guide-to-http-and-rest--net-16340)
