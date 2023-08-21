---
title: CSS Modules
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

CSS Modules allow for the scoping of CSS classes, making them a more scalable solution when compared with normal CSS.

## How they work

The CSS we write in CSS Modules remains the same as normal CSS; however, the implementation is slightly different.

Let's look at the differences:

### 1. `Component.module.css` format

When we name our CSS Module files, we _must_ include `.module` in the name of the CSS file. This is for React to recognise this file as a CSS Module.

For example, if we had a `Button` component, we would call the CSS Module file `Button.module.css`.

The CSS we write in CSS Modules is exactly the same as normal CSS.

For example, this could be our `Button.module.css` file which gives a `primary` class a `background-color` property of `red:

`Button.style.css`

```css
.primary {
  background-color: red;
}
```

### 2. Importing the styles

When we import the CSS Module file, we import everything as an alias. If we used the above `Button.module.css` example, we would import the file as `import styles from './Button.module.css';`

We will use the alias to access our styles from our CSS file, which makes the development experience more intuitive.

### 3. Using the styles

We've created our CSS Modules file and imported it. We now have to consume (use) our styling.

Our classes are added with dot notation on the `styles` alias we created.

The example below demonstrates adding a CSS Module to a basic app.

`Button.style.css`

```css
.primary {
  background-color: red;
}
```

`App.jsx`

```jsx
import styles from "./Button.module.css";

function App() {
  return <button className={styles.primary}>Click me</button>;
}

export default App;
```

## Using multiple CSS Modules for a single element should be avoided

You should avoid using multiple CSS modules for a single element, as noted by the author [here](https://github.com/gajus/react-css-modules#multiple-css-modules). This is because CSS Modules promotes a component pattern which is dealt with [here](https://github.com/gajus/react-css-modules#class-composition).

<hr>

## Lesson task

### Goal

To be able to demonstrate that the student can use a CSS Module stylesheet.

### Brief

You are going to create multiple elements and apply styling to them.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Create a new CRA or reuse an older app you're not using. Replace `App.js` with the following:

```jsx
import React from "react";

function App() {
  return <div>Hello world</div>;
}

export default App;
```

2. Create a new stylesheet in `/src/` called `App.module.css`.

3. Add the following style to `App.module.css`:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background: red;
  color: white;
}
```

4. Import your stylesheet into `App.js` at the top of the file with `import styles from './App.module.css'`.

5. Add the `container` style to your `div` in `App.js`. This will cause the container to look like a red box with white text.

## Additional resources

[ReactJS.org: Styling and CSS](https://reactjs.org/docs/faq-styling.html)
