---
title: Introduction to CSS
keywords: sample
tags: HTML and CSS
sidebar: html-css
permalink: html-css/intro-css.html
folder: html-css
---

## Introduction

While HTML is used for creating the content of web pages, CSS is used to style web pages. One of the most compelling demonstrations of this is a website called [CSS Zen Garden](http://www.csszengarden.com/). You may apply different CSS styles to fixed HTML content on this site. It is impressive how the entire layout and look of the page can be transformed by changing the CSS applied to HTML content (the HTML stays the same).

## Create a stylesheet and link to HTML

To add styles to our HTML pages, we need to create a `.css` file and link it to our HTML files. To connect a `.css` file to a `.html` file we use the `<link>` tag in our HTML file. The tag we’d use looks like this:  
`<link href="css/styles.css" rel="stylesheet">` and should be placed in within the `<head>` element.

The `href` attribute tells the browser where to look for the stylesheet. In this case, look inside the “css” folder for a file called `styles.css`.

If you clone the repo to your computer, you will see an `index.html` file in the root folder and a `styles.css` file inside the “css” folder. If you open the `index.html` file in your browser, you will see the background has been turned orange by a style set in the CSS.

<br>

> 💎 RESOURCE
>
> We’ve created a simple example of linking a CSS file to an HTML file in [this repo on GitHub](https://github.com/NoroffFEU/html-css-module1-lesson3).

> **📄 DOCUMENTATION**
>
> Documentation on how to clone a git repository: [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

<br>

## The Basic Syntax

To style elements, you need to use a specific syntax.

Here is an example:

```css
h1 {
  font-size: 20px;
  color: green;
}
```

- First, we state which element(s) we want to style using a *selector*. In this case, the `h1`.
- Then, we use curly braces to group the styles we’re applying to that selector. In this case, we’re setting the font size to 20px and the colour green.
- After we’ve written each style rule, we close the line with a semi-colon, so the browser knows we’ve finished that rule.

## Selectors

We use [selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) to identify which element we want to style on the page.

### Type

The [type selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors), also called the element selector, is simply a way to select the HTML element using its HTML tag. It’s generally best to use a type selector if you want to change something specific about that HTML element. By default, the browser applies certain styles to your HTML, which might be useful depending on your design. For example, an anchor tag (`<a>`) is default styled blue and underlined. To change this, we could select all anchor tags using the following selector.

The following styling changes the text colour and removes the underline.

```css
a {
  color: green;
  text-decoration: none;
}
```

### Class

Generally, the best way to style elements is by using a class. You can apply the same class to multiple elements across the page, which helps you reduce the amount of CSS you need to write. You can add classes to HTML elements using the `class` attribute like so:

```html
<section class="content">
  <p>Lorem ipsum dolor sit amet.</p>
</section>
<section class="content highlighted">
  <p>Sed quis cursus nunc, id fringilla purus.</p>
</section>
```

We can then style the classes we've added to the HTML by referencing them in our CSS file by using a dot followed by the class name:

```css
.content {
  font-family: "Open Sans", Verdana, sans-serif;
}

.highlighted {
  border: 2px dashed red;
}
```

In the HTML example above, we applied the `.content` class to two `<sections>` elements and added a unique class called `.highlighted` to the second `<section>`. In this case, the second `<section>` will get the styles from the `.content` class and the `.highlighted` class, meaning that this HTML element will have the “Open-sans” font and a red, dashed border around itself. 

Learning how to combine class selectors is very useful, especially when working with JavaScript and CSS. You can use JavaScript to add and remove classes from an element. In the case of `<section class="content highlighted">`, the classes `.content` and `.highlighted` are interpreted by the browser as a *list* of class names, hence called a *class list*.

In the example above, adding and removing the `.highlighted` class from the `<section>` element adds and removes the red border around it. The action of adding and removing something is called toggling. We say that you are [toggling](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) a [class name](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) from the [class list](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) of that element. You will learn more about manipulating HTML elements in this way once you start with JavaScript, but for now, it’s enough to remember that you can combine classes.

Naming classes in a clear manner is essential. Giving an introductory paragraph in a header, the class of `intro` is much more meaningful than `p1`. Remember that other developers usually need to read and understand your code, so make it as clear as possible.

<br>

> ℹ️ **INFO**
>
> Note: having single-purpose classes (utility classes), like adding a border to an element, is used in a design approach called *utility-first*. You can read more about the utility-first approach [here](https://medium.com/@sascha.wolff/utility-first-css-ridiculously-fast-front-end-development-for-almost-every-design-503130d8fefc).

<br>

> **📄 DOCUMENTATION**
>
> For further information, please check out the MDN docs: [Class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors).

### ID


The `id` is an HTML attribute that differs from the `class` attribute because its value needs to be unique. The example below shows that the two `<section>` elements share the class `.content` but don’t share the same id.

```html
<section id="first_section" class="content">
  <p>Lorem ipsum dolor sit amet.</p>
</section>
<section id="second_section" class="content highlighted">
  <p>Lorem ipsum dolor sit amet.</p>
</section>
```

The above example shows how to set an HTML element’s `id`. In CSS, you select the specific id using the # symbol followed by the id value. 

```css
#first_section{
  background-color: red;
}
```

> ℹ️ **INFO**
>
> Note: Generally, IDs are best used with JavaScript, where we want to be able to override styles applied by CSS easily.


## Combining Selectors

You can combine selectors.

Take a look at the following HTML:

```html
<header>
  <h1>Welcome to my shop</h1>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="sale.html" class="sale">Shop</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
  <h2>We have many great products</h2>
  <p>
    Here are the main reasons to
    <span class="sale">shop</span>
    with us:
  </p>
  <ul>
    <li>Trustworthy</li>
    <li>Helpful</li>
    <li>Good quality</li>
  </ul>
  <p>We hope you find what you're looking for.</p>
</main>
```

It’s a good idea to set a base font for the whole body element, and we accomplish this by using the *type selector* for the `<body>` element. In the example below, you can see that we select an element or tag by simply writing the tag name without any symbols before it.

```css
body {
  font-family: "Nunito Sans", sans-serif;
}
```

To set the `font-family` CSS property on the headings, we could select them individually like so:

```css
h1 {
  font-family: "Playfair Display", sans-serif;
}

h2 {
  font-family: "Playfair Display", sans-serif;
}
```

However, this is repetitive.

We try to follow the [DRY Principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don’t Repeat Yourself) in CSS. Using the DRY principle is key to writing good CSS and helps us to write CSS that is as concise as possible. Therefore, instead of writing them twice, we can use a comma to combine the styles:

```css
h1,
h2 {
  font-family: "Playfair Display", sans-serif;
}
```

Let’s say we wanted to style all `<li>` elements specifically in the navigation to be in a row rather than a column. We couldn’t use `li {display: inline-block;}` because this would also affect the list items in the `<main>` element. What we could do is use what is called a [descendant combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator), which in this case would look like this: `nav li {}`.

```css
nav li {
  display: inline-block;
}
```

Using a descendant combinator, you target every list item that is a child of a `<nav>` element.

Let’s also remove the `<ul>` padding that the browser automatically applies. Then we can set text color of the `<a>` tags in the navigation to black and remove the default underline styling for links. We can do this all using the descendant combinator as we did above.

```css
nav ul {
  padding: 0px;
}

nav a {
  color: #9d3400;
  text-decoration: none;
}
```

Let’s say we wanted to style all elements with the class of `.sale` to be red; we could simply target the class: `.sale {}`.

```css
.sale {
  color: red;
}
```

Due to multiple elements having the `.sale` class, the text colour would be red for all of these elements, including one of the `<a>` elements in the navigation. Let’s say we also want to add an underline to this `<a>` element. To specifically target the `<a>` with the class of `.sale` which is within the `<nav>`, we can do the following: `a.sale {}`. Here, we first use the type selector `a` to target all `<a>` elements. Then we can further target any `<a>` element with the `.sale` class by appending `.sale` to the end of the `a` selector.


```css
a.sale {
  text-decoration: underline;
}
```

A snippet from the HTML example above:
```html
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="sale.html" class="sale">Shop</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
```

<br>

>ℹ️ **INFO**
>
>Note that we don’t have a space between the selectors. If there were spacing, it would select every anchor tag with a child element with the class `.sale`, which in this case wouldn’t apply to any elements.

<br>

Another combinator we can use is the [adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator). This combinator selects elements next to each other in the HTML. To increase the font size of each paragraph that follows an h2, we could use the following: `h2 + p {}`.

```css
h2 + p {
  font-size: 18px;
}
```

When using the adjacent sibling combinator, you will only apply styling to elements that are siblings (ie. they share the same parent element).

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="MWVEgYG" data-user="mjphillip" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/mjphillip/pen/MWVEgYG">
  Untitled</a> by MJ Phillip (<a href="https://codepen.io/mjphillip">@mjphillip</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Pseudo-classes

We can also apply styling by using so-called pseudo-classes, which allow us to use keywords to target elements based on their state.

Firstly, a brief explanation of what we mean by the *state* of an element: a good example is when a user hovers with the cursor over an element. When this happens, the element is in what we call a [hover state](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover). You can specify the styling of an element depending on its state. In the case of `:hover`, we could change the background colour of a button whenever it is in a hover state.

Let’s say we wanted the navigation links to change when a user hovers over them. We could use the following code (notice the colon between `a` and the keyword `hover): nav a:hover {}`.

```css
nav a:hover {
  text-decoration: underline;
}
```

Other pseudo-classes include `:active` when a user is busy interacting with the element, for example, clicking a button. Another is `:first-child`, which targets the first child element inside the chosen parent.

<br>

> 📄 DOCUMENTATION 
>
> For further information, please check out the MDN docs: [Psuedo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

<br>

### Pseudo-elements

A pseudo-element allows you to style a specific part of the element you've selected. Let's say you wanted to style the first letter of a paragraph. You could use the `::first-letter` pseudo-element.

```css
p::first-letter {
  font-size: 18px;
}
```

Other pseudo-elements that are useful to know are `::before` and `::after`, which let you style the section before or after a specific element. With CSS, you can use the content property to add `content` to the HTML. In this example, we add a calendar icon before the date.

```css
.date::before {
  content: "\1F4C5";
}
```

We could add the icon in the HTML in front of the date, but we should ask whether the icon is important content that should be in the HTML for someone using assistive technology or if it is purely styling. If it’s just for styling, then it’s best managed using CSS. Plus, we’d be able to quickly change all calendar icons in one place if we wanted a different icon at a later date.

## Cheat sheet of Selectors and Combinators

| Example | What is selected |
| --- | --- |
| `section {}` | `section` elements |
| `.highlighted {}` | Elements with a class of `highlighted` |
| `#logo {}` | Elements with an ID of `logo` |
| `section.highlighted {}` | `section` elements with a class of `highlighted` |
| `section .highlighted {}` | Elements with a class of `highlighted` inside of `section` elements |
| `section > .highlighted {}` | Elements with a class of `highlighted` that are direct descendants of a `section` |
| `section + .highlighted {}` | The first element with a class of `highlighted` after each `section` |
| `section, .highlighted {}` | All `section` elements, and all elements with a class of `highlighted` |
| `section ~ .highlighted {}` | All elements with a class of `highlighted` that are siblings of a `section` |
| `input[type="text"] {}` | `input` elements that have a type of `text` |

## Cascading, Specificity and Inheritance

- CSS stands for Cascading Style Sheets.
- Cascading is the order in which we write CSS, going from top to bottom.

Two conflicting rules are applied in the following example, but which styling should the browser apply? Since CSS runs from top to bottom, it cascades. Thus, the browser will choose the styling applied last and make the background blue.

```css
body {
  background-color: orange;
}

body {
  background-color: blue;
}
```

### Specificity

In the above example, we have two selectors with the same specificity level. They’re both targeting the `<body>`. But what if we want the `<main>` to be styled a different colour to the rest of the body? In this example, the `<body>` will be orange, and the `<main>` will be blue as the main is more specific than its parent element, the body.

```css
body {
  background-color: orange;
}

main {
  background-color: blue;
}
```

In the order of specificity:

- A tag selector is the least specific.
- Then a class as it can be applied to multiple elements.
- Then an ID as it can only be applied to one element.

The more specific selector will be the one that gets chosen. Inline styling in the HTML is the most specific you can get, but this shouldn’t be added to the HTML and should only be added using JavaScript, which we will get to in the JavaScript course.

We can calculate the specificity of a CSS selector numerically. The values of each CSS selector are as follows:

| Selector                       | Specificity rating |
| ------------------------------ | ------------------ |
| Inline style                   | 1000               |
| ID                             | 100                |
| Class, attribute, pseudo-class | 10                 |
| Type Selector                  | 1                  |

<hr>

> **📄 DOCUMENTATION**
>
> For further information, please check out the MDN docs: [Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).


## Activities

> 💻 **WATCH**
> 
> [This tutorial video on CSS.](https://scrimba.com/scrim/cPJpJWCq?pl=paaBbTa) (12m 20s)

<hr>

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/Noroff-Education/lesson-task-htmlcss-module1-lesson3).

Attempt the answers before checking them against the answers in the [answers branch](https://github.com/Noroff-Education/lesson-task-htmlcss-module1-lesson3/tree/answers) of the repo.
