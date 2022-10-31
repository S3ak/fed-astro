---
title: Single API results and the filter method
description: sample
tags: JavaScript 1
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

In this lesson, we examine fetching and displaying a single result from an API call. We also look at filtering data using the filter() method.

## Displaying a single result

Sometimes we retrieve only a single result from an API call. In this case, we will work with a single object rather than an array of objects.

Because we are not working with an array, we access the result properties directly.

<iframe src="https://player.vimeo.com/video/453002751?h=9420e026bd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Fetching and displaying a single result from an API call"></iframe>

[Code](https://github.com/NoroffFEU/get-requests-fetching-a-single-result) from the video.

## Filter method

If you want to filter the data displayed to a user, you can use the filter method. The filter method is used to create a new array from an existing array that the filter method is called on.

The filter method takes a function as an argument. This function receives each item in the array as an argument. If the function returns true, the item is added to the new array.

### Filter method with numbers

[This Scrimba looks at using the filter method on an array of numbers.](https://scrimba.com/scrim/cvwqVzT8)

### Filter method with strings

[This Scrimba looks at using the filter method on an array of strings.](https://scrimba.com/scrim/cpMKVPTa)

### Filter method with objects

[This Scrimba looks at using the filter method on an array of objects.](https://scrimba.com/scrim/cwwvEJt9)

## Filter example

In the video below, the filter method is used to filter a static array of objects on a keyup event.

<iframe src="https://player.vimeo.com/video/457404171?h=47b82295b4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2560" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Filter method example"></iframe>

[Code](https://github.com/NoroffFEU/filter-example) from the video.

### Filter example with API data

The video below builds on the one above, adding data from an API call and moving the code into reusable functions.

<iframe src="https://player.vimeo.com/video/457423739?h=2f671f7298&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Filter example with API data"></iframe>

[Code](https://github.com/NoroffFEU/filter-example-with-api-call) from the video.

## Find method

The find method is similar to the filter method, though it only returns a single item (or undefined) rather than an array of items.

[Scrimba video](https://scrimba.com/scrim/cVvLZLhp)

<hr>

## Lesson Task

### Brief

There are practise questions in the master branch of [this repo](https://github.com/NoroffFEU/lesson-task-js1-module4-lesson2).

Attempt to answer the questions before checking them against the [answers branch](https://github.com/NoroffFEU/lesson-task-js1-module4-lesson2/tree/answers) of the repo.
