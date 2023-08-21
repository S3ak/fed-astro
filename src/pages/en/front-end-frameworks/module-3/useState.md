---
title: useState
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

The `useState` hook is how we create states for data that will persist in our app when there are state updates.

## States

React apps will update whenever there is an update to a `state` in our app; this is when our app updates the DOM. A basic variable in a component would be lost each update, so if we want data to persist between state updates, we need to use a `state`.

## `useState`

We import `useState` from the `react` library as a named import e.g.

```jsx
import { useState } from "react";
```

The `useState` hook returns an array of two values:

1. The state getter, which is what we use when we want to use the variable, i.e. display it

2. The state setter, which is what we use when we want to change the variable

The `getter` is the value we use as a variable in our app. This is usually a noun, such as `firstName`.

The `setter` is the function we call when we want to change the value of the `getter`. We usually prefix this with `set`, e.g. `setFirstName`.

```jsx
import { useState } from "react";

function App() {
  // Creating a state below
  const [firstName, setFirstName] = useState("");

  return <div>States</div>;
}

export default App;
```

> **NOTE:** React `useState` is a good example of using array destructuring. The first value is always our state, and the second value is always our function to set the value of the state.

### Default value

You can set a default value in a state by adding it as an argument in the `useState()` hook. In the example below, we will set our `firstName` state to have a default value of `Ola`.

```jsx
import { useState } from "react";

function App() {
  // Creating a state below with a default of "Ola"
  const [firstName, setFirstName] = useState("Ola");

  return <div>States</div>;
}

export default App;
```

### Setting our state

When we are creating a state, we will destructure the `setter`. We can then use this `setter` function to update our state.

In the example below, we have a state called `count`, and we use the `setCount` function to add `1` to this `count` state:

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function onButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={onButtonClick}>+</button>
      <div>Count: {count}</div>
    </div>
  );
}

export default App;
```

![useState Count example](../images/front-end-frameworks/module-3/useState-1.png)

Above: Our `count` value after the button had been clicked six times.

<hr>

## Lesson task

### Goal

To demonstrate that you can use the `useState` hook.

### Brief

We will create a basic app where clicking the button will toggle a boolean which then changes what is being rendered to the screen.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Create a new CRA or reuse an old one.

2. In your `App`, create a state called `isActive` with a setter called `setIsActive`.

3. In your `return`, check if `isActive` is `true`. If it is, return `<div>I am active</div>`; otherwise, return `<div>I am not active</div>`.

4. Add a button to the screen. Link this button to a function that toggles `isActive` between `true` and `false`.

5. When you click the button, you should now see the text change between `I am active` and `I am not active`.

## Additional resources

[ReactJS.org: Using the State Hook](https://reactjs.org/docs/hooks-state.html)
