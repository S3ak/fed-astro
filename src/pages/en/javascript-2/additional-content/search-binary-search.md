---
title: Search - Binary Search
description: sample
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Binary search is an efficient search technique that uses the "Divide and Conquer" approach. This works by halving the number of elements each time until you get to the correct value.

It has a time complexity of O(logN).

## How It Works

The principle is quite basic

1. Look at the middle element of the array.
2. If the number is lower than the middle element then discard all the higher numbers. If the number is higher than the middle element, then discard the lower numbers.
3. You can now repeat the above with the remainder of the numbers.

By repeating the above process you will eventually land up with the number you were looking for through a process of elimination.

**Note:** Your array of items needs to be sorted for this method to work.

The example below is a way we can implement binary search.

We will use a variable called `lowerBound` to keep track of our lowest element and `upperBound` to keep track of our highest element.

We have added a few `console.log`s so that you can understand what the binary search function is doing.

```js
function binarySearch(array, valueToFind) {
  let isValueFound = false;

  let lowerBound = 1;
  let upperBound = array.length;

  while (!isValueFound) {
    const midPoint = Math.floor(lowerBound + (upperBound - lowerBound) / 2);
    console.log("-----");
    console.log("lowerBound:", lowerBound, "upperBound:", upperBound);
    console.log("midPoint", midPoint);
    if (array[midPoint] < valueToFind) {
      lowerBound = midPoint + 1;
    }
    if (array[midPoint] > valueToFind) {
      upperBound = midPoint - 1;
    }

    if (array[midPoint] === valueToFind) {
      console.log("Found value:", valueToFind);
      return midPoint;
    }
  }
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Binary search", binarySearch(arr, 9));
// -----
// lowerBound: 1 upperBound: 10
// midPoint 5
// -----
// lowerBound: 6 upperBound: 10
// midPoint 8
// -----
// lowerBound: 9 upperBound: 10
// midPoint 9
// Found value: 9
```

## Lesson task

Binary search is a fairly simple principle which you should be able to reproduce once you gain an understanding of it.

### Goal

To be able to do a Binary Search.

### Brief

1. Complete the Level 1 Process below.

> <b>NOTE:</b> Lesson Tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

## Additional Resources:

[Khan Academy: Binary search](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)

[GeeksforGeeks: Binary Search in JavaScript](https://www.geeksforgeeks.org/binary-search-in-javascript/)
