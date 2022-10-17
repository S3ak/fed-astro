---
title: Singleton pattern
keywords: sample
tags: JavaScript 2
sidebar: javascript-2
permalink: javascript-2/singleton-pattern.html
folder: javascript-2
---

## Introduction

The Singleton pattern allows us to create a unique object that is only created once. It ensures we won't have duplicate objects and only one object to work with, which can be less error-prone in the right circumstances.

## How it works

The principle behind the Singleton pattern is quite basic:

1. A person requests an object.
2. If this object doesn't exist, we create a new object, store it and then return it.
3. If this object does exist, we return it.

## Example

Let's now take a look at creating a Singleton pattern:

```js
const Singleton = (function () {
  // This is our main instance data
  let instance;

  // This creates a new instance
  function createInstance() {
    const object = { message: 'Hello world' };
    return object;
  }

  return {
    // We return our instance, but we first check if it
    // doesn't exist. If it doesn't exist, we create a new
    // one before we return
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1);
// Logs: {message: 'Hello world'}
console.log(instance2);
// Logs: {message: 'Hello world'}
console.log('Is the same object:', instance1 === instance2);
// Logs: Is the same object: true
```

## Additional resources

[Patterns.dev: Singleton pattern](https://www.patterns.dev/posts/classic-design-patterns/#singletonpatternjavascript)

[DoFactory: JavaScript Singleton](https://www.dofactory.com/javascript/design-patterns/singleton)
