---
title: DOM Events
keywords: sample
tags: JavaScript 1
sidebar: javascript-1
permalink: javascript-1/dom-events.html
folder: javascript-1
---

## Introduction

In this lesson we will look at:

- what DOM events are.
- the click event.
- the remainder operator.
- the onchange event.

## Introduction to Events

When something happens in the browser - such as a page loading, a form being submitted or a user clicking a button, the DOM sends an Event.

We can write code to respond to that event.

Some examples of events include:

- **click** - when the mouse button is clicked
- **keydown** - when any key is pressed
- **keyup** - when any key is released
- **mouseover** - when the mouse cursor moves over a DOM element or its children elements
- **mouseout** - when the mouse cursor moves off an element
- **submit** - when a form is submitted

You can find a full list of events [here](https://developer.mozilla.org/en-US/docs/Web/Events).

An event is an object with properties.

The video below is an introduction to DOM events and the click event in particular.

<iframe src="https://player.vimeo.com/video/446926083?h=a8818b2a53&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="DOM Events - Introduction to the click event"></iframe>

[Code](https://github.com/NoroffFEU/dom-events-introduction-and-click-event) from the video.

## The remainder operator

The remainder operator %, sometimes referred to as the modulus operator, returns the remaining integer value after dividing two integers:

```js
const remainder = 5 % 2;
// remainder will equal 1
```

[Scrimba video](https://scrimba.com/c/cMgg4eha)

## The onchange event

The following video looks at the onchange event of a select element and how to create HTML inside that event function.

<iframe src="https://player.vimeo.com/video/446960321?h=90ff412ae1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="DOM Events - onchange event"></iframe>

[Code](https://github.com/NoroffFEU/dom-events-onchange-event) from the video.

## Example with setTimeout

In the next a video, a setTimeout function is used to mimic a loading state when creating the HTML.

<iframe src="https://player.vimeo.com/video/448278416?h=ad6d582ef7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="onchange event - mimicing a loading state"></iframe>

[Code](https://github.com/NoroffFEU/dom-events-onchange-event/tree/extra) from the video.

<hr>

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module2-lesson2).

Attempt to answer the questions before checking them against the answers in the [answers branch](https://github.com/NoroffFEU/lesson-task-js1-module2-lesson2/tree/answers) of the repo.
