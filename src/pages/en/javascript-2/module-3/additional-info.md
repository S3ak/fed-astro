---
title: Additional info
description: modules
tags: JavaScript 2
sidebar: javascript-2
---

## Introduction

This is additional info to be aware of:

## Modules are deferred by default

When using a `<script>` tag with a normal JavaScript file, you run into the issue where the file loads before the HTML elements have been added to the page. This leads to errors when trying to select the HTML elements with JavaScript because these HTML elements don't exist when the JavaScript is running.

The solution to this is to add `defer` or add the `<script>` import right before the end of the `</body>` tag.

Modules, on the other hand, are deferred by default.

## Dynamic imports

You don't have to load all of your modules upfront. Instead, you can load them when needed.

Below is an example of a dynamic import:

```js
// math.mjs

export addNumbers(a, b) {
  return a + b;
}
```

```js
// main.mjs
async function doSum() {
  const mathModule = "./math.mjs";

  const { addNumbers } = await import(mathModule);

  const result = addNumbers(10, 10);
  console.log(result);
  // Logs:
  // 20
}

doSum();
```

## Additional Resources

[V8.dev: Modules - Dynamic imports](https://v8.dev/features/modules#dynamic-import)
