---
title: Object Methods
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We are going to recap what we've learnt about Objects as well as dive a little deeper.

An object is one of the JavaScript data types. It allows you to store data using "key/value pairs".

```js
const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};
```

To access a value from the object, we use a `key`. There are two ways we can use the `key` to access our values:

1. Dot notation
2. Bracket notation

### 1. Dot Notation

With `dot notation`, we put a `.` "dot" (also known as a full stop or period) after the object name and then the `key` we want to use.

```js
const name = person.firstName;

console.log(name);
// Returns:
// Ola
```

### 2. Bracket Notation

With `bracket notation`, we put the key, as a string with quotation marks, in square brackets right after the Object's name.

```js
const name = person["firstName"];

console.log(name);
// Returns:
// Ola
```

It would help if you usually used `dot notation` to access the values in your objects. However, `bracket notation` is still critical to know because it lets us dynamically access values in our Objects. This is because we can generate our keys with variables and string concatenation (adding of strings together).

In this example, we have multiple keys that are the same except for a number at the end. We create our key by combining the string `ingredient_` with a number e.g. `"ingredient_" + 1`.

```js
const recipe = {
  ingredient_0: "Egg",
  ingredient_1: "Milk",
  ingredient_2: "Flour",
};

const ingredient0 = recipe["ingredient_" + 0];
const ingredient1 = recipe["ingredient_" + 1];
const ingredient2 = recipe["ingredient_" + 2];

console.log(ingredient0);
console.log(ingredient1);
console.log(ingredient2);

// Returns:
// Egg
// Milk
// Flour
```

Let's do another example with the same data as the last example. This time, we will use a `for loop` and the index from the loop. We will use this index to automatically increment the number in the Object key we are generating.

```js
const recipe = {
  ingredient_0: "Egg",
  ingredient_1: "Milk",
  ingredient_2: "Flour",
};

for (let index = 0; index <= 2; index++) {
  // We use
  const ingredient = recipe["ingredient_" + index];
  console.log(ingredient);
}

// Returns:
// Egg
// Milk
// Flour
```

## Looping with an object

An array is a list of elements that are in a specific order. In an array, we can access an element at a certain position by using an index.

An object is not a list like an array. The keys in an object are not in any specific order, so we cannot simply use a `for loop` with an index to loop through key/value pairs in an object.

There are other ways to loop through the values in an object.

### `for...in` loop

The `for...in` loop used with an object will iterate over the keys of the object.

```js
for (const myKey in myObject) {
  // We are looping through the keys of the object. To get the value you
  //    need to use the key (myKey) as a way to reference the key/value pair.
  console.log(myObject[myKey]);
}
```

The following code is a more practical example of the `for...in` loop with an object. Note how we are using the key as an accessor in the object so that we can get the value.

```js
const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

for (const key in person) {
  // Use the key to access the value from the key/value pair
  console.log("key:", key, "value:", person[key]);
}
// Returns:
// key: firstName value: Ola
// key: lastName value: Nordmann
// key: module value: JavaScript
```

## Object Methods

### Object.keys()

The object `Object.keys()` method returns an array containing all of the keys that are in that object.

The syntax is fairly basic. `Object` is an actual keyword you need to use, giving us access to the `.keys` method. You then pass in the object as the parameter. In the example below, we are passing in the `myObject` object.

```js
const myObject = {
  // Key/value pairs here
};

Object.keys(myObject);
```

Let's have a look at the previous example we did with `for...in`. You can see that we set `keysArray` to the result of `Object.keys(person)`. The end result is then an array of keys from the object.

```js
const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

const keysArray = Object.keys(person);

console.log(keysArray);
// Returns:
// ['firstName', 'lastName', 'module']
```

The array being returned from `Object.keys()` is actually of significance because it means that we can now use our array methods, such as `map()`, `filter()` and `reduce()`.

#### forEach() example

In this example we will use the `forEach` array method to loop through the keys of the object. The `forEach` method is for when we simply want to loop and don't need a new array being returned.

```js
const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

Object.keys(person).forEach((key) => {
  console.log(`key: ${key}, value: ${person[key]}`);
});

// Logs:
// key: firstName, value: Ola
// key: lastName, value: Nordmann
// key: module, value: JavaScript
```

#### map() example

In this example, we use `map` to create a new array. Each element in the array will contain the `key` and `value` for each of the key/value pairs.

```js
const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

// .map will return a new array that contains the same number
// of elements as there were in the initial array
const keysAndValues = Object.keys(person).map((key) => {
  return `key: ${key}, value: ${person[key]}`;
});

console.log(keysAndValues);
// Logs:
// 0: "key: firstName, value: Ola"
// 1: "key: lastName, value: Nordmann"
// 2: "key: module, value: JavaScript"
```

### Object.values()

The `Object.values()` method will create an array of only the values from the object. It can be seen as the opposite of the `Object.keys()` object method which creates an array of the keys in the object.

```js
const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

console.log(Object.values(person));
// Returns:
// ['Ola', 'Nordmann', 'JavaScript']
```

### Object.entries()

`Object.entries()` returns an array containing both the key and value.

```js
const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

Object.entries(person).forEach((keyValuePair) => {
  console.log(keyValuePair);
});
// Returns:
// ['firstName', 'Ola']
// ['lastName', 'Nordmann']
// ['module', 'JavaScript']
```

We can use array destructuring for the key/value pair as the value returned will always be the key and the value. Note how we do not have to access the value using the key as we already have the value given to us as index `1` of the array being returned:

```js
const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

Object.entries(person).forEach(([key, value]) => {
  console.log("key:", key, "value:", value);
});
// Returns:
// key: firstName value: Ola
// key: lastName value: Nordmann
// key: module value: JavaScript
```

## Additional resources

[Digital Ocean: How To Use Object Methods in JavaScript](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript)
