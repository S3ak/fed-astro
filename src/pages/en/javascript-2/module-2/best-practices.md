---
title: Best practices
keywords: sample
tags: JavaScript 2
sidebar: javascript-2
permalink: javascript-2/array-method-best-practices.html
folder: javascript-2
---


## Use suitable names for the element parameter

All of the array methods have the current element as a parameter. Part of writing clean code is having suitable variable names.

You should name your element parameters based on the data you are working with. In most cases, the data you are mapping through should have a plural form (`users`), and then in the array method, you would use a singular form (`user`) for the element.

Here are some examples:

```js
users.map(user => ...);
movies.map(movie => ...);
students.map(student => ...);
```

Instead of the above, you could use an `element` or `item` which are generic names. However, in most cases, this will make your code harder to understand.

## Destructuring parameters

You can destructure properties from the current element parameter in array methods. This leads to your code being more concise and clean.

In this example, we aren't destructuring any values:

```js
const names = [
  { firstName: 'Ola', lastName: 'Nordmann' },
  { firstName: 'Jan', lastName: 'Jansen' },
];

const combinedNames = names.map((person) => {
  return `${person.firstName} ${person.lastName}`;
});
```

This is the same example. However, we destructure the `firstName` and `lastName` properties:

```js
const names = [
  { firstName: 'Ola', lastName: 'Nordmann' },
  { firstName: 'Jan', lastName: 'Jansen' },
];

const combinedNames = names.map(({ firstName, lastName }) => {
  return `${firstName} ${lastName}`;
});
```

The example above can be reduced even further by making use of the implicit return from the arrow function:

```js
const names = [
  { firstName: 'Ola', lastName: 'Nordmann' },
  { firstName: 'Jan', lastName: 'Jansen' },
];

const combinedNames = names.map(
  ({ firstName, lastName }) => `${firstName} ${lastName}`,
);
```

## "One-liners"

Array methods often allow you to reduce your lines of code significantly. Array methods can also be chained together.

This ultimately allows one to solve very complex issues with a single line of code. However, they are considered very difficult to read.

You should try and avoid one-liners in the workplace and instead reserve them for "leetcode" exercises or trying to show off in interviews. If you do choose to use it in an interview, be sure to mention that you are aware it is not very readable, but you are simply demonstrating that you can write one-liners.
