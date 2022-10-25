---
title: Manipulating the DOM
description: sample
tags: JavaScript 1
sidebar: javascript-1

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Manipulating the DOM means adding, editing and deleting content on a web page.

In this lesson we'll look at:

- What the DOM is
- How we can edit DOM elements.

## The DOM

DOM is:

- An acronym of Document Object Model.
- An interface, specifically an Application Programming Interface (API).
- Provided by browsers to interact with and manipulate web pages.

If you view the source of a web page (right-click -> View Page Source), what is displayed is the content - the HTML, CSS, JavaScript, etc. - sent to the browser by the server.

The browser uses the DOM to manipulate this content and display the web page.

Differences in how browsers implement the DOM (and JavaScript) leads to differences in how web pages are displayed.

This was mainly a problem when Microsoft's Internet Explorer (IE) was the dominant browser. Microsoft didn't follow the ECMAScript standard, which led to frontend developers spending a lot of time getting pages to render correctly in various versions of IE.

Today, IE is no longer maintained by Microsoft, and fewer companies are willing to spend time on IE fixes (though many places still drive their developers mad by insisting on catering for IE).

Differences in how mobile versions of browsers implement the DOM are more likely to cause issues when you're trying to render correctly across various devices and browsers.

We can use JavaScript to manipulate the DOM, specifically to add, edit, and delete elements and content.

### window and document objects

The **window** object is the parent object in a web page displayed by a browser.

One of the properties of the window object is **screen** that holds information about the screen.

Type **window.screen** or just **screen** into a console and press enter to see information about your screen.

Another property of window is **document**. The document is the D in DOM.

On any web page, enter the following into the console: **window document** or just **document**.

document contains all the nodes (HTML elements) in the DOM and all the methods (functions) and properties the browser and developers can use to manipulate those elements.

The video below is an intro to the DOM.

<iframe src="https://player.vimeo.com/video/444052197?h=983809296b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Introduction to the DOM"></iframe>

## DOM selectors

To manipulate the DOM, we first need to select an element on which we can do this manipulation.

A lot of tutorials use getElementById to select a node - an HTML element - by its id attribute. This was one of the first ways to select something in the DOM and is still valid. We, however, will be using the newer:

- **querySelector** - to select one element, such as a single h1 element on a page.
- **querySelectorAll** - to select many elements, such as all the li tags in a ul element.

We can call both these methods from the document object:

**document.querySelector();** **document.querySelectorAll();**

The argument we pass into each of these methods is the element we want to select: a tag ("h1"), a class (".heading2") or an id ("#accordion").

The video below explores selecting and editing DOM elements.

<iframe src="https://player.vimeo.com/video/444301212?h=e51a5a074e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Manipulating the DOM"></iframe>

[Code](https://github.com/NoroffFEU/manipulating-the-dom) from the video.

## localStorage

The following video looks at using localStorage as a variable store, and the difference between localStorage and sessionStorage.

<iframe src="https://player.vimeo.com/video/456596964?h=8f0cf7767a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="localStorage"></iframe>

## Building a favourites page

In the video below, we will build a favourites page using localStorage.

On the index page, clicking on an icon button will add or remove an item from an array in localStorage.

On the favourites page, the items in storage will be retrieved and displayed.

Because localStorage can only store string values, we'll use **JSON.stringify** and **JSON.parse** to set and get the array of favourites to and from storage.

<iframe src="https://player.vimeo.com/video/457504978?h=726aababe6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Building a favourites page with localStorage"></iframe>

[Code](https://github.com/NoroffFEU/localstorage-example) from the video.

<hr>

## Lesson Task

### Brief

There are practise questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module1-lesson2).

Attempt to answer the questions before checking them against the answers in the script.js file in the [answer branch](https://github.com/NoroffFEU/lesson-task-js1-module1-lesson2/tree/answers) of the repo.
