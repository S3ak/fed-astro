---
title: TypeScript
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We can use TypeScript in React to add typechecking to our code which will help prevent errors.

## Adding TypeScript

There are two ways to add TypeScript to a React project.

### Option 1: Use the CRA template

There is a TypeScript CRA template which comes with TypeScript already added.

```bash
npx create-react-app my-app --template typescript
```

You can now begin using TypeScript by using the `ts`/`tsx` extension instead of `js`/`jsx`.

### Option 2: Adding TypeScript to an existing project

We can also add TypeScript to an existing app.

`npm`:

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

`yarn`:

```bash
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

You will need to create a file `tsconfig.json` in the root of your project, then add the following:

```json
{
  "compilerOptions": {
    "lib": ["es5", "es2015.promise", "dom", "es2015"],
    "target": "ES6",
    "module": "es2015",
    "moduleResolution": "node",
    "outDir": "./build/",
    "rootDir": "./ts",
    "strict": true,
    "esModuleInterop": true,
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["./ts/**/*.ts"],
  "exclude": ["node_modules/"]
}
```

You can now begin using TypeScript by using the `ts`/`tsx` extension instead of `js`/`jsx`.

> **NOTE:** You will need to restart your server.

## Using TypeScript

### Changing `index.js` to `index.tsx`

We can start off by modifying `index.js`. Rename this file to `index.tsx`. We then want to add typing to the DOM element we are selecting:

```tsx
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
```

Your file will then look similar to the following:

`index.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

### Creating a component and adding an interface

We are now going to create a `Product` component that takes in `title`, `description` and `price` props.

We create an interface and then set this as the interface to our props.

```tsx
import React from "react";

interface IProduct {
  title: string;
  description: string;
  price: string | number;
}

function Product({ title, description, price }: IProduct) {
  return (
    <div>
      {title} - {description} - {price}
    </div>
  );
}

function App() {
  return (
    <div>
      <Product
        title="Milk"
        description="Fresh milk locally sourced"
        price={19.99}
      />
    </div>
  );
}

export default App;
```

## Adding a type to the `children` prop:

In the example below we are adding a type to the `children` prop.

```tsx
import React, { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

function App() {
  return (
    <div>
      <Layout>Content in a layout</Layout>
    </div>
  );
}

export default App;
```

<hr>

## Lesson task

### Goal

For the student to demonstrate they can use TypeScript.

### Brief

We will create a component and then add an interface to it.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Create a component called `Person`.

2. This component will take in the following props:

   2.1 `firstName`: string

   2.2 `lastName`: string

   2.3 `city`: string

   2.1 `isAdmin`: boolean

   2.1 `id`: number

3. Create an interface for this component and add it to the component.

4. Add the `Person` component to `App` and pass in valid values.

## Additional resources

[ReactJS.org - Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)

https://www.typescriptlang.org/
