---
title: Redux Toolkit
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

RTK, short for Redux ToolKit, is an opinionated implementation of Redux that greatly improves the developer experience.

## Why use RTK?

Redux is a very powerful state-management library and is often found in legacy codebases. However, it does not have a great developer experience due to all of the constraints and boiler plate setup.

## How to install RTK

To install RTK:

npm:

`npm i @reduxjs/toolkit react-redux`

yarn:

`yarn add @reduxjs/toolkit react-redux`

## How to use RTK

We will now look at the different steps of setting up RTK.

### Initial setup

1. We first have to create a `store` that contains all of our states.

2. This will then wrap around our component like a wrapper so all the components nested within this wrapper can access the values.

In the example below, we will create our `store`. For now, call this file `store.js` and save it in the root of your `/src` folder i.e. `/src/store.js`.

1. Creating the store

```jsx
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

2. We will now create a wrapper around our components so our store can be accessed everywhere

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import the store we created
import { store } from "./store";
// Import the Provider from `react-redux`
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Wrap <App /> with our react-redux Provider, passing in the store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### Creating a slice

We have completed our initial setup of RTK, and we can now start creating our different "slices" containing sets of states related to our app.

In the example below, we will create a counter "slice" that adds or minuses values from a state.

Create a file in `src` called `counterSlice.js`, i.e. `/src/counterSlice.js`.

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  // The name of our reducer
  name: "counter",
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

### Adding the slice to your store

You will now need to add the slice to your store.

In `src/store.js`, change your code to the following:

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    // This is the store we created above. We can add more than one store,
    // allowing for our app to scale if needed
    counter: counterReducer,
  },
});
```

### Consuming the states and actions

We can now finally consume the states and actions that we have created.

We will create a `Counter` component and then import this to our `<App />` component.

Take note of how we're using the following hooks:

1. `useSelector`: This is used to get the individual states, similar to how zustand works.

2. `useDispatch`: This provides us with the `dispatch` function, which we use to dispatch the actions from our reducers.

`src/Counter/Counter.js`

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Add 1</button>
      <button onClick={() => dispatch(decrement())}>Minus 1</button>
    </div>
  );
}

export default Counter;
```

`src/App.js`

```jsx
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
```

<hr>

## Lesson task

### Goal

For the student to demonstrate they can use the basics of RTK.

### Brief

We are going to create a cart using RTK.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Create a new CRA and add RTK to it.

2. Create a store and add it to your app.

3. Create a `cartSlice` with an initial state of `products` that has an empty array, e.g. `products: []`. Add this slice to your store.

4. Create an action to add a product to the cart, e.g. `addProduct`. The product should be passed as a parameter and added to our `products` state.

5. In your app, map through the product data given and add the product title and a button to dispatch `addProduct`. Clicking this button should add the product to the `products` state in your carts slice.

6. Add a new state value called `cartTotal` and set this to `0` as its initial value.

7. When a product is added with the `addProduct` action, calculate the cost of all products in the cart, including the new product, and update the `cartTotal` value.

8. Display the `cartTotal` value in your JSX.

Below is a list of products you may use.

```js
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

[Redux Toolkit](https://redux-toolkit.js.org/)

[Redux-toolkit.js.org: RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview)

[Redux-toolkit.js.org: Toolkit Quick-start](https://redux-toolkit.js.org/tutorials/quick-start)
