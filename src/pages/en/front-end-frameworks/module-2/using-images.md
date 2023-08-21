---
title: Using images
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We will often need to import images which is quite a straightforward process in React.

## How to use Images in React

There are two ways we can import images in React.

We can either import them, which then bundles the images with the App, or we host the images in the `public` folder and simply reference them.

## Option 1: Importing an image

We can import the image as a variable and then we simply reference this variable.

In the example below we have a image `logo.png` which exists in our `src` folder. We then import this image and assign it to a variable, `Logo`. Lastly, we

```jsx
import React from "react";
import Logo from "./logo.png";

console.log(Logo);

function App() {
  return <img src={Logo} alt="Logo" />;
}

export default App;
```

## Option 2: Referencing an image in the public folder

Instead of importing an image and having it bundled with our App, we could instead add the image to our `build` folder e.g. `/build/images/logo.png`. We then simply reference this image.

```jsx
import React from "react";

function App() {
  return <img src="/images/logo.png" alt="Logo" />;
}

export default App;
```

<hr>

## Lesson task

### Goal

For the student to demonstrate they can import an image.

### Brief

You will download an image and then import it to your App.

Example image below:

![Example image](../images/front-end-frameworks/module-2/image-logo-example.png)

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Start with a new CRA or use and existing app.

2. Download the example image which you can do by right-clicking the image and choosing `"Save image as"`. Make sure to save this image to your App, such as `/src/images/logo.png`.

3. Load the example image into your app using the `import` method.

## Additional resources

[create-react-app.dev: Adding Images, Fonts, and Files](https://create-react-app.dev/docs/adding-images-fonts-and-files)
