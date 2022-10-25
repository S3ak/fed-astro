---
title: Introduction to Bootstrap
description: sample
tags: CSS Frameworks
sidebar: css-frameworks

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Bootstrap is a major CSS framework that has become ubiquitous in the modern web development environment. It provides a collection of HTML and CSS patterns that enable fast and reliable development of responsive styles.

Prior to Flexbox and CSS Grid, achieving responsive layouts was difficult and time consuming. Bootstrap offered a simple syntax using class names to allow for responsive designs to be achieved without any custom CSS being required.

It has been particularly popular for those creating an `MVP` or Minimal Viable Product, as it frees up development time that would otherwise be spent on styling. Due to it's wide spread popularity, many companies adopted this package as the foundation for their applications. This meant that they could hire developers with experience with Bootstrap and would not need to retrain them on the companies' custom CSS assets.

Since its inception, Bootstrap has undergone 5 major version changes. Each major version represents `breaking changes` from the last - this is crucial to remember when working with packages such as Bootstrap. Each major version of a package will come with new documentation, as well as new features and improvements. Being aware of your version number will help you to find the correct documentation.

Each lesson in the CSS Frameworks course includes a practical lesson task related to the study material. We highly recommend attempting each task and then comparing your attempt to the supplied example answer. The more you code, the quicker you will improve.

## Installing Bootstrap

There are two ways to use Bootstrap in your projects:

1. Using `npm` to install Bootstrap as a `dependency`.
2. Using a `cdn` link to include Bootstrap in your project.

From these two options, each has their own advantages. If you do not intend to customise Bootstrap, it is quicker to use the `cdn` approach. If you intend to customise Bootstrap styles, to change the theme colour scheme for example, then you should use `npm` to install.

### Installing with NPM

Before you begin, make sure that you have followed the guide to install NodeJS on your computer. You can find the tutorial here: [Installing Node](https://noroff-content.gitlab.io/feu/node/installing-node.html). We recommend that you use `NVM` to manage your NodeJS installations.

> Make sure that you have your terminal open to the correct folder. The easiest way to ensure this is to use the terminal in VS Code which will automatically open at your current working folder.

> Make sure to run `npm init -y` to create a new `package.json` file if you don't already have one.

If NodeJS is installed correctly you can proceed to use NPM to add this as a dependency to your project:

```bash
npm install bootstrap@5.2.0
```

If this is successful, you should find the Bootstrap directory inside the `node_modules` folder inside your project.

The next step is to `reference` Bootstrap in your HTML file. This is done by adding the following to your HTML file:

```html
<link
  rel="stylesheet"
  href="node_modules/bootstrap/dist/css/bootstrap.min.css"
/>
```

We will discuss using SASS to customise Bootstrap in a later lesson.

### Using a CDN link

If you do not need to customise Bootstrap, you can find the available CDN links here: [Bootstrap CDN links](https://getbootstrap.com/docs/5.2/getting-started/download/#cdn-via-jsdelivr).

These will be included in your HTML `<head>` like so:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>
<script
  defer
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
  crossorigin="anonymous"
></script>
```

## Building with Bootstrap

The main difference between an application built with Bootstrap and with custom CSS styles is that the majority of the styling can be done using provided Bootstrap classes. Generally speaking there should only be a small amount of custom CSS when working with Bootstrap as the utility classes provided by the framework are quite comprehensive.

### Bootstrap Classes

Bootstrap exposes it's functionality via a system of CSS Classes. These can be combined in various ways to build many different layouts. Within Bootstrap there are `Utility` and `Component` classes available:

#### Utility Classes

One of the most important features of Bootstrap is the provision of `Utility Classes` which can be used to avoid writing custom CSS for common tasks.

You can read more about the utility classes here: [Bootstrap Utility Classes](https://getbootstrap.com/docs/5.2/layout/utilities/).

##### Spacing

When managing margins, padding and gaps (spacing) for HTML elements, there is a suite of classes that can be used to keep these values consistent:

```
.m-0    >     No margin on all sides
.m-1    >     Smallest margin on all sides
.m-2    >     Small margin on all sides
.m-3    >     Medium margin on all sides
.m-4    >     Large margin on all sides
.m-5    >     Largest margin on all sides
```

As well as `-<number>` suffixes that control margin sizing, the location of the padding can also be controlled:

```
.mt-1    >     Smallest margin on top
.mb-2    >     Small margin on bottom
.my-3    >     Medium margin on top and bottom
.mx-4    >     Large margin on left and right
```

In Bootstrap `left` and `right` are referred to as `start` and `end` respectively. This is to ensure that the syntax makes sense to user's that read from left to right (LTR) as well as right to left (RTL).

```
.ms-1    >     Smallest margin at start (left)
.me-2    >     Small margin at end (right)
```

You can read more about spacing utility classes here: [Spacing Utility Classes](https://getbootstrap.com/docs/5.2/utilities/spacing/).

##### Flexbox

Bootstrap is built with flexbox and provides direct access to flex styles through a system of classes.

```
.d-flex                  >     Display flex
.flex-column             >     Arrange as a column
.flex-row                >     Arrange as a row
.flex-wrap               >     Wrap items
.flex-nowrap             >     Do not wrap items
.justify-content-center  >     Centre align items along the main axis
.align-items-center      >     Centre align items along the cross axis
```

For example, in order to centre align items on both axes, you can use the following classes:

```html
<div class="d-flex align-items-center justify-content-center">
  <div class="border p-5">Centre</div>
</div>
```

You can read more about the flexbox system here: [Flexbox](https://getbootstrap.com/docs/5.2/utilities/flex/).

##### Other Utilities

There are many more utility classes that can be used to customise Bootstrap. These include classes to control:

- Text alignment
- Text style
- Font weight
- Font size
- Text colour
- Background colour
- Border
- Shadow
- Position
- Overflow

> Before writing custom CSS in a Bootstrap project, it is worth spending some time to research if a Bootstrap class can handle this instead.

#### Component Classes

Unlike utility classes, which refer directly to a specific style, component classes represent a group of styles used to build a specific component. For example, we may use the `btn` component to add styles to an element that the user can interact with:

```html
<div class="btn-group">
  <button class="btn btn-primary">Primary</button>
  <div class="btn btn-info">Info</div>
  <a href="#" class="btn btn-danger">Danger</a>
  <input type="reset" class="btn btn-warning" value="Warning" />
  <input type="submit" class="btn btn-success" value="Success" />
</div>
```

<div class="btn-group">
  <button class="btn btn-primary">Primary</button>
  <div class="btn btn-info">Info</div>
  <a href="#" class="btn btn-danger">Danger</a>
  <input type="reset" class="btn btn-warning" value="Warning">
  <input type="submit" class="btn btn-success" value="Success">
</div>
<br/>

All of these classes enable an HTML element to be styled in a consistent way. You can read more about the button component here: [Button Component](https://getbootstrap.com/docs/5.2/components/buttons/).

Other popular components include:

- [`.card`](https://getbootstrap.com/docs/5.2/components/card/)
- [`.accordion`](https://getbootstrap.com/docs/5.2/components/accordion/)
- [`.alert`](https://getbootstrap.com/docs/5.2/components/alerts/)
- [`.badge`](https://getbootstrap.com/docs/5.2/components/badge/)
- [`.breadcrumb`](https://getbootstrap.com/docs/5.2/components/breadcrumb/)
- [`.btn-group`](https://getbootstrap.com/docs/5.2/components/button-group/)
- [`.modal`](https://getbootstrap.com/docs/5.2/components/modal/)
- [`.nav`](https://getbootstrap.com/docs/5.2/components/navs-tabs/)

These component groups form the basis of the Bootstrap framework and should be used like lego blocks to build up a layout.

---

## Lesson Task

### Brief

For this task, you will create a single page application that uses Bootstrap. You should not customise Bootstrap in any way or use custom CSS at all.

You can use an existing project, an upcoming or planned project, or a fictional project.

Design a landing page for your project that includes a header, navigation, and a footer. The navigation should scroll you to the correct location on the page. Include a form that allows the user to register their interest in your project.

### Process

1. Design a simple one page landing page
2. Create a new project folder
3. Link the CDN Bootstrap CSS and JS files to your HTML
4. Use HTML + Bootstrap CDN to build the page

### Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.2/)
- [Bootstrap CDN](https://getbootstrap.com/docs/5.2/getting-started/download/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.2/examples/)
