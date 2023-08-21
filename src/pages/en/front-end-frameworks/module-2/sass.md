---
title: SASS
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We can use SASS within React quite easily.

## Adding SASS to a React app

Adding SASS to a React app is very simple.

### Step 1: Add SASS to your project

Run either one of the following commands in the root directory of your app:

`npm`:

```
npm install sass
```

`yarn`:

```
yarn add sass
```

### Step 2: Create a SASS stylesheet and add it to your component

Create a file called `styles.scss` and import this file into your component:

```jsx
import "./styles.scss";
```

### Step 3: Add styling to your SASS file

You can now add SASS styling to your stylesheet.

## Basic example

In the example below, we are creating an unordered list `<ul>` element with two nested list item `<li>` elements. We then style the unordered list `<ul>` and use nested styling for the list item `<li>`.

`styles.scss`:

```scss
ul {
  background: lightseagreen;
  li {
    color: white;
  }
}
```

`App.js`:

```jsx
import React from "react";
import "./styles.scss";

function App() {
  return (
    <ul>
      <li>Primary</li>
      <li>Secondary</li>
    </ul>
  );
}

export default App;
```

![SASS Example](../images/front-end-frameworks/module-2/sass-example.png)

<hr>

## Lesson task

### Goal

To be able to demonstrate that the student is able to use normal CSS classes in React.

### Brief

You are going to create multiple elements and apply styling to them.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learnt in the lesson.

### Level 1 process

1. Create a new CRA or use one you've already created. Replace `App.js` with the following:

```jsx
function App() {
  return <div></div>;
}

export default App;
```

2. Add SCSS/SASS to your project using `npm` or `yarn`.

3. Create a new stylesheet in `/src/` called `styles.scss`.

4. Add custom styling to ensure that SASS is working as intended.

## Additional resources

[Create-React-App-.dev: Adding a SASS stylesheet](https://create-react-app.dev/docs/adding-a-sass-stylesheet)
