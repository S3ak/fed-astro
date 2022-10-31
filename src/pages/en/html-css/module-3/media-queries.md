---
title: Media Queries
description: sample
tags: HTML and CSS
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

As part of CSS, media queries allow us to customise the appearance of HTML content for multiple devices. Although "Media queries" may sound like a complicated concept, the idea is actually quite simple.

## Media Queries

Here is the syntax for a media query:

```css
@media (min-width: 600px) and (max-width: 1200px) {
}
```

You will see that there are a number of attributes we may include in a media query. These include minimum and maximum width, device orientation (for example if the target is a handheld or wearable device) and many other properties.

We may refer to each of these media queries as defining a breakpoint – that is, where the CSS appearance will be changed based on the media query attributes. There are number of things here that we must be aware of:

- First of all, you will see that we are using a new character in out CSS: the alpha "@" sign, used in conjunction with "media".
- Second, the media query may be added to CSS. Just as certain HTML tags may be nested, CSS selectors may be nested inside media queries. Essentially for each media query we add, we may create a new set of CSS rules that apply to it.
- Finally, a media query will only be applied if all its **conditions** are met. According to the Boolean "and" arguments in the example above, the CSS will only be applied if the size of the device window is at least 600 pixels wide and is less than or equal to 1200 pixels wide. Theoretically this means that any number of media queries may be created, although generally speaking no more than two or three media queries will be necessary.

### Breakpoints

As we have seen with Working with CSS and images, we may farm out images to CSS, instead of embedding them in HTML. We can take this even further by using media queries to define different images for different breakpoints. This is immensely useful for images. As a simple example, smaller images that download more quickly may be specified for mobile devices, which will make for content that is lighter and quicker to load.

Generally speaking, it is best to design for the smallest viewports (mobile-sized devices at the moment, but maybe watches soon) first, and create rules for progressively larger screen sizes from there on. This argument for this is twofold: first, you will focus on a limited size viewport, which will force you to consider the essentials. Second, the fact that people spend so much time with their mobile devices means that your website should be optimal on a mobile device viewport. The more appealing your content is on any device, the more chance people will use it on all types of devices.

## META attributes for Responsive CSS

We have already looked at uses for the <meta> element. The <meta> element may also contain information about how the page should be displayed. This is critical to the optimal functionality of responsive sites.

While media queries help with the creation of good responsive CSS pages, the <meta> element holds the final piece of the puzzle. As well as having properties for the page description and author, it includes properties for the device viewport - that is, the size of the device browser window. HTML5 has added this property to optimise the look of HTML pages styled with responsive CSS.

The following meta tag example is how it may be used for optimising a responsive page:

```css
<meta name="viewport" content="width=device-width, initial-scale=1">
```

The initial scale attribute is also an important component of optimising responsive content. This will ensure that elements will best fit the width of the viewport.

<hr>

## Activities

### Activity 1

**WATCH**

Video: [CSS Page Layouts](https://www.linkedin.com/learning/css-page-layouts-2012/responsive-layout-overview?u=43268076) 7. Building Responsive Layouts (50m)

### Activity 2

**READ**

In _HTML and CSS: Design and Build Website_ Chapter 18: Process & Design, pp. 452-474 (1hr)

### Activity 3

**WATCH**

Video: [CSS Essential Training](https://www.linkedin.com/learning/css-essential-training-2-2/welcome?u=43268076) 4. Responsive and Mobile (30m) Conclusion (32s)

<hr>

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/Noroff-Education/lesson-task-htmlcss-module3-lesson4).

Attempt the answers before checking them against the answers in the [answers branch](https://github.com/Noroff-Education/lesson-task-htmlcss-module3-lesson4/tree/answers) of the repo.
