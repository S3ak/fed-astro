---
title: Customising Bootstrap using Sass
keywords: sample
tags: CSS Frameworks
sidebar: css-frameworks
permalink: css-frameworks/bootstrap-with-sass.html
folder: css-frameworks
---

## Introduction

Bootstrap offers a great basis for building a web application, however the colour and theme design choices made by the Bootstrap team may not match your requirements. Luckily, Bootstrap has been designed with customisation in mind and exposes many options via SASS.

## Environment Setup

This lesson has 3 required dependencies:

- Bootstrap 5.2
- SASS
- Live Server

> Make sure that you have your terminal open to the correct folder. The easiest way to ensure this is to use the terminal in VS Code which will automatically open at your current working folder.

> Make sure to run `npm init -y` to create a new `package.json` file if you don't already have one.

### Installing Bootstrap

In order to install Bootstrap to your project, you will need to have NodeJS and NPM setup. If you do not have these installed already, you can refer to this tutorial: [Installing NodeJS](https://noroff-content.gitlab.io/feu/node/installing-node.html).

```bash
npm install bootstrap
```

### Installing SASS

If you do not already have SASS installed, you can do so with this command:

```bash 
npm install -D sass
```

### Installing Live Server

If you do not have Live Server installed, or you are not using the Live Server VS Code extension, you can do so with this command:

```bash
npm install -D live-server
```

### NPM Scripts

In order to build and run Bootstrap with custom SASS, you will need to add the following scripts to your package.json file:

```json
"scripts": {
  "build": "sass src/scss:dist/css",
  "watch": "sass --watch src/scss:dist/css & live-server"
}
```

## Bootstrap Variables

If you explore either the Bootstrap SASS or CSS files you will notice that many values are controlled by variables. For example, the styles for the `.card` component:

```scss
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: $card-height;
  word-wrap: break-word;
  background-color: $card-bg;
  background-clip: border-box;
  border: $card-border-width solid $card-border-color;
  @include border-radius($card-border-radius);
  @include box-shadow($card-box-shadow);
}
```

In total, 5 properties are controlled by either variables or mixins. Each of these variables corresponds with a variable in the `_variables.scss` file. For example, the colour variables are defined in this file like so:

```scss
// scss-docs-start color-variables
$blue:    #0d6efd !default;
$indigo:  #6610f2 !default;
$purple:  #6f42c1 !default;
$pink:    #d63384 !default;
$red:     #dc3545 !default;
$orange:  #fd7e14 !default;
$yellow:  #ffc107 !default;
$green:   #198754 !default;
$teal:    #20c997 !default;
$cyan:    #0dcaf0 !default;
```

The `!default` flag means that a second declaration of this variable will override the first one. This means that we can write our own SASS variables with the same names in order to start customising the theme.

Take this project structure for example:

```
/package.json
/node_modules/bootstrap/scss/_variables.scss
/src/scss/_variables.scss
/src/scss/styles.scss
```

We have the original `_variables.scss` file which contains the default values for each variable. We also have a `_variables.scss` file in our `src/scss` directory containing our custom overrides. For example:

`/src/scss/_variables.scss`
```scss
$blue:    #5d95e8;
$indigo:  #916fc8;
$purple:  #5d3b9c;
$pink:    #ab4578;
$red:     #fa2f44;
$orange:  #ffa053;
$yellow:  #ffdf7e;
$green:   #4fe49e;
$teal:    #9fffe2;
$cyan:    #8eecff;
```

You can read more about default values here: [Default Values](https://sass-lang.com/documentation/variables#default-values).

Inside our `src/scss/styles.scss` file we `@import` our custom variables before we `@import` the main Bootstrap SASS file:

```scss
@import "variables"; /* /src/scss/_variables.scss */
@import "../../node_modules/bootstrap/scss/bootstrap";

.btn-custom {
  @extend .btn-warning;
  
  &:hover {
    @extend .btn-danger;
  }
}
```

The first line is the shortcut to our custom variables. The second line is the import of the main Bootstrap SASS file from the `node_modules` directory.

Below we have a custom button style that changes colour from `btn-warning` to `btn-danger` when the user hovers over it.

```html
<button class="btn btn-custom">Warning!</button>
```

If you check the output `/dist/css/styles.css` file, you will see that this custom button class has been slotted into place within the existing Bootstrap files - instead of creating new styles at the end of the stylesheet. You should also notice that the colour theme transformations carry over to the custom button class.

To unlock the full potential of your `_variables.scss` file, take a copy of Bootstrap's version of the same file and make sure to import `Bootstrap SASS Functions` from the `node_modules` directory:

```scss
@import "../../node_modules/bootstrap/scss/functions";
```

----

## Lesson Task

### Brief

Using the landing page design made with SCSS in the previous lesson, implement this design using Bootstrap and SASS.

Create a new SCSS file in the `src/scss` to house your Bootstrap customisation work, and import Bootstrap SASS from `node_modules` as described above.

Override Bootstrap styles to implement your themed landing page.

### Process

1. Install Bootstrap and SASS in a new project
2. Create a new SCSS file in the `src/scss` directory
3. Create a new SCSS variables file in the `src/scss` directory
4. Import Bootstrap SASS from `node_modules`
5. Implement the theme design in the SCSS file