---
title: Modules Introduction
description: modules
tags: JavaScript 2
sidebar: javascript-2
---

## Introduction

In the past, only small amounts of JavaScript were used on websites. You did not deal with large portions of JavaScript code, and there was not a great deal of complexity.

Times have since changed, and we now have entire applications written in JavaScript. We needed to start thinking about how to split up our code and make it more modular so that it was more maintainable and manageable.

In the past, only Node.js had modules; however, modern browsers now natively support modules allowing front-end developers to organise their code better. The introduction of modules in ES6 made this possible.

Modules allow us to easily import and export code, which includes variables and functions. This is done through the use of `import` and `export` keywords.

Below is a basic example of how you could use the `import` and `export` functions.

```js
import { addNumbers } from "./math.mjs";

const result = addNumbers(10, 10);

export { result };
```
