---
title: Conditional rendering
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

One of the greatest aspects of React is conditional rendering.

Conditional rendering is where we have logic that decides which component or element we want to return, which then gets rendered.

## How to do conditional rendering

Conditional rendering allows us to render components or elements based on conditions. For example, we could have a boolean that determines which component we want to render out. Conditional rendering is quite simple to do.

Let's have a look at two examples of how we can do conditional rendering:

### Example 1: Setting a variable

In the example below, we have a variable called `content`, which will hold different JSX. We also have a variable called `isLoggedIn`. The value of `isLoggedIn` will determine which JSX we will render:

```jsx
function App() {
  let content;

  // Change this to true or false to change
  // what gets rendered
  let isLoggedIn = true;

  // We change the 'content' value depending
  // on the value of 'isLoggedIn'
  if (isLoggedIn) {
    content = <div>Admin dashboard</div>;
  } else {
    content = <div>Login form</div>;
  }

  // Render out the 'content' value
  return <div>{content}</div>;
}

export default App;
```

### Example 2: Ternary operator

The first example is not very common. What's more commonly used is the "ternary operator".

We have the same example below, but we're now using a ternary operator. We've also reduced our code so that it does the conditional check in the `return` instead of a separate check outside of the return.

> **NOTE:** You should be using the ternary operator over Example 1.

```jsx
function App() {
  let isLoggedIn = true;

  return (
    <div>{isLoggedIn ? <div>Admin dashboard</div> : <div>Login form</div>}</div>
  );
}

export default App;
```

### Example 3: Short-circuiting

Another technique when it comes to rendering is "short-circuiting". This technique is used when you don't need the `else` part of an `if` statement or ternary operator.

```jsx
function App() {
  let isLoggedIn = true;

  return <div>{isLoggedIn && <div>Admin dashboard</div>}</div>;
}

export default App;
```

<hr>

## Lesson task

### Goal

For the student to demonstrate their ability to conditional render content.

### Brief

You will loop through data and then conditionally render text based on if it is on sale.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

The data for you to use is as follows.

```jsx
const products = [
  { id: 0, title: "Bread", price: 19.99, isOnSale: true },
  { id: 1, title: "Milk", price: 29.99, isOnSale: false },
  { id: 2, title: "Cheese", price: 35.99, isOnSale: false },
  { id: 3, title: "Water", price: 15.99, isOnSale: true },
];
```

1. Loop through the above data in `<App>` or a new component. This choice is up to you.

2. Display the `title` and `price` values.

3. If the product `isOnSale` property is set to `true`, then display a `div` with "ON SALE" as the text. If the `isOnSale` property is set to false, do not display anything.

4. You should now have all the products mapped out, but only the ones with `isOnSale` set to `true` will display the "ON SALE" text.

## Additional resources

[React Docs: Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
