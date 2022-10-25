---
title: Child themes
description: sample
tags: Content Management Systems
sidebar: cms

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Themes are great for getting a site set up with a layout that works, but what happens if you would like to change a few aspects of the look and feel while keeping the same theme?

Child themes are used to modify a theme installed on your site. You keep the original theme as a parent theme, but can then target specific elements and files to update and change in the child theme.

When your website gets loaded, styles in the child theme will be loaded last, and as explained in CSS, the last style declared is the style which gets applied. If you don’t change the child theme’s style, the parent theme’s original styling will be applied.

For template files in the child theme, they will be loaded first and only if they aren’t loaded by the child theme, will the parent theme templates get loaded.

WordPress and its themes are regularly updated, so using child themes is a way to ensure the styling we’ve added remains the same, even if the parent theme is updated. This way, you get the latest features for your theme, without breaking the unique changes you’ve made.

_Note: You should be careful about choosing a parent theme for your site because the more you have to modify in the child theme, the more work you’ll have._

## Setting up the child theme

Open your WordPress files in your text editor. Go to wp-content > themes and create a folder called ‘flower-power’. It’s also a common standard to name the folder your theme name plus ‘-child’, so storefront-child is another valid folder name.

Inside this folder create a style.css file and a blank functions.php file.

Next, we have to add precise information to the style.css file. Copy the following and add it directly to your stylesheet.

/_ Theme Name: Flower Power Theme URI: Description: Storefront Child Theme Author: YOUR NAME HERE Author URI: Template: storefront Version: 1.0.0 License: GNU General Public License v2 or later License URI: http://www.gnu.org/licenses/gpl-2.0.html Tags: light, dark, two-columns, right-sidebar, responsive-layout, accessibility-ready Text Domain: storefrontchild _/

Now you should be able to go to the admin page for your site and go to Appearance > Themes, and you’ll see your theme coming through. Click activate on your child theme.

Storefront makes creating child themes easier than some other themes, so we don’t need to enqueue any of the parent theme style files with PHP from the theme’s functions.php file or @import these into the child themes style.css.

<hr>

## Activities

### Activity 1

**READ**

Page: [Child Themes](https://developer.wordpress.org/themes/advanced-topics/child-themes/) for a tutorial by WordPress on adding a child theme.

### Activity 2

**WATCH**

If you would like to follow along with a video tutorial to set up a child theme: [WordPress: Building Child Themes](https://www.linkedin.com/learning/wordpress-building-child-themes-3/level-up-to-wordpress-developer?u=43268076)

1. Building on a solid foundation
2. Creating a child theme

<hr>

## Lesson Task

### Brief

Experiment with styling child themes.

### Level 1 Process

1. Set up your child theme as covered in Lesson - 'Child themes'
2. Try adding some unique styling to your styles.css file and see it pull through on your website. Perhaps update the body colour or choose another element to style and make sure everything comes through correctly.
