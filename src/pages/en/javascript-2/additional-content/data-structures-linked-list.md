---
title: Data Structures - Linked List
description: sample
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

A Linked List is a data structure. It contains contains nodes that are connected to each other, similar to train that has carriages connected.

Arrays offer similar functionality and you are better off using them in JavScript, however as a master of your craft, knowing about Linked Lists will help you in both interviews as well as the rare situation where you'd need to implement one.

## How it works

A linked list contains a head (start) node. Additional nodes are then connected one after each other. Each node contains information of the node that is connected to it.

We can insert a node at the start of the list, or the end of the list.

## Example

Below is an example of a Linked List implemented in JavaScript using classes.

```js
class Node {
  key;
  data;
  next;

  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head;

  constructor(head) {
    this.head = head;
  }

  display() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  getData() {
    let currentNode = this.head;
    let result = "";
    while (currentNode !== null) {
      result += currentNode.data + " ";
      currentNode = currentNode.next;
    }
    return result.trim();
  }

  insertFirst(key, data) {
    const newNode = new Node(key, data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertLast(key, data) {
    const newNode = new Node(key, data);

    let currentNode = this.head;
    let lastNode = this.head;
    while (currentNode !== null) {
      if (currentNode.next) {
        lastNode = currentNode.next;
      }
      currentNode = currentNode.next;
    }
    if (lastNode) {
      lastNode.next = newNode;
    }
  }

  reverse() {
    let previous = null;
    let current = this.head;
    let next;

    while (current != null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  length() {
    let length = 0;
    for (let current = this.head; current !== null; current = current.next) {
      length++;
    }
    return length;
  }

  find(key) {
    let current = this.head;

    // List is empty
    if (current === null) {
      return null;
    }

    while (current.key !== key) {
      // Check if the last node
      if (current.next === null) {
        return null;
        // Go to next element
      } else {
        current = current.next;
      }
    }
    return current;
  }

  delete(key) {
    let current = this.head;
    let previous = null;

    if (current === null) {
      return null;
    }

    while (current.key !== key) {
      if (current.next === null) {
        return null;
      } else {
        previous = current;
        current = current.next;
      }
    }

    // Match was found
    if (current === this.head) {
      this.head = this.head.next;
    } else {
      // Bypass the current element
      if (previous) {
        previous.next = current.next;
      }
    }

    return current;
  }
}

const node1 = new Node("a", 5);
const node2 = new Node("b", 10);
const node3 = new Node("c", 15);

node2.next = node3;
node1.next = node2;

const list = new LinkedList(node1);

list.display();
// Logs:
// 5
// 10
// 15
list.delete("b");
// Deletes 10 from the linked list
list.display();
// Logs:
// 5
// 15
```

## Lesson task

Knowing how to implement a Linked List is beneficial to your career as a developer. We are going to dive deeper into understanding how it works.

### Goal

You will work through the Linked List to get a better understanding of how it works.

### Brief

Complete the Level 1 process.

> <b>NOTE:</b> Lesson Tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Work through the Linked List code above. If you are unsure of the code at any point, `console.log` the values to get a better understanding of what is going on.

2. Once you have a good understanding of the Linked List, see if you can implement the very basics of one where you are simply linking Nodes.

## Additional Resources

[tutorialspoint: Data Structure and Algorithms - Linked List](https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm)

[Geeksforgeeks: Linked List Data Structure](https://www.geeksforgeeks.org/data-structures/linked-list/)

[Stack Overflow: Would you ever implement a linked list in Javascript?](https://stackoverflow.com/questions/30949981/would-you-ever-implement-a-linked-list-in-javascript#:~:text=There%20are%20reasons%20to%20use,keep%20track%20of%20their%20indexes.)
