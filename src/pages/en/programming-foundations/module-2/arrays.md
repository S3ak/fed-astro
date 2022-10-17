---
title: Arrays
keywords: sample
tags: Programming Foundations
sidebar: prog-found
permalink: programming-foundations/arrays.html
folder: programming-foundations
---

## Introduction to arrays

An array is a representation of an _iterable_ list of data.

So far we've been using single values stored in a variable:

```js
var colour1 = "red";
var colour2 = "pink";
var colour3 = "yellow";
```

Arrays are used to represent any kind of categorical information, in this example each variable belongs to the category: `colour`.

Arrays are written using square brackets, separating each item with a comma `,`.

Since an array is expected to store multiple items, we use the plural form when naming them as variables:

```js
var colours = ["red", "pink", "yellow"];
```

An empty array is simply represented by a pair of square brackets with nothing between:

```js
var colours = [];
```

Arrays can be used to store any type of value, in any combination.

Here is an array of numbers:

```js
var numbers = [6, 54, 17, 108];
```

Here is an array of booleans:

```js
var booleans = [true, false, false, true];
```

They can also hold different types of values:

```js
var mixedValues = ["blue", 17, false, 108, null];
```

<iframe src="https://player.vimeo.com/video/496045418" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/496045418/9b01233bbe" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/introduction-to-arrays/blob/master/script.js" target="_blank">Code from the video</a>

### Counting items in an array using `length`

Previously we saw how to get the number of characters in a string using the `length` property.

We can use the same property to get the numbers of items in array:

```js
var colours = ["red", "pink", "yellow"];
var numberOfColours = colours.length;
console.log(numberOfColours);
// 3
```

## Updating an array

Often we need to update arrays in response to user actions, or the arrival of new information.

It would be time consuming to write out the entire array each time we need to change it, so instead we use Array prototype methods designed to make this process easier.

### Adding items to the end of an array using `Array.push()`

We can add new items to the end of an array using the `push` <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.method}}">method</a>:

```js
// here is the empty array
var myArray = [];

// its length will be 0 as there are no items in it
console.log(myArray.length);
// 0

// let's add a number to the array
myArray.push(19);

// now the length will be 1
console.log(myArray.length);
// 1

console.log(myArray);
// [19]

myArray.push(99);
// [19, 99]
```

Let's add a colour to the `colours` array:

```js
var colours = ["red", "pink", "yellow"];

// add purple to the colours array
colours.push("purple");

// now colours includes purple
console.log(colours);
// ["red", "pink", "yellow", "purple"]

// now the length property will be 4
console.log(colours.length);
// 4
```

### Adding items to the beginning of an array using `Array.unshift()`

Sometimes a new item should be added to the start, rather than the end of an array.

Although less commonly used than `Array.push()`, `unshift` can be a useful way to update an array.

For example, a list of newest blog posts:

```js
var posts = ["I travelled to...", "Dear diary...", "My favourite sport is..."];

var newPost = "Today I wrote a blog post";

posts.unshift(newPost);
// posts === ['Today I wrote a blog post', 'I travelled to...', 'Dear diary...', 'My favourite sport is...'];
```

### Removing items from an array using `Array.pop()`

You can remove an item from the end of an array by using the `pop` array prototype method.

This function takes the last element of the array and removes it from the collection:

```js
var example = [1, 2, 3, 4];
var lastItem = example.pop();
// lastItem === 4
// example = [1, 2, 3]
```

Think of `pop` as the opposite to `push`.

### Removing items from an array using `Array.shift()`

Likewise, you can remove an item from the beginning of an array by using the `shift` array prototype method.

This function takes the first element of the array and removes it from the collection.

```js
var example = [1, 2, 3, 4];
var fistItem = example.shift();
// fistItem === 1
// example = [2, 3, 4]
```

Think of `shift` as the opposite to `unshift`.

---

## Accessing items in arrays

We can access items inside an array using the index of the item.

The index is the position of the item in the array. The first item in the array is at position 0.

> If it seems confusing to start counting from zero, think of `index` as the 'number of positions you need to move' in order to reach your item. If your item is the first in an array, you don't need to move at all, hence 0. If your item is second in the list, you need to move the `pointer` by one place, and so on. For this reason some people use the word `offset` to refer to an `index`.

We use square brackets to access an item by its index:

```js
var colours = ["red", "pink", "yellow"];

var firstItem = colours[0];
// red

var thirdItem = colours[2];
// yellow
```

We can use a for loop to access every item in an array.

Because the first item in array is at index 0, our counter variable will begin at 0 and we will execute the loop only while the counter variable is less than the number of items in the array.

```js
var colours = ["red", "pink", "yellow"];

for (var i = 0; i < colours.length; i++) {
  var col = colours[i];
  console.log(col);
}
// red
// pink
// yellow
```

<iframe src="https://player.vimeo.com/video/496109329" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/496109329/62318a0066" target="_blank">Watch on Vimeo</a>

<a href="https://github.com/NoroffFEU/looping-through-arrays/blob/master/script.js" target="_blank">Code from the video</a>

## Level 2 Content

The following content will not be examined in the assessments for this module. If you are comfortable with the lessons taught in this lesson, please feel free to continue below.

### Array Prototype Methods

Since an Array is a special type of data, there are some unique functions built into JavaScript to help access their contents. Fundamentally, these all use a for loop to perform a common task such as filtering, sorting, searching or transposing a list.

#### Array.forEach()

The forEach array prototype method is another way to loop or _iterate_ over an array. The inside of the function is like the inside of a for loop. The first value is a list item, and the the second is that item's numerical position in the array (called _index_ or _offset_).

```js
var colours = ["red", "pink", "yellow"];

colours.forEach(function (colour, index) {
  console.log(colour, index);
});
```

This is the same as the example above, using a for loop:

```js
var colours = ["red", "pink", "yellow"];

for (var index = 0; index < colours.length; index++) {
  var colour = colours[i];
  console.log(colour, index);
}
```

#### Array.find()

There is also a specialised method to find an item from within an array. In order to find an item you must provide a valid find function, that will return boolean based on whether each item fits your search criteria:

```js
var colours = ["red", "pink", "yellow"];

var result = colours.find(function (colour) {
  return colour === "pink";
});

console.log(result);
// "pink"
```

This is the same as the example above, using a for loop:

```js
var colours = ["red", "pink", "yellow"];
var result;

for (var i = 0; i < colours.length; i++) {
  var colour = colours[i];
  if (colour === "pink") {
    result = colour;
    break;
  }
}

console.log(result);
```

#### Array.filter()

Similar to Array.find(), filter is used to narrow down a list based on a boolean function. It will always return a new array, even if no items match:

```js
var colours = ["red", "pink", "yellow"];

var result = colours.filter(function (colour) {
  return colour !== "pink";
});

console.log(result);
// ["red", "yellow"]
```

This is the same as the example above, using a for loop:

```js
var colours = ["red", "pink", "yellow"];
var result = [];

for (var i = 0; i < colours.length; i++) {
  var colour = colours[i];
  if (colour !== "pink") {
    result.push(colour);
  }
}

console.log(result);
```

#### Array.sort()

This function is used to rearrange the items in an array by providing a sorting function. The default sorting function will attempt to sort the collection by alphabetical order:

```js
var colours = ["red", "pink", "yellow"];

var result = colours.sort();

console.log(result);
// ["pink", "red", "yellow"]
```

When sorting numbers, this will create unexpected results:

```js
var numbers = [1, 2, 3, 4, 10];

var result = numbers.sort();

console.log(result);
// [1, 10, 2, 3, 4]
```

This is clearly not the correct order, so in order to sort these values correctly we must be a bit more specific about the outcome we desire:

```js
var numbers = [1, 2, 3, 4, 10];

var result = numbers.sort(function (numberA, numberB) {
  return numberA < numberB;
});

console.log(result);
// [1, 2, 3, 4, 10]
```

This is the same as the example above, using a for loop:

```js
var numbers = [1, 2, 3, 4, 10];

for (var i = 1; i < numbers.length; i++) {
  for (var j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      var x = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = x;
    }
  }
}

console.log(numbers);
// [1, 2, 3, 4, 10]
```

> Don't be surprised if you find the for loop example above confusing. Sorting an array is a complicated task, and this is exactly why we have the prototype method `Array.sort()` to make this easier to write and understand.

## So what are arrays used for?

Any time that a list of information is presented in a website or web application, this content will be stored in an array.

This could include

- Posts on an Instagram page
- Articles on a news site
- A Twitter feed
- A list of Patreon subscribers
- The last week of weather data for your city

Typically data stored in an array will be more complex than an array of strings or numbers.

In order to build a sophisticated web application, it is necessary to arrange `objects` into `arrays`.

In JavaScript, complex data is stored as an `object`.

In [lesson 3](3) we'll look at `objects` and `arrays of objects`.

---

<hr>

## Lesson Task

There are practice questions in the master branch of <a href="https://github.com/NoroffFEU/lesson-task-pf-module2-lesson2" target="_blank">this repo</a>.

There are example answers in the <a href="https://github.com/NoroffFEU/lesson-task-pf-module2-lesson2/tree/answers" target="_blank">answers branch</a>.

Try the exercises before checking the solutions.
