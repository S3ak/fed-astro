---
title: Introduction to SASS
keywords: sample
tags: CSS Frameworks
sidebar: css-frameworks
permalink: css-frameworks/intro-to-sass.html
folder: css-frameworks
---

## Introduction

SASS is a `CSS preprocessor` that helps you write CSS efficiently and organize your styles. A `language preprocessor` is a tool that adds additional features to an existing language with new rules.

Since these new rules do not exist in the original language, they are called `syntax extensions`. Syntax extensions need to be `compiled` before they can be used by a browser to load a web application.

SASS is a `syntax extension` that adds a new `syntax` to the `CSS` language, as well as a `compiler` that can be used to convert SASS into CSS.

Like Bootstrap, SASS has become *ubiquitous* in the modern web development landscape. Although there are alternatives to SASS, it is currently the most dominant tool.

> Please ensure that you have NodeJS & NPM setup before you continue with this lesson. You can find the tutorial here: [NodeJS setup](https://noroff-content.gitlab.io/feu/node/installing-node.html)

> Make sure that you have your terminal open to the correct folder. The easiest way to ensure this is to use the terminal in VS Code which will automatically open at your current working folder.

> Make sure to run `npm init -y` to create a new `package.json` file if you don't already have one.

## Syntax

SASS provides two syntaxes for writing styles. The syntaxes are SCSS syntax and [Indented Syntax](https://sass-lang.com/documentation/syntax#the-indented-syntax). We will focus on the `SCSS` syntax as this is most popular and closest to CSS syntax.

### SCSS

SCSS (Sassy CSS or Sassy Cascading Style Sheets) is designed to be very similar to CSS syntax, using curly braces (`{}`) to demark a style declaration and semicolons (`;`) to demark the end of a style assertion. In fact, all CSS styles are valid SCSS styles. You can copy/paste any CSS declaration into an SCSS file and it will be parsed correctly.

For example:

```scss
.my-class {
  color: red;
}
```

This is valid SCSS as well as valid CSS syntax. However there are aspects of this syntax that are not valid CSS:

```scss
.my-class {
  color: red;

  &-child {
    color: blue;
  }
}
```

Here we can see an example of SASS `nesting` which cannot be done in CSS. Files using the SCSS syntax are given the file extension `.scss`.

### SASS

Alternatively, the SASS syntax is also available. This syntax uses indentation to demark style declarations and a line break to demark the end of a style assertion. For example:

```sass
.my-class
  color: red

  &-child
    color: blue
```

Files using the SCSS syntax are given the file extension `.sass`.

## Compiler

The SASS compiler converts SASS code into CSS that can be run by a browser. Although there are VS Code extensions designed to help you compile SASS, it is best to include SASS in your project to make it easier for others to use and work on in future.

### Install the Sass Compiler

In order to use the SASS compiler, you will need to install it as a `dev dependency` using NPM:

```bash
npm install -D sass
```

SASS should now show up in your `package.json` file and `node_modules` folder.

### Running the SASS Compiler

In order to run SASS from your project, you should include a `build script` in your `package.json` file:

```json
{
  "scripts": {
    "build": "sass src/scss:dist/css"
  }
}
```

This command tells SASS to look inside the `src/scss` folder and compile all files ending in `.scss` into the `dist/css` folder. You may store your SASS code in a different location, and may desire for your output to be stored in a different location too. In order to handle this simply change the values in this command:

```
sass input-directory:output-directory
```

### Running SASS Watch

Although the script above will successfully convert SASS to CSS, you will need to run this every single time you make a change to your SASS code. To avoid this inconvenience, we can use the `watch` command to automatically convert SASS to CSS whenever a file changes:

```json
{
  "scripts": {
    "watch": "sass --watch src/scss:dist/css"
  }
}
```

When combined with `live-server` this will automatically reload your page. You can use the `Live Server` VS Code extension, or install this as a `dev dependency` using NPM:

```bash
npm install -D live-server
```

Then you can run the `live-server` command in your project:

```json
{
  "scripts": {
    "watch": "sass --watch src/scss:dist/css & live-server"
  }
}
```

## Core Sass concepts

As mentioned above, SASS adds additional features to CSS in order to enable powerful structures that keep your code clean and readable.

### Variables

Like CSS, SASS offers a system for creating and using `variables`. Variables can hold any kind of style information and be used anywhere in a SASS file. For example, you can create a variable called `$primary-color` and set it to a hexadecimal color value. Then you can use this variable in your SASS code:

```scss
$primary-colour: #e85a4f;

p {
  color: $primary-colour;
}
```

We could use the $primary-colour variable in multiple places in our code and if we needed to update the colour we would only need to change it in one place.

You can read more about SASS variables here: [SASS variables](https://sass-lang.com/documentation/variables)

### Maps

Maps in Sass hold key value pairs, similar to an object in JavaScript.

We can use them to store multiple variables with a single name.

For example, we may have more than one important colour variable:

```scss
$colours: (
  "primary": #e85a4f,
  "secondary": #6a6a68,
);
```

We access a variable value inside a map using the map-get function:

```scss
color: map-get($colours, primary);
```

You can read more about SASS maps here: [SASS maps](https://sass-lang.com/documentation/values/maps)

### Partials

Sass allows us to split our styles into smaller files and then import them in a single file that will get compiled to CSS.

Files that begin with an underscore (\_) will not be compiled to CSS and need to be imported in a file with a name that doesn't begin with an underscore.

For example, we may have the following files:

```
/src/scss/styles.scss
/src/scss/layout/_header.scss
/src/scss/layout/_main.scss
/src/scss/layout/_footer.scss
```

In this example, the SASS compiler will output only one file: `styles.css` and will not compile each `_partial.scss` file individually.

### Nesting

SASS also provides support for `nesting` which is a way to group styles together. For example, we may have a group of related styles that we want to group with a common name:

```scss
.hero-banner {
  background-color: #e85a4f;
  color: #fff;
  padding: 20px;

  &-title {
    font-size: 1.5em;
    font-weight: bold;
  }

  &-subtitle {
    font-size: 1em;
    font-weight: bold;
  }

  &-button {
    background-color: #fff;
    color: #e85a4f;
    border: 1px solid #e85a4f;
    padding: 10px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
  }
}
```

This example code would output styles for the following classes:

```
.hero-banner
.hero-banner-title
.hero-banner-subtitle
.hero-banner-button
```

By nesting these styles together we can clearly see the relationship they should have in HTML. You can read more about SASS nesting here: [SASS Nesting](https://sass-lang.com/documentation/style-rules#nesting).

### Mixins

A mixin allows us to dynamically create styles using arguments and use these styles wherever we include the mixin.

Here is a mixin that will receive one argument called $radius. Use it to set the border-radius and then return the border-radius property as well as the border property wherever this mixin is included.

```scss
@mixin button-border($radius) {
  border-radius: $radius;
  border: 3px solid white;
}
```

We can include the mixin in a selector like this:

```scss
@include button-border(15px);
```

Mixins accept arguments in order to control their behaviour. Using the example above we could add two additional arguments:

```scss
@mixin button-border($radius, $width, $color) {
  border-radius: $radius;
  border: $width solid $color;
}

@include button-border(15px, 3px, white);
```

We could also use a `map` or `variable` value here:

```scss
@include button-border($radius-size, $border-size, map-get($colours, primary));
```

You can read more about SASS mixins here: [SASS mixins](https://sass-lang.com/documentation/at-rules/mixin)

### Functions

Functions are similarly structured to mixins but they return a value and don't output styles.

Here is a function that receives an argument and returns a value from a map using the argument as the key:

```scss
@function getColour($colour) {
  @return map-get($colours, $colour);
}
```

To get the primary key value from the $colours map we would use the function like this:

```scss
color: getColour(primary);
```

You can read more about SASS functions here: [SASS functions](https://sass-lang.com/documentation/at-rules/function)

### Inheritance

If multiple classes use the same property values, we can move the properties into a class, and then use those properties wherever required with the @extend keyword.

We might have some form element styles in a class like this:

```scss
.form-common {
  border: none;
  height: 25px;
}
```

To use those styles in any other selector we can do this:

```scss
input {
  @extend .form-common;
}
```

Extend allows for styles to be kept very DRY, by reusing the same styles in multiple selectors. You can read more about SASS extend here: [SASS extend](https://sass-lang.com/documentation/at-rules/extend)

### Modules

In order to use one SASS file from another, it must be imported as a `module`. We can do this by using the `@use` keyword. For example:

`/src/scss/styles.scss`
```scss
@use "./components/buttons";
@use "./utilities/flex";
```

In this example we have imported the `src/scss/components/_buttons.scss` and `src/scss/utilities/_flex.scss` files into our main stylesheet. Not only does this mean that the contents of these two files will be compiled into the `styles.css` file - but it also allows us to use the contents within `styles.scss`:

```scss
@use "./components/buttons";
@use "./utilities/flex";

.unique-button {
  @extend .button;
  @extend .display-flex;
  @extend .flex-column;
}
```

This will include the styles from the `src/scss/components/_buttons.scss` file and the `src/scss/utilities/_flex.scss` file.

When using variables and mixins imported from another file, you must use the `namespace` for that file. For example, if we had a variable named `$button-color` in our `_buttons.scss` file, we would refer to it like so in `styles.scss`:

```scss
@use "./components/buttons";

.unique-button {
  color: buttons.$button-color;
}
```

The namespace of the file will be the same as it's name, in this case `_buttons.scss` will be `buttons`. You can read more about `@use` here: [SASS Use](https://sass-lang.com/documentation/at-rules/use) and more about namespaces here: [SASS namespaces](https://sass-lang.com/documentation/at-rules/use#choosing-a-namespace)

## Organising a Sass project

There is no right or wrong way to organise a SASS project, and your needs will differ from other developers. In general, we use the same DRY approach with SASS as with CSS - if you find yourself repeating something over and over, you should explore which SASS feature can be used to streamline your code.

In terms of file structure, it makes sense to split your SASS code into small files that describe their purpose clearly. For example:

```
/src/scss/styles.scss
/src/scss/components/_buttons.scss
/src/scss/components/_forms.scss
/src/scss/components/_header.scss
```

You can take advantage of `barrel files` in order to group all the files in a folder together:

```
/src/scss/components/_index.scss
/src/scss/components/_buttons.scss
/src/scss/components/_forms.scss
/src/scss/components/_header.scss
```

Where the `_index.scss` file would simply `@use` it's siblings:

```scss
@use "./components/buttons";
@use "./components/forms";
@use "./components/header";
```

Now, in our `styles.scss` file we can simply `@use "components"` to include all code for the components folder. Using this strategy we can keep styles `modular` or `atomic` while easily importing them into a useful global stylesheet.

----

## Lesson Task

### Brief

Start with the page created in the [Bootstrap introduction](/css-frameworks/module-1/intro-to-bootstrap). Design a theme adjustment that adds custom details to the basic Bootstrap theme. For example, a dark mode theme or a contrasting colour scheme.

Next, copy your page HTML and remove all references to CSS. You should have an HTML file with the necessary information and elements, but no styling whatsoever.

Your task is to rebuild the styles for your page, only using your own custom SASS.

You do not need to copy Bootstrap's implementation exactly - but do not change any classnames in HTML. 

### Process

1. Copy an existing Bootstrap HTML file.
2. Design a theme adjustment that provides contrast with the original.
3. Remove all references to Bootstrap CSS.
4. Rebuild the styles for the new design using SASS.
