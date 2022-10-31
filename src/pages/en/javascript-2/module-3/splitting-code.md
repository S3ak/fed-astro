---
title: Splitting code
description: modules
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Modules allow us to split our code, so it is more manageable.

In this lesson, we will look at how we can split our code.

## Splitting out code

As mentioned previously, modules allow us to split our code easily. We can choose what code (such as functions and variables) we can export from a module.

This means we can create a "separation of concerns", which means that we have different modules for different parts of our application.

For example, if we had a game, we could have our player code in a `player.js` file, our enemy code in an `enemy.js` file and our main game in a `game.js` file.

This makes your code more manageable as your code is independent. Any changes to the `player.js` file will not have side-effects that impact your `enemy.js` file.

There are additional benefits to this. When you start using a bundler, such as Webpack, code-splitting lets you load only certain files that would be needed, allowing your website to load faster.

## Practical example

**NOTE:** The code for this practical example can be [found in the following repo](https://github.com/NoroffFEU/es6-modules-exercises).

In this example, we will emulate a part of a simple online shop. There is an item with a set price that will have tax added. It will be formatted, and the final amount will be displayed to the user.

Here is the list of files:

1. `index.mjs`: This is our main entry point file that will call the functions from the modules.

2. `tax.mjs`: This contains a function `calculateTax` which calculates the tax.

3. `utils.mjs`: This contains a function `formatCurrency` which will make our item look more presentable e.g. 115 becomes "115.00 kr".

4. `display.mjs`: This contains the function `displayAmount` which will display a message to the user about how much the item will cost after tax is applied.

**1. index.mjs**

```js
// 1. index.mjs

import { calculateTax } from "./tax.mjs";
import { formatCurrency } from "./utils.mjs";
import { displayAmount } from "./display.mjs";

// Our item initially costs 20
const price = 100;
const taxPercentage = 15;

// We need to add tax to our item.
const priceWithTax = calculateTax(price, taxPercentage);
// priceWithTax = 115

// We need to now format the item amount
// so it has 2 decimal spaces but also so
// it shows a currency symbol
const formattedPriceWithTax = formatCurrency(priceWithTax, "kr");
// formattedPriceWithTax = '115.00 kr'

// We finally display a message to the user:
displayAmount(formattedPriceWithTax);
// Logs:
// The item costs 115.00 kr.
```

**2. tax.mjs**

```js
// 2. tax.mjs

/**
 * Calculates the tax for a given amount. Tax
 * defaults to 15%.
 * @param {number} amount
 * @param {number} taxPercentage
 */
export function calculateTax(amount, taxPercentage = 15) {
  return amount + amount * (taxPercentage / 100);
}
```

**3. utils.mjs**

```js
// 3. utils.mjs

/**
 * Formats an amount to be a currency display amount e.g.
 * "500" becomes "500.00 kr"
 * @param {number} amount Currency amount
 * @param {string} currencySymbol The currency symbol
 * @returns
 */
export function formatCurrency(amount, currencySymbol = "kr") {
  const formattedAmount = amount.toFixed(2);
  return `${formattedAmount} ${currencySymbol}`;
}
```

**4. display.mjs**

```js
// 4. display.mjs

/**
 * Displays the cost of the item with tax applied to the user
 * @param {string} amount
 */
export function displayAmount(formattedAmount) {
  console.log(`The item costs ${formattedAmount}.`);
}
```

## Additional resources

[JavaScript Modules Part 2: Module Bundling](https://www.freecodecamp.org/news/javascript-modules-part-2-module-bundling-5020383cf306/)
