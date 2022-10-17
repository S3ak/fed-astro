---
title: Introduction to PHP
keywords: sample
tags: Content Management Systems
sidebar: cms
permalink: cms/intro-php.html
folder: cms
---

## Introduction

WordPress is written with PHP, so it’s worth knowing PHP’s basics to work with WordPress files.

The first thing to note about PHP is that it’s a server-side scripting language, so it needs to run on a server which is why we have Xampp (or another local server) running when developing locally.

PHP is written in .php files that the server reads and converts to HTML displayed in the browser.

## Getting started

To start working with PHP, we need to create a .php file. This .php file needs to be on a server. You can place it into your ‘htdocs’ just like your WordPress installation.

To write PHP in our .php file, we need to write our PHP in between tags that start with <?php and end with ?>

A common statement you will see in PHP is ‘echo’ which outputs a string (often HTML) to a page.

```php
<!DOCTYPE html>
<html>
  <body>
    <?php
    echo "<h1>Hello World!</h1>";
    ?>
    </body>
</html>
```

In the example above, you’ll see that a PHP file looks a lot like an HTML file; the only difference is it uses the PHP tags to add PHP to the page.

Here we’re adding an h1 to the page saying “Hello world!”. Copy this code and run it in a .php file on your local server. You can place it in a folder in your htdocs folder and then visit the page in your browser, e.g. http://localhost/phptest/index.php

## Variables

A variable name in PHP must start with the $ symbol followed by the variable’s name, and then an equals symbol to set the variable’s value. Then close the line with a semi-colon. Semi-colons aren’t optional in PHP.

```php
<?php
$name = "John Doe";
$age = 35;
?>
```

As you can see, we use quotation marks to create a string, while number variables don’t need quotation marks.

Adding this code to the page will only create the variables. If we want to show these variables on the page, we will use the echo statement like this:

```php
<?php
$name = "John Doe";
$age = 35;
echo $name;
echo $age;
?>
```

## Concatenation

If we want to combine variables and HTML, we could use concatenation. To do this, we use the dot operator (.). The dots act like plus signs in JavaScript.

Let’s say we wanted to add a line to the page that says “John Doe is 35 years old”. We could write the following:

```php
<?php
$name = "John Doe";
$age = 35;
echo "<p>" . $name . " is " . $age . " years old</p>";
?>
```

See how we use ‘.’ to concatenate variables and write HTML directly into the echo to build the HTML page.

## Activity

**WATCH**

There’s plenty to learn about PHP, but for now, these are the absolute basics and will help you better understand what’s happening in WordPress’s PHP files.

If you would like to learn more about PHP, you can watch the following video: [PHP Essential Training](https://www.linkedin.com/learning/php-essential-training-2/introduction?u=43268076)

<hr>

## Lesson Task

### Brief

Get some experience working with PHP. Having a basic understanding of PHP will help when you’re working with WordPress. More often than not, if you run into WordPress problems, there will be a forum post answering your issue. However, implementing many of the fixes and changes will require some understanding of PHP.

### Level 1 Process

1. Turn on your local server.
2. Go to your ‘htdocs’ folder and create a folder called ‘cms-task2-1.’
3. Inside this folder create an index.php file and open it in your browser as it runs on your local server. The file path will probably be localhost/cms-task2-1/index.php, but it depends on which local server you’re running.
4. Open index.php in your code editor.
5. Create a basic HTML framework, and add PHP tags into the body of the page.
6. Create variables for two numbers and add them together and then echo the result onto the page.
7. Create a variable for the user’s name and echo that with the string “Hello \_\_\_\_. Welcome back”.
