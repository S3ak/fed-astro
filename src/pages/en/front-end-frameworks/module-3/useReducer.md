---
title: useReducer
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Sometimes managing multiple states in a component or app can be problematic. `useReducer` is a hook that allows us to manage complex state logic and reduce the number of re-renders.

## How it works

The `useReducer` hook is based on an action/dispatch system, similar to how Redux works.

> **NOTE:** You don't need to know Redux.

In short, our reducer has a list of _actions_ that we _dispatch_. Actions can be thought of in the different ways we want to manage our state. Dispatch is simply a function we call with the action we want to run.

The `useReducer` hook returns a state object that contains our state(s) and then a dispatch method we use to call our actions. When we call the `useReducer` hook, we must pass it to the reducer we created and our initial state.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

## Basic example

In this example, we will have a basic counter that gets incremented, decremented or reset.

You will see that we create a reducer that contains all of our actions.

In our component, we call the `useReducer` hook with our reducer that we created. We destructure the `state` and the `dispatch` method from the `useReducer` hook. We then use the `dispatch` method to call our actions from our reducer.

```jsx
import React, { useReducer } from "react";

// This is our initial state
const initialState = { count: 0 };

function reducer(state, action) {
  // These are actions that can be dispatched
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default App;
```

## Custom payloads

In the first example, our actions were static because they already had values that would impact the state. For example, the `+ 1` and `- 1`, and resetting the `count` to `0`.

What if we wanted to have a custom value getting passed through so that `count` is incremented by the value we are passing in?

`useReducer` allows us to do this with the `payload` property of `action`.

Below, we have added an action and button to the first example. However, this time we are passing in a payload that gets used.

In our `dispatch` call, we have added an additional property, `payload` with the value of `10`. This `payload` is then available in our reducer under `action.payload`.

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "addAmount":
      return { count: state.count + action.payload };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "addAmount", payload: 10 })}>
        Add 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default App;
```

## A practical example: Shopping cart

We will now look at how we can implement `useReducer` in a more practical way.

In the code below, we have a cart from which we can add and remove items.

```jsx
import React, { useReducer } from "react";

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

export const initialState = { cart: [], total: 0 };

export function reducer(state, action) {
  let productIndex;
  let newTotal;
  let cart;

  switch (action.type) {
    // Adding a product
    case "addProduct":
      // Create a new cart so we don't mutate our state
      cart = [...state.cart];
      // Get the product index
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex === -1) {
        // If productIndex is -1, it doesn't exist so we add it
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        // The product does exist so we increase the quantity
        // We do not want to mutate quantity so we are creating a new array with
        // quantity incremented.
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ];
      }
      // Set the new total so we don't have to keep calculating it
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      return { ...state, cart: cart, total: newTotal };

    // Removing a product
    case "removeProduct":
      cart = [...state.cart];
      // Get the product index
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id
      );
      // If the product index is not -1 then it exists
      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          // Remove 1 from quantity is quantity is higher than 1
          // We do not want to mutate cart so we recreate it
          cart = [
            ...cart.slice(0, productIndex),
            {
              ...cart[productIndex],
              quantity: cart[productIndex].quantity - 1,
            },
            ...cart.slice(productIndex + 1),
          ];
        } else {
          // Remove the item entirely if quantity is going to be 0
          cart = [
            ...cart.slice(0, productIndex),
            ...cart.slice(productIndex + 1),
          ];
        }
      }
      // Set the new total so we don't have to keep calculating it
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      return { ...state, cart: cart, total: newTotal };

    // Clearing a cart
    case "clearCart":
      return { cart: [], total: 0 };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <button
            onClick={() => dispatch({ type: "addProduct", payload: product })}
          >
            Add {product.title}
          </button>
          <button
            onClick={() =>
              dispatch({ type: "removeProduct", payload: product })
            }
          >
            Remove {product.title}
          </button>
        </div>
      ))}
      <div>
        <hr />
        <button onClick={() => dispatch({ type: "clearCart" })}>
          Clear cart
        </button>
        <button onClick={() => dispatch({ type: "getTotal" })}>
          Get total
        </button>
      </div>
      <div>{state.total}</div>
      <hr />
      <div>
        {state.cart.map((product) => (
          <div key={product.id}>
            {product.quantity} - {product.title} - {product.discountedPrice}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
```

<hr>

## Lesson task

### Goal

For the student to demonstrate they can use the `useReducer`.

### Brief

You will create a `useReducer` that is used in an RPG game where there is a basic set of enemy hit-points and an attack function.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Start with a clean CRA state.

2. Create a reducer with an initial state of `enemyHitPoints` being set to 100.

3. Create a reducer action `attack` which reduces the enemy hit points by 10.

4. Create the following HTML elements:

   4.1 label that displays the enemy hit points

   4.2 button that calls for the `attack` reducer action.

### Level 2 process

1. Add a random chance to the `attack` state, which applies a critical hit where double the damage (40) would be applied.

## Additional resources

[ReactJS.org: Hooks Reference: useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

[Beta.ReactJS.org: useReducer](https://beta.reactjs.org/reference/react/useReducer)
