---
title: Creating our own hooks
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We can create our own hooks in React which will enhance the developer experience and can allow you to make your code more concise.

## What is a hook

A hook is like a React component, except it doesn't return JSX and instead returns values and/or functions. They allow you to create reusable code. Hooks cannot be used outside of a normal React component.

You've already come across hooks such as `useState` and `useEffect`.

## Naming a hook

The name of a hook, including file name, always starts with `use` and then whatever it's related to. For example, if you built a hook that fetched API data you might call it `useApi` or `useFetch`.

Your hooks should be stored inside of a `src/hooks` folder, either in nested folder inside of `src/hooks` or lying loose in `src/hooks`.

## Creating a hook

We are going to create a basic example of a hook.

In this example, we've created a hook called `usePerson` which has it's own state, `firstName` and `setFirstName`. We also have a function called `greetPerson()`.

Our hook then exposes the `setFirstName` and `greetPerson` functions in the return.

We can then get to these functions in another component by destructuring from the hook e.g. `const { greetPerson, setFirstName } = usePerson();`

```jsx
import React, { useState, useEffect } from "react";

function usePerson() {
  const [firstName, setFirstName] = useState("");

  function greetPerson() {
    console.log(`Hello ${firstName}`);
  }
  return { setFirstName, greetPerson };
}

function App() {
  const { greetPerson, setFirstName } = usePerson();
  useEffect(() => {
    setFirstName("Ola");
    greetPerson();
  }, [setFirstName, greetPerson]);

  return <div>Hook example</div>;
}

export default App;
```

## Storing values in hooks

A value stored in a hook will not be available in other instances of that hook i.e. if you call a hook in two different components then the hook's values wont be shared between these hooks.

If you want a hook to have data that will persist through all instances of that hook then you will need to use state-management in that hook, such as zustand. The hook then will have the same value whenever you call an instance of that hook.

<hr>

[ReactJS.org Beta docs: Reusing logic with custom hooks](https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks)
