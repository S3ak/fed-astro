---
title: Introduction to Tailwind
keywords: react, styling, tailwind
tags: JS Frameworks
sidebar: css-frameworks-v1
permalink: css-frameworks-v1/intro-to-tailwind.html
folder: css-frameworks-v1
---

## Introduction

In this, lesson we will look at Tailwind CSS.

You can find the Tailwind docs [here](TailwindCSS.com).

Tailwind is a highly customisable, low-level, utility-first CSS framework. Tailwind makes it easy to build great looking designs without having any annoying styles you must override.

You could compare some aspects of Tailwind to Bootstrap, but it's important to know that Tailwind doesn't include any templates or any component classes out of the box. (.btn, .form-input, .card, .navbar etc..).

In Bootstrap a button may look like this:

```html
<button type="button" class="btn btn-primary">Button</button>
```

A similar button in Tailwind may look like this:

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
  Button
</button>
```

This should already give you an idea of how Tailwind works. Rather than having to override the `.btn-primary` class in CSS, you change the styles inline.

## Installing and using Tailwind CSS

For most projects you'll want to install Tailwind using npm. This will allow you to take full advantage of its customization features.

```bash
npm install tailwindcss
```

Once you have Tailwind added to your project, you'll want to import their base styles, components and utilities to your main CSS file.

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Tailwind Configuration File

If you want to customise your Tailwind installation, you can do so by generating a config file.

```bash
npx tailwindcss init
```

The above command will generate a `tailwind.config.js` located in the root of your project:

```js
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

You can customize pretty much anything in Tailwind to your own liking. Don't enjoy a shade of red? Change it:

```js
module.exports = {
  theme: {
    colors: {
      red: "#de3618",
    },
  },
};
```

Want to add a custom colour? The following code will add regal-blue to your color palette and enables using it like .bg-regal-blue for background colour and .text-regal-blue for text colour etc.

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
};
```

The following links provide more info on customising Tailwind:

- [Customizing colors in Tailwind.](https://tailwindcss.com/docs/customizing-colors/)
- [Customizing spacing in Tailwind.](https://tailwindcss.com/docs/customizing-spacing/)
- [Customizing breakpoints in Tailwind.](https://tailwindcss.com/docs/breakpoints/)
- [Customizing Your Design System](https://tailwindcss.com/course/customizing-your-design-system)

## Using Tailwind via CDN

If you want to use Tailwind without installing it with npm, you can include a CDN (Content Delivery Network) link in your project.

It's important to note that if you do use a CDN rather than npm, you won't be able to do the following:

- You can't customise Tailwind's default theme
- You can't use any directives like @apply, @variants, etc.
- You can't enable features like group-hover
- You can't install third-party plugins

```html
<link
  href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
  rel="stylesheet"
/>
```

It's recommended to only use the CDN if you want to use Tailwind for quick demos or to test the framework.

## Extracting styles

In Tailwind you can also extract the inline styles to a stylesheet and create custom CSS classes that you can re-use throughout your application.

```html
<button class="btn btn-blue">Button</button>
```

```scss
.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-700;
}
```

## Processing your CSS with Tailwind

For Tailwind to work in your projects you'll have to process/build the CSS. For most projects you'll want to do this with PostCSS. You can add Tailwind as a plugin to postcss.config.js if you're using PostCSS.

### PostCSS

PostCSS is a tool for transforming CSS with JavaScript.

- [PostCSS Documentation](https://postcss.org/)
- [Setting up PostCSS](https://tailwindcss.com/course/setting-up-tailwind-and-postcss)

PostCSS is available by default in a lot of environments, such as Laravel, Next.js and Vue CLI. It supports a lot of [different plugins](https://www.postcss.parts/) that you can easily install and use in your project. Plugins can easily be installed through npm and added to a postcss.config.js file.

A postcss.config.js file for Autoprefixer and Tailwind might look like this:

```js
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
```

## CLI

For simple projects or for when you're testing Tailwind, you can use the Tailwind CLI tool to process your CSS.

```bash
npx tailwindcss build styles.css -o output.css
```

The following will take your styles.css file with your custom Tailwind CSS and build it to a file called output.css. You'll then import output.css in your project.

## Lesson Task

### Brief

This task will test your understanding of Tailwind CSS.

### Questions

1. Explain the difference between Tailwind and a library like Bootstrap.
2. How would you enable support for future CSS features in Tailwind?
3. Why is it not common for a preprocessor like Sass to be used with Tailwind?

## Resources

- [Tailwind Quick Start Guide](https://tailwindcss.com/docs/installation)
