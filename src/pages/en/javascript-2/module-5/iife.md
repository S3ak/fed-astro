---
title: IIFE
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

IIFEs (Immediately-Invoked Function Expressions), pronounced "Iffys", are functions that are immediately executed without you having to explicitly call them.

In the example below, we will have the `console.log` log to the console without having to do anything. This is because the function is automatically being called.

```js
(function () {
  console.log("This function is called as soon as the function is defined");
})();
```

## Notes regarding IIFE

There are major important parts of an IIFE to take note of:

1. There is an anonymous function that prevents variables inside the IIFE from polluting the global scope.

2. After the function is the invoked function expression `()` which causes the function to be called.

## Use cases

An IIFE on its own is useful, however it forms the basis of the module pattern which we will cover shortly.

## Additional resources

[MDN docs: IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE/)
