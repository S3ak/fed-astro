---
title: Introduction to Functions
keywords: sample
tags: Programming Foundations
sidebar: prog-found
permalink: programming-foundations/intro-functions.html
folder: programming-foundations
---

Every line of javascript we write is called a _statement_, and when we write multiple statements together we create a _procedure_.

When we write javascript directly into a file, or inside a `<script>` tag - the entire file counts as one procedure and it runs from left to right, top to bottom.

This is very useful when starting out with javascript, however as the complexity of tasks increases this becomes unsustainable and we need to define smaller, more managable procedures.

This is exactly what functions are: groups of useful statements that combine into re-useable procedures that we assign a name to.

Functions are crucial to writing effective javascript, and they exist to make your code make more sense to you - as well as others.

Understanding functions is very important, but it will take time to get used to them - that will happen as you use them more and more.

Here we only introduce them. In the JavaScript 1 course we will look at them in more depth.

---

We have already been using functions, `console.log()` is a function and so is `toLowerCase()` and `toUpperCase()`.

## Our first function

To use a custom function, we first need to declare it.

Declaring a function means creating it. We use the `function` keyword and a name of our choice to declare it.

```js
// declare the function
function logWord() {
  // the code we want the function to run goes here
}
```

Above, we've declared a function called `logWord`.

> Like other variables, functions can be called anything. **_Give your functions meaningful names_**, though, functions called `hi` or `function1` are not well-named functions.

> Don't be afraid to use long names for functions if you can't think of a short name. `function logWordOneHundredTimes()` is fine, as long as that's what it does!

The contents of a function live between the curly braces `{ }`. We don't have any code there except a comment so our function doesn't do anything at the moment. We will look at the purpose of the parenthesis (round brackets) `()` a bit later.

---

Let's make our function do something, log a string to the console:

```js
function logWord() {
  console.log("one");
}
```

The code inside the function won't run until we `call` (or `execute` or `invoke` <b>\*</b>) the function.

> <b>\*</b> In programming, similar actions or techniques often have different names, which can be confusing when the same thing is referred to by different names. When we mention alternative names for things it's because that is what they might be called in other learning materials you may read or watch.

Without calling the function, the JavaScript engine knows about it, but won't execute the code inside the function.

We call a function using its name and round brackets `()`.

```js
// declare the function
function logWord() {
  console.log("one");
}

// call the function
logWord();
```

Now the `logWord` function will run and `"one"` will be logged to the console.

> Notice that we **_don't_** use the `function` keyword to `call` the function. We only use the `function` keyword when `declaring` the function.

## Arguments

Our `logWord` function isn't very useful at the moment, it will always just console log the word `"one"`. We may as well have just written the console log out directly without declaring and calling a function.

We can make the function far more useful by passing variables into it so that the code inside the function can use them.

The variables that we pass in to functions are called `arguments`. We place them inside the `()`.

> When we call `console.log("somne value");` the value we want to log is an argument passed to the `log()` function.

Let's add an <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.argument}}">argument</a> called `theWord` to the `logWord` function:

```js
function logWord(theWord) {
  console.log("one");
}

logWord();
```

The code inside the function is still just logging `one` though.

We can use the variables we pass in, the `arguments`, inside the function just like any other variable. Let's pass in a value as the `theWord` argument and then log that value:

```js
function logWord(theWord) {
  console.log(theWord);
}

logWord("hello");
```

Run the code above and you will see `hello` gets logged.

> You will often hear about `parameters`. Technically, the values passed into the function are called `parameters`, and the variable names inside the `()` are called `arguments`. We will call both `arguments` for simplicity's sake.

Change the value you pass in:

```js
function logWord(theWord) {
  console.log(theWord);
}

logWord(50);
```

Now `50` will get logged.

Whatever you pass in as the value will get logged as long as you use the `argument`'s correct name.

```js
function logWord(theWord) {
  console.log(theWord);
}

logWord(true);
```

`true` will get logged.

If we changed the code to this

```js
function logWord(theWord) {
  console.log(word);
}

logWord("hello");
```

we will get an error, as the argument (the variable) is called `theWord` but we are trying to log the variable `word`. The variable `word` doesn't exist in this function.

Always make sure you are using the correct `argument` names in your function code.

---

## Mulitple arguments

Functions can have zero, one or more arguments. Let's write a function with two arguments:

```js
// declare a function with two arguments
function AddTwoNumbers(number1, number2) {
  var sum = number1 + number2;
  console.log(sum);
}

// call the function and pass two arguments in
AddTwoNumbers(3, 4);
// 7
```

---

## Returning from a function

To return a value from inside a function we use the keyword `return`.

For example, we can return the `sum` variable from the `AddTwoNumbers` above like this:

```js
function addTwoNumbers(number1, number2) {
  var sum = number1 + number2;
  return sum;
}
```

> No code after a `return` keyword will run. As soon as a `return` keyword is encountered, the function will exit with the value provided.

```js
function doubleNumber(number1) {
  var double = number1 * 2;
  return double; // Execution stops here
  console.log("This will never run");
}
```

We can assign what is returned from a function to a variable like this:

```js
var result = addTwoNumbers(3, 4);
```

The purpose of calling a function is ultimately to change the `state` of a webpage or to perform a calculation.

When performing a calculation, the `function` must respond with the result once it has finished running, otherwise it will not be useful.

When changing state, a return value is not always necessary - however it is a good practice to provide one anyway.

> All functions return a value, even if that value is _falsy_ like `undefined`, `null`, `0` or `""`.

```js
function pureFunction(input) {
  var output = input;
  return output;
}

function impureFunction(input) {
  window.output = input;
}

var testA = pureFunction(1);
console.log(testA === 1);

var testB = impureFunction(1);
console.log(testB === undefined);
```

> Functions that do not explicitly set a return value are generally called _"convenience methods"_.

This video is an introduction to functions and includes a more practical example of using functions than simply logging variable values.

<iframe src="https://player.vimeo.com/video/496478495" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/496478495/d8e360cf54" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/introduction-to-functions" target="_blank">Code from the video</a>

---

<hr>

## Lesson Task

There are practice questions in the master branch of <a href="https://github.com/NoroffFEU/lesson-task-pf-module2-lesson4" target="_blank">this repo</a>.

There are example answers in the <a href="https://github.com/NoroffFEU/lesson-task-pf-module2-lesson4/blob/answers/js/script.js" target="_blank">answers branch</a>.

Try the exercises before checking the solutions.
