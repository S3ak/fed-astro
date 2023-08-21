---
title: Mapping out lists
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

React makes it very simple to display lists from data. Your components will automatically update as the lists change their data.

## How we display data from a list

We use the `map` array method to display data from a list in a way that is quite clever.

We know the `map` array method will generate a 1-to-1 array of items. We could therefore use the `map` array method to generate a component for each item in the list.

In the example below, we have an array of products (`products`). These products each have an `id` and `title` property. We use the `map` method to loop through each item in the `products` array. We create a `<li>` element for each item and then display the `title` property from each of the items.

```jsx
const products = [
  { id: 0, title: "Bread" },
  { id: 1, title: "Milk" },
  { id: 2, title: "Cheese" },
  { id: 3, title: "Water" },
];

function App() {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

This code results in a list of our products being displayed:

![Mapping example](../images/front-end-frameworks/module-1/mapping-example.png)

The great aspect of mapping our data like this is that if our data ever changes, it will automatically be updated in our app; we won’t have to make any changes to our code.

## Adding a unique `key`

In the above example, we mapped through a list of products.

If you were to look at the console in the browser, you'd see that there was an error:

![Mapping key error](../images/front-end-frameworks/module-1/mapping-key-error.png)

When we are dynamically creating elements like this, we need to give a unique id for the `key` value for each item. If we don't do this, React can't accurately track the elements generated.

If you look at the data in our example above, you will see that we have an `id` property for each value. We can use this `id` for our `key` as they are unique values in our set of data.

```jsx
const products = [
  { id: 0, title: "Bread" },
  { id: 1, title: "Milk" },
  { id: 2, title: "Cheese" },
  { id: 3, title: "Water" },
];
```

Let's modify our code to use the `id` from each item and use that as the `key` for the item:

```jsx
const products = [
  { id: 0, title: "Bread" },
  { id: 1, title: "Milk" },
  { id: 2, title: "Cheese" },
  { id: 3, title: "Water" },
];

function App() {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

Once this change is done, we will no longer see the error regarding not having a unique key.

### Don't use the array index as a key

You shouldn't use the array method index as a key; this can lead to issues. Doing so will clear the error regarding there not being a unique key. However, this is not fixing the issue. You should instead find a value in the data that is a unique value; otherwise, create a basic function that adds unique ids to your data.

<hr>

## Lesson task

### Goal

For the student to demonstrate they can map out a list.

### Brief

You will use a set of data and then map this data out.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

The data you will be using is as follows:

```jsx
const products = [
  { id: 0, title: "Bread", price: 19.99 },
  { id: 1, title: "Milk", price: 29.99 },
  { id: 2, title: "Cheese", price: 35.99 },
  { id: 3, title: "Water", price: 15.99 },
];
```

1. Create a component called `<ProductsList>`.

2. Use the supplied data as a variable in `<App>` called `products`. Pass this data as a prop called `products` into `<ProductsList>`.

3. Map through the data in `<ProductsList>` and display the `title` and `price` of each value in a `div`.

## Additional resources

[React Docs: Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
