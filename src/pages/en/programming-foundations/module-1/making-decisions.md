---
title: Making Decisions
keywords: sample
tags: Programming Foundations
sidebar: prog-found
permalink: programming-foundations/making-decisions.html
folder: programming-foundations
---

## Comparison operators

Comparison operators compare their operands (the values on either side of the operator) and return a boolean value.

<img src="/images/programming-foundations/operator.png" alt="variable types" style="max-width: 316px"/>

---

### List of operators

<table>
    <thead>
        <th>Operator</th>
        <th>Description</th>
        <th>Example</th>
        <th>Result</th>
    </thead>
    <tr>
        <td>===</td>
        <td>equal to</td>
        <td>3 === 2</td>
        <td>false</td>
    </tr>
    <tr>
        <td>!==</td>
        <td>not equal to</td>
        <td>3 !== 2</td>
        <td>true</td>
    </tr>
    <tr>
        <td>></td>
        <td>greater than</td>
        <td>6 > 4</td>
        <td>true</td>
    </tr>
    <tr>
        <td>>=</td>
        <td>greater than or equal to</td>
        <td>5 >= 4</td>
        <td>true</td>
    </tr>
    <tr>
        <td><</td>
        <td>less than</td>
        <td>5 < 4</td>
        <td>false</td>
    </tr>
    <tr>
        <td><=</td>
        <td>less than or equal to</td>
        <td>3 <= 4</td>
        <td>true</td>
    </tr>
</table>

<!-- | Operator      | Description               | Example  | Result
| ------------- |:----------------------:   | :-----:  |  :---:
| `===`           | equal to                  | 3 `===` 2  |  false
| `!==`           | not equal to              | 3 `!==` 2  |  true
| `>`             | greater than              | 6 `>` 4    |  true
| `>=`            | greater than or equal to  | 5 `>=` 5   |  true
| `<`             | less than                 | 5 `>` 4    |  false
| `<=`            | less than or equal to     | 3 `>` 4    |  true -->

---

```js
var myNumber = 7;
var myString = "dog";

// is myNumber greater than 8?
(myNumber > 8)(
  // false

  // is myNumber less than or equal to 7?
  myNumber <= 8
)(
  // true

  // is myString exactly equal to "dog">
  myString === "dog"
)(
  // true

  // is myString not equal to "cat">
  myString !== "cat"
);
// true
```

These operators are commonly used with conditional statements (covered below) to make a code decision depending on the value of a variable.

## == and != vs === and !==

You may see the `==` and `!=` operators. These are similar to `===` and `!==`.

The `===` operator checks that both the values and type of the variables being compared are equal, whereas `==` only checks that the value and not the type are equal.

Using `===` the following returns false and one value is a number value and one is a string value.

```js
7 === "7";
// false
```

Making the same comparison with `==` returns true, as the differences in type is ignored.

```js
7 == "7";
// true
```

> Always === and !==. To avoid bugs and odd behaviour it's important to check the type of the variable as well as the value.

## Conditional statements

### if...else

When we need to make decisions in our code, we use `conditional statements`.

We check if a certain condition is true using a comparison operator, and if it is, we run a block of code.

If it is false, we run different code.

![Conditional statement](../images/programming-foundations/conditional-statement.png)

To carry out the above, we use `if...else statements.`

`if` a certain condition is true, run this code. `else`, run this other code.

![if statement](../images/programming-foundations/if-statement.png)

<a id="if-else-example"></a> Perhaps you need to check whether a user is logged in:

```js
var isLoggedIn = true;

if (isLoggedIn === true) {
  console.log("The user is logged in");
} else {
  console.log("The user is logged out");
}
```

Or whether a user has entered valid data into an input field in a form:

```js
var inputIsValid = false;

if (inputIsValid === false) {
  // show error message
} else {
  // hide error message
}
```

The video below examines if statements.

<iframe src="https://player.vimeo.com/video/490374916" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/490374916/7525452c5d" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/if-statements/blob/master/script.js" target="_blank">Code from the video</a>

### if...else if...else

When you need to check multiple conditions, you use `else if` blocks, like in the video above.

But reading multiple `else if` blocks becomes difficult, as this code from the video shows.

```js
var grade = 7;
var letterGrade;

if (grade === 10) {
  letterGrade = "A";
} else if (grade === 9) {
  letterGrade = "A";
} else if (grade === 8) {
  letterGrade = "B";
} else if (grade === 7) {
  letterGrade = "C";
} else {
  letterGrade = "Unkown";
}
```

In this scenario it's time to turn to `switch` statements.

### switch

The code above converted to a switch statement would look like this:

```js
var grade = 7;
var letterGrade;

switch (grade) {
  case 10:
  case 9:
    letterGrade = "A";
    break;
  case 8:
    letterGrade = "B";
    break;
  case 7:
    letterGrade = "C";
    break;
  default:
    letterGrade = "Unkown";
}
```

The `switch` statement receives a variable to check in the parenthesis (round brackets).

Inside the `curly braces` `{}` are several `case` blocks:

```js
case 8:
    letterGrade = "B";
    break;
```

The above means: in the `case` of `grade` being equal to 8, run the code after the colon `:` and before the `break`.

This is the equivalent of:

```js
if (grade === 8) {
  letterGrade = "B";
}
```

The code after `default:` runs if none of the conditions in the case blocks are true. It's like an `else` block in an `if..else if...else` statement.

The `break` keyword is important. If you leave it out, the code will below will be executed so be sure to include it in your case blocks.

<iframe src="https://player.vimeo.com/video/490429454" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/490429454/a23aa576f2" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/switch-statement/blob/master/script.js" target="_blank">Code from the video</a>

### When to use switch instead of if

If you find yourself writing more than one `else if` statement, consider using a `switch` instead.

<a id="assignment-v-comparison"></a>

## Assignment vs comparison

In the previous lesson we assigned values to variables using the `=` assignment operator.

A common mistake is to accidentally use the `=` operator instead of a comparison operator when peforming a check. When that happens the comparison will always return true:

```js
var myPet = "pig";

if ((myPet = "sheep")) {
  console.log("My pet is a sheep");
} else {
  console.log("My pet is not a sheep");
}
```

Above, we've assigned "pig" to the variable `myPet` but in the `if` statement we've re-assigned `myPet` the value "sheep" because we've used the assignment operator rather than the equality comparison operator `===`.

So this statement will always log "My pet is a sheep".

If your `if` statements are behaving strangely, remember to check for this easy-to-make mistake.

This video looks at the assignment operator (=) versus the comparison operator (===).

<iframe src="https://player.vimeo.com/video/490410473" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/490410473/a48458dce1" target="_blank">Watch on Vimeo</a>

---

<hr>

## Lesson Task

There are practice questions in the master branch of <a href="https://github.com/NoroffFEU/lesson-task-pf-module1-lesson3" target="_blank">this repo</a>.

There are example answers in the <a href="https://github.com/NoroffFEU/lesson-task-pf-module1-lesson3/tree/answers" target="_blank">answers branch</a>.

Try the exercises before checking the solutions.
