---
title: Sort - Bubble Sort
description: sample
tags: JavaScript 2
sidebar: javascript-2
---

## Introduction:

Bubble sort is the simplest searching algorithm.

## How it works:

It works by looping through all of the elements. If an element on the right is smaller than the element on the left then it switches these around.

When an element is switched around, a flag is set to indicate that switching has taken place.

When it finally loops through all of the elements without the flag being set then it knows it's done. This is because all of the elements are now in order and nothing needed to be switched.

## Example:

```js
function bubbleSort(input) {
  let array = [...input];

  for (let i = 0; i < array.length; i++) {
    let hasSwapped = false;

    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        hasSwapped = true;
      }
    }
    if (!hasSwapped) {
      return array;
    }
  }
  return array;
}
```

## Lesson task:

This is a basic algorithm that you should be able to write on your own once you get an understanding of it.

### Goal

To be able to create your own Bubble Sort.

### Brief

Complete the Level 1 Process.

> <b>NOTE:</b> Lesson Tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Read through the algorithm and try to understand it. Use `console.log` to log out values to get a better understanding.

2. Once you're ready, try and recreate the algorithm yourself without looking at the example above.

## Additional Resources:

[GeeksforGeeks: Bubble Sort](https://www.geeksforgeeks.org/bubble-sort/)
