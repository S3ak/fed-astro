---
title: Introduction to HTML
keywords: sample
tags: HTML and CSS
sidebar: html-css
permalink: html-css/intro-html.html
folder: html-css
---

## Introduction

Throughout this course, we will look at HTML in more detail and learn how to use it when creating a website.

A few notes about HTML:

- HTML stands for HyperText Markup Language.
- Any website you visit has been created with the use of HTML.
- Every web page is an HTML file.
- It is the backbone of website creation and a relatively easy concept to learn.
- HTML is made up of short codes typed into a text file by the creator of a site. These codes are known as tags.
- When the text is saved as an HTML file and opened by a browser, such as Google Chrome, the browser translates the text into the webpage that was intended to be created.

## Code Editors

Because HTML is written as text, a program as simple as Notepad (PC) or TextEdit (Mac) can be used for this purpose. Yet, these have minimal functionality. They don’t offer functionality such as syntax highlighting and error spotting in your code.

We recommend using [VS Code](https://code.visualstudio.com/) as your code editor. It is a popular choice for front-end developers. We also suggest plugins such as [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), which automatically formats your code for you and [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), which allows you to code on one screen and have the browser update on another screen as you work.

Other code editors include [Atom](https://atom.io/), [Brackets](https://brackets.io/) and [Sublime](https://www.sublimetext.com/).

If you already have a code editor you prefer, you’re welcome to use that.

<br>

> ℹ️ INFO
>
> Try using a dark theme with less contrast, as this can be less tiring on your eyes than a white theme. Using a dark or white theme is about personal preference, so try different options to see what works best for you.

<br>

## A Basic HTML page

Below you can see the markup of a basic HTML page. We will be going through the page looking at each element separately.

What is important to know is that an HTML page is made up of HTML *elements*. These elements are written using HTML *tags*. An HTML tag has a simple syntax which is a letter or word enclosed by the “<“ symbol at the beginning and the ”>” symbol at the end. For example, you have the paragraph tag like this: `<p>`. You have opening and closing tags, which look the same, but the closing tag includes a “/” symbol, so `</p>`. You have your content between the opening and closing tags, for example, `<p>This is the paragraph text content</p>`. When the browser reads this, it creates a paragraph *element* with the content between the tags. Note that some tags, like the `<img>` image tag, are self-closing, meaning that it doesn’t require a closing tag. The content between the tags can be textual, or you can have other tags *inside* of the *parent* tag, creating, you guessed it: children elements.


The same principle goes for all the other tags in the example code below; the `<body>` tag creates a body element, and the `<nav>` tag makes a navigation element, etc. The terms “tag” and “element” are often used interchangeably, but it is nice to know the distinction between them to understand how HTML pages work in the browser in conjunction with JavaScript, which you will learn later in this programme. 

HTML markup example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My first website | Home</title>
    <meta name="description" content="The home page to my first ever website." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <header>
      <img src="logo.jpg" alt="Logo for My First Website" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <h1>Hello world</h1>
        <p>
          Welcome to my website. Here I'll be putting into practice all the things I've learned.
        </p>
      </section>
    </main>
    <footer>
      <p>
        If you need more info, you can
        <a href="https://twitter.com">find me on Twitter</a>
      </p>
    </footer>
  </body>
</html>
```

The HTML element is also an object you will learn more about later. These objects you can manipulate using JavaScript. So to re-iterate, the browser creates a bunch of HTML elements when it reads the HTML document containing your HTML tags.

### Doctype Declaration

`<!doctype html>` is a so-called doctype declaration and is necessary at the top of each HTML page. The declaration lets the browser know to interpret the page as HTML.

### Head

The `<head>` element of the document contains [metadata](https://en.wikipedia.org/wiki/Metadata) about the page, yet it is not displayed on the page. The metadata defined in the head might include the page title, descriptions of the page, styles, scripts, viewports, links, and more.

```html
<head>
  <title>My first website | Home</title>
  <meta name="description" content="The home page to my first ever website." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

<br>

> **📄 DOCUMENTATION**
>
> For further information, please check out the MDN docs: [What's in the head? Metadata in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML).

<br>

### Title

The `<title>` element sets the title of the document. You can see the title displayed on the browser tab. It is also the title that is displayed on search engines, so it is important to pick clear, unique titles for each page. On most websites, the title will contain the site name and the page name. For example, `"Business Name | Contact Us"`.

<br>

> ⚠️ WARNING
>
> The `<title>` element should not be confused with the `<h1>` element. For more information, check the [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_a_title).

<br>

### Meta elements

`<meta>` elements are used to add extra information about the page. Two attributes that are a good idea to note: the `description` and `viewport` attributes.

- **Meta Description**

The page’s meta description is vital for [search engines](https://developer.mozilla.org/en-US/docs/Glossary/Search_engine) as this text is displayed on a results page under the page’s title. It should be enticing and unique for each page on the website.

- **Meta Viewport**

The visible area of a page (or [viewport](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts#what_is_a_viewport)) varies a lot across devices, and so the meta viewport element `<meta name="viewport" content="width=device-width, initial-scale=1">` provides a way to tell the browser how to control the page’s dimensions. Adding the meta viewport tag to your HTML document is crucial for creating websites that look good across devices.

### Body

Everything visible on the page should go inside the `<body>` element. The `<head>` element is for all the extra information and styling for the page. HTML content that you intend to be displayed must be inside the `<body>`. We briefly mentioned the concept of nesting elements into a parent-children structure, which is a fundamental concept of HTML. To re-iterate, for example, a `<div>` tag is nested inside the `<body>` tag, which is nested inside an `<html>` tag.

<br>

> ℹ️ INFO
>
> Note below how nested elements are indented. Proper formatting makes the code easier to read.

<br>

HTML code example:

```html
<body>
  <header>
    <img src="images/logo.jpg" alt="Logo for My First Website" />
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <h1>Hello world</h1>
  </header>
  <main>
    <section>
      <h2>My work</h2>
      <p>Welcome to my website. Here I'll be putting into practice all the things I've learned.</p>
    </section>
  </main>
  <footer>
    <p>
      If you need more info, you can
      <a href="https://twitter.com">find me on Twitter</a>
    </p>
  </footer>
</body>
```

### Header

The header of a page contains an introduction to the page. It might include the logo, a heading and/or introduction to the page, the site’s main navigation, and a header image. It’s important to highlight the difference between `<head>` and `<header>`.

<br>

> ⚠️ WARNING
>
> - The `<head>` is used for extra information about the document.
> - The `<header>` is the introduction to the page.

<br>

### Nav element

The `<nav>` element should contain your main navigation for the website. On most websites, you’ll likely have one `<nav>` element, while links in the footer do not need to be in a `<nav>` element. Suppose you have navigation to allow moving between pages, as well as moving around on that page. In that case, you might want to use the `aria-labelledby` attribute, which is your primary navigation, as you can see in [this example on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby).

### UL and LI elements

In the HTML code example above, there is a `<ul>` element inside the `<nav>` element – an abbreviation of “unordered list”. We use it in this context because there is a list of links inside the navigation element. Each item inside the `<ul>` is a list item, denoted as `<li>`. By default, a `<ul>` displays as a bullet point list, but CSS can adjust this.

Another type of list you might see is an ordered list, denoted using the `<ol>` tag. An ordered list is where the order matters and, by default, is numbered.

### Main element

You use the `<main>` element to group the page’s primary content. While the header introduces what the page is about, the main element is used for the actual content. This content should be unique to that page particular page. 

<br>

> ℹ️ INFO
>
> Note that the navigation and primary heading should not be inside the `<main>` element but rather inside the `<header>` element.

<br>

```html
<body>
  <header>
    <nav></nav>
    <h1></h1>
  </header>
  <main>
  	<!-- page content goes here -->
  </main>
  <footer></footer>
</body>
```

### Inline comments

In the code example above, you can see an unusual-looking tag with this syntax `<!-- text -->`. This tag is a comment tag, which is used to communicate information about the code. This text will not be visible on the rendered page.

### Section and Div

The `<section>` element is used to identify specific content sections. A separate sub-heading is often associated with each `<section>` element.

If you need a generic container and there is no meaningful reason for adding the element other than it gives you something to style, then the best element for that is the `<div>`. In general, try to find a semantic element. You can use a `<div>` if there isn’t one. Before HTML5, developers used `<div>` a lot, but now we have more meaningful tags that you should use where appropriate.

### Headings

Headings are essentially titles for pages or sections on the page. Headings run from `<h1>` to `<h6>` and should be used in order of importance. Thus, `<h1>` is the most important heading on the page, then `<h2>` the second most important heading or headings, then `<h3>` the third most important and so on.

There should be one `<h1>` per page, which should be unique. You should also not skip headings (i.e. jump from h1 to h3 with no h2 on the page).

### Paragraphs

Paragraphs, indicated with `<p>` tags, are blocks of text, usually a group of sentences with no line break. Do not use `<br>` tags if you want to break up a paragraph. Instead, close the paragraph and open another paragraph.

### Footer

You can use the `<footer>` element to include additional information about the page. Typically, it will include the copyright information and additional links which users might find useful. It’s generally not very important information and is normally displayed right at the bottom of the page.

## Semantics

In HTML, semantics refers to the meaning of a piece of code. Does the HTML code have meaning? We’d like our HTML to be meaningful because it makes the code easier to read, which is important for you and other developers.

Meaningful code also makes it more accessible. With good semantics, assistive technology can more easily make sense of the different elements on the page and their usage. The same logic applies to search engines. If every element on the page is a `<div>`, then all elements are seen as equal. It’s much better to use meaningful tags to identify what each section is about.

## Good Formatting

Correctly formatting your code makes it much easier to read, and it thus becomes quicker to identify which elements are nested inside of other elements.

To practice good formatting of your HTML, here are key points:

- Elements placed inside other elements should be indented to the right of the parent. For example, the body element is inside the HTML element and should be indented to the right of its parent.
- The opening tag and closing tag should be indented the same amount.
- Elements such as headings, paragraphs and images can be placed on one line.

```html
<div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <div>
<p>Curabitur tempus, mauris ac condimentum consequat, quam eros faucibus ex, at rhoncus elit
lacus nec diam.</p><div>
  <p>Morbi in nisi non ex sodales suscipit eu id sapien. Etiam neque justo, tempus id laoreet id,egestas at odio.</p>
</div>
     </div>
</div>
```

The example above is much more difficult to read than the example below, where indenting is used, making it quicker to scan through the code. You can use the TAB key to indent; most text editors will help you indent correctly. To format your code, you can use plugins such as [Prettier](https://prettier.io/).

```html
<div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <div>
    <p>
      Curabitur tempus, mauris ac condimentum consequat, quam eros faucibus ex, at rhoncus elit
      lacus nec diam.
    </p>
    <div>
      <p>
        Morbi in nisi non ex sodales suscipit eu id sapien. Etiam neque justo, tempus id laoreet id,
        egestas at odio.
      </p>
    </div>
  </div>
</div>
```

<hr>

<br>

> **📄 DOCUMENTATION**
>
> For further information, please check out the MDN docs: [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

<br>

## Activities

> 💻 **WATCH**
> 
> [This tutorial video on laying out a basic HTML page.](https://scrimba.com/scrim/cBL7gDUv?pl=paaBbTa) (15m 39s)

<hr>

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/Noroff-Education/lesson-task-htmlcss-module1-lesson1).

Attempt the answers before checking them against the answers in the [answers branch](https://github.com/Noroff-Education/lesson-task-htmlcss-module1-lesson1/tree/answers) of the repo.
