---
title: HTTP response status codes
description: sample
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

HTTP response status codes are codes that are sent back by the server. These codes are very useful because they let us know if our request was successful or not.

A very common status code you've probably already seen is a `404`, where a website would display a message like "Page not found".

For example, if you did a `GET` request and received a `200` (`OK`) response code, you would know that the request was successful. If we received a `404` (`Not Found`) response code, we would know that the requested item did not exist on the server.

## Categories of responses

Response codes are grouped together into ranges and categories:

### 1. Information responses (`100` - `199`)

These are responses that will indicate what was received and understood.

### 2. Successful responses (`200` - `299`)

These are responses that will indicate that the request you made was successful.

### 3. Redirection messages (`300` - `399`)

These status codes indicate that additional action must be taken before the request can be completed. These status codes are usually used in URL redirection (taking a user to another webpage).

### 4. Client error responses (`400` - `499`)

These status codes are for when the client has caused an error. An example of this is sending the wrong payload that the server expected.

### 5. Server error responses (`500` - `599`)

These status codes are for when the server itself has issues. There might be a problem in the code that throws an error, which can then be sent back to the client so that they know there is an issue with the server.

## Lesson task

It is essential to know what the different range of status codes are.

### Goal

You will be able to recall what the different status code categories are.

You will also have briefly looked at the different status codes that are available.

### Brief

Complete the Level 1 process.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Memorise the different categories of HTTP response status codes at the top of the [MDN: HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) page.

2. Go through the list of status codes on the [MDN: HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) page. You do not have to memorize these, but it's good to get some indication of how these codes would look.

## Additional resources

[HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
