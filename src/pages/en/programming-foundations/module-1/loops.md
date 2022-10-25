---
title: Loops
description: sample
tags: Programming Foundations
sidebar: prog-found

layout: ../../../../layouts/MainLayout.astro
---

`Loops` are used to do the same thing over and over again.

If we wanted to console log a number value from 1 to 3, we could do something like this:

```js
console.log(1);
console.log(2);
console.log(3);
```

Seems reasonable enough.

But what if we wanted to log 1 to 100 or 1000?

What if we wanted to log 1 to a number stored in a variable? Or from a number stored in a variable to another number stored in a variable. When writing the code, we wouldn't know either the start or end number.

That's where loops come in.

<a id="for-loop"></a>

## for loop

```js
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
```

Run the code above and you'll see that it logs 1 to 10.

Let's break it down.

Inside `for`'s brackets, we first have `var i = 1;`. This is the counter variable. It's just a variable so we could call it any name, but it's very common to name it `i`.

<!-- ```js
for(var i = 1; i <= 10; i++) {
    console.log(i);
}
``` -->

`var i = 1` is the starting value for the loop. We've set it to start at `1`.

Next is `i <= 10`. This is the condition that gets checked each time the loop runs. Each pass through the loop, the code will check if `i` is less than or equal to `10`. If it is, the code inside the curly braces `{}` will run. If not, the loop will stop.

The `i++` part is the `iterator`. On each loop, it adds a value to the `i` variable. `i++` is shorthand for `i = i + 1`.

So we could could rewrite the loop like this:

```js
for (var i = 1; i <= 10; i = i + 1) {
  console.log(i);
}
```

Some developers prefer to declare the variable outside the loop without initialising it:

```js
var i;

for (i = 1; i <= 10; i++) {
  console.log(i);
}
```

---

Let's write a loop that counts from `5` to `25`:

```js
for (var i = 5; i <= 25; i++) {
  console.log(i);
}
```

We've set the variable to start at `5`. The loop will run until the condition (`i <= 25`) returns false.

We could write the condition differently:

```js
for (var i = 5; i < 26; i++) {
  console.log(i);
}
```

The result here is exactly the same, we've just modified the condition to check that `i` is less than `26`.

This video in an introduction to for loops.

<iframe src="https://player.vimeo.com/video/490475154"  height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/490475154/23fd9e35a7" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/for-loop/blob/master/script.js" target="_blank">Code from the video</a>

---

<hr>

## Lesson Task

There are practice questions in the master branch of <a href="https://github.com/NoroffFEU/lesson-task-pf-module1-lesson4" target="_blank">this repo</a>.

There are example answers in the <a href="https://github.com/NoroffFEU/lesson-task-pf-module1-lesson4/tree/answers" target="_blank">answers branch</a>.

Try the exercises before checking the solutions.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0NTE0NDg3ODRdfQ==
-->
