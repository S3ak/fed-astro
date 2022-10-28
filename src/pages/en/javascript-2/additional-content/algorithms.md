---
title: Algorithms
description: sample
tags: JavaScript 2
sidebar: javascript-2
---

## Introduction:

Algorithms are a set of instructions for solving a problem or accomplishing a task.

Imagine there was a recipe for baking a cake. You would have certain steps to follow and need to follow them in a certain order. If you follow these instructions exactly like they are given to you then you would always end up with the same result.

A similar example is directions to get from point A to point B. If you were to follow every direction exactly you would always end up in the same position.

Algorithms are similar to the examples above in that we can always expect the same result from our algorithm.

## A Basic Example:

Below is a basic example of a Linear Search algorithm.

In this algorithm we pass in an array of values and then a value we are looking for. If it finds the value we want, it will return the index of that value. If it doesn't, it will return -1.

```js
function linearSearch(list, value) {
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === value) {
      return i;
    }
  }
  return -1;
}
```

## Pseudocode:

Pseudocode is a way for us to write out code without following any formal syntax. It's like a blueprint of what we want to achieve written in an way that is easy to understand.

Writing pseudocode is an excellent way to figure out a problem and a great way to write out an algorithm before you begin coding. You can use it to solve the problem before you even begin coding.

Consider the Linear Search example written in JavaScript above. This could have been written in Pseudocode as follows:

```
Loop through array items
  If item is found
    Return the index
  Return not found (-1)
```

You now have a starting point with the above and can start coding out your algorithm.

## Additional Resources:

[GeeksforGeeks: How to Write a Pseudo Code?](https://www.geeksforgeeks.org/how-to-write-a-pseudo-code/)
