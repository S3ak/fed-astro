---
title: Object literal
keywords: sample
tags: JavaScript 2
sidebar: javascript-2
permalink: javascript-2/object-literal.html
folder: javascript-2
---

## Introduction

An object literal forms part of the module pattern that we will soon be looking at.

An object literal is an object that contains key/value pairs which are comma-separated. The key/value pairs can have properties and methods assigned to them.

If you want to access a value within the object, you would use the `this` property.

An advantage of an object literal is that it allows you to organise and encapsulate your code.

## Basic example

```js
const myObjectLiteral = {
  // A number type stored as the value
  myValue: 99,
  // method stored under 'myFunction' key
  myMethod: function () {
    // Accessing 'myValue' with the 'this' keyword
    console.log(this.myValue);
  },
};
```

## Practical example

Let's take a look at a more practical example.

In this example below, we take a look at a basic shopping cart.

```js
const shoppingCart = {
  // Stores the cart items
  cart: [],
  // Adds a single item to the 'cart' array
  addToCart: function (item) {
    this.cart.push(item);
  },
  // Displays the contents of the cart
  getCartItems: function () {
    console.log('Cart:', this.cart);
  },
};

// Add an item to the cart
shoppingCart.addToCart({ name: 'Milk', price: 9.99 });
// Display the cart contents
shoppingCart.getCartItems();
```

## Setters and Getters

ECMAScript 5 (ES5 2009) introduced `getters` and `setters` to JavaScript.

A `getter` gets a value back for us whereas a `setter` sets a value for us.

Consider the following example:

```js
const user = {
  firstName: 'John',
  lastName: 'Nordmann',
  setFirstName: function (newFirstName) {
    //
    this.firstName = newFirstName;
  },
};
user.setFirstName('Ola');
// Logs 'Ola'
console.log(user.firstName);
```

You can see we have to call `setFirstName` as a method, passing our value in.

We could use a getter and setter instead, which allows the object literal to set or get the properties without having to call a separate function.

In this example, we have our pseudo private variable `_firstName`. We then have a `getter` and `setter` set to `firstName`.

**Note:** We cannot have our getter the same name as our private variable name otherwise we will end up in an infinite recursion call i.e. we can't have a private variable called `firstName` and a `getter` called `firstName`, this will end up in an endless loop.

```js
const user = {
  _firstName: 'John',

  // The 'setter'
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  },

  // The 'getter'
  get firstName() {
    return this._firstName;
  },
};

// Use the 'firstName' setter
user.firstName = 'Ola';
// Use the 'firstName' getter
console.log(user.firstName);
```

## Lesson task

Object literals are quite commonly used in JavaScript. It is important you get used to creating them.

### Goal

You will be able to create an object literal.

### Brief

Complete the Level 1 process.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. You will get to use your imagination in this task. Try and have fun with it.

2. Create an object literal that has at least 2 properties and 2 methods. The 2 methods must make use of the 2 properties.

3. Test the code to make sure it works.

## Additional resources

**Note**: In the link below you will need to scroll down to the `Object Literal` section as it can't be linked directly. You will need to scroll down to the correct section for Object Literals.

[Patterns.dev: Object Literal](https://www.patterns.dev/posts/classic-design-patterns/#designpatternsjavascript)
