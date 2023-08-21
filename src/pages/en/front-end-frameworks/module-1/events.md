---
title: Events
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

React makes it very simple to add events, such as button clicks, by doing a lot of the work for you.

## Adding an event

Adding events in React is very simple as we don't need to manually add and remove the event listeners; the work is done automatically for us.

All of the typical HTML events are available to use in JSX; however, they are turned into `camelCase`, e.g. `onClick` is used instead of `onclick`.

In the below example, we are creating a function called `onButtonClick` that logs a message to the console. We will then attach this function to the `onClick` event on our button.

```jsx
function App() {
  function onButtonClick() {
    console.log("Button clicked!");
  }

  return (
    <div>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
}
```

When we click the button, we will see a message printed to the console:

![Event button click](../images/front-end-frameworks/module-1/events-button-click.png)

You can see that we did not have to use `addEventListener` or similar code to add the event; this work is already being done for us by React.

## Calling the function correctly and passing values

Note that we did not add parentheses to `onButtonClick` when we added it to our `<button>`.

```jsx
<button onClick={onButtonClick}>Click
```

This is because we want to pass the function, not call the function.

If we added parentheses, then we would be immediately calling the function instead of passing:

```jsx
// ❌ This isn't correct as it will immediately
// call the function instead of passing it
<button onClick={onButtonClick()}>Click</button>
```

### Passing values:

So, how do we pass a value (argument) to our function if we can't use parentheses?

We do this by adding an anonymous function in the event listener, which then allows us to use parentheses `()` because the function won't be called immediately, only when the function runs.

In the example below, we are passing the value of `10` to our function.

```jsx
<button onClick={() => onButtonClick(10)}>Click</button>
```

The above example uses an arrow function for our anonymous function. We could have used a normal function keyword. However, it's preferred that you use an arrow function for inline functions in your JSX:

```jsx
<button onClick={function() {
  onButtonClick(10)
}}>
```

<hr>

## Lesson task

### Goal

For the student to be able to add an event listener to a button.

### Brief

You will create a button element, a function that will be called and then attach this function to the button.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Add a `button` element.

2. Create a function called `onButtonClick` which console.logs "Button have been clicked".

3. Attach this function to your `button` element, making sure that clicking the button calls the function.

## Additional resources

[ReactJS Docs: Handling Events](https://reactjs.org/docs/handling-events.html)
