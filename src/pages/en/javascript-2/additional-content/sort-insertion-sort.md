---
title: Sort - Insertion Sort
description: sample
tags: JavaScript 2
sidebar: javascript-2
---

## Introduction:

Insertion sort is another simple algorithm.

## How It Works:

Insertion sort works similar to how you would sort a set of playing cards in your hand. When an element is not in the correct place, it is swapped until it is in the correct position.

## Example:

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([4, 1, 0, 51, 23, 10, 9, 15]));
```

## Lesson task:

Insertion sort is fairly simple once you have taken the time to understand how it works.

### Goal

For you to be able to write an Insertion sort on your own.

### Brief

Complete the Level 1 Process.

> <b>NOTE:</b> Lesson Tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Read through and run the example code, console logging where you'd like to get a better understanding.

2. Once you have a good understanding, try recreate the Insertion sort on your own.

## Additional Resources:

[GeeksforGeeks](https://www.geeksforgeeks.org/insertion-sort/)
