---
title: Sass
description: sample
tags: CSS Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Sass stands for Syntactically Awesome Style Sheets.

It is a widely used CSS pre-processor. Essentially it provides a way to organise your styles before being compiled into regular CSS that the browsers can understand, as they don't understand Sass syntax.

There are other pre-processors such as LESS and Stylus, but Sass is by far the most popular.

## Syntax

There are two syntaxes used in Sass, one that uses semi-colons (;) and curly braces ({}) with the .scss file extension, and one that omits both those symbols and uses the .sass extension. Instead of braces, the .sass extension uses indentation.

We will use the .scss syntax as that is by far the most common in real-world projects and is compatible with regular CSS as it uses semi-colons and braces.

All CSS is valid .scss Sass, meaning we can paste any regular CSS into a .scss file and it will work.

## Compiler

We will use the Live Sass Compiler extension for VSCode to compile the Sass to CSS.

This is the easiest option, but if you prefer you can use the Sass npm package:

npm install -g sass

We won't cover that package in the video.

## Core Sass concepts

We will briefly mention the core Sass concepts below. They are covered in more detail in the video.

### Variables

Regular CSS does now support variables (custom properties) but the variable syntax in Sass is simpler to use.

Variables in Sass are prefixed with the dollar symbol $.

Like variables in JavaScript, we can assign a value to a variable and use it throughout the code. Unlike variables in JavaScript we can use hyphens (dashes) in variables names.

We can set a primary colour like this:

```scss
$primary-colour: #e85a4f;
```

and then use it like this:

```scss
p {
  color: $primary-colour;
}
```

We could use the $primary-colour variable in multiple places in our code and if we needed to update the colour we would only need to change it in one place.

### Maps

Maps in Sass hold key value pairs, similar to an object in JavaScript.

We can use them to store variables.

Instead of creating several independent colour variables, we could place them inside a map.

```scss
$colours: (
  "primary": #e85a4f,
  "secondary": #6a6a68,
);
```

We access a variable value inside a map using the map-get function:

```scss
color: map-get($colours, primary);
```

### Partials

Sass allows us to split our styles into smaller files and then import them in a single file that will get compiled to CSS.

Files that begin with an underscore (\_) will not be compiled to CSS and need to be imported in a file with a name that doesn't begin with an underscore.

### Nesting

We can nest styles in parent selectors. This is demonstrated in the video.

We recommended not nesting too deep and keeping a relatively flat structure. This will help to avoid long selectors in the compiled CSS and make the code more readable.

### Mixins

A mixin allows us to dynamically create styles using arguments and use these styles wherever we include the mixin.

Here is a mixin that will receive one argument called $radius. Use it to set the border-radius and then return the border-radius property as well as the border property wherever this mixin is included.

```scss
@mixin button-border($radius) {
  border-radius: $radius;
  border: 3px solid white;
}
```

We can include the mixin in a selector like this:

```scss
@include button-border(15px);
```

### Functions

Functions are similarly structured to mixins but they return a value and don't output styles.

Here is a function that receives an argument and returns a value from a map using the argument as the key:

```scss
@function getColour($colour) {
  @return map-get($colours, $colour);
}
```

To get the primary key value rom the $colours map we would use the function like this:

```scss
color: getColour(primary);
```

### Inheritance

If multiple classes use the same property values, we can move the properties into a class, and then use those properties wherever required with the @extend keyword.

We might have some form element styles in a class like this:

```scss
.form-common {
  border: none;
  height: 25px;
}
```

To use those styles in any other selector we can do this:

```scss
input {
  @extend .form-common;
}
```

### Modules

At the time of writing, only the Dart implementation of Sass supports modules and the @use syntax.

Modules are meant to replace the @import syntax.

Since both the VSCode Live Sass Compiler and Create React App both use the libsass implementation which doesn't support modules, we won't be covering them.

## Organising a Sass project

There is no one correct way to organise a Sass project - it will vary depending on project size, number of project members, and those members' personal preferences and experience.

It is common to arrange partials in folders and include them in a file at the root of a sass/scss/styles folder.

All the above concepts are covered in the video.

## Video Lesson

<iframe src="https://player.vimeo.com/video/435392698?h=74ab1425ff" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

Here are the links for the above video: [Code from the video](https://github.com/NoroffFEU/introduction-to-sass) [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) [Settings docs](https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md)

## Activity

Read pages: [style rules](https://sass-lang.com/documentation/style-rules) and [variables](https://sass-lang.com/documentation/variables) in the official docs. (30m)

The official docs reflect the latest version of Sass available in Dart Sass. Because we use the LibSass version of Sass in the Live Sass Compiler extension (and will use it when we use Sass in React), many parts of the official docs don’t apply to what is using at this time (July 2020). Check the compatibility notes in each section of the docs.

Be sure to attempt the lesson task.

## Lesson Task

### Brief

In this task you will practise using Sass to code a layout.

### Resources

Download the XD file from [this repo](https://github.com/NoroffFEU/introduction-to-sass-lesson-task).

### Process

Code the design using Sass.

### Example answer

You can find an example solution in the [answer branch](https://github.com/NoroffFEU/introduction-to-sass-lesson-task/tree/answer) of the repo.
