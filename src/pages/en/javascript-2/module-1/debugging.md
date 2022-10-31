---
title: Debugging
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We often will run into errors and bugs in our code, this is a part of programming you can't avoid. Debugging is the process of finding these errors and bugs in our code, and it is a very important skill to grow. In this module, we will look at different ways to debug our code and how you can improve your debugging skills.

## Why you need to debug

A common problem among new developers is that they do not learn how to debug on their own. They will have very obvious issues that are easily solvable but still ask a tutor to assist them with the problem. Please understand that this is not an inconvenience to the tutors as they are there to help and enjoy doing so. This is however bad for the student as they need to have the skills to be able to solve problems on their own and there isn't going to be a tutor to solve problems for them when they are on their own or in the workplace.

Debugging your code and trying to solve issues in your code is one of the most important skills you will need to develop. It will make you resourceful as well as eliminate a lot of frustration as you'll be able to confidently rectify problems on your own.

## console

`console` is an object built into JavaScript which allows us to get debugging information from our app. If your JavaScript is running in a browser then the logging information will be output to the console in the browser. If you're running your code as a script with Node then your console will output to the terminal that runs the script.

You've most likely been making use of the `log` method built into it e.g. `console.log('Your message here');`. This are actually other methods available to it, such as `clear()`, `warning()`, `error()` and `table()`.

You can find a list of these methods at the following link: https://developer.mozilla.org/en-US/docs/Web/API/console

Let's take a look at some of the methods:

### console.log()

**NOTE:** Making use of `console.log` in your app will often be referred to as `log`, `logging` and `console logging`. If someone asks you to `log` a value, they are requesting that you use `console.log()` with a value.

This is the most used console method and it will display a message out to the console of the application.

To use: You add the value(s) you want to log inside of the parentheses in the `console.log()` command. For example, if we had a variable called `myValue` then `console.log(myValue)` would log this value.

### console.clear()

`console.clear()` will clear the log output. If you do a lot of logging in an application then sometimes you'll want to clear the log so you have a clean slate to work on.

### console.table()

`console.table()` will neatly list a table of values. This is ideal when trying to look at an array in tabular format. It is not commonly used but it's good to be aware of it in case you come across a use case where it could be useful.

### console.time() and console.timeEnd()

The `console` has methods we can use to check how long something is taking.

It works by starting the timer and then ending the timer when needed.

`console.time('timerName')`: This starts the timer with the name of `timerName`.
`console.timeEnd('timerName')`: This ends the timer with the name `timerName`.

Here is a basic example where we apply the above. We have a function called `complexCalculation`. We start a timer before we call the function and then end the timer after the function has been called. We also do this three times:

**NOTE:** This isn't a very accurate way of measuring performance in an app. Computers have different specs and a faster computer will be able to run the code faster than a slower computer and therefore would have a better result. It is therefore not a reliable way to check the performance of your app, however, it does have its purposes and is still important to be aware of. A possible use case could be to see if a refactored function is running better than the older one.

```js
function complexCalculation() {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
}

// Run three separate tests below

console.time("myTimer");
complexCalculation();
console.timeEnd("myTimer");
// Logs:
// myTimer: 101ms - timer ended

console.time("myTimer");
complexCalculation();
console.timeEnd("myTimer");
// Logs:
// myTimer: 155ms - timer ended

console.time("myTimer");
complexCalculation();
console.timeEnd("myTimer");
// Logs:
// myTimer: 128ms - timer ended
```

## Logging and Debugging an application

Knowing how to debug your applications is a skill that every developer must have, and learning to debug efficiently will eliminate a lot of frustrations you will face in the future.

### Checking your app's output during development

A mistake some beginners make is trying to build out their entire application, or large portions of it, without ever checking if their code is working or if it is throwing any errors. They might introduce an error when they first start building their app and do not realise it. They then continue to build their app while adding more errors on top of this. This is similar to building a structure upon a weak foundation. The result is this code becomes very difficult to debug and rectify.

You should be constantly checking the console output of your app to see if the code you've added is throwing errors or making the app behave unexpectedly.

### Use console.log for feedback

Another common mistake beginners make is never getting feedback from their app as they build it. This is similar to navigating in the dark without any lights on. You should be making use of `console.log()` to output values as you go along so that you can see exactly what your code is doing and ensure it's behaving as expected. When you are done with that portion of code you can then remove the `console.log()`s.

Here are some examples of where you could and most likely should be console logging:

- Logging the parameter of a function you've just created so that you know you're getting the correct value;
- Logging the return value of a function you've just created so that you know you're getting the correct output;
- Logging the data you get from an API so that you can see that you're getting the correct data as well as the shape of the data;
- Logging an element you've selected from the DOM to make sure it is getting selected correctly.

**NOTE:** There should not be a bunch of `console.log()`s in your code when you are shipping to production or submitting it as an assignment in the case of Noroff. You need to remove them as part of the clean-up process before pushing your code.

### You should understand the logic and the code

_"Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code."_ - Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsman

You will eventually be working with code other people wrote, this is inevitable. Learning to read other people's code is a skill that comes with practice, and you should know what the code and logic are trying to achieve.

When you work with code that you don't understand, consider logging each line you don't understand so you can see what is happening.

You should know what the code is doing line-by-line and what the logic is trying to achieve. If there is a line of code you don't understand, then log the values out before and after that line so you can see what is changing. A lot of the code you read and understand will be repeatable in other cases, so once you understand you'll quickly be able to identify and understand it in the future.

## Issues to be aware of when console logging

### console.log() uses a reference to the object when logging

`console.log()` uses a reference to a variable when logging. This means that if a value passed by reference is updated, such as an array or object, then it will automatically update this value in the browser.

When this happens, you will see a small Information icon in the browser that will have the following information on hover: "This value was evaluated upon first expanding. It may have changed since then."

This is usually not much of a problem, but in some cases, you might need to compare values and this is preventing you from doing so.

A solution is to JSON stringify the value and then parse it again. For example, if you had a variable called `myVariable`, you would do the following:

```js
console.log(JSON.parse(JSON.stringify(myVariable)));
```

This basically turns the result into a static value at that point in time, then parses it back to a variable so it maintains debugging flexibility in the dev tools.

You could also spread out the value e.g.

```js
console.log(...myVariable);
```

## Errors

Errors are naturally a part of programming and writing code. This is why it's important that you learn how to deal with them effectively. You will need to become familiar with common errors as well as be able to search the internet for more obscure errors.

When coding, you should always have your dev tools with the console open so you can monitor any errors or warnings that appear. If you've written code that causes an error or warning, you should immediately be rectifying this issue, not writing more code on top of it.

## VS Code Debugger

VS Code has a built-in debugger that makes it very easy to debug JavaScript applications.

### Run View

To open the Run View, you can click on the Run View icon in the Activity bar, alternatively, you can press `Ctrl` + `Shift` + `D`.

### Breakpoints

Breakpoints are points we add to our code which will "pause" the code when it gets to that point.

To add a breakpoint, you simply click to the left of the line number of the code you want to add a breakpoint to. Once added, you will see a red circle.

When you run the debugger, it is going to stop at each of the breakpoints you have set.

### Logpoints

A Logpoint is like a breakpoint however it does not "pause" and instead logs a message to the console.

A logpoint has a "diamond" shape for its icon.

### "VARIABLES" section

You can inspect variables in the "VARIABLES" section of the Run view. This lets you very quickly see the different variables in your application, allowing you to quickly see what the values are changing to.

### "WATCH" section

We can add a variable to be "WATCHED" which means that it will keep track of what the variable changes to. This makes it easier to keep track of specific variables you're interested in.

<hr>

## Lesson task

Debugging is an important and essential skill you will need to develop. You will put in practice what you have been taught so far.

### Goal

To be able to debug effectively.

### Brief

Follow the Level 1 Process as instructed.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Write a small function and then use breakpoints to step through your application so you can get used to it.

## Additional resources

[Chrome: Debug JavaScript](https://developer.chrome.com/docs/devtools/javascript/)

[Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)

[Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)

[How to debug JavaScript code](https://flaviocopes.com/debugging/)
