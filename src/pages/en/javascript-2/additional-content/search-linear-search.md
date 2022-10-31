---
title: Search - Linear Search
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Linear search is the most basic of searches. It starts at the beginning and then works through all of the items to find the value you are looking for.

## Example:

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

## Lesson task

Linear searching is the most basic ways of searching and you've likely already used this algorithm before.

### Goal

To be able to write a linear search algorithm.

### Brief

> <b>NOTE:</b> Lesson Tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Read through the algorithm in the example above, trying to understand exactly what the code is doing.

2. Recreate the example on your own.

## Additional Resources

[GeekforGeeks: Linear Search Algorithm](https://www.geeksforgeeks.org/linear-search/)
