---
title: Sort - Selection Sort
description: sample
tags: JavaScript 2
sidebar: javascript-2
---

## Introduction:

The Selection sort is another easy algorithm for you to learn about.

## How It Works:

The Selection Sort algorithm works by finding the smallest element and switching it with the element that was in its position.

## Example:

```js
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([10, 2, 6, 3, 1, 20, 5]));
```

## Lesson task

### Goal

For you to be able to write a Selection sort on your own.

### Brief

Complete the Level 1 Process.

> <b>NOTE:</b> Lesson Tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Read through and run the example code, console logging where you'd like to get a better understanding.

2. Once you have a good understanding, try recreate the Selection sort on your own.

## Additional Resources:

[GeeksforGeeks: Selection Sort Algorithm](https://www.geeksforgeeks.org/selection-sort/)
