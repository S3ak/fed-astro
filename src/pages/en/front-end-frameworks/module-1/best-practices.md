---
title: Best practices
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

There are some best practices to follow in React which will make your code more professional.

> **NOTE:** Some of the suggestions are opinionated so they are not the only way to do things, however they are very often used in the workplace.

## Use the `.jsx` extension

You should use the `.jsx` extension for your React file names. Only use `.js` for files that only contain pure JavaScript without any React code. This allows other developers to easily be able to see which files are React and which are pure JavaScript.

## Put your components in their own directory and call the component `index.jsx`

Your components should be in their own directory within a components directory, and your component should be called `index.jsx`.

For example, if we had a component called `<Greeting />`, then the file would look as follows:

```bash
./components/Greeting/index.jsx
```

The benefit of this is that you can colocate your files and your imports are shorter e.g. You can import as `./components/Greeting` instead of `./components/Greeting/Greeting`.

## Don't use React Fragments if there is only one top-level parent

You shouldn't use a React Fragment if there is only a single top-level parent. You should only be using a React Fragment when there are components along side each other without a top-level parent e.g.

```jsx
import React from "react";

function App() {
  return (
    <React.Fragment>
      <li>First item</li>
      <li>Second item</li>
    </React.Fragment>
  );
}

export default App;
```

<hr>
