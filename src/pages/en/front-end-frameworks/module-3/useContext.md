---
title: useContext
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

`useContext` is a built-in React hook that allows you to make state(s) available across your app without needing "props-drilling".

## `React.createContext()`

React has a function, `createContext()`, which returns an object with two values:

1. `Provider`: This is a wrapper for your app where a value will be passed down

2. `Consumer`: This is another wrapper for your app where the value from the `Provider` will be available to any elements part of this wrapper

Below we will look at an example of how this relation between the `Provider` and `Consumer` works.

## How to use `useContext`

In the example below, we start by creating a context object you can call whatever you want to. We have called it `Theme`.

We create a `Provider`, which is a wrapper for any children that are nested within this wrapper.

We can then "consume" the values from this `Provider` in our components by using the `Consumer`.

```jsx
import React, { createContext } from "react";

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <MyComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  return (
    <ThemeContext.Consumer>
      {(value) => <div>The display mode is {value}</div>}
    </ThemeContext.Consumer>
  );
}

export default App;
```

## `useContext` hook

Using the render props pattern is not a great developer experience (DX). We can instead use the `useContext` hook, which allows us to consume a `Provider` without needing to wrap our code with a `Consumer`.

To use the `useContext`, we simply add the Context value we created as part of the `useContext` hook.

```jsx
import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <MyComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  const value = useContext(ThemeContext);
  return <div>The display mode is {value}</div>;
}

export default App;
```

## Passing a state and state setter in a useContext

Previously we only looked at passing a value through our `useContext`.

We could instead pass through a state and state setter, or a function that sets our state so that we could update a state from a nested component.

In the example below, we create a state and state setter (`theme` and `setTheme`).

We then create a `toggleTheme` function which toggles our state from `dark` to `light` and back again.

Lastly, pass the `theme` state and `toggleTheme` function to our `Provider` as an object so that these two values can be accessed in nested components.

{% raw %}

```jsx
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <MyComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div>The display mode is {theme}</div>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
}

export default App;
```

{% endraw %}

<hr>

## Lesson task

### Goal

For the student to be able to make use of `useContext`.

### Brief

You will create a `useContext` that will make a list of products available in your app.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Start with a new CRA or clean the existing app.

2. Create a context with the data listed below available.

3. Create a component that will be used to display the data and call this in your main `<App>`.

4. Display the data in the above component (point 3 above) using the context. Do not use props.

Data to use:

```jsx
const products = [
  { id: 0, title: "Bread", price: 19.99 },
  { id: 1, title: "Milk", price: 29.99 },
  { id: 2, title: "Cheese", price: 35.99 },
  { id: 3, title: "Water", price: 15.99 },
];
```

## Additional resources

[ReactJS.org: Context](https://reactjs.org/docs/context.html)

[ReactJS.org: Render props](https://reactjs.org/docs/render-props.html)

[Dave Ceddia: useContext hook](https://daveceddia.com/usecontext-hook/)

[Beta.ReactJS.org: Scaling up with reducer and context](https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context)
