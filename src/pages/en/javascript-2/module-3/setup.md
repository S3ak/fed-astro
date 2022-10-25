---
title: Module setup
description: modules
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Setup

Before we begin to use modules, we need to look at some minor setup that needs to be done.

### Naming of module files

It's the convention to use the `.mjs` extension for JavaScript module files instead of the `.js` extension e.g.

```bash
myModule.mjs
```

You are not strictly required to name a module file with the `.mjs` extension; however, it's recommended that you do so. This is because:

1. It lets developers know that the file they are working with is a module instead of a normal script.

2. It ensures the file is correctly parsed when you start using tools like Babel.

### Importing of Module files in a browser

To make use of a module in a browser, you need to add `type="module"` when importing the JavaScript module file.

Below is how we would usually import a normal JavaScript file:

```html
<script src="myFile.js"></script>
```

Below is how we would import a JavaScript module.

```html
<script type="module" src="myModule.mjs"></script>
```

If you tried to use `import` or `export` and did not specify `type="module", you would likely get the following error:

```
Uncaught SyntaxError: Cannot use import statement outside a module (at main.mjs:1:1)
```

## Lesson task

### Goal

To be able to import a module and get it to run correctly.

### Brief

We will create an HTML file and a module, then import it.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Create an `index.html` file and populate it with basic content.

**TIP:** Use the `!` emmet to create the boilerplate HTML for you.

2. Create a file called `module.mjs` and add `console.log('This is a module');` to this file.

3. Import the module above into your `index.html` file, making sure to use the `type="module"` attribute.

4. Run the HTML file with Live Server or similar and check the browser console to see that it logged `This is a module`.

5. Try to remove `type="module"` from the `<script>` import and see what error is displayed.
