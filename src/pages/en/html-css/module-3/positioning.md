---
title: Positioning
description: sample
tags: HTML and CSS
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

In this lesson we will be taking a look at how to place elements on the page using position.

## Position

Using the position property is another useful technique for page layout. It’s important to properly understand positioning before diving in - many junior developers get tripped up using position incorrectly. There are five types of positioning: static, relative, absolute, fixed and sticky.

<iframe src="https://codesandbox.io/embed/htmlcss-m3-positioning-mdh892?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="htmlcss-m3-positioning"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Static

All elements in normal document flow have static positioning which means the elements don’t adjust their positioning to the properties of top, right, bottom or left. It just stays in normal flow. Because static positioning is default, you’re unlikely to need to set elements as position: static unless your CSS is being overwritten out of your control.

### Relative

In relative positioning, the element stays within the normal flow of the document, but is adjusted according to the top, right, bottom or left set on the element. The new position is set ‘relative’ to its original position.

```html
<div class="container">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
    aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas
    dapibus non purus non auctor.
  </p>
  <div class="relative-position">Relative positioned content</div>
</div>
```

```css
.relative-position {
  position: relative;
  top: 30px;
  left: 30px;
  background: lightblue;
  padding: 10px;
}

.container {
  height: 150px;
}
```

### Absolute

Absolute positioning moves the element out of the normal flow of the document. It sets its positioning based on the next parent element to have relative or absolute positioning. If there is no element with positioning, then it will default to the viewport. We often use relative positioning on a parent element to limit an absolute positioned element.

```html
<div class="container">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
    aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas
    dapibus non purus non auctor.
  </p>
  <div class="absolute-position">Absolute positioned content</div>
</div>
```

```css
.absolute-position {
  position: absolute;
  top: 30px;
  left: 30px;
  background: lightblue;
  padding: 10px;
}

.container {
  position: relative;
  height: 150px;
}
```

### Fixed

Fixed positioning also moves the element out of the normal flow (**similar to absolute positioning**), but with fixed positioning the element is unaffected by scrolling. A fixed element is positioned based on the browser’s viewport.

```html
<div class="container">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
    aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas
    dapibus non purus non auctor.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
    aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas
    dapibus non purus non auctor.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
    aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas
    dapibus non purus non auctor.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
    aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas
    dapibus non purus non auctor.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
    aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas
    dapibus non purus non auctor.
  </p>
  <div class="fixed-position">Fixed positioned content</div>
</div>
```

```css
.fixed-position {
  position: fixed;
  top: 30px;
  left: 30px;
  background: lightblue;
  padding: 10px;
}
```

### Sticky

Sticky is a mix between relative positioning and fixed positioning. It allows us to set an element relatively positioned, and when a certain position is reached to turn it into a fixed element. It’s often used with menus to get them to stick to the top of the viewport after the user has scrolled down so that the menu is always available for the user.

```html
<div class="container">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
    aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas
    dapibus non purus non auctor.
  </p>
  <div class="sticky-position">Sticky positioned content</div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
    aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas
    dapibus non purus non auctor.
  </p>
  <p>
    Quisque et mi sed lectus molestie porttitor et nec orci. Praesent non
    maximus enim. Aenean fermentum elementum orci ut lacinia. Curabitur rutrum
    vestibulum elit, vel vehicula nisl sagittis in. Curabitur facilisis nec diam
    eget consequat.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
    aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas
    dapibus non purus non auctor.
  </p>
  <p>
    Quisque et mi sed lectus molestie porttitor et nec orci. Praesent non
    maximus enim. Aenean fermentum elementum orci ut lacinia. Curabitur rutrum
    vestibulum elit, vel vehicula nisl sagittis in. Curabitur facilisis nec diam
    eget consequat.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
    aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas
    dapibus non purus non auctor.
  </p>
  <p>
    Quisque et mi sed lectus molestie porttitor et nec orci. Praesent non
    maximus enim. Aenean fermentum elementum orci ut lacinia. Curabitur rutrum
    vestibulum elit, vel vehicula nisl sagittis in. Curabitur facilisis nec diam
    eget consequat.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
    aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas
    dapibus non purus non auctor.
  </p>
  <p>
    Quisque et mi sed lectus molestie porttitor et nec orci. Praesent non
    maximus enim. Aenean fermentum elementum orci ut lacinia. Curabitur rutrum
    vestibulum elit, vel vehicula nisl sagittis in. Curabitur facilisis nec diam
    eget consequat.
  </p>
</div>
```

```css
.sticky-position {
  position: sticky;
  top: 20px;
  background: lightblue;
  padding: 10px;
}

.container {
  height: 500px;
}
```

## z-index

With positioning, it’s easy to get elements on top of one another. To determine the order in which elements stack up, we can use z-index. Z-index is fairly simple to use; the higher the z-index number, the higher in the order it goes.

```html
<div class="container">
  <div class="one">Block One</div>
  <div class="two">Block Two</div>
</div>
```

```css
.one {
  z-index: 2;
  background: lightblue;
  padding: 20px;
  width: 200px;
  position: relative;
}

.two {
  z-index: 1;
  background: lightgreen;
  padding: 20px;
  width: 200px;
  position: absolute;
  top: 40px;
  left: 40px;
}

.container {
  position: relative;
  height: 100px;
}
```

---

## Activities

**WATCH**

[This video on float and position.](https://scrimba.com/scrim/c4PN2LTp?pl=paaBbTa) (7m 36s)

---

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/Noroff-Education/lesson-task-htmlcss-module3-lesson1).

Attempt the answers before checking them against the answers in the [answers branch](https://github.com/Noroff-Education/lesson-task-htmlcss-module3-lesson1/tree/answers) of the repo.
