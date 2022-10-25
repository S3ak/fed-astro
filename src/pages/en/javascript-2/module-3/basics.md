---
title: Modules basics
description: modules
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Imports and exports

`import` and `export` keywords are the way you will be able to use modules throughout your code.

When we use `import` we will be importing code from a module so we can put the code in another file. This code can be functions or variables. This code has to be exported from another file; otherwise, we won't be able to import it.

When we use `export` we will be exporting code from a module so that it can be imported into other files using the `import` keyword.

## Named and default imports/exports

There are two main ways we can use teh `import` and `export` keywords, which are "named imports/exports" and "default imports/exports.

We are going to look at the two different types below:

### Named imports/exports

Named imports/exports are where we are importing and exporting specific portions of our code.

For example, we might have three functions in a module, but we only want to expose two of them to other developers. In this case, we would then only export the two functions, e.g.

```js
// module.mjs
function functionOne() {
  // code here
}

function functionTwo() {
  // code here
}

function functionThree() {
  // code here
}

// We only export functionOne and functionTwo
export { functionOne, functionTwo };
```

When we want to import these functions into another file, we wil use the following code.

```js
// main.mjs
import {functionOne, functionTwo};
```

If we tried to import `functionThree` like this, then it will throw an error:

```js
import {functionOne, functionTwo, functionThree};
```

The error will look as follows:

```
Uncaught SyntaxError: The requested module './module.mjs' does not provide an export named 'functionThree' (at main.mjs:1:36)
```

This is because we didn't export `functionThree` from the `module.mjs` file.

---

#### Aliasing

When using "named imports/exports", we have to use the name of the function or variable we are importing. If we use a named export to export the function named `functionOne`, we need to import it as this name. This is why it's called a "named import/export".

There is a way around this, though, by using "aliases". This lets us change the named import. We do this by adding `as` after the variable name and then the name you want to use.

In the example below, we alias `functionOne` to have the name `newFunctionName`:

**NOTE:** When you use an alias, you can't use the original name where you've added the alias.

```js
import { functionOne as newFunctionName } from "./module.mjs";

// ✅ This works
newFunctionName();

// ❌ This won't work as we have aliased 'functionOne' to be 'newFunctionName'.
functionOne();
```

### Default imports/exports

The other way we can import/export is using "default imports/exports".

Default imports/exports are where we export our code using a `default` keyword after the `export` keyword e.g.

```js
function mainFunction() {
  // code here
}

export default mainFunction;
```

When we import a "default export", we don't use the `{}` braces, we simply write the name we want to use:

```js
import mainFunction from "./module.mjs";
```

### Default imports can be named anything

You can name your default import whatever you would like. You do not have to use the same name like you do with "named imports/exports".

In the example below, we default export a function `functionOne` but we import it as `newFunctionName`:

```js
// module.mjs

function functionOne() {
  // code here
}

// We are using a default export, not a named export
// You can tell by the 'default' keyword and lack of
// {} curly braces
default export functionOne;
```

```js
// main.mjs

// Here we import the default export from 'module.mjs'
// and called it 'newFunctionName'
import newFunctionName from "./module.mjs";
```

## Combining named exports/imports with default exports/imports

You can combine named and default imports/exports, which is not uncommon.

We are using both named and default imports/exports in the example below:

```js
// module.mjs

function functionOne() {
  // code here
}

function mainFunction() {
  // code here
}

// Named export
export { functionOne };

// Default export
export default mainFunction;
```

```js
// main.mjs

// Here we are using the default import (lack of curly braces)
// as well as the named import { functionOne }
import renamedDefaultFunction, { functionOne } from "./module.mjs";
```

If you are familiar with React, you will likely have already seen default and named exports being used together:

```jsx
import React, { useEffect, useState } from "react";
```

## Other ways to export default and named exports

So far, you have only seen exports used in one way, where we add the exports at the bottom of the file.

```js
function myFunction() {
  // code here
}

export { myFunction };
```

Another way we can export our code is to add the export keyword when you create the function. The advantage of this is that you don't have an extra line of code that you need to keep updating as you add more code.

**Named export:**

Below is another way we could do a named export:

```js
export function myFunction() {
  // code here
}
```

**Default export:**

Below is an alternative way to do a default export:

```js
export default myFunction() {
  // code here
}
```

## Lesson task

### Goal

To be able to import and export both default and named functions.

### Brief

Complete the Level 1 process below:

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Create an `index.html` file and populate it with basic content.

**TIP:** Use the `!` emmet to create the boilerplate HTML for you.

2. Create a module `main.mjs` and add this to the `index.html` file.

3. Create a file called `module.mjs`.

4. Inside of the `module.mjs` file add a function called `addNumbers` which console.logs a message. Use a **named export** to export this function:

5. Inside of the `module.mjs` file, add a function called `calculate` which console.logs a message. Use a **default export** to export this function.

6. Import the `addNumbers` named export and `calculate` the default export into `main.mjs`. Call these functions to make sure they are logging the correct messages.

7. Use `as` to change the name of your named export to a new function name, then call this new function name.

## Additional resources

[V8.dev](https://v8.dev/features/modules)

[MDN Docs: Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

[JavaScript.info: ES6 Modules](https://www.javascripttutorial.net/es6/es6-modules/)
