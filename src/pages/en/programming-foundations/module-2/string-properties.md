---
title: String properties and methods, multiple if conditions and nested if statements
description: sample
tags: Programming Foundations
---

## String properties and methods

Previously we used `length` to determine the number of characters in a string variable:

```js
var firstName = "Humphrey";
var lengthOfName = firstName.length;
console.log(lengthOfName);
// 8
```

`length` is a `property` of `firstName` because `firstName` has a string value.

String values in JavaScript have both `properties` and `methods`. They are both called in a similar way, by using a `.` after the variable and then the name of the property or method, but methods are called using parenthesis (brackets) after their name.

Some string methods include `toLowerCase()` and `toUpperCase()`.

`toLowerCase()` converts a string variable to all lower case letters.

`toUpperCase()` converts a string variable to all upper case letters.

```js
var firstName = "Humphrey";

var lower = firstName.toLowerCase();
console.log(lower);
// humphrey

var lower = firstName.toUpperCase();
console.log(lower);
// HUMPHREY
```

<iframe src="https://player.vimeo.com/video/493026234" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/493026234/72f2c56cda" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/string-properties-and-methods/blob/master/script.js" target="_blank">Code from the video</a>

---

<a href="#lettercase"></a>

## Letter case matters in JavaScript

JavaScript considers lower case and upper case versions of the same letter to be completely different.

`H` is not equal to `h`.

```js
if ("H" === "h") {
  console.log("The letters are equal");
} else {
  console.log("The letters are not equal");
}
```

or using the inequality operator (not equals operator):

```js
if ("H" !== "h") {
  console.log("The letters are not equal");
} else {
  console.log("The letters are equal");
}
```

So it follows that longer strings that have the same letters but different cases are not equal either.

```js
if ("Harry" === "harry") {
  console.log("The names match");
} else {
  console.log("The names do not match");
}
```

This video looks at using the `toLowerCase()` method to eliminate differences in case between strings.

<iframe src="https://player.vimeo.com/video/495527292" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/495527292/6289051ab6" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/letter-case/blob/master/script.js" target="_blank">Code from the video</a>

<!-- ## Multiple conditions in an if statement -->

## The logical AND (&&) operator

To check if more than one condition is true in an if statement, we can use the `&&` operator.

There is no `and` keyword in JavaScript so we use `&&`. This is called the logical AND operator.

The code below will check if two conditions are true, that the `selectedNumber` variable is both above or equal to 10 and below or equal to 50.

```js
var selectedNumber = 30;

if (selectedNumber >= 10 && selectedNumber <= 50) {
  console.log("The selected number is within range");
}
```

<iframe src="https://player.vimeo.com/video/495602928" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/495602928/502a79a28c" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/logical-AND-operator/blob/main/script.js" target="_blank">Code from the video</a>

## Nested if statements

The video above contained if statements inside an else block. These are called nested if statements.

We can use nested if statements to check for more specific conditions.

```js
if (someCondition === true && someOtherCondition === true) {
  if (someCondition === true) {
    // do something
  }

  if (someOtherCondition === true) {
    // do something
  }
}
```

The video below is another look at an if statement with multiple (three this time) conditions using the `&&` operator. The else block in the code from video again contains nested if statements.

<iframe src="https://player.vimeo.com/video/495808004" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/495808004/05ce4b9858" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/logical-AND-operator/blob/main/script2.js" target="_blank">Code from the video</a>

## The logical NOT (!) operator

The `!` operator can be used to check for the opposite of a boolean value.

```js
var orderShipped = false;

if (!orderShipped) {
  // the order did not ship
}
```

This is the equivalent of writing:

```js
if (orderShipped === false) {
  // the order did not ship
}
```

or

```js
if (orderShipped !== true) {
  // the order did not ship
}
```

## Logical OR (||) operator

We've used the `&&` operator to check if multiple conditions are true in an if statement. When using this operator all the conditions must pass.

We can use the `||` operator to check if only one condition passes - only one condition needs to be met.

```js
var dayOfTheWeek = "Saturday";

if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
  console.log("It's the weekend");
}
```

In the code above and in the video only one of the conditions needs to be met in order for the code inside the if block to execute.

<iframe src="https://player.vimeo.com/video/495863328" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/495863328/51f5ec0294" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/logical-OR-operator/blob/master/script.js" target="_blank">Code from the video</a>

---

<hr>

## Lesson Task

There are practice questions in the master branch of <a href="https://github.com/NoroffFEU/lesson-task-pf-module2-lesson1" target="_blank">this repo</a>.

There are example answers in the <a href="https://github.com/NoroffFEU/lesson-task-pf-module2-lesson1/tree/answers" target="_blank">answers branch</a>.

Try the exercises before checking the solutions.
