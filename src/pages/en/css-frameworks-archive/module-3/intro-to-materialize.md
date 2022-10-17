---
title: Intro to Materialize
keywords: react, styling, materialize
tags: JS Frameworks
sidebar: css-frameworks-v1
permalink: css-frameworks-v1/intro-to-materialize.html
folder: css-frameworks-v1
---

## Introduction

In this module, we will look at Materialize CSS.

Materialize is an UI components library based on Material Design, Google’s design system.

In this lesson, we will be building [this page](https://noroff-materializecss-lesson.netlify.app/) using Materialize.

## Using a CDN

The easiest way to start using Materialize is to include CDN links to the CSS and JavaScript files in your HTML document. It is also recommended you include a link to the official Material Icons to take advantage of those.

```html
<!-- Material Icons Font -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

<!-- Compiled and minified CSS -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
/>

<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

## Building the site

Our project using Materialize will start off looking like the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Materialize CSS</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
  </head>
  <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
</html>
```

We will also be adding custom CSS. Let's create a file called styles.css and link it underneath materialize.min.css at the bottom of our `<head>` tag.

```html
<link rel="stylesheet" href="styles.css" />
```

Now we're ready to get started with building our site.

It's important that we structure our site within the three HTML tags: `<header>`, `<main>` and `<footer>`.

Let's add a header to our site. We'll add this just below the `<body>` tag.

```html
<header>
  <nav class="blue lighten-1" role="navigation">
    <div class="nav-wrapper container">
      <a href="/" class="brand-logo left">Logo</a>
      <ul class="right">
        <li>
          <a href="#">Link</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

Let's also add a main content area with a header, some text, and a button. We'll add this code underneath our header.

```html
<main>
  <div class="section no-pad-bot">
    <div class="container">
      <h1 class="header center red-text">Hello Noroff</h1>
      <div class="row center">
        <h5 class="header col s12 light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          soluta veritatis eum cumque doloribus deleniti accusamus quidem modi
          ab, magnam maxime temporibus. Facere accusantium maxime deserunt
          tenetur neque dolore doloribus necessitatibus.
        </h5>
      </div>
      <div class="row center">
        <a href="#" class="btn-large waves-effect waves-light red">My Button</a>
      </div>
    </div>
  </div>
</main>
```

And of course, we need a footer. We will add this code underneath our main section.

```html
<footer class="page-footer blue darken-2">
  <div class="container">
    <div class="row">
      <div class="col l6 s12">
        <h5 class="white-text">Footer Content</h5>
        <p class="grey-text text-lighten-4">
          You can use rows and columns here to organize your footer content.
        </p>
      </div>
      <div class="col l4 s12">
        <p class="grey-text text-lighten-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          soluta veritatis eum cumque doloribus deleniti accusamus quidem modi
          ab, magnam maxime temporibus. Facere accusantium maxime deserunt
          tenetur neque dolore doloribus necessitatibus.
        </p>
      </div>
    </div>
  </div>
  <div class="footer-copyright">
    <div class="container">© 2020 Copyright Text</div>
  </div>
</footer>
```

At this stage our site is almost complete, though the footer is not pushed to the bottom of our site, it’s not sticky. We can fix that with the following CSS.

In the `styles.css` file we created add the following:

```css
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
```

This will expand the body to take up 100% of our view height, and also expand our `<main>` area using flexbox and flex-grow. Our site is now complete.

## Getting the full Materialize experience

To get the full experience of Materialize you are required to use JavaScript. You can however skip using JavaScript while testing and prototyping, but it will limit the components you can use as some will not function properly without JavaScript.

A JavaScript file should be created and added after materialize.min.js at the bottom of your HTML document.

You can find[ more documentation](https://materializecss.com/modals.html) on Modals and other elements that require JavaScript (Carousels, Dropdowns, Sidenav, Toasts, etc.).

An example for creating functioning Modals requires the following JavaScript:

```js
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".modal");
  const instances = M.Modal.init(elements, options);
});
```

## Lesson Task

### Brief

In this task you will create a page layout using Materialize CSS.

Download the XD file from [this repo](https://github.com/NoroffFEU/materialize-introduction-lesson-task).

### Process

Use Materialize CSS to code a responsive layout for the design.

### Example answer

You can find an example solution in the [answer branch](https://github.com/NoroffFEU/materialize-introduction-lesson-task/tree/answer) of the repo.

## Resources

- [Lesson Source Code](https://github.com/NoroffFEU/materialize-introduction)
- [Getting Started](https://materializecss.com/getting-started.html)
- [Official Documentation](https://materializecss.com/)
