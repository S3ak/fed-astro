---
title: Introduction to Bulma
description: react, styling, bulma
tags: JS Frameworks
sidebar: css-frameworks-v1
---

## Introduction

This lesson will be an introduction to Bulma, a CSS framework that is based on flexbox and easy to get started with.

The great thing about Bulma is that all you need is a single CSS file to use it.

If you want to use icons with Bulma, don't forget to include Font Awesome 5 in your project as well:

```html
<script
  defer
  src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
></script>
```

There are three main ways you can get started with Bulma.

1. **Using NPM**

```bash
npm install bulma
```

2. **Using CDN**
   You can include a CDN link in your HTML to load the styles. Bulma recommends you use jsDelivr.com, but you can also use CDNs like cdnjs.com and unpkg.com.

jsDelivr allows you to include the links like below, and you will automatically be served the newest version.

```html
<link rel="stylesheet" href="https://www.jsdelivr.com/package/npm/bulma" />
```

It is, however, recommended to specify a version if you use a CDN. Always fetching the newest version can introduce bugs and issues if, for example, syntax or CSS rules get changed in an update.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
/>
```

3. **Download from GitHub repo**
   You can also download and include the files directly in your project. You can find the files in [Bulma's GitHub repository](https://github.com/jgthms/bulma/tree/master/css).

## Starter template

If you want to get started right away, you can use this HTML starter template. Just copy/paste this code directly. This example is also available on [Bulma's site](https://bulma.io/documentation/overview/start/).

<iframe height="265" style="width: 100%;" scrolling="no" title="Bulma" src="https://codepen.io/norofffeu/embed/JjGareP?height=265&amp;theme-id=light&amp;default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>

## Bulma's CSS classes

Bulma is solely comprised of CSS classes, which means the HTML code you write has no impact on the styling of your page. Bulma includes classes like .input so you can choose which `<input>` elements you want to style.

## Modifiers syntax

Most Bulma elements have alternative styles. To apply them, you only need to append one of the modifier classes. They all start with is- or has-.

For example, a button will look like this:

```html
<a class="button">Button</a>
```

By adding the is-primary CSS class, you can modify the colour.

```html
<a class="button is-primary">Button</a>
```

You can use one of the 6 main colours: `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, and `is-danger`.

You can also change the size of the button by adding one of `is-small`, `is-medium`, or `is-large`.

There are also other classes you can apply to change the style and state: `is-outlined`, `is-loading` or by adding the HTML disabled attribute to the element itself.

Here are a few examples:

```html
<a class="button is-loading">Button</a>
<a class="button is-primary is-small" disabled>Button</a>
<a class="button is-info is-loading">Button</a>
<a class="button is-danger is-outlined is-large">Button</a>
```

## Resources

- [Official Documentation](https://bulma.io/documentation/)
- [Lesson Source Code](https://github.com/NoroffFEU/introduction-to-bulma)
- [Coming from Bootstrap](https://bulma.io/alternative-to-bootstrap/)
