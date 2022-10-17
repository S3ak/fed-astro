---
title: Creating HTML in functions
keywords: sample
tags: JavaScript 1
sidebar: javascript-1
permalink: javascript-1/html-in-functions.html
folder: javascript-1
---

## Introduction

In this lesson we will look at:

- Function arguments.
- Returning values from functions, together with a practical example.
- Creating HTML inside a function from the values inside an array.

## Function arguments

Function arguments are values that get passed into functions.

Technically, in function declarations, the variables are called parameters.

In the code below, name is the parameter. (It's up to the developer to decide what to call the parameter. It's called 'name' here, but this is only one example).

```js
function printName(name) {
  console.log(name);
}
```

When we call the function using round brackets, the value that is passed into the function parameter is called an argument.

```js
printName("Sofie");
```

What we pass in in the brackets becomes the value of name in the function. In this case, name will receive the value "Sofie".

So, the console log inside the function will display Sofie in the console.

We want to pass different values into a function so that the code inside can perform the same actions on different values (data).

![Function arguments](../images/js/1-4-functionarguments.png)

[This Scrimba takes a further look at function arguments.](https://scrimba.com/c/crqy9NuP)

## Returning values from functions

We can return a value from a function, and we can assign that return value to a variable.

[We look at how to do that in this Scrimba.](https://scrimba.com/c/czLNwafP)

## A function return value example

Below is an example of using the return value of a function.

[In this Scrimba, a simple age-checking function for a website is created.](https://scrimba.com/c/ceqmb6fB)

## Creating HTML in a function

A common task you will perform when fetching data from APIs is how to use functions to create HTML with the values inside an array.

[In this Scrimba:](https://scrimba.com/c/ceqmWphQ)

- An array is passed into a function as an argument.
- An HTML string is created inside the function from items in the array.
- The string is returned from the function and assigned to a variable.
- The variable is assigned to the innerHTML property of an existing HTML element.

<hr>

## Activities

**WATCH**

The below tutorial video on HTML in Loops (1h 51m).

<iframe src="https://player.vimeo.com/video/698117262?h=a442c4c07f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="HTML in Loops"></iframe>

<hr>

## Lesson Task

### Brief

There are practise questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module1-lesson4).

Attempt to answer the questions before checking them against the answers in the [answer branch](https://github.com/NoroffFEU/lesson-task-js1-module1-lesson4/tree/answers) of the repo.
