---
title: Introductory Concepts
keywords: sample
tags: JavaScript 1
sidebar: javascript-1
permalink: javascript-1/intro-concepts.html
folder: javascript-1
---

## Introduction

In this lesson we look at some concepts we will use throughout our JavaScript studies.

The topics we will cover are:

- Using the browser console
- ES6
- Declaring variables with the const and let keywords
- Creating strings with backticks
- Accessing object properties using brackets
- Functions as properties of objects.

## The browser console

The browser console is one of your most essential tools when writing JavaScript.

It is a good idea to keep it always open to view variables that you log and any errors that you may encounter.

We suggest using either Firefox or Chrome when developing with JavaScript.

In the video below, we'll look at logging variable values using the console.

<iframe src="https://player.vimeo.com/video/443132927?h=bb68f831f5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Console Commands"></iframe>

## ES6

ECMAScript (ES) is the official specification for JavaScript. It decides what features should be in the language.

ES6, or ES2015, was released in 2015 and introduced many improvements to the language after a long gap in updates to the specification. New features are now continuously being added.

ES6 is often, somewhat confusingly, used to refer to the modern versions of JavaScript.

You can check the browser support for a feature (JavaScript and CSS) by using [caniuse.com](https://caniuse.com/)

## const and let

ES6 introduced the <b>const</b> and <b>let</b> keywords for declaring variables.

A key difference between const and let is that let can have its value reassigned, whereas const cannot.

If we declare a variable using const and assign it a value:

```js
const count = 1;
```

We cannot give it a different value. We cannot now do this, for example:

```js
count = 2;
```

[There are more details on const and let in this Scrimba video.](https://scrimba.com/scrim/cDkbEWTM)

The cast begins with a brief look at the undefined value.

## Strings using backticks

Previously, we've seen that we can create strings using double or single quotes, and that you should pick one and use it consistently (for any Noroff code use double quotes).

There is another way to create strings - with backticks, which is this character: `.

Using backticks:

- Provides an easy way to split strings across lines.
- Provides a cleaner way to embed variables in strings.

On many keyboards the key is situated top left.

<iframe src="https://player.vimeo.com/video/443988703?h=fa6ab718df&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Creating strings with backticks (template literals)"></iframe>

[Code](https://github.com/NoroffFEU/creating-strings-with-backticks) from the video.

## Accessing object properties using brackets

Previously we have accessed object properties using dot notation – using a full stop.

We can also access object properties using square brackets [], with the key of the property as the value inside the brackets:

```js
const pet = { type: "dog" };
console.log(pet["type"]);
```

[This Scrimba video explores this further.](https://scrimba.com/scrim/cMgvkECv)

## Functions inside objects

We've previously seen objects with properties having string, number, or Boolean values.

Objects can also have functions as properties. These are often called <b>methods</b>.

[Scrimba video.](https://scrimba.com/c/cMgvJKHK)

## Imports/exports

We can split our code up into files using modules.

To import code from another file, we need to export it first.

There are two kinds of exports:

1. Named exports
2. Default exports.

### Named exports

Named exports are exported with the <b>export</b> keyword and imported using their name between braces.

![Named exports](../images/js/1-1-namedexports.png)

One file can contain many named exports.

You can alias a named export using the <b>as</b> keyword.

![Named exports](../images/js/1-1-namedexports2.png)

### Default exports

Default exports are exported with the <b>export default</b> keywords and imported without braces.

![Default exports](../images/js/1-1-defaultexports.png)

When you import a default export, you can import it using any name, the name you use in the import is just an alias.

### Navigating directories

**- Go up a folder**

../ - go back (or up) one directory (folder) from the current directory. You can use several of these, the below will go back three folders: ../../../

**- Look in the current folder**

./ - look in the current folder for the path Using imports and exports

The following video looks at using imports and exports.

<iframe src="https://player.vimeo.com/video/457199012?h=f3e2f37cfe&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Imports and exports with modules"></iframe>

**Import/export example**

The following video converts a small existing project to use modules, splitting the code up using imports and exports.

<iframe src="https://player.vimeo.com/video/456346771?h=61a3fcad19&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Import and export example"></iframe>

[Code](https://github.com/NoroffFEU/import-export-example) from the video.

<hr>

## Lesson Task

### Brief

There are practise questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module1-lesson1).

Attempt to answer the questions before checking them against the answers in the script.js file in the [answer branch](https://github.com/NoroffFEU/lesson-task-js1-module1-lesson1/tree/answer) of the repo.
