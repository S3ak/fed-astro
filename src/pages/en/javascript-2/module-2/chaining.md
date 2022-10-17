---
title: Chaining
keywords: sample
tags: JavaScript 2
sidebar: javascript-2
permalink: javascript-2/array-method-chaining.html
folder: javascript-2
---

## Introduction

One of the most powerful features of array methods is that they can be chained. This means that you can immediately have array methods being called on the result of other array methods. Combining the array methods allows you to perform very complex operations with very little effort, the limitations typically being your own imagination.

## Basic example

This is a basic example to illustrate chaining.

```js
const values = [0, 1, 2, 3, 4];

const result = values
  .filter(/* This filter first runs */)
  .reduce(/* This reduce acts on the result of the filter */)
  .map(/* This map acts on the result of the reduce above */);
```

## Practical examples

Let's have a look at more practical examples of chaining.

#### Practical example 1: Calculating discount for products in stock

In this example, we have a list of products that we want to apply a discount to for a sale, but only products where:

- the price is 5 or higher (`>= 5`)
- the products are in stock (`inStock === true`)

We then need to store this discounted amount so it can be displayed at a later stage.

We can do this in a two step process with chaining:

1. **filter** the products that are equal to or above 5 as well as being in stock
2. **map** out the filtered products while performing a calculation to get the discount and storing it as a value (`discountedPrice`).

**NOTE**: The formula for calculating the discounted price is:

`discount = price - (discount percentage / 100) * price`

```js
// The discount percentage being applied
const DISCOUNT_PERCENTAGE = 20;

const products = [
  { name: 'Milk', price: 5.0, inStock: true },
  { name: 'Cheese', price: 10.0, inStock: true },
  { name: 'Bread', price: 8.0, inStock: false },
  { name: 'Beans', price: 3.0, inStock: true },
  { name: 'Eggs', price: 12.0, inStock: true },
  { name: 'Rice', price: 4.0, inStock: false },
  { name: 'Meat', price: 25, inStock: true },
  { name: 'Coffee', price: 12.0, inStock: true },
  { name: 'Tea', price: 8.0, inStock: false },
  { name: 'Bottled Water', price: 4.0, inStock: false },
];

const discountedProducts = products
  .filter((product) => {
    if (product.inStock === true && product.price >= 5) {
      return true;
    }
  })
  .map((product) => {
    product.discountedPrice =
      product.price - (DISCOUNT_PERCENTAGE / 100) * product.price;
    return product;
  });

console.log(discountedProducts);
// Returns:
// {name: 'Milk', price: 5, inStock: true, discountedPrice: 4}
// {name: 'Cheese', price: 10, inStock: true, discountedPrice: 8}
// {name: 'Eggs', price: 12, inStock: true, discountedPrice: 9.6}
// {name: 'Meat', price: 25, inStock: true, discountedPrice: 20}
// {name: 'Coffee', price: 12, inStock: true, discountedPrice: 9.6}
```

#### Practical example 2

In this example, we have a list of students. We need to calculate the class average so that we can analyse data. Each student has their own results in an array (`results`) that must first be calculated as average before we can get the class average.

In addition to the above, the students that are getting analysed must fit these criteria:

- They must be 30 years of age or older (`>= 30`)
- They must be an online student (`isOnline === true`)

We can achieve the above with a `filter` and `reduce` chain while also having a nested `reduce`:

1. **filter**: We first `filter` out the students we need (`age >= 30` and `isOnline === true`), which returns an array of only the students we need.
2. **reduce**: We then `reduce` all of the student's averages so that we can have one class average.

   a. **reduce**: We need to get the average of a student before we can calculate the class average. We, therefore, have a nested `reduce` inside the main `reduce` that loops through all of the student's results to get an average.

#### Additional info regarding results average

Typically to get an average, you perform the following calculation:

`student average = sum of all results / total number of results`

In this example, we perform the calculation slightly differently:

`student average = (mark / total number of marks) + (mark / total number of marks) + ...`

We divide each result by the total number of results and then add this to a total, giving us the same end result. We do this so we don’t have to wait until all results have been totalled before calculating the average. We can instead calculate the average when each element loops, saving us a step at the end.

```js
const students = [
  { name: 'Victoria', age: 19, isOnline: true, results: [80, 61, 66, 50, 91] },
  { name: 'Theo', age: 32, isOnline: false, results: [57, 99, 96, 72, 96] },
  { name: 'Markus', age: 54, isOnline: true, results: [50, 92, 70, 66, 90] },
  { name: 'Aksel', age: 21, isOnline: true, results: [77, 86, 70, 71, 75] },
  { name: 'Felix', age: 29, isOnline: false, results: [99, 76, 59, 74, 68] },
  { name: 'Benjamin', age: 48, isOnline: true, results: [65, 85, 74, 83, 54] },
  { name: 'Ulrik', age: 39, isOnline: true, results: [92, 72, 55, 69, 58] },
  { name: 'Alma', age: 28, isOnline: false, results: [92, 91, 66, 77, 71] },
  { name: 'July', age: 37, isOnline: true, results: [78, 70, 59, 76, 95] },
  { name: 'Leo', age: 42, isOnline: true, results: [55, 64, 88, 88, 95] },
];

const result = students
  // Get only the students >= 30 and that are online
  .filter((student) => {
    if (student.age >= 30 && student.isOnline === true) {
      return true;
    }
  })
  // Reduce all of the student's averages to a class average
  .reduce((classAverage, student, index, studentsArray) => {
    // Reduce all of the student's results to a single average
    const studentsTotalMarks = student.results.reduce(
      (studentAverage, result, index, resultsArray) => {
        studentAverage += result / resultsArray.length;
        return studentAverage;
      },
      0,
    );
    // Add the average of the student to the class average
    classAverage += studentsTotalMarks / studentsArray.length;
    return classAverage;
  }, 0);

console.log(result);
// Returns:
// 73.72
```

## Additional resources

[GeeksforGeeks](https://www.geeksforgeeks.org/chaining-of-array-methods-in-javascript/)
