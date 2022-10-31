---
title: Form validation
description: sample
tags: JavaScript 1
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

In this lesson we look at:

- Regular expressions.
- Preventing the default behaviour of forms.
- Simple form validation.

## Regular expressions

Regular expressions are used to match patterns. We place the pattern in between two forward slashes / /.

We can use the test() method to see if there is a match between a regular expression and a string. The return value is a boolean value.

The below will test if there is a match between the regular expression /hello/ and the string "Oh hello there". In other words, does the string contain the characters hello?

```js
const stringToTest = "Oh hello there";
// the expression is placed between / /
const expression = /hello/;
const result = expression.test(stringToTest);
console.log(result);
// true
```

Everyday use for regular expressions is to test if form input values match a specific pattern, e.g., does a value look like an email address.

The function below could be used to test if the argument passed in looks like an email address:

```js
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
```

If the argument looks like an email address, this function will return true and false if it doesn't.

You will not often have to create your own regular expressions. You can see in the regex example above that they can be challenging to read. Most of the time, you can find regular expressions on the Internet to test for patterns, e.g., is a phone number in a particular format or is a password complicated enough.

**READ**

Article: [Top 15 commonly used regex](https://digitalfortress.tech/tips/top-15-commonly-used-regex/) for a list of common regular expressions.

## Preventing default form behaviour

To prevent the default behaviour of submitted forms, which includes reloading the page, we can use:

```js
event.preventDefault();
```

<iframe src="https://player.vimeo.com/video/453361604?h=765aa36966&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Preventing the default behaviour of a form"></iframe>
 
[Code](https://github.com/NoroffFEU/submit-event-preventDefault) from the video.

## Simple form validation

We're going to use the **trim()** method and the **length** property to help us add simple validation to a form.

<iframe src="https://player.vimeo.com/video/453789618?h=501a1e3296&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Simple form validation"></iframe>

[Code](https://github.com/NoroffFEU/simple-form-validation) from the video.

<hr>

## Lesson Task

### Brief

There are practise questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module4-lesson4).

Attempt to answer the questions before checking them against the [answers branch](https://github.com/NoroffFEU/lesson-task-js1-module4-lesson4/tree/answers) of the repo.
