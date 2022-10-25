---
title: What are CMSs and why use them
description: sample
tags: Content Management Systems
sidebar: cms

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Content Management Systems make it easy to create, update and organise content on a website. For people with minimal development knowledge, this can be a great way to control their website in maintainable ways.

When working with freelance clients, they’ll likely want a Content Management System like WordPress to control their website rather than having to keep coming to you to update pages.

Throughout the content management course, we’ll be working on one website called ‘Flower Power’, an e-commerce business that sells bouquets through their website.

## Database

One significant difference between CMSs and regular static websites is their use of databases to show content to users. When content is added to a website using a CMS, the content and other meta-data get stored in this database.

When a client visits a URL on the website, the application calls the data from the database and displays it on the page for the user according to the styles set in a theme. These pages aren’t hard coded but are built dynamically.

This separation of content and how the content is displayed makes CMSs easy for most people to use. The application handles the building of the actual pages, and all the user is doing is creating new entries in a database.

## CMS options

There are several different CMSs to choose from. They all have advantages and disadvantages. There is a mix of paid and open-source CMS options. Below we cover three of the most popular open-source options.

### WordPress

WordPress is by far the most popular, with about 60% of the share of CMS websites. There’s a very large developer community and an extensive codex to help you make most of the CMS.

WordPress works on PHP with a SQL database to store data.

### Joomla!

Joomla! has the second-largest share in the CMS market. It offers more out of the box functionality than WordPress, but this also comes at the cost of more complexity.

### Drupal

Drupal is popular with larger websites and enterprises. It’s less bloated than the other two CMS options, but this comes at the expense of requiring more technical knowledge.

**WATCH (OPTIONAL)**

Video: [Considering a CMS for Web Design](https://www.linkedin.com/learning-login/share?account=43268076&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fconsidering-a-cms-for-web-design%3Ftrk%3Dshare_ent_url%26shareId%3D9sUazNFmQo%252BSz4bn6ZmgdA%253D%253D)

<hr>

## Lesson Task

### Brief

To run PHP files, we need a server to run them on. When developing the site, we can use our localhost to host the files, but we need to upload them to a web host to make them live.

If you already have a web host, you can create a folder on your domain and upload files there. If you don’t have a domain, continue with the task.

### Level 1 process

- Choose a web host. You can choose any web host you like, just make sure the package runs PHP and gives you at least one database. Generally, the entry-level packages should cover that. (If you’re unsure, the Beginner package on one.com will be fine.)

- Next, you will choose a name for your domain. You can choose whatever you like.

- Follow their setup wizard, and once complete, you can connect to the web host using FTP. FileZilla is a popular application for connecting to a web host using FTP.

- Once you have connected to the web host using FTP, upload a file to your web host and test that it’s coming through correctly. Your web host likely has a folder called ‘public_html’ or ‘www’. This is where you’ll place the files and folders that should be displayed on your web host. We advise you to place assignments into their own folder instead of the website’s root for our programme.
