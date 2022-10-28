---
title: Variables - strings, numbers and booleans
description: sample
tags: Programming Foundations
---

Variables are how a programming language stores information in a computer's memory. We can think of them as containers for data and once stored there, we can act on and use this data in other parts of our program.

##### Variables sitting in the computer's RAM - Random Access Memory

<img src="/images/programming-foundations/variable-containers.png" alt="variable containers" style="max-width: 379px; margin-top: -10px" />

We are going to look at these types of data that JavaScript variables can store:

- `undefined`
- `string`
- `number`
- `boolean`

## Declaring variables

Before we can use variables, we need to`declare` (create) them.

Variables are declared with the `var` keyword. (We will use the `const` and `let` variables to declare variables in a later course.)

```js
var pet;
```

Above we've created a variable called `pet`. We haven't given `pet` a value, so it is empty or `undefined`. If you console log `pet` it will return a value of `undefined`.

Giving a variable a value when you declare it is called `initialising` the variable.

---

The video below is an introduction to variables.

<iframe src="https://player.vimeo.com/video/489815427" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/489815427/af5a3f023c" target="_blank">Watch on Vimeo</a>

---

## `undefined` vs the `is not defined` error

This video looks at the difference between the (valid) value `undefined` and the error `is not defined`.

<iframe src="https://player.vimeo.com/video/489861232" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/489861232/a680be6f3c" target="_blank">Watch on Vimeo</a>

---

## Strings

Strings are pieces of text. They can range in size from one character like `a` to a whole book of characters.

They're enclosed in either single `'` or double `"` quotes. At Noroff we use double quotes for our string variables.

Let's create our first string variable.

Variable names must start with a lower case letter (`a` to `z`), an upper case letter (`A` to `Z`), a dollar sign `$` or underscore `_`. We are only going to use lowercase letters to begin our variable names.

To declare a variable we use `var`, a name of our choice and a value if we are initialising it.

```js
var pet = "dog";
```

We've initialised the variable `pet` with the string value "dog". We can say we've `assigned` the value "dog" to `pet`, and now `pet` contains the value "dog".

We can now use that variable in our code:

```js
console.log(pet);
```

We use `camelCase` to name variables.

Using this method, the first word of a variable name starts with a lower case letter and subsequent words are joined to the first and begin with an upper case letter:

```js
var loggedIn;
var orderHasShipped;
var lastName;
```

Variables names cannot include spaces.

---

### Joining strings together

We can join strings together using the `+` sign. This is called `concatenation`.

```js
var letters = "a" + "b";

console.log(letters);
// "ab"
```

Let's assign those string values to variables and then join them:

```js
var letter1 = "a";
var letter2 = "b";

var letters = letter1 + letter2;

console.log(letters);
// "ab"
```

---

Anything inside quotes is a string, even numbers. The variable `amount` below has a string value.

```js
var amount = "7";
```

In this video we take a look at `string` variables.

<iframe src="https://player.vimeo.com/video/489970889" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/489970889/1b27bd47e0" target="_blank">Watch on Vimeo</a>

---

## Selecting HTML elements with JavaScript

Before we look at adding string variables to an HTML page, we need to look at how we can select and modify HTML elements using JavaScript's `document.querySelector` function.

<iframe src="https://player.vimeo.com/video/490143019" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/490143019/c5399cdcb3" target="_blank">Watch on Vimeo</a>

---

## Adding string variables to an HTML page

In this video we will add string variables to HTML elements.

<iframe src="https://player.vimeo.com/video/490167805" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/490167805/317016af51" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/adding-string-variables-to-html" target="_blank">Code from the video</a>

---

## Numbers

Numbers in JavaScript can be both integers (whole numbers) and decimals.

```js
var integer = 8;
var decimal = 7.1;
```

### Basic arithmetic operators

We can use the following operators with numbers in JavaScript.

<table>
    <thead>
        <th>Operator</th>
        <th style="text-align: center">Name</th>
        <th>Example</th>
    </thead>
    <tr>
        <td>+</td>
        <td>addition</td>
        <td>3 + 2</td>
    </tr>
    <tr>
        <td>-</td>
        <td>subtraction</td>
        <td>7 - 1</td>
    </tr>
    <tr>
        <td>*</td>
        <td>multiplication</td>
        <td>6 * 4</td>
    </tr>
    <tr>
        <td>/</td>
        <td>division</td>
        <td>9 / 3</td>
    </tr>
    <tr>
        <td>%</td>
        <td>remainder</td>
        <td>5 % 2</td>
    </tr>
</table>

If you try to add a number value to a string version of a number like this:

```js
7 + "7";
```

you will end up with `77` not `14`.

This is because when one of the values is a string value, the `+` operator joins both values together as if they were both strings. It doesn't add them together as it would if all values were number values.

You can convert a string version of a number to a proper number using the `parseInt` and `parseFloat` functions.

To convert a number without a decimal point use parseInt.

```js
var integer = "7";
var convertedInteger = parseInt(integer);
// 7
```

To convert a number with a decimal point use parseFloat.

```js
var decimalNumber = "7.9";
var convertedDecimalNumber = parseFloat(decimalNumber);
// 7
```

---

The remainder operator (sometimes called the modulus operator) returns the remainder of a division operation:

```js
var remainder = 5 % 2;
console.log(remainder);
// 1

var remainder2 = 4 % 2;
console.log(remainder2);
// 0
```

This video looks at `number` variables.

<iframe src="https://player.vimeo.com/video/490212936" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/490212936/d103dd7e13" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/number-variables" target="_blank">Code from the video</a>

<!-- ###### Create a variable called `multiply` and initialise it with a value of 7 times 3
~~parser js numbers multiplyNumbers~~ -->

## Booleans

Boolean values are either `true` or `false`.

```js
var isLoggedIn = true;
var onSpecial = false;
```

---

Note that **_there are no quotes around boolean values_**.

The variable `badBoolean` below has a `string` value, so it's not a boolean.

```js
var badBoolean = "true";
```

The variable `properBoolean` below has a boolean value.

```js
var properBoolean = true;
```

---

<!-- ###### Create a variable called `lightIsOn` and initialise it with a value of false
~~parser js booleans firstBoolean~~

We can produce boolean variables using `comparison operators`, which we'll look at in the next lesson. -->

<a id="typeof"></a>

## Checking data types

We can use the `typeof` operator to check what type of data a variable holds. We can use it with or without brackets.

```js
var colour = "red";

typeof colour;
// "string"

typeof "blue";
// "string"

typeof 14;
// "number"

typeof false;
// "boolean"
```

We can assign the result of a `typeof` operation to a variable.

```js
var animal = "elephant";
var typeOfAnimal = typeof animal;
console.log(typeOfAnimal);
// string
```

The video below is an introduction to the `typeof` operator.

<iframe src="https://player.vimeo.com/video/489917338" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/489917338/d464da8262" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/typeof-operator" target="_blank">Code from the video</a>

<!-- ###### Write code that checks the type of the value: 23
~~parser js variables typeofNumber~~ -->

<hr>

## Lesson Task

There are practice questions in the master branch of <a href="https://github.com/NoroffFEU/lesson-task-pf-module1-lesson2" target="_blank">this repo</a>.

There are example answers in the <a href="https://github.com/NoroffFEU/lesson-task-pf-module1-lesson2/tree/answers" target="_blank">answers branch</a>.

Try the exercises before checking the solutions.
