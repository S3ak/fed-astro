---
title: State
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We need a way to keep track of values in React. The way we do that is with _state_.

## Why we need state

React re-renders components whenever there is a change. Any normal values created in that component are destroyed and do not persist when the app updates and the component re-renders.

State, on the other hand, will persist between app updates, so we will never lose these values.

If we pass a state into a component and we update that state, then the component will automatically be updated with that state value.

## Storing and changing state with `useState`

To store state, we use the `useState` hook that React provides.

This hook is imported as follows:

```jsx
import { useState } from "react";
```

The `useState` hook always returns an array with two values in the same order:

1. The state value - this is the value we used in our code.
2. A function to set the state - this is a function that we can use to change the state value in point 1 above.

We then destructure this array with names we want to use.

```jsx
const [state, setState] = useState();
```

The React developers specifically chose to return an array so we can destructure the array; this allows us to rename the values to suit our needs.

When it comes to naming our states, we don't want to simply name our state as `state`. It should be named correctly and represent the value we are assigning to it, e.g. if it is a person's first name, we would call it `firstName`.

Then, for the setter, it's become convention to always name it the same as the value of your state but to add `set` to the front of the name.

In the example below, we have a state called `firstName`, and then we have called the _setter_ to be `setFirstName`.

```jsx
const [firstName, setFirstName] = useState();
```

Putting all of this together would look as follows:

```jsx
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState();
  return <div>{firstName}</div>;
}

export default App;
```

## State default value

To set a default value for our state, we simply add it inside the parentheses in the `useState()` hooks.

In the example below, we are setting the `firstName` state to be a default of `Ola`:

```jsx
const [firstName, setFirstName] = useState("Ola");
```

## Setting and using state

We are now going to look at how we can use a state and how we can set it.

This example will bring it all together and show how React's state automatically updates the UI for us, doing a lot of the hard work for us.

In this example, we will have a `counter` state that is first set to `0`. Each time we click a button, `counter` will increment by `1`.

```jsx
import { useState } from "react";

function App() {
  // Our counter state created here
  const [counter, setCounter] = useState(0);

  // This function calls 'setCounter' and
  // we increment 'counter' by 1
  function onButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={onButtonClick}>Add 1</button>
    </div>
  );
}

export default App;
```

You will see that each time we click the button, `counter` increments by one and this update is automatically displayed on the page.

Each time the state is updated, React will re-render the components that have been changed but use the updated state values. React is doing a lot of the hard work for us by automatically updating these values on the screen, which we would have otherwise had to do manually.

<hr>

## Lesson task

### Goal

For the student to demonstrate they know how state works.

### Brief

You will create a `Product` component which takes in a state as a prop and then change this state value.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Create a `Product` component that is empty except for an empty div, e.g. `<div></div>`.

2. Call this component in `<App>`.

3. Create a `state` called `productTitle` and pass it into your `Product` component. Give this state the initial value of "Milk".

4. Create a `button` element with a function called `onButtonClick`. This function must change the `productTitle` state to "Cheese". Tip: Use the setter returned `useState`, which should have been called `setProductTitle`.

5. Your `Product` component should now display "Cheese" when the button is clicked.

## Additional resources

[ReactJS Docs: State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

[ReactJS Docs: Component State](https://reactjs.org/docs/faq-state.html)
