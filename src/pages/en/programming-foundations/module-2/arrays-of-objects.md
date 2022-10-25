---
title: null, Objects and arrays of objects
description: sample
tags: Programming Foundations
sidebar: prog-found

layout: ../../../../layouts/MainLayout.astro
---

## Truthiness and Falsiness

We saw that an uninitialised variable (a variable that has been declared but not assigned a value), receives a value of `undefined`.

```js
var example;
console.log(example);
// undefined
```

In JavaScript, `undefined` is not the only way to represent an absence of information. There is an important difference between different `falsy` data types. Consider this selection of `falsy` values:

- `undefined`, the variable is empty and has never been set. It is 'new' or 'pristine'.
- `null`, the variable is empty, but it has been purposefully set to empty.
- `0`, the variable stores an empty quantity.
- `""`, the variable stores an empty string.

These values are referred to as `falsy`, because they are _"like false"_, when used in a boolean expression:

```js
if (null) {
  console.log("null is truthy");
} else {
  console.log("null is falsy");
}

if (0) {
  console.log("0 is truthy");
} else {
  console.log("0 is falsy");
}

if ("") {
  console.log('"" is truthy');
} else {
  console.log('"" is falsy');
}
```

A convenient way to test whether a value is `truthy` or `falsy` is by using the Boolean method:

```js
console.log(Boolean("")); // false, therefore falsy
console.log(Boolean("abc")); // true, therefore truthy
```

A `truthy` value represents any kind of positive information. To put it simply:

> There is something here

Some of the `truthy` values may be surprising or seem counterintuitive:

- `[]`, an empty array
- `{}`, an empty object
- `"0"`, the string of the number zero

Although there is nothing contained within an empty array `[]`, the array itself counts as _'one thing'_.

The same is true for an empty object `{}`. Despite having no properties, it counts as _"something"_.

In the case of `"0"`, this is actually a valid `string` with a `length` of 1. In order to use this as a number it should be `cast` using `Number("0")`.

```js
console.log(Boolean([])); // true, therefore truthy
console.log(Boolean({})); // true, therefore truthy
console.log(Boolean("0")); // true, therefore truthy
```

Understanding truthiness is very useful when preventing errors in your code:

```js
var listOfPosts = serverResponse.posts; // We don't know exactly what is here

if (listOfPosts) {
  // We know we have something to work with
  // It could be an empty array or object
} else {
  // Nothing was found
}
```

---

## Introduction to objects

An `object` is a data structure used to group values together under a variable name.

Values are stored inside an object by creating a `property` within the object:

```js
var exampleObject = {
  exampleProperty: "exampleValue",
};
```

---

### Syntax and Notation

Objects are a powerful way to describe real world concepts, and allow for a style of coding that is easier to read.

For example, a dog has certain properties like its name, breed, owner and _number of legs_.

We can represent these properties in an object in JavaScript like this:

```js
var dog = {
  name: "Tripod",
  breed: "labrador",
  numberOfLegs: 3,
  owner: null,
};
```

We've created a variable called `dog` with a value type of `object`. The `object` has four properties, `name`, `breed`, `owner` and `numberOfLegs`.

Each property has a `key` and `value` seperated by a colon `:` symbol:

```js
var example = {
  key: "value",
};
```

An object can have zero or more properties, and it can store any kind of value type - including other objects:

- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `array`
- `object`

#### Accessing data within an object

We can access an object's properties using dot `.` notation.

To reference the `dog`'s `name` value:

```js
console.log(dog.name);
// "Tripod"
```

To reference the `dog`'s `breed` value:

```js
console.log(dog.breed);
// "labrador"
```

Note the difference between these two outputs:

```js
console.log(dog.owner);
// "null"

console.log(dog.colour);
// "undefined"
```

We know that there is no owner, but which colour the dog is has never been described.

#### Adding or updating data in an object

Often an object will be created empty `{}` first, and data will be added to it later on.

We can use `dot notation` to set or update the value of any property in an object:

```js
var example = {
  edited: false,
};

example.edited = true;
example.text = "I have edited this example";
console.log(example);
// { edited: true, text: "I have edited this example" }
```

<iframe src="https://player.vimeo.com/video/496270832" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/496270832/44859ca45f" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/introduction-to-objects/blob/master/script.js" target="_blank">Code from the video</a>

---

## Arrays of objects

As mentioned in the previous lesson, using arrays of objects is a powerful pattern that is used by almost every web application.

For example, on an ecommerce website we need to represent the various products available so that they can be shown as a listing:

```js
var product1 = {
  id: 327,
  name: "Screwdriver",
  price: 99.99,
};

var product2 = {
  id: 968,
  name: "Wrench",
  price: 50.95,
};
```

Storing each product in a seperate variable is possible, but it makes it difficult to access and work on this information.

Instead, we should group this `categorical` data together into an array of objects.

Without changing the code above, we can simply assign the existing product variables to an array:

```js
var products = [product1, product2];
```

Now we have an array of `product` objects. We can access a specific object based on its `index`:

```js
console.log(products[1]); // { id: 968, name: "Wrench", price: 50.95 }
console.log(products[1] === product2); // true
```

We can loop through the array of objects like any other array, using a for loop or `array prototype methods`:

```js
for (var i = 0; i < products.length; i++) {
  console.log(products[i]);
  console.log(products[i].name);
}

products.forEach(function (product, i) {
  console.log(product, i);
  console.log(product.name);
});
```

It is often helpful to assign `local variables` inside a for loop to make the code easier to read:

```js
for (var i = 0; i < products.length; i++) {
  var product = products[i];
  var productName = product.name;
  console.log(productName);
}
```

Instead of defining each product on their own, it is better to define them together - directly into an array:

```js
var products = [
  {
    id: 327,
    name: "Product 1",
    price: 99.99,
  },
  {
    id: 968,
    name: "Product 2",
    price: 50.95,
  },
];
```

When recieving data from a remote server in future products, list data will always be returned in the above format, rather than in discrete variables.

A list of products containing the objects above sent from a server would look like this, with the objects placed directly into the array, rather than in variables.

This video looks at looping through arrays of objects and includes a practical use for the object properties, i.e. creating HTML from them.

<iframe src="https://player.vimeo.com/video/496371287" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/496371287/211fcb39fe" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/arrays-of-objects" target="_blank">Code from the video</a>

---

> The following content is optional, and intended for students who wish to get ahead. The methods and techniques described below will not be part of the marking criteria for this module, however correctly implementing these is a good way to show understanding.

### Finding objects in an array

Often we need to find a specific item from an array of objects, and since they will not be defined in their own variable we cannot simply reference the variable name.

If we know the position of the object in the array, this is easy, we can use square bracket notation to access the item:

```js
var myObject = products[0];
```

However we may not have this information, for example if the user is searching for the name of the product.

In this case, we could loop through all of the items and compare our search text with the name property:

```js
var myObject; // undefined
var searchString = "Wrench";
for (var i = 0; i < products.length; i++) {
  // Loop through all the products
  var product = products[i]; // Set a local variable
  if (searchString === product.name) {
    myObject = product; // Set the matching object
  }
}
console.log(myObject);
```

This is quite a lot of code to do something quite simple, so instead we can employ an `array prototype method` to make things simpler:

```js
var searchString = "Wrench";
var myObject = products.find(function (product) {
  return product.name === searchString;
});
console.log(myObject);
```

### Filtering objects in an array

Similar to finding one product, we often need to narrow down a list of objects based on certain parameters.

For example, if the user wants to see products that are less than $60, we should exclude product1:

```js
var myFilteredArray = []; // empty array
var maximumPrice = 60.0;
for (var i = 0; i < products.length; i++) {
  // Loop through all the products
  var product = products[i]; // Set a local variable
  if (product.price < maximumPrice) {
    myFilteredArray.push(product);
  }
}
console.log(myFilteredArray);
```

Again, this is a lot of code to do something that is quite common. It can also be written more simply:

```js
var maximumPrice = 60.0;
var myFilteredArray = products.filter(function (product) {
  return product.price < maximumPrice;
});
console.log(myFilteredArray);
```

### Sorting objects in an array

Another common task, especially in ecommerce applications, is rearranging an array of objects based on their properties.

For example, if a user wants to sort products by their price, with the smallest first.

Using a for loop for this task can quickly become very complicated and hard to read.

Instead, the built in `Array.sort()` method can be employed to quickly achieve this task:

```js
products.sort(function (productA, productB) {
  if (productA.price > productB.price) {
    return 1; // Move B "up" in relation to A
  }

  if (productA.price < productB.price) {
    return -1; // Move B "down" in relation to A
  }

  if (productA.price === productB.price) {
    return 0; // Don't change order
  }
});
```

This method can be used to sort arrays of objects based on any comparible property values.

<hr>

## Lesson Task

There are practice questions in the master branch of <a href="https://github.com/NoroffFEU/lesson-task-pf-module2-lesson3" target="_blank">this repo</a>.

There are example answers in the <a href="https://github.com/NoroffFEU/lesson-task-pf-module2-lesson3/blob/answers/js/script.js" target="_blank">answers branch</a>.

Try the exercises before checking the solutions.
