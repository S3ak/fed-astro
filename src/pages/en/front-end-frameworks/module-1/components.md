---
title: Components
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Components are a way for us to create reusable pieces of code. They are one of the main features of React.

## What is a component?

Simply put, a React component is a **function which returns JSX**.

The idea behind components is that we create a single component for a UI element, such as a product card, and then we reuse this component for all of our data.

In the illustration below, we've created a single product card. We then use this product card for all of our products.

![CRA package.json](../images/front-end-frameworks/module-1/components-example.png)

## Basic example of a component and calling it

Below is a component called `Product`. This component returns `<div>Milk: 19.99</div>`. Right now this product has hard-coded data, we will eventually look at making this data dynamic:

```jsx
function Product() {
  return <div>Milk: 19.99</div>;
}
```

> **NOTE:** A component must start with a capital letter e.g. `MyComponent` instead of `myComponent`.

To use this component, we would call it similar to an HTML tag, e.g. `<Product />`.

In the example below, we create the same `Product` component and then call it in our `App` component.

```jsx
import React from "react";

function Product() {
  return <div>Milk: 19.99</div>;
}

function App() {
  return (
    <div>
      <Product />
    </div>
  );
}

export default App;
```

![CRA package.json](../images/front-end-frameworks/module-1/components-1.png)

We could use this component as many times as we would like. In the example below, we call the component three times:

```jsx
import React from "react";

function Product() {
  return <div>Milk: 19.99</div>;
}

function App() {
  return (
    <div>
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default App;
```

![CRA package.json](../images/front-end-frameworks/module-1/components-2.png)

## React Fragments (returning one parent)

In JavaScript, functions can only return one value. We can't return more than one value at the same time. We might be able to return an object, or an array, which has multiple values, but we are still only returning one value (the object or the array).

React components are JavaScript functions; therefore, it has the same constraints: _it can only return one value_.

This means that when we return JSX, we can only have one top-level parent, e.g. one "wrapper" at the top-level of the JSX.

Consider the following example, which will throw an error. In this example, we are trying to return two separate JSX items. This is the equivalent of trying to have two separate values returned from a function, as JSX will compile down to `React.createElement`.

```jsx
import React from 'react';

function App() {
  return (
    <li>
      First list item
    </li>
    <li>
      Second list item
    </li>
  );
}

export default App;
```

If we want to return adjacent components like the above, then we have a special React component called `React.Fragment`. This allows us to group together adjacent components into one parent without there being an HTML element generated.

```jsx
import React from "react";

function App() {
  return (
    <React.Fragment>
      <li>First list item</li>
      <li>Second list item</li>
    </React.Fragment>
  );
}

export default App;
```

### React.Fragment shorthand

React Fragments have a shorthand, being `<>` and `</>`.

The example above has been converted to React fragment shorthand:

```jsx
import React from "react";

function App() {
  return (
    <>
      <li>First list item</li>
      <li>Second list item</li>
    </>
  );
}

export default App;
```

<hr>

## Lesson task

### Goal

To be able to create a basic component.

### Brief

Complete the level 1 process.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Create a component called `Greeting`.
2. Make this component display a greeting, e.g. `Hi Ola Nordmann!`.
3. Call this component in `<App>`.

## Additional resources

[ReactJS.org: Components and Props](https://reactjs.org/docs/components-and-props.html)
