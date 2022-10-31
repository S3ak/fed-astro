---
title: Map
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

The `Map` object holds key/value pairs like a normal object. The original insertion order into a `Map` object is remembered whereas a normal object's order is unreliable. Any value, both objects and primitive values may be used as a key or a value.

## Basics

### Creating a map

We can create a map using `new Map()` e.g.

```js
// This creates a new Map
const myMap = new Map();
```

### Adding a key/value pair

We use the `set` method on a `Map` object to add a new key/value pair.

This `set` method takes two parameters:

1. The key you are setting

2. The value you are setting

```js
const myMap = new Map();

// The 'a' key will be set to 1
myMap.set("a", 1);
```

### Getting a value from a Map

We use the `get` method on a `Map` object to get the value of a key.

```js
const myMap = new Map();

myMap.set("a", 1);

console.log(myMap.get("a"));
// Logs:
// 1
```

### Deleting values from a Map

You can delete values from a `Map` using the `delete` method on a `Map` object.

```js
const myMap = new Map();

myMap.set("a", 1);

myMap.delete("a");
```

### Getting the number of items in a Map

You can get the number of items in a `Map` with the `size` method.

```js
const myMap = new Map();

myMap.set("a", 1);
myMap.set("b", 2);

console.log(myMap.size);
// Logs:
// 2
```

## Differences between a Map and a normal Object

A `Map` is like an object in that they both make use of key/value pairs. There are however some differences.

### Key types

A `Map`'s keys can be any value which includes function, objects and primitives. Object keys on the other hand must be either a String or a Symbol.

### Key order

The keys in a `Map` are ordered in the order in which they are added. The order of keys of an Object cannot be relied upon and you shouldn't ever rely on the order of keys in an Object.

### Converting to JSON

There isn't a built-in way to convert from a `Map` to JSON and vice versa.

You can however build functions that deal with this. More information regarding this can be found in [this StackOverflow thread](https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map).

<hr>

## Lesson task

`Map` is very seldomly used. It is essential to be aware of it as you might come across a good use case.

### Goal

The goal is for you to demonstrate that you can create and use a `Map` object.

### Brief

Complete the Level 1 Process.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Create a new `Map` object called `users`.

2. Add a key of `12` with the value of `{ firstName: "Ola", lastName: "Nordmann" }`.

3. Log the size of the `Map` to the console.

4. Add a key of `50` with the value of `{ firstName: "Kari", lastName: "Nordmann" }`.

5. Log the size of the `Map` to the console.

6. Delete the key `12` that was added in step 2 above.

7. Log the size of the `Map` to the console.

## Additional resources

[MDN Docs: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
