---
title: Set
description: sample
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

A `Set` object stores unique values of any type. A value can only ever occur once in a `Set` and is therefore unique in a `Set`. You can also iterate through a `Set` in the order in which items were successfully added.

## Creating a new Set object

You create a new `Set` object with `new Set()`.

```js
const mySet = new Set();
```

## Adding a value to a set

You can add a value to a set with the `add` method.

```js
const mySet = new Set();

mySet.add("a");
// mySet is now ['a']
mySet.add("1");
// mySet is now ['a', 1]
```

## Check if a value exists

You can check if a value exists in a `Set` with the `has` method.

```js
const mySet = new Set();

mySet.add("a");
// mySet is now ['a']

mySet.has("a");
// Returns true because 'a' is in the set

mySet.has("b");
// Returns false because 'b' is not in the set
```

## Delete an item from a set

You can delete an item from a set with the `delete` method.

```js
const mySet = new Set();

mySet.add("a");
// mySet is now ['a']

mySet.delete("a");
// 'a' is now deleted from the set
```

## Getting the number of items in a set

You can get the number of items in a set with the `size` method.

```js
mySet.add("a");
mySet.add("b");
// mySet is now ['a', 'b']

console.log(mySet.size);
// Logs:
// 2
```

<hr>

## Lesson task

Being aware of a `Set` can be greatly advantageous to your career when the rare need arises that you need to make use of a `Set`.

### Goal

To be able to make use of a `Set`.

### Brief

Complete the Level 1 Process.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Create a new set called `values`.

2. Try adding the following values: `1`, `2`, `2`, `2`, `3`, `4`.

3. Check the length of the set.

4. Check that the set has the value of `1`.

5. Check that the set has the value of `a`.

## Additional resources

[MDN Docs: Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
