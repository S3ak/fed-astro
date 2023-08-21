---
title: useEffect
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

React's `useEffect` hook allows us to perform side effects in our component whenever it renders, such as fetching API data.

## How it works

A `useEffect` takes a callback, and this code is then ran depending on how you set up your `useEffect`.

The `useEffect` hook has a 2nd parameter which takes an array. This array is called the _dependency array_.

The dependency array will determine how often the component will render.

Below is a basic example where the `useEffect` will only run once the component is mounted.

```jsx
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // This is the callback that runs inside of the useEffect
    console.log("useEffect has run");
  }, []); // This is the dependency array

  return <div>useEffect Example</div>;
}

export default App;
```

## Dependency array options

We will now look at the different dependency array options.

The three options are:

1. Run every time the component is rendered (no dependency array added).
2. Run only the first time the component is rendered (empty array dependency array added).
3. Run when a watched variable is updated (dependency array added with variable names added to it).

Let's have a look at the three different ways you can set up your `useEffect`.

### 1. Run every time component is rendered

If we don't include a dependency array, then the `useEffect` will run every time the component renders.

This option is not as used as often as the other options as we generally don't want a `useEffect` running every time the component renders, usually only when we need it to.

Below is a basic app with a `counter` variable. There is a button to increment and a button to decrement the counter. There is a `console.log('Component has rendered')` in the component itself that will log each time the component is rendered.

If you run this code, you will see that the `useEffect` will run every time you click one of the buttons. You will see that both `Component has rendered` and `useEffect has run` will be logged to the console.

```jsx
import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect has run");
  }); // No dependency array

  function onIncrementCounter() {
    setCounter(counter + 1);
  }

  function onDecrementCounter() {
    setCounter(counter - 1);
  }

  console.log("Component has rendered");

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={onIncrementCounter}>+</button>
      <button onClick={onDecrementCounter}>-</button>
    </div>
  );
}

export default App;
```

### 2. Run only when the component is mounted

If we include an empty dependency array, the `useEffect` will only run the first time the component mounts. This is a more common option over having the `useEffect` run each time the component re-renders.

We are using the same `counter` example below.

When the component is first mounted, you'll see the `useEffect has run` being logged to the console. However, when you click the buttons, you will see that only `Component has rendered` is logged to the console. This is because our `useEffect` will only run when the component is mounted.

```jsx
import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect has run");
  }, []); // Empty dependency array

  function onIncrementCounter() {
    setCounter(counter + 1);
  }

  function onDecrementCounter() {
    setCounter(counter - 1);
  }

  console.log("Component has rendered");

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={onIncrementCounter}>+</button>
      <button onClick={onDecrementCounter}>-</button>
    </div>
  );
}

export default App;
```

### 3. Watching a variable

The final option we have with `useEffect` is to watch values and have the `useEffect` run when these values are updated.

We have the same `counter` example below; however, we've added the `counter` value to the dependency array.

You'll see that each time we click the buttons, we will get `Component has rendered` logged out, and `useEffect has run`.

> **NOTE:** The `console.log` outputs in this example are the same as when we don't include a dependency array. However, they are not operating the same.

```jsx
import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect has run");
  }, [counter]); // Watching the `counter` variable

  function onIncrementCounter() {
    setCounter(counter + 1);
  }

  function onDecrementCounter() {
    setCounter(counter - 1);
  }

  console.log("Component has rendered");

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={onIncrementCounter}>+</button>
      <button onClick={onDecrementCounter}>-</button>
    </div>
  );
}

export default App;
```

## `useEffect`'s cleanup function

`useEffect` comes with a cleanup function that allows you to cancel subscriptions, such as removing timers that are running.

The cleanup function is used as the `return` in a `useEffect`.

Consider the following example. It contains an `<Example>` component that will start a timer. It also contains a button that will remove the `<Example>` component.

```jsx
import React, { useEffect, useState } from "react";

function Example() {
  // useEffect that starts a timer which runs every second
  useEffect(() => {
    setInterval(() => {
      console.log("Timer running");
    }, 1000);
  }, []);

  return <div>Example is showing</div>;
}

function App() {
  const [showComponent, setShowComponent] = useState(true);

  function onButtonClick() {
    setShowComponent(false);
  }

  return (
    <div>
      {showComponent ? <Example /> : null}
      <button onClick={onButtonClick}>Hide component</button>
    </div>
  );
}

export default App;
```

You'll notice that if you press the button, the `<Example>` component is no longer mounted; however, the `console.log`s from the timer is still running.

This is problematic and can lead to many problems in your app. Instead, what should happen is that the timer should be cleared when the component unmounts so it stops running.

This is where our cleanup function from the `useEffect` becomes useful. We can use the cleanup function to clear the timer.

In the example below, we've added a cleanup function that will clear the timer. When the component unmounts it, the timer will be stopped.

```jsx
import React, { useEffect, useState } from "react";

function Example() {
  // useEffect that starts a timer which runs every second
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("Timer running");
    }, 1000);

    // This is the cleanup function
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>Example is showing</div>;
}

function App() {
  const [showComponent, setShowComponent] = useState(true);

  function onButtonClick() {
    setShowComponent(false);
  }

  return (
    <div>
      {showComponent ? <Example /> : null}
      <button onClick={onButtonClick}>Hide component</button>
    </div>
  );
}

export default App;
```

<hr>

## Lesson task

### Goal

For the student to demonstrate they can use the `useEffect` hook.

### Brief

You will create `useEffect` where an event listener is created while also performing a cleanup of the event listener.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Start with a clean CRA, or reuse one you have created.

2. Add a `useEffect` hook to `<App>`.

3. Create an interval timer that logs "Timer running".

4. Add a cleanup to the `useEffect` so that the timer is removed if the current component, `<App>`, is removed.

## Additional resources

[ReactJS.org: Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
