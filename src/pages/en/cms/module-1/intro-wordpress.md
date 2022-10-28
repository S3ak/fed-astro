---
title: How to get set up with WordPress
description: sample
tags: Content Management Systems
sidebar: cms
---

## Introduction

WordPress uses PHP, a server-side language, to render pages; therefore, we need to run WordPress on a server. When developing, it’s best to install WordPress on your local machine so that you can make changes in case something breaks. When you’re finished developing, you can upload your WordPress site to your web host.

## Steps

### 1. Local server

Download an application to run a local server on your computer.

There are a few to choose from, but Xampp, Wamp or Mamp are commonly used. Xampp can run on Windows, Mac or Linux. Wamp runs on Windows and Mamp runs on Mac.

In our example, we’re going to be running Xampp which you can download here. Once downloaded and installed, you should be able to open an application that looks like this:

![Local server](../images/cms/1-2-localserver.jpg)

_Note: Mac users may prefer to choose MAMP from the beginning as it’s well suited for Mac._

Click ‘Start’ for both Apache and MySQL, and test that your server is running by going to http://localhost/ in your browser which should load up a page saying ‘Welcome to Xampp’.

### 2. Download WordPress files

Next, you need to download the WordPress files from here. Take the zip file you’ve downloaded and copy it.

Navigate in your file explorer to where you have installed Xampp. On a Windows PC, it will likely be C:\xampp. For Mac go to the Volumes tab, click Mount and then Explore.

![Xampp](../images/cms/1-2-download.jpg)

Now click into the htdocs folder and create a new folder called ‘flower-power’. Inside this folder, paste your zip file with all your WordPress files and extract the zip file.

![Zip file](../images/cms/1-2-download2.jpg)

### 3. Create a database for WordPress

It’s essential to understand the relationship WordPress has with its database. All the posts, pages, and comments made on WordPress’s admin side are stored in this database. To create a MySQL database, go to http://localhost/phpmyadmin/ and click Databases.

![Create database](../images/cms/1-2-createdatabase.jpg)

Enter a database name called ‘flower-power’ and click create.

### 4. Run the WordPress install

Go to localhost/flower-power, which will begin the installation wizard. Firstly, you’ll be asked for a preferred language for the installation and an overview of the required information where you can click ‘Let’s go’.

Enter ‘flower-power’ as the database name. Set the username to “root”, leave the password blank and leave database host as localhost and table prefix as wp\_.

![Wordpress install](../images/cms/1-2-wordpressinstall.jpg)

It’s important to note that this only works for installation on your local computer. When you upload the website to your web host, you’ll need to create a user and assign a password with access to the database.

Next click ‘Run the installation’. Now set the Site Title to ‘Flower Power’, create your username and password which you must store. Add your email address and discourage search engines from indexing the site.

Finally, click ‘Login’ and input your username and password you just created. You should now be logged into your WordPress admin site.

![Wordpress install](../images/cms/1-2-final.jpg)

## Activity

In this lesson, we covered installing and running a WordPress site locally using Xampp. If you would like to follow an installation video for Local by Flywheel (for Windows or Mac) or MAMP (for Mac), you can watch the following videos.

**WATCH**

Video: [Local by Flywheel](https://www.linkedin.com/learning/installing-and-running-wordpress-local-by-flywheel/wordpress-on-your-computer-with-local-by-flywheel?u=43268076) (38m)

Video: [MAMP](https://www.linkedin.com/learning/installing-and-running-wordpress-mamp-3/hosting-wordpress-on-your-mac-with-mamp?u=43268076) (1h 15m)

<hr>

## Lesson Task

### Brief

Once you’ve completed installing an application to run a local server on your computer and installed WordPress, take some time to explore the admin panel and get familiar with how WordPress works.

You can create a post on your WordPress admin panel, then open up phpMyAdmin and go to the flower-power database and click to see wp_posts where you should find your post tracked in the database. It’s worth seeing how using the WordPress admin site updates the database, which is then used to build the website’s front-end.
