---
title: Flexbox
description: sample
tags: HTML and CSS
sidebar: html-css

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Flexbox is used to make one-dimensional layouts allowing us to place items in rows or columns. It is called Flexbox because items adjust to either fill empty space or shrink to fit into smaller spaces. This makes Flexbox ideal for building responsive websites.

It is worth noting that Flexbox offers a lot of functionality to developers to create complex layouts, but it is also great for simple layouts as well.

## Using Flexbox

### display: flex

To start using Flexbox you need to set a container to `display: flex`. This enables a flex context for all of its direct children. The child items will default to being displayed in a row, and will divide the available space in the container amongst the child items. If the child items are too small to take up the whole container they will stack up from the left margin.

```html
<section class="container">
  <div class="item">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec neque
      pharetra, porta ipsum sed, porta turpis. Proin tristique quam nunc, sed
      rutrum nulla varius vitae. Nulla non leo sapien. Pellentesque viverra
      felis eu nunc ullamcorper imperdiet. Nulla a mattis elit. Pellentesque
      vitae tortor nulla.
    </p>
  </div>
  <div class="item">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec neque
      pharetra, porta ipsum sed, porta turpis. Proin tristique quam nunc, sed
      rutrum nulla varius vitae. Nulla non leo sapien. Pellentesque viverra
      felis eu nunc ullamcorper imperdiet. Nulla a mattis elit. Pellentesque
      vitae tortor nulla.
    </p>
  </div>
  <div class="item">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec neque
      pharetra, porta ipsum sed, porta turpis. Proin tristique quam nunc, sed
      rutrum nulla varius vitae. Nulla non leo sapien. Pellentesque viverra
      felis eu nunc ullamcorper imperdiet. Nulla a mattis elit. Pellentesque
      vitae tortor nulla.
    </p>
  </div>
</section>
```

```css
.container {
  display: flex;
}
```

```css
.item {
  margin: 5px;
}
```

### flex

To set how much space the flex items take up, you can set flex followed by a number. All of the flex numbers are added together and then each item is divided by the total.

In the example below, the items are set to have `flex: 1`, but the class of ‘wider-item’ is set to `flex: 4`. That means the container has a total of 6 (4+1+1). The ‘.wider-item’ gets the space of 4/6 and the other two items get the space of 1/6 each.

```html
<section class="container">
  <div class="item wider-item">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec neque
      pharetra, porta ipsum sed, porta turpis. Proin tristique quam nunc, sed
      rutrum nulla varius vitae. Nulla non leo sapien. Pellentesque viverra
      felis eu nunc ullamcorper imperdiet. Nulla a mattis elit. Pellentesque
      vitae tortor nulla.
    </p>
  </div>
  <div class="item">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec neque
      pharetra, porta ipsum sed, porta turpis. Proin tristique quam nunc, sed
      rutrum nulla varius vitae. Nulla non leo sapien. Pellentesque viverra
      felis eu nunc ullamcorper imperdiet. Nulla a mattis elit. Pellentesque
      vitae tortor nulla.
    </p>
  </div>
  <div class="item">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec neque
      pharetra, porta ipsum sed, porta turpis. Proin tristique quam nunc, sed
      rutrum nulla varius vitae. Nulla non leo sapien. Pellentesque viverra
      felis eu nunc ullamcorper imperdiet. Nulla a mattis elit. Pellentesque
      vitae tortor nulla.
    </p>
  </div>
</section>
```

```css
.container {
  display: flex;
}

.item {
  margin: 5px;
  flex: 1;
}

.wider-item {
  flex: 4;
}
```

### flex-direction

By default, the flex-direction is set to row and so the flexed items will display in a row. For mobile devices it is useful that we can switch this direction to column (flex-direction: column) so that the items now display in a vertical column.

You can also set the direction to row-reverse or column-reverse and the items will display in the opposite order to how they have been written.

```html
<section class="container">
  <div class="item wider-item">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec neque
      pharetra, porta ipsum sed, porta turpis. Proin tristique quam nunc, sed
      rutrum nulla varius vitae. Nulla non leo sapien. Pellentesque viverra
      felis eu nunc ullamcorper imperdiet. Nulla a mattis elit. Pellentesque
      vitae tortor nulla.
    </p>
  </div>
  <div class="item">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec neque
      pharetra, porta ipsum sed, porta turpis. Proin tristique quam nunc, sed
      rutrum nulla varius vitae. Nulla non leo sapien. Pellentesque viverra
      felis eu nunc ullamcorper imperdiet. Nulla a mattis elit. Pellentesque
      vitae tortor nulla.
    </p>
  </div>
  <div class="item">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec neque
      pharetra, porta ipsum sed, porta turpis. Proin tristique quam nunc, sed
      rutrum nulla varius vitae. Nulla non leo sapien. Pellentesque viverra
      felis eu nunc ullamcorper imperdiet. Nulla a mattis elit. Pellentesque
      vitae tortor nulla.
    </p>
  </div>
</section>
```

```css
.container {
  display: flex;
  flex-direction: column;
}

.item {
  margin: 5px;
  flex: 1;
}
```

### flex-wrap

By default, the items will all fit on one line to take up the available space of the container. But sometimes, the items can get quite squashed. In this case, set flex-wrap: items will wrap onto another line if there isn’t available space.

### order

If you would like to restructure the order in which items appear in their container, you can set the order number in which they should appear. The lowest number shows first. This can be especially useful when working with media queries and different layouts for different device screen sizes.

### justify-content

The `justify-content` property sets the alignment and spacing of the flexed items along the main axis.

```html
<main>
  <section>One</section>
  <section>Two</section>
  <section>Three</section>
</main>
```

```css
main {
  display: flex;
  justify-content: space-around;
}

section {
  padding: 20px;
  background-color: lightblue;
}
```

In the above example, we use `justify-content: space-around` to distribute the child items evenly and leave a half size space on either side.

Here are other possible values for the justify-content property.

- center places items in the center of the parent.
- start and end place items either at the start of the parent, or the end.
- space-between places the first item at the start and last item at the end. Items in between are then spaced evenly.
- space-evenly places all items evenly with even space between them.

<hr>

## Activities

### Activity 1

**WATCH**

[This tutorial video on Flexbox.](https://scrimba.com/scrim/cNq68Wf2?pl=paaBbTa) (4m 12s)

### Activity 2

**READ**

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) by CSS Tricks

<hr>

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/Noroff-Education/lesson-task-htmlcss-module3-lesson2).

Attempt the answers before checking them against the answers in the [answers branch](https://github.com/Noroff-Education/lesson-task-htmlcss-module3-lesson2/tree/answers) of the repo.
