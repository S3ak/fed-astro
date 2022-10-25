---
title: Getting Started
description: sample
tags: Programming Foundations
sidebar: prog-found

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Programming is the act of writing instructions for a computer to follow.

Computers only speak `binary`, in `0`s and `1`s. In order to communicate with them we use programming languages which are eventually translated into binary. The purpose of a programming language is to make the process of writing binary instructions as simple and understandable for humans as possible.

In web browsers, `JavaScript` is the programming language we use. A program inside the browser called a JavaScript engine translates the code and delivers it to the computer to execute.

Everything dynamic on a web page, from news feeds to like buttons and games is created with JavaScript.

## Arranging your code

When working on a web project, keep your JavaScript files in a folder called `js` or `scripts`. Your HTML files should always be in the root of the project, that is, not in a subfolder.

Your folder names like `js`, `css` and `images` should be in lower case.

You can add your script files before the closing </body> tag in an HTML page.

```html
<html>
  <head></head>
  <body>
    <script src="/js/script.js"></script>
  </body>
</html>
```

## Visual Studio Code

We recommended using Visual Studio Code for web development. You can download it <a href="https://code.visualstudio.com/" target="_blank">here</a>.

The video below covers automatic formatting, themes and the live server extension you can use to run your projects.

It also covers adding a JavaScript file to an HTML page.

<iframe src="https://player.vimeo.com/video/488987197" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/488987197/7bf305b3bb" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/getting-started-with-vscode" target="_blank">Code from the video</a>

> [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) is a VSCode plugin that will allow you to run a local server from within VSCode and reload your pages automatically when code changes. Once installed, right-click on an html page and select `Open with Live Server

---

## Using the development console

> We recommend using <a href="https://www.google.com/chrome" target="_blank">Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox</a> as your web browser when developing for the web.

We can use a browser's `console` tab in the developer tools to write and run JavaScript without needing any other program.

To open the developer tools, do one of the following:

- right-click anywhere on a web page and select `Inspect` from the menu
- In Chrome, from the menu in the top right (the three vertical dots) go to `More Tools` and then `Developer Tools`
- use the keyboard shortcut `Ctrl` `Shift` `J` (Windows) or `Cmd Option J` (Mac).
- press the F12 key

**_Paying attention to the console in your browser is very important as this is where errors in your code will appear_**.

The video below is an introduction to the Developer Tools and the console.

<iframe src="https://player.vimeo.com/video/489131095"  height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/489131095/041f15e3c5" target="_blank">Watch on Vimeo</a>

---

If you'd prefer the dev tools dark theme in Chrome to the default light one, [here are instructions on enabling it](https://developers.google.com/web/tools/chrome-devtools/customize/dark-theme).

---

## Formatting

Formatting your code properly is **_very important_**. Well-formatted code is far easier to read and follow, for you and other developers, and it makes it easier to catch bugs and mistakes.

For now, concentrate on the following:

- consistent indentation - use tabs to properly align your code
- use semi-colons after your code statements

This is an example of poorly formatted and indented code:

```js
console.log(" hello");
console.log("world");
```

This is an example of well-formatted and indented code:

```js
console.log("hello");
console.log("world");
```

The `Format on save` automatic formatting setting is discussed in the video above. You can also format a file by right-clicking anywhere inside a file and selecting `Format Document`.

### A note on semi-colons

Semi-colons at the end of statmements are technically only necessary if you have more than one statement on a line.

For the most part, using semi-colons is a matter of preference. Different companies and dev studios will have their own `style guides` - a set of rules, including whether to use semi-colons or not, that all devs must follow.

Noroff's preference is to use semi-colons, so please include them in your code.

## Comments

Comments are statements in our code that are not run by the JavaScript engine, but are used to prevent code from running and provide information to ourselves and other developers.

Comments can be single-line comments using double forward slashes `//`:

```js
// this is a single-line comment
```

They can also be multi-line comments using a single forward slash `/` and an asterisk `*`:

```js
/*
this is a multi-line comment
notice that the / and * are swapped around when the comment is closed
*/
```

Single-line comments are often combined together:

```js
// this is a single-line comment
// with another single-line comment
```

When learning JavaScript, comments are also often used to explain what we want to do in the future at a particular place in the code, either for ourselves or other people.

When asking a tutor for help, they will often use comments to indicate what code you should write in that position in your code.

```js
// create a for loop here that counts from 1 to 10
```

The video below discusses comments.

<iframe src="https://player.vimeo.com/video/489566490" width="640" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/489566490/338e17f909" target="_blank">Watch on Vimeo</a>

<hr>

## Activities

### Watch

[The Weird History of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4)

---

<hr>

## Lesson Task

There is a practice question in the master branch of <a href="https://github.com/NoroffFEU/lesson-task-pf-module1-lesson1" target="_blank">this repo</a>.

There is an example answer in the <a href="https://github.com/NoroffFEU/lesson-task-pf-module1-lesson1/tree/answer" target="_blank">answer branch</a>.

Try the exercise before checking the solution.
