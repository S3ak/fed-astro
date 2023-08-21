---
title: Basic classes
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We can style React with normal CSS classes like you would in a normal HTML/CSS page.

## `className` instead of `class`

Before we continue, it's important to mention that in React, we use `className` instead of `class` when specifying our classes.

This is because `class` is a reserved keyword in JavaScript.

You should always use `className` instead of `class` when adding your styles in React.

## Adding normal CSS classes to React

Adding a normal CSS class is quite simple and very similar to HTML and CSS.

### Step 1: Import your stylesheet

You simply import your stylesheet with `import './styles.css'` where `styles.css` is your stylesheet file.

The styles and classes in this stylesheet will then be available to your component.

### Step 2: Add a class

You now add a class to your element with the `className` property e.g.

```jsx
<div className="my-class">Hello world</div>
```

Below is an example of the above which applies the `rebeccapurple` colour to the text in our `<div>` element:

`styles.css`:

```css
.my-class {
  color: rebeccapurple;
}
```

`App.jsx`:

```jsx
import "./styles.css";

function App() {
  return <div className="my-class">Hello world</div>;
}

export default App;
```

## Normal CSS naming conflicts

Normal CSS classes can be argued to be problematic because of naming conflicts. They are not scoped to components meaning that a class created in one component could interfere with another component if they both have the same class name.

Other CSS solutions generate unique class names allowing the styling to be scoped to a component. This avoids the issue of class name conflicts.

<hr>

## Lesson task

### Goal

To be able to demonstrate that the student can use normal CSS classes in React.

### Brief

You are going to create multiple elements and apply styling to them.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Create a new CRA. Replace `App.js` with the following:

```jsx
function App() {
  return <div>Hello world</div>;
}

export default App;
```

2. Create a new stylesheet in `/src/` called `styles.css`.

3. Add the following style to `style.css`:

```css
body {
  background-color: lightblue;
}
```

4. Import your stylesheet into `App.js` at the top of the file with `import './style.css'`. When you save the file, the App should have a light blue background.

5. Create a new class called `.text`. Give it a `color` property of `#fff`.

6. Add a new `p` element with the text `Paragraph 1`. Give this `p` element a class (`className`) property with a value of `text`. Make sure this `p` element is in-between the `<div>` elements in `App.js`. You should now have a `p` element with white text.

## Additional resources

[ReactJS.org: Styling and CSS](https://reactjs.org/docs/faq-styling.html)
