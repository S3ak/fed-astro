---
title: Graphs - Breadth First Search
description: sample
tags: JavaScript 2
sidebar: javascript-2
---

# Graphs: Breadth First Search

## Introduction

Breadth First Search (or Traversal) is a way to search for a node that contains a specified value.

## Code Example

Below is an implementation of Breadth First Search in JavaScript.

```js
function breadthFirst(target, graph) {
  const queue = ["you"];
  const searched = [];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      if (!searched.includes(node)) {
        if (node === target) {
          return true;
        } else {
          graph[node].forEach((newNode) => {
            queue.push(newNode);
          });
          searched.push(node);
        }
      }
    }
  }
  return false;
}

const nameGraph = {};
nameGraph["you"] = ["alice", "bob", "claire"];
nameGraph["bob"] = ["anuj", "peggy"];
nameGraph["alice"] = ["peggy"];
nameGraph["claire"] = ["thom", "jonny"];
nameGraph["anuj"] = [];
nameGraph["peggy"] = [];
nameGraph["thom"] = [];
nameGraph["jonny"] = [];

console.log(breadthFirst("claire", nameGraph));
```

## Additional Resources:

[GeeksforGeeks](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)
