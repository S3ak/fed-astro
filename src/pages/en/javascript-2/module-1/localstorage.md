---
title: Local Storage
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Local Storage/`localStorage` allows us to store data in the browser that will persist across browser sessions. This means it will continue to exist after we've opened and closed the browser.

Local Storage allows us to store data for users visiting our websites and apps, however, if they clear all of the browser cache then it will likely also clear these variables.

Local storage is great for storing data such as user preferences (dark mode or light mode enabled), but it can't be relied upon for long time storage. For long-term storage, you would likely be utilizing a database to store the data.

**NOTE:** Local Storage is part of the window interface, meaning that it only exists on browsers.

## The basics

Data in Local Storage is stored as JSON, which are key/value pairs similar to a JavaScript object.

## Viewing and clearing

We need to know how to view and clear our Local Storage. The concept is the same across all browsers, however, the Local Storage data is in different tabs on different browsers.

### Chrome

- Open the Chrome DevTools:

  - F1
  - F12
  - Windows: Ctrl + Shift I, MacOS: Cmd + Opt + I
  - Right-click the document and click Inspect.

- Click on the Application tab.

- Click on `Local Storage` in the left menu list column. You will now see an entry for the page you are on. Clicking on this entry will then show you any values stored in Local Storage for that page.

**NOTE:** If you haven't stored any values then no values will show.

### Firefox

- Open the Firefox Developer Tools with one of the following:

  - F12
  - Windows: Ctrl + Shift I, MacOS: Cmd + Opt + I
  - Right-click the document and click Inspect.

- Click on the `Storage` tab.

- Click on `Local Storage` in the left menu list column. You will now see an entry for the page you are on. Clicking on this entry will then show you any values stored in Local Storage for that page.

**NOTE:** If you haven't stored any values then no values will show.

## Storing data: `setItem`

To store data in `localStorage`, we use the `setItem` property. We then give the key we want to set a value for and the value this key must be set to.

In the following example, we will set the `firstName` key to the value of `Ola`.

```js
localStorage.setItem("firstName", "Ola");
```

## Retrieving data: `getItem`

To retrieve data from `localStorage`, we use the `getItem` property. We simply specify the key we want to get the value from.

In this example, we are getting the value for the `firstName` key.

```js
const firstName = localStorage.getItem("firstName");
```

## Removing item: `removeItem`

You can remove an item with `removeItem`. The `removeItem` method takes a key and will remove the item at that key. If there is no item at that key then the method will do nothing.

In this example, we are removing an item with the key of `firstName`:

```js
localStorage.removeItem("firstName");
```

## Clearing storage

You can clear the whole local storage with the `clear` method.

In this example, we are clearing the local storage:

```js
localStorage.clear();
```

## sessionStorage

`sessionStorage` is exactly the same as `localStorage` except its data is cleared immediately when the page is closed.

## Video

In this video we take a look at how to use Local Storage:

<iframe src="https://player.vimeo.com/video/738350296?h=480af8d289&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="localStorage"></iframe>

<a href="https://player.vimeo.com/video/738350296?h=480af8d289" target="_blank" alt="Classes video">Link to video</a>

<hr>

## Lesson task

### Goal

You will need to use Local Storage at some point so it's good to be accustomed to it.

### Brief

You will use the different Local Storage methods available to you.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practice what you have learned in the lesson.

### Level 1 process

1. Find where Local Storage is in your browser.

2. Add a `lesson` key with the value of `Local Storage`.

3. Remove the `lesson` key and check that it has been removed.

4. Add the following object with the key of `pet`. Don't forget to stringify it first:

```js
const pet = {
  type: "Dog",
  name: "Lilje",
};
```

5. Retrieve the object, store it as a variable, parse it, and then log the result.

# Additional resources

[MDN Docs: Local storage `removeItem`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem)

[MDN Docs: Local storage `clear`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear)

[MDN Docs: Local storage `key`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/key)
