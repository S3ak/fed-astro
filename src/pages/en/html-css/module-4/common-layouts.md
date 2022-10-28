---
title: Common Layouts
description: sample
tags: HTML and CSS
sidebar: html-css
---

## Introduction

In this lesson we look at common layouts you’ll find on the web. One of the first things to note is that with almost any layout, there will be multiple ways of solving the same problem.

## Page Layout

Let’s look at a website called Rightmove, which is used to find properties to buy or rent. The home page has a fairly simple structure as you can see here:

![Rightmove](../images/htmlcss/4-4-pagelayout.jpg)

Using rectangles, we can start to see how the page is laid out. There are essentially four main sections for the page:

- a navigation section for which we’d use the HTML5 `<nav>` element.
- a search section with a call-to-action.
- a content section with links to articles etc.
- a footer.

![Rightmove 2](../images/htmlcss/4-4-pagelayout2.jpg)

If we drill down into the content section, we can see that it has a two-column layout, and one of the columns has a three-column layout inside it. This nesting of columns is fairly common across the web and it is important to understand how these sections nest and interact with the other sections around them.

![Nesting columns](../images/htmlcss/4-4-nestingcolumns.jpg)

Now let’s take out the content and just view the orange rectangles for the whole page. The background for the sections has been filled in to make it easier to see.

![Outline](../images/htmlcss/4-4-nestingcolumns2.jpg)

Let’s build the layout using CSS Grids.

<hr>

## Activities

**WATCH**

[This tutorial video on building a common layout, this time using Flexbox.](https://scrimba.com/scrim/cRqk2wCD?pl=paaBbTa) (5m)

<hr>

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/Noroff-Education/lesson-task-htmlcss-module4-lesson4).

Attempt the answers before checking them against the answers in the [answers branch](https://github.com/Noroff-Education/lesson-task-htmlcss-module4-lesson4/tree/answers) of the repo.
