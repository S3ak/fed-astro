---
title: Media Queries
description: How to use media queries to create responsive websites
tags: HTML, CSS, media, query, queries, responsive
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

As part of CSS, media queries allow us to customise the appearance of HTML content for multiple devices. Although "Media queries" may sound like a complicated concept, the idea is actually quite simple. Using media queries we can adapte our design for different devices.

## Learning outcomes

By the end of the lesson you shoud have the following skills;

- [ ] Control layout for various font sizes
- [ ] Know the syntax used to apply media queries
- [ ] Introduced to container queries
- [ ] Know which breakpoints to use

<iframe src="https://vltu6v.csb.app/answers.html"
     style="width:100%; height:85vh; border:0; border-radius: 4px; overflow:hidden;"
     title="htmlcss-media-queries Outcomes"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe0bvE2KLD44ggMs0tGrzJ2G2pVGm2xqU49FI1vsUu04nVNGQ/viewform?embedded=true" width="100%" height="85vh" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Media Queries

Media queries are initiated with the @media keyword (a CSS at-rule), and can be used for a variety of use cases.

`@media type and (feature)`

Here is the syntax for a media query:

```css
@media screen and (min-width: 600px) and (max-width: 1200px) {
}
```

You will see that there are a number of attributes we may include in a media query. These include minimum and maximum width, device orientation (for example if the target is a handheld or wearable device) and many other properties.

We may refer to each of these media queries as defining a breakpoint – that is, where the CSS appearance will be changed based on the media query attributes. There are number of things here that we must be aware of:

- First of all, you will see that we are using a new character in out CSS: the alpha "@" sign, used in conjunction with "media".
- Second, the media query may be added to CSS. Just as certain HTML tags may be nested, CSS selectors may be nested inside media queries. Essentially for each media query we add, we may create a new set of CSS rules that apply to it.
- Finally, a media query will only be applied if all its **conditions** are met. According to the Boolean "and" arguments in the example above, the CSS will only be applied if the size of the device window is at least 600 pixels wide and is less than or equal to 1200 pixels wide. Theoretically this means that any number of media queries may be created, although generally speaking no more than two or three media queries will be necessary.

Example

<iframe src="https://codesandbox.io/embed/htmlcss-media-queries-vltu6v?file=/example-1.html&fontsize=14&hidenavigation=1&theme=dark&initialpath=%2Fexample-1.html&module=%2Fexample-1.html"
     style="width:100%; height:85vh; border:0; border-radius: 4px; overflow:hidden;"
     title="htmlcss-media-queries"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Breakpoints

As we have seen with Working with CSS and images, we may farm out images to CSS, instead of embedding them in HTML. We can take this even further by using media queries to define different images for different breakpoints. This is immensely useful for images. As a simple example, smaller images that download more quickly may be specified for mobile devices, which will make for content that is lighter and quicker to load.

Generally speaking, it is best to design for the smallest viewports (mobile-sized devices at the moment, but maybe watches soon) first, and create rules for progressively larger screen sizes from there on. This argument for this is twofold: first, you will focus on a limited size viewport, which will force you to consider the essentials. Second, the fact that people spend so much time with their mobile devices means that your website should be optimal on a mobile device viewport. The more appealing your content is on any device, the more chance people will use it on all types of devices.

Main breakpoints to know;

- Extra small 320px
- Small 640px
- mediim 768px
- large 1024px
- Extra large 1080px
- 2x large 1536px

---

- 320px — 480px: Mobile devices
- 481px — 768px: iPads, Tablets
- 769px — 1024px: Small screens, laptops
- 1025px — 1200px: Desktops, large screens
- 1201px and more —  Extra large screens, TV

You can use any CSS length units in your media queries. If your content is mostly image-based, pixels might make the most sense. If your content is mostly text-based, it probably makes more sense to use a relative unit that's based on text size, like em or ch:

```css
@media (min-width: 25em) {
  // Styles for viewports wider than 25em.
}
```

### Deciding on breakpoints

It comes down to you as the expert to decide which breakpoints you are going to support. Use stastical data to support your decision. Websites like [W3C viewport states](https://www.w3schools.com/browsers/browsers_display.asp) show stats on the most viewed viewports. It's recommended that you limit to 3 main breakpoints.

**IMPORTANT**

- Never use `max-width`
- Always code from smallest (320px) upwards

### Example 2

Change the layout of the card component depending on screen size

<iframe src="https://codesandbox.io/embed/htmlcss-media-queries-vltu6v?file=/example-1.html&fontsize=14&hidenavigation=1&theme=dark&initialpath=%2Fexample-2.html&module=%2Fexample-2.html"
     style="width:100%; height:85vh; border:0; border-radius: 4px; overflow:hidden;"
     title="htmlcss-media-queries"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Excerise 1 (5 min)

Make the Side Navigation visible on desktop but invisible on mobile. The hamburger Icon should only be visible on mobile.

<iframe src="https://codesandbox.io/embed/htmlcss-media-queries-vltu6v?fontsize=14&hidenavigation=1&theme=dark&initialpath=%2Fexcercise-1.html&module=%2Fexcercise-1.html"
     style="width:100%; height:85vh; border:0; border-radius: 4px; overflow:hidden;"
     title="htmlcss-media-queries"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## META attributes for Responsive CSS

We have already looked at uses for the `<meta>` element. The `<meta>` element may also contain information about how the page should be displayed. This is critical to the optimal functionality of responsive sites.

While media queries help with the creation of good responsive CSS pages, the `<meta>` element holds the final piece of the puzzle. As well as having properties for the page description and author, it includes properties for the device viewport - that is, the size of the device browser window. HTML5 has added this property to optimise the look of HTML pages styled with responsive CSS.

The following meta tag example is how it may be used for optimising a responsive page:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

The initial scale attribute is also an important component of optimising responsive content. This will ensure that elements will best fit the width of the viewport.

---

## Tea break (5 min)

`Maybe take a break here`

---

### Other queries

Let's say you want to apply different styles depending on whether the browser window is in landscape mode (the viewport width is greater than its height) or portrait mode (the viewport height is greater than its width). There's a media feature called orientation you can use to test that:

```css
@media all and (orientation: landscape) {
  // Styles for landscape mode.
}
@media all and (orientation: portrait) {
  // Styles for portrait mode.
}
```

### Container queries

Flexbox allows you to design from the content out. You can specify the parameters of your elements (how narrow they should get, how wide they should get) and let the browser figure out the final implementation.

But the component itself has no awareness of its context. It doesn't know if it's being used in the main content or in a sidebar. This can make component layouts trickier than page layouts. To be able to apply contextually relevant styles, your components need to know more than the size of the viewport they are inside.

With page layouts, you do know the width of the container because the container is the browser viewport; media queries report the dimensions of the page-level container.

Now there's an upcoming CSS technology that reports the dimensions of any parent container: container queries. Container queries can use the parent container to define the conditions that their child elements will be displayed.

```html
<body>
  <main>
    <div class="media">…</div>
    <div class="media">…</div>
  </main>
  <aside>
    <div class="media">…</div>
  </aside>
</body>
```

```css
main,
aside {
  container-type: inline-size;
  container-name: my-custom-name;
}
```

.

Container queries allow you to style components in an independent way. The width of the viewport is no longer what matters. You can write rules based on the width of the containing element.

```css
@container my-custom-name (min-width: 400px) {
  .media {
    display: flex;
    flex-direction: column;
  }
}
```

### Media Types

If we don’t apply a media type, the @ media rule selects all types of devices by default. Otherwise, Media types come right after the @ media rule. There are many kinds of devices but we can group them into 4 categories:

all — for all media types (default)
print — for printers
screen — for computer screens, tablets and, smart-phones
speech — for screen readers that “read” the page out loud

For example, when we want to only style content when it gets printed.

```css
@media print {
  .text {
    font-size: 12pt;
  }
}
```

### Excerise 2 (15 min)

Make the Side Navigation visible on desktop but invisible on mobile. The hamburger Icon should only be visible on mobile.

<iframe src="https://codesandbox.io/embed/htmlcss-media-queries-vltu6v?fontsize=14&hidenavigation=1&theme=dark&initialpath=%2Fexcercise-2.html&module=%2Fexcercise-2.html"
     style="width:100%; height:85vh; border:0; border-radius: 4px; overflow:hidden;"
     title="htmlcss-media-queries"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

---

## Resources

- [The breakpoints we tested in 2021 & 2022, and the ones to test in 2023](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/)
- [Almanic 2022 Common breakpoints](https://almanac.httparchive.org/en/2022/css#common-breakpoints)
- [W3C viewport states](https://www.w3schools.com/browsers/browsers_display.asp)

## Activities

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe9XJLAXnYIQLc3GLpqFtHDxPZnd2-O6uRfWqN1GvZEnsWfoQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

### Activity 1

**WATCH**

Video: [CSS Page Layouts](https://www.linkedin.com/learning/css-page-layouts-2012/responsive-layout-overview?u=43268076) 7. Building Responsive Layouts (50m)

### Activity 2

**READ**

In _HTML and CSS: Design and Build Website_ Chapter 18: Process & Design, pp. 452-474 (1hr)

### Activity 3

**WATCH**

Video: [CSS Essential Training](https://www.linkedin.com/learning/css-essential-training-2-2/welcome?u=43268076) 4. Responsive and Mobile (30m) Conclusion (32s)

### Activity 4

**WATCH**

<iframe width="100%" height="85vh" src="https://www.youtube.com/embed/yU7jJ3NbPdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Lesson Task

### Brief

There are practice questions in the master branch of [this repo](https://github.com/Noroff-Education/lesson-task-htmlcss-module3-lesson4).

Attempt the answers before checking them against the answers in the [answers branch](https://github.com/Noroff-Education/lesson-task-htmlcss-module3-lesson4/tree/answers) of the repo.
