---
title: URL parameters
description: sample
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

URL parameters (also called "query strings" or "URL query parameters") are ways to send information through a URL.

## How they work

URL parameters begin with a question mark (`?`). After that, URL parameters contain key/value pairs separated by an ampersand (`&`). The key and value have an equal sign (`=`) between them.

![Web API](../images/javascript-2/async/url-parameters.png)

URL parameters can be beneficial within your own applications. An example of where they could be helpful is a dynamic product page (e.g. `https://www.example.com/product/?id=1`). This page would check the URL parameters for an ID and then use this ID to do an API call to fetch a product with a specific ID. In this example, it would get a product with an ID of `1`.

## Adding URL parameters

Adding URL parameters is very straightforward. You add it to the URL that you are navigating users to.

In the example below, we are adding:

- the `firstName` key with a value of `ola`.
- the `lastName` key with the value of `nordmann`.

```html
<a href="https://www.example.com/?firstName=ola&lastName=nordmann">Submit</a>
```

The above example is hardcoded and added into our HTML, which isn't of much use. We typically need to add dynamic values, such as different first and last names.

### Dynamic URL parameters

We will now look at how we can dynamically add URL parameter values:

#### Generating an anchor element with createElement

In this example, we are generating HTML and are using variables to set our values:

```js
// Get the container
const container = document.getElementById("container");

// These values are hardcoded here but they could come from another
// source such as an API
const firstName = "Ola";
const lastName = "Nordmann";

// Create a new <a> anchor link
const newLink = document.createElement("a");

// Here we use a template literal/template string to add our values
newLink.href = `https://www.example.com/?firstName=${firstName}&lastName=${lastName}`;

// We set the text content of our anchor link
newLink.textContent = "Submit";

// We add our anchor link to the parent container
container.appendChild(newLink);
```

#### Generating an anchor element with `innerHTML`

The following example is the same as the above, except it is setting the `innerHTML`:

```js
// Get the container
const container = document.getElementById("container");

// These values are hardcoded here, but they could come from another
// source such as an API
const firstName = "Ola";
const lastName = "Nordmann";

// Setting the HTML for the container element
container.innerHTML = `<a href="https://www.example.com/?firstName=${firstName}&lastName=${lastName}">Submit</a>`;
```

**Note**: Setting `innerHTML` can be considered dangerous. `innerHTML` will parse JavaScript, meaning malicious JavaScript could be added in some cases. Please see the Additional resources on this page for more information on this.

#### Navigating programmatically

We can use JavaScript to navigate programmatically, i.e. navigate only using code. In this example, we make use of `window.location.replace` to programmatically change the URL:

```js
// Get the button with id of "btn"
const button = document.getElementById("btn");

// These values are hardcoded here, but they could come from another
// source such as an API
const firstName = "Ola";
const lastName = "Nordmann";

// Add a "click" event listener that calls "onButtonClick"
button.addEventListener("click", onButtonClick);

// This function will fire each time the button is clicked
function onButtonClick() {
  // Replace the URL with our newly created URL that contains our
  // dynamic URL parameters
  window.location.replace(
    `https://www.example.com/?firstName=${firstName}&lastName=${lastName}`
  );
}
```

## Consuming URL parameters

We have looked at how we add URL parameters. We will now look at how we can make use of URL parameters.

### Parameter string

We can get the whole parameter string with `window.location.search`, the query that starts with the question mark (`?`).

In this example, we are navigating to `http://localhost:8000/?firstName=ola&lastName=nordmann`, which has the following code in a script:

```js
// Navigated to: http://localhost:8000/?firstName=ola&lastName=nordmann

// Get the parameter string from the URL
const parameterString = window.location.search;
console.log(parameterString);

// Logs:
// ?firstName=ola&lastName=nordmann
//
```

### Parsing the parameter string with URLSearchParams

We saw how we could obtain the parameter string; however, this is not of much use on its own. It would still require much work to extract the values out of it.

`URLSearchParams()` is a function which will parse the query string for us and allow us to get specific values, among other features.

```js
// Navigated to: http://localhost:8000/?firstName=ola&lastName=nordmann

const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);

// Iterate through the search parameters
for (const parameter of searchParameters) {
  console.log(parameter);
}
// Logs:
// (2) ['firstName', 'ola']
// (2) ['lastName', 'nordmann']
```

**Note:** You will see that the parameters are output as two values in an array, e.g. `['firstName', 'ola']`. This is an ideal situation to do array destructuring.

#### `get()`

We can use the `get()` method to obtain a specific value for a specific key.

```js
// Navigated to: http://localhost:8000/?firstName=ola&lastName=nordmann

const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);

console.log(searchParameters.get("firstName"));
// Logs:
// ola
```

#### `set()`

You can use the `set()` method to add a new key/value pair. It takes two arguments, the key and value you want to set.

In this example, we are setting a new key/value pair:

```js
// Navigated to: http://localhost:8000/?firstName=ola&lastName=nordmann

const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);

searchParameters.set("country", "Norway");

console.log(searchParameters.get("country"));
// Logs:
// Norway
```

#### `toString()`

You can use the `toString()` method on your `URLSearchParams` object to convert the search parameters back into a string that can be used in a URL.

In this example, you will see that we have a search string logged:

```js
// Navigated to: http://localhost:8000/?firstName=ola&lastName=nordmann

const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);

console.log(searchParameters.toString());
// Logs:
// firstName=ola&lastName=nordmann
```

#### Other methods

There are additional methods worth looking into, which you can find in the [MDN web docs for `URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

<hr>

## Lesson task

You will likely come across the need to use URL parameters as a front-end web developer.

### Goal

You will practise using URL parameters.

### Brief

Complete the Level 1 process.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Create a `index.html` and add a hyperlink to a `product.html` page. Pass in the follow key/value pairs into this URL:

1.1 `firstName` key with a value of `Ola`.

1.2 `lastName` key with a value of `Nordmann`.

2. Create a`product.html` page and import a new file called `product.js`.

3. Obtain the values from the URL and log them out. You should end up with `Ola` and `Nordmann` being logged out.

## Additional resources

[MDN Web Docs: WindowClient.navigate()](https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/navigate)

[How to use .innerHTML safely](https://openjavascript.info/2021/09/08/should-we-be-using-innerhtml/)

[DOM Manipulation and the Dangers of 'innerHTML'](https://betterprogramming.pub/dom-manipulation-the-dangers-of-innerhtml-602f4119d905)

[MDN Web Docs: URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
