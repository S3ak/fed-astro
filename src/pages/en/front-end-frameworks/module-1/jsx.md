---
title: JSX
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

JSX, which stands for JavaScript XML, is the syntax we use to write HTML-like code in React.

## How JSX works

In React, we use JSX, which is HTML-like syntax.

Consider the code below:

```jsx
<div>Milk: 19.99 NOK</div>
```

This code looks like normal HTML; it's a `<div>` with text content. However, in React, it's actually not HTML. It's JSX which is HTML-like syntax that adds JavaScript functionality.

Behind the scenes, React will run a function called `React.createElement()` to create elements. This is similar to how you could use `document.createElement`.

Below is an example of how you would create the product example `<div>Milk: 19.99 NOK</div>` with `React.createElement()`:

```jsx
import React from "react";

function App() {
  const product = React.createElement("div", {}, "Milk: 19.99 NOK");
  return product;
}

export default App;
```

The above code is not very intuitive and takes some mental energy to figure out what is happening.

Below is the same code using JSX:

```jsx
import React from "react";

function App() {
  return <div>Milk: 19.99 NOK</div>;
}

export default App;
```

The code above is far more intuitive to follow as it is similar to HTML, which we already have experience with.

Behind the scenes,React will convert the JSX into the `React.createElement()` function automatically for us, providing a better developer experience.

<iframe src="https://player.vimeo.com/video/794263049?h=8d281da477" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://player.vimeo.com/video/794263049?h=8d281da477" target="_blank" alt="Classes video">Link to video</a>

## Parsing code in JSX

Using curly braces, we can parse code and show values from variables in JSX.

In the example below, we have a variable called `productTitle`, which we then display by using curly braces `{productTitle}`:

```jsx
import React from "react";

function App() {
  const productTitle = "Milk";

  return <div>{productTitle}</div>;
}

export default App;
```

![CRA package.json](../images/front-end-frameworks/module-1/jsx-1.png)

In the example below, we are using two variables next to each other with a colon `:` separating the values:

```jsx
import React from "react";

function App() {
  const productTitle = "Milk";
  const productPrice = 19.99;

  return (
    <div>
      {productTitle}: {productPrice}
    </div>
  );
}

export default App;
```

![CRA package.json](../images/front-end-frameworks/module-1/jsx-2.png)

## Complex expressions in JSX

JSX can run JavaScript, meaning we can have complex expressions inside of our JSX.

Below is an example where we add 10 to a variable:

```jsx
import React from "react";

function App() {
  const productPrice = 10;

  return <div>{productPrice + 10}</div>;
}

export default App;
```

![CRA package.json](../images/front-end-frameworks/module-1/jsx-3.png)

## Video

<iframe src="https://player.vimeo.com/video/794263451?h=f492e74b7b" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://player.vimeo.com/video/794263451?h=f492e74b7b" target="_blank" alt="Classes video">Link to video</a>

<hr>

## Lesson task

### Goal

The student will demonstrate basic knowledge of JSX.

### Brief

In a new or existing CRA, perform the level 1 process.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Add a H1 heading `<h1>` with children of `Product cart`
2. Create an unordered list `<ul>` below the H1.
3. Create three list items inside of the `<ul>` list, with the values of:
   3.1 `Milk - 19.99`
   3.2 `Bread - 23.99`
   3.3 `Cheese - 40.99`

## Additional resources

[React docs: Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
