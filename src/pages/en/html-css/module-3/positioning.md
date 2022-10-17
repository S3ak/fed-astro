---
title: Positioning
keywords: sample
tags: HTML and CSS
sidebar: html-css
permalink: html-css/positioning.html
folder: html-css
---

## Introduction

In this lesson we will be taking a look at how to place elements on the page using float and position.

## Float

If you want to place an image beside text and have the text wrap around the image, float is the ideal tool. We used to use `float` to build layouts, but shouldn't anymore because we now have Flexbox and CSS Grids to help create solid, multi-column responsive sites.

Floating removes an element from the normal flow of HTML elements and places it on the left or right side of its container or nearest element.

```html
<div>
  <div class="float floated-right">
    Floated
  </div>
  <h2>Float right</h2>
  <p>The image has been floated to the right side of the text.</p>
</div>

<div>
  <div class="float floated-left">
    Floated
  </div>
  <h2>Float left</h2>
  <p>The image has been floated to the right side of the text.</p>
</div>

<br><br><br>
```

```css
span {
.float{
  background: lightblue; 
  padding: 30px;
  margin: 10px;
}

.floated-right{
  float: right;
}

.floated-left{
  float: left;
}
```


**Two other properties that work with floating are clear and clearfix:**

### Clear

Depending on your layout, you might not want elements to be able to float alongside an element. To help restore the normal flow of the document, we can use the clear property.

Essentially what the clear property says is that nothing can float to the left side or right side or both sides of an element. In the example below, you can see the content has two topics: dogs and cats. It only makes sense that the dog image is next to the text about dogs. Unfortunately, we don't know how long the paragraph will be depending on the screen, and so we use clear on the section about cats so that the cat's text doesn't appear next to the dog's image.

```html
<div>
  <img src="https://images.unsplash.com/photo-1489417139533-915815598d31" class="float" />
  <h2>Dogs</h2>
  <p>The domestic dog (Canis lupus familiaris when considered a subspecies of the gray wolf or Canis familiaris when considered a distinct species). </p>

  <h2 class="clear">Cats</h2>
  <p class="clear">The domestic cat (Felis silvestris catus or Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. They are often valued by humans for companionship and for their ability to hunt vermin. There are more than seventy cat breeds recognized by various cat registries. </p>
</div>

<i>Content used under the Creative Commons Attribution-ShareAlike License from Wikipedia</i>
```
```css
.float{
  margin: 10px;
  float: right;
  width: 300px;
}

.clear{
  clear: right;
}
```
```css
.float{
  margin: 10px;
  float: right;
  width: 300px;
}

.clear{
  clear: right;
}
```

### Clearfix

Sometimes the floated content will be larger than the container it is inside and this will make the layout break. Remember, floated elements are outside of normal document flow and so parent element doesn't know to adjust to the floated element's height.

A problem:

```html
<div>
  <img src="https://images.unsplash.com/photo-1489417139533-915815598d31" class="float" />
  <h2>Dogs</h2>
  <p>The domestic dog (Canis lupus familiaris when considered a subspecies of the gray wolf or Canis familiaris when considered a distinct species).</p>
</div>
<br><br>
```
```css
.float{
  margin: 10px;
  float: right;
  height: 150px;
}

.clear{
  clear: right;
}

div{
  border: 1px solid black;
}
```

A solution:

```html
<div class="clearfix">
  <img src="https://images.unsplash.com/photo-1489417139533-915815598d31" class="float" />
  <h2>Dogs</h2>
  <p>The domestic dog (Canis lupus familiaris when considered a subspecies of the gray wolf or Canis familiaris when considered a distinct species).</p>
</div>

<br><br>
```
```css
.float{
  margin: 10px;
  float: right;
  height: 150px;
}

.clear{
  clear: right;
}

div{
  border: 1px solid black;
}

.clearfix::after {
clear: both;
content: "";
display: table;
}
```

To help solve this issue, developers created a workaround called clearfix. We create a pseudo-element '::after', which goes at the end of the div. We then clear it to force the container to adjust to the height of the floated element.

## Position

Using the position property is another useful technique for page layout. It’s important to properly understand positioning before diving in - many junior developers get tripped up using position incorrectly. There are five types of positioning: static, relative, absolute, fixed and sticky.

### Static

All elements in normal document flow have static positioning which means the elements don’t adjust their positioning to the properties of top, right, bottom or left. It just stays in normal flow. Because static positioning is default, you’re unlikely to need to set elements as position: static unless your CSS is being overwritten out of your control.

### Relative

In relative positioning, the element stays within the normal flow of the document, but is adjusted according to the top, right, bottom or left set on the element. The new position is set ‘relative’ to its original position.

```html
<div class="container">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas dapibus non purus non auctor.</p>
  <div class="relative-position">
    Relative positioned content
  </div>
</div>
```
```css
.relative-position{
  position: relative;
  top: 30px;
  left: 30px;
  background: lightblue;
  padding: 10px;
}

.container{
  height: 150px;
}
```

### Absolute

Absolute positioning moves the element out of the normal flow of the document. It sets its positioning based on the next parent element to have relative or absolute positioning. If there is no element with positioning, then it will default to the viewport. We often use relative positioning on a parent element to limit an absolute positioned element.

```html
<div class="container">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas dapibus non purus non auctor.</p>
  <div class="absolute-position">
    Absolute positioned content
  </div>
</div>
```
```css
.absolute-position{
  position: absolute;
  top: 30px;
  left: 30px;
  background: lightblue;
  padding: 10px;
}

.container{
  position: relative;
  height: 150px;
}
```

### Fixed

Fixed positioning also moves the element out of the normal flow (**similar to absolute positioning**), but with fixed positioning the element is unaffected by scrolling. A fixed element is positioned based on the browser’s viewport.

```html
<div class="container">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas dapibus non purus non auctor.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas dapibus non purus non auctor.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas dapibus non purus non auctor.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas dapibus non purus non auctor.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas dapibus non purus non auctor.</p>
  <div class="fixed-position">
    Fixed positioned content
  </div>
</div>
```
```css
.fixed-position{
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
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas dapibus non purus non auctor.</p>
    <div class="sticky-position">
    Sticky positioned content
  </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas dapibus non purus non auctor.</p>
  <p>Quisque et mi sed lectus molestie porttitor et nec orci. Praesent non maximus enim. Aenean fermentum elementum orci ut lacinia. Curabitur rutrum vestibulum elit, vel vehicula nisl sagittis in. Curabitur facilisis nec diam eget consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas dapibus non purus non auctor.</p>
  <p>Quisque et mi sed lectus molestie porttitor et nec orci. Praesent non maximus enim. Aenean fermentum elementum orci ut lacinia. Curabitur rutrum vestibulum elit, vel vehicula nisl sagittis in. Curabitur facilisis nec diam eget consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas dapibus non purus non auctor.</p>
  <p>Quisque et mi sed lectus molestie porttitor et nec orci. Praesent non maximus enim. Aenean fermentum elementum orci ut lacinia. Curabitur rutrum vestibulum elit, vel vehicula nisl sagittis in. Curabitur facilisis nec diam eget consequat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque aliquam, semper massa nec, viverra odio. Donec sed pretium lectus. Maecenas dapibus non purus non auctor.</p>
  <p>Quisque et mi sed lectus molestie porttitor et nec orci. Praesent non maximus enim. Aenean fermentum elementum orci ut lacinia. Curabitur rutrum vestibulum elit, vel vehicula nisl sagittis in. Curabitur facilisis nec diam eget consequat.</p>
  
</div>
```

```css
.sticky-position{
  position: sticky;
  top: 20px;
  background: lightblue;
  padding: 10px;
}

.container{
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
.one{
  z-index: 2;
  background: lightblue;
  padding: 20px;
  width: 200px;
  position: relative;
}

.two{
  z-index: 1;
  background: lightgreen;
  padding: 20px;
  width: 200px;
  position: absolute;
  top: 40px;
  left: 40px;
}

.container{
  position: relative;
  height: 100px;
}
```

<hr>

## Activities

**WATCH**

[This video on float and position.](https://scrimba.com/scrim/c4PN2LTp?pl=paaBbTa) (7m 36s)

<hr>

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/Noroff-Education/lesson-task-htmlcss-module3-lesson1).

Attempt the answers before checking them against the answers in the [answers branch](https://github.com/Noroff-Education/lesson-task-htmlcss-module3-lesson1/tree/answers) of the repo.
