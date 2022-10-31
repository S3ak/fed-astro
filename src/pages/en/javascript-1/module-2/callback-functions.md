---
title: forEach, setTimeout and setInterval
description: sample
tags: JavaScript 1
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

In this lesson we will look at functions as arguments - passing functions into functions.

This is something that happens frequently. Functions get passed into other functions and are executed inside the receiving function.

We will first take a look at how that works, and then discuss practical implementations of this pattern when looking at:

- forEach method
- setTimeout method
- setInterval method

## Functions as arguments

These are often called **callbacks**. It is very common to pass functions as arguments to other functions and have the receiving function execute them.

[Scrimba video](https://scrimba.com/c/cMgggbHG)

## forEach method

The **forEach** method (function) is an alternative to the **for** loop.

When you use a forEach function, you will pass in a function to be executed by the forEach function for each item in the array you are looping over.

It does have some limitations though, such as the inability to use **break** or **continue**.

[Scrimba video](https://scrimba.com/c/cJggwKAN)

## setTimeout

The setTimeout method is used to execute a function after a specified period.

It has the following structure:

```js
setTimeout(function () {
    // do something},
1000);
```

It has two required arguments:

1. the function to be executed.
2. the delay - the delay in milliseconds before the function is executed.

[Scrimba video](https://scrimba.com/c/cLgggqTQ)

## SetInterval

The setInterval method is similar to setTimeout but it executes a function at a certain interval until it is cleared.

It has the following structure:

```js
setInterval(function () {
  // do something
}, 1000);
```

[Scrimba video](https://scrimba.com/c/czLLpgfv)

<hr>

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module2-lesson1).

Attempt the answers before checking them against the answers in the [answers branch](https://github.com/NoroffFEU/lesson-task-js1-module2-lesson1/tree/answers) of the repo.
