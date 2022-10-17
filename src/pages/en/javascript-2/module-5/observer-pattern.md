---
title: Observer pattern
keywords: sample
tags: JavaScript 2
sidebar: javascript-2
permalink: javascript-2/observer-pattern.html
folder: javascript-2
---

## Introduction

The Observer pattern is an OOP (Object-Oriented Programming) pattern.

It works by having one object be notified when another object changes.

Typically this pattern is used with a main subject that has dependent objects "listening" to the main subject. When the main subject acts, any of the dependent objects automatically react to this. The main subject has no knowledge of the objects attached; it only has to be concerned with doing its actions.

## How it works

There are three main components to the observer pattern:

1. The Subject: Maintains a list of observers and manages adding/removing of observers
2. The Observer: An interface for interacting with the objects
3. The Objects: These are objects that have been linked to the observer

The subject is the main controller and maintains the observer. The observer acts like a list of objects that will react when the subject acts.

Objects can subscribe or unsubscribe to the subject which would add and remove them to the observer list.

One of the benefits of this pattern is decoupling. The subject does not have knowledge of its dependents, being the objects added to the observer.

## Example

We are going to now look at how you can create the Observer pattern in JavaScript:

```js
function Subject() {
  // This will contain our objects that are subscribed to
  // our subject
  this.observers = [];
}

Subject.prototype = {
  // This "subscribe" function adds objects to our
  // observer
  subscribe: function (functionToAdd) {
    this.observers.push(functionToAdd);
  },
  // This "unsubscribe" function removes objects to our
  // observer
  unsubscribe: function (functionToRemove) {
    this.observers = this.observers((currentFunction) => {
      if (currentFunction != functionToRemove) {
        return currentFunction;
      }
    });
  },
  // This "fire" function calls for all of our subscribed
  // objects to act
  fire: function () {
    this.observers.forEach((currentFunction) => {
      currentFunction.call();
    });
  },
};

// This example function will get added to the
// Subject
function ExampleFunction1() {
  console.log('Example function 1');
}

// This example function will also get added to the
// Subject
function ExampleFunction2() {
  console.log('Example function 2');
}

// Creating a new subject which we will add our
// example functions to
const subject = new Subject();

// Adding both of our example functions to our subject
subject.subscribe(ExampleFunction1);
subject.subscribe(ExampleFunction2);

// Firing our subject with a single function which
// will then cause both of our subscribed functions to
// react
subject.fire();
// Logs:
// Example function 1
// Example function 2
```

## The example as a class

The above example can be converted to a class:

```js
class Subject {
  constructor() {
    // This will contain our objects that are subscribed to
    // our subject
    this.observers = [];
  }
  // This "subscribe" function adds objects to our
  // observer
  subscribe(functionToAdd) {
    this.observers.push(functionToAdd);
  }
  // This "unsubscribe" function removes objects to our
  // observer
  unsubscribe(functionToRemove) {
    this.observers = this.observers((currentFunction) => {
      if (currentFunction != functionToRemove) {
        return currentFunction;
      }
    });
  }
  // This "fire" function calls for all of our subscribed
  // objects to act
  fire() {
    this.observers.forEach((currentFunction) => {
      currentFunction.call();
    });
  }
}
```

## Additional resources

[Patterns.dev: The Observer Pattern](https://www.patterns.dev/posts/classic-design-patterns/#observerpatternjavascript)

[DoFactory: JavaScript Observer](https://www.dofactory.com/javascript/design-patterns/observer)

[DottedSquirrel: Understanding JavaScript Observer Patterns](https://www.dottedsquirrel.com/observer-pattern-javascript/)
