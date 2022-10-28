---
title: Module pattern
description: sample
tags: JavaScript 2
sidebar: javascript-2
---

## Introduction

The module pattern is similar to the object literal, and it makes use of the IIFE pattern.

The module pattern has an added benefit which is to emulate encapsulation through the use of public and private variables and methods. JavaScript does not have a true replicate of private variables and methods; however, we can emulate this with a module pattern.

Public variables and methods are accessible outside of the module that you create. Private variables and methods, on the other hand, are not exposed outside of this module pattern and can't be accessed directly. Developers would use the public variables and methods to indirectly access and change the private variables and methods, typically through the use of private methods called "getters" and "setters".

The reason for creating such an interface to our module pattern is so we can control what a developer can and cannot have access to.

## Example

In this example, we take a look at how you would implement private and public variables and methods.

```js
const modulePatternExample = (function () {
  /* Private variables and methods */

  // Private variable
  const _privateVariable = "Private";

  const _privateMethod = function () {
    console.log("Private method");
  };

  /* Public variables and methods */
  // These variables and methods added to the 'return'  so they can be accessed

  // Public variable
  const publicVariable = "Public";

  // Public method
  const publicMethod = function () {
    console.log("Public method");
  };

  // Return the public variables and functions so they can be accessed
  return {
    publicVariable,
    publicMethod,
  };
})();

modulePatternExample.publicMethod();
console.log(modulePatternExample.publicVariable);
```

## Practical example

Let's have a look at a more practical example. In this example we create a shopping.

There is an array `_cart` which is not exposed outside of the module pattern, therefore it cannot be accessed directly by developers. They would instead need to use the `addToCart()` method to add items to this `_cart` array.

```js
const shoppingCart = (function () {
  const _cart = [];

  function addToCart(item) {
    _cart.push(item);
  }

  function getCartItems() {
    // Return a new array
    return [..._cart];
  }

  return {
    addToCart,
    getCartItems,
  };
})();

shoppingCart.addToCart({ name: "Milk", price: 19.99 });
console.log(shoppingCart.getCartItems());
// Returns:
// [{name: 'Milk', price: 19.99}]
```

## Additional resources

[Patterns.dev: Module Pattern JavaScript](https://www.patterns.dev/posts/classic-design-patterns/#modulepatternjavascript)

[Cory Rylan: JavaScript Module Pattern ](https://coryrylan.com/blog/javascript-module-pattern-basics)
