---
title: Zustand
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Zustand, German for condition or state, has become an increasingly popular library.

## Why Zustand?

Zustand is a very simple but very well-built state-management solution. It's lightweight; however, this does not mean that it lacks attention to detail, as the developers have taken great care to address issues there might be with managing React states.

One of the main features is that it's straightforward to use and slots effortlessly into React hooks, allowing you to easily create your own hooks that can be used app-wide. You will not have to add any wrappers, such as Providers, to your components.

## How to install Zustand

npm:

`npm i zustand`

yarn:

`yarn add zustand`

## Basic example of using zustand

In the example below, we look at a basic counting example using zustand.

Take note of how we've had to grab the separate states individually.

```jsx
import { create } from "zustand";

const useProductsStore = create((set) => ({
  count: 0,
  addOne: () => set((state) => ({ count: state.count + 1 })),
  clearCount: () => set({ count: 0 }),
}));

function App() {
  const count = useProductsStore((state) => state.count);
  const addOne = useProductsStore((state) => state.addOne);
  const clearCount = useProductsStore((state) => state.clearCount);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={addOne}>Click me to add</button>
    </div>
  );
}

export default App;
```

## Destructuring multiple values from a single store

Zustand checks individual value changes with strict equality (`===`), which makes it more efficient when checking at a component level.

We can, however, destructure as an array or object and use the `shallow` import from Zustand to perform shallow checks. This is a complex topic, but in short, it checks between props to see if a state should update based on a more relaxed set of points.

In the example below, we recreate our previous example, except we are destructuring from a single object.

```jsx
import { create } from "zustand";
import { shallow } from "zustand/shallow";

const useProductsStore = create((set) => ({
  count: 0,
  addOne: () => set((state) => ({ count: state.count + 1 })),
  clearCount: () => set({ count: 0 }),
}));

function App() {
  const { count, addOne, clearCount } = useProductsStore(
    (state) => ({
      count: state.count,
      addOne: state.addOne,
      clearCount: state.clearCount,
    }),
    shallow
  );

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={addOne}>Click me to add</button>
      <button onClick={clearCount}>Clear count</button>
    </div>
  );
}

export default App;
```

<hr>

## Lesson task

### Goal

For the student to demonstrate they can use zustand.

### Brief

You will create a shopping cart using zustand.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Start with a new CRA or a clean, existing app.

2. Create a zustand store that:

   2.1 Allows a product to be added

   2.2 Clears the list of products.

Below is product data you can use.

```jsx
const products = [
  {
    id: 0,
    title: "Milk",
    price: 19.99,
    discountedPrice: 19.99,
  },
  {
    id: 1,
    title: "Bread",
    price: 12.99,
    discountedPrice: 12.99,
  },
  {
    id: 2,
    title: "Cheese",
    price: 25.99,
    discountedPrice: 25.99,
  },
];
```

## Additional resources

[Zustand README.md](https://github.com/pmndrs/zustand)
