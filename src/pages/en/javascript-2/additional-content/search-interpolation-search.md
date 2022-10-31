---
title: Search - Interpolation Search
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction:

Interpolation search is faster than binary searching but more complex. It works by using data points based on the vale being searched.

## Example:

```js
// Array must be sorted
function interpolationSearch(array: any[], valueToFind: any) {
  let low = 0;
  let mid = -1;
  let high = array.length - 1;

  let matchFound = false;

  while (!matchFound) {
    if (low === high || array[low] === array[high]) {
      return -1;
    }
    mid = Math.floor(
      low +
        ((high - low) / (array[high] / array[low])) * (valueToFind - array[low])
    );
    if (array[mid] === valueToFind) {
      return mid;
    } else {
      if (array[mid] < valueToFind) {
        low = mid + 1;
      } else if (array[mid] > valueToFind) {
        high = mid - 1;
      }
    }
  }
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("interpolation search", interpolationSearch(arr, 4));
```

## Lesson task

This lesson task is to understand how the interpolation search works.

### Goal

To understand how interpolation search works.

### Brief

Complete the Level 1 Process

> <b>NOTE:</b> Lesson Tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Work through the code example above, trying to understand what each line is doing. If you don't understand then console.log the values.

2. Once you know how interpolation search works, try and create the algorithm yourself.

## Additional Resources:

[GeeksforGeeks: Interpolation search](https://www.geeksforgeeks.org/interpolation-search/)
