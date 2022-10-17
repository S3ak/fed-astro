---
title: Factory functions
keywords: sample
tags: JavaScript 2
sidebar: javascript-2
permalink: javascript-2/factory-function.html
folder: javascript-2
---

## Introduction

Consider the following object. What if youwanted to have multiple people using the exact same shape as below? You'd have to copy all of that code, and if you ever wanted to make a change such as change the `greet` function, then you'd have to make that same change across all of your objects.

```js
const person = {
  firstName: 'Ola',
  lastName: 'Nordmann',
  address: {
    country: 'Norway',
    city: 'Oslo',
  },
  greet: function () {
    console.log('Hello world!');
  },
};
```

We can instead create a `factory function`.

```js
function createPerson(firstName, lastName, country, city) {
  return {
    firstName: firstName,
    lastName: lastName,
    address: {
      country: country,
      city: city,
    },
    greet: function () {
      console.log(`Hello, I am ${this.firstName} ${this.lastName}.`);
    },
  };
}

const ola = createPerson('Ola', 'Nordmann', 'Norway', 'Oslo');
ola.greet();
```

## Use cases

Factory functions are very useful and can be frequently used depending on the codebase.

A common use case for Factory Functions is for Jest testing, where you use a Factory Function to generate a common object that is used throughout your tests.

This allows one to modify the shape easily if something such as the API ever changes its data shape.

## Lesson task

You are going to practise creating your own factory function.

### Goal

To be able to create a factory function.

### Brief

Complete the Level 1 process.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Create a factory function called `createAnimal`.

2. It should have the following properties:

   2.1 `name` string, which is the name of the animal e.g. `Jasper`, `Marley`, `Pookie` etc.
   2.2 `type` string, which is the animal type .e.g. `dog`, `cat` etc.
   2.3 `food` string, which is the food the animal eats e.g. `dog food`, `kibble`, `fish food` etc.

3. It should have the method `eat`. This method should use the `name`, `type` and `food` property to console.log what the name of the animal is eating e.g.

```js
// If we pass in 'Jasper' and 'dog food', we should console.log the following:
// Jasper is a dog and eats dog food.

// If we pass in 'Pookie' and 'cat food', we should console.log the following:
// Pookie is a cat and eats cat food.
```

4. You should then be able to create an animal from this `createAnimal` factory function using the following line of code:

```js
const myAnimal = createAnimal('dog', 'mammal', 'Jasper', 'dog food');

myAnimal.eat();
// Logs:
// Jasper is a dog and eats dog food.
```

## Additional resources

[Patterns.dev: Factory Pattern](https://www.patterns.dev/posts/factory-pattern/)

[SessionStack: How JavaScript works: the factory design pattern + 4 use cases](https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d)
