---
title: CSS Variables
description: sample
tags: HTML and CSS
sidebar: html-css
---

## Introduction

On large sites you might find that you start repeating common values. Colours are a common place where you'd repeat the same colour codes. CSS variables (also known as Custom Properties) allow you to create variables you can reuse throughout your stylesheet. It not only helps you follow the DRY (Don't Repeat Yourself) principle, but also makes the code easier to read.

## CSS Variables

### Syntax

We set a variable’s name and value using the following syntax: `--bright-blue: #2b88ff`.

The property name is set using a double hyphen --. To make the variable available globally, we can set it to the :root pseudo-class, but there might be times you want to limit the variable's scope.

Once we've set the variable name and assigned it a value, we can use it to style an element using the `var()` function like so:

```html
<button>Click me</button>
```

```css
:root {
  --bright-blue: #2b88ff;
  --white: #fff;
  --horizontal-space: 0px 10px;
}

button {
  background-color: var(--bright-blue);
  color: var(--white);
  padding: var(--horizontal-space);
}
```

You can set many different properties and are likely to use it on things like font families, font-sizes colours, spacing, and more.

CSS variables are subject to CSS's cascading rules, and so can be overridden. This can be especially useful if you change the value of a variable in your media queries.

### Compatibility

There are some compatibility concerns. CSS Variables are not supported on Internet Explorer (IE), but most modern browsers do support it. If the site you're developing has a significant number of users on IE, you might need to add fallback values when using your variable, although this defeats quite a lot of the purpose of using CSS Variables. As with many compatibility concerns, especially with IE, it's a choice you need to make about how important IE is.

### @import

The @import rule allows us to import styles from other stylesheets. We might choose to make multiple stylesheets for different aspects of our site. Having one stylesheet for all our styles is better for performance as there are fewer calls to the server, but it doesn’t give a good experience as a developer.

To see an example of how to set that up, you can clone [this repo](https://github.com/NoroffFEU/import-for-css-variables) and see how @import is used to load stylesheets into one style.css file.

<hr>

## Activities

**WATCH**

Video: [CSS custom properties overview](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview) (3m 44s) Video: [Configure CSS custom properties](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties) (2m 26s) Video: [CSS custom properties and inheritance](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance) (4m 27s)

<hr>

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/Noroff-Education/lesson-task-htmlcss-module4-lesson3).

Attempt the answers before checking them against the answers in the [answers branch](https://github.com/Noroff-Education/lesson-task-htmlcss-module4-lesson3/tree/answers) of the repo.
