---
title: Installing a code editor and using GitHub
description: sample
tags: WCT
sidebar: wct
---

## Introduction

In this lesson, we will look at installing a code editor and setting up a GitHub account.

## Version control

Version control allows developers to keep track of changes to files in a project. This is vital because:

- It’s very likely that you will work together with other developers on a project, and it’s important to know who made which changes.

- It’s important to ensure you don’t overwrite the work of other team members.

- Using a version control system is also a good way of backing up the changes you’ve made, so that there is one authoritative version of the project which each developer can work on. If you keep code in only one place on one computer, you can quickly run into problems either through human or technical error.

The most popular version control system is Git, and the most popular place to store repositories for your code is done using GitHub.

Git is a distributed version control system, meaning each team member has a copy of the repository on their computer. They can then make changes to the repository before pushing their changes back to the central repository. It’s important to avoid changing code that other developers are working on; otherwise, you can get what is called a ‘merge conflict’.

To use Git, you first need to ensure it is installed on your computer. These next steps will guide you through it.

### Installing and using Git

#### 1. Check if you have Git installed

You can check whether you have Git installed on your computer by opening up the command line interface (if you don’t have a preferred CLI you can use Terminal on Mac and Command Prompt on Windows). Type `git --version` into the CLI and hit enter. If you get back a version number, you know you have Git installed correctly. If you don’t, then you will need to install Git.

#### 2. Install Git

There are a few ways to install Git. Here are two popular methods:

**npm**

One of the most popular methods for installing Git is using Node Package Manager (npm). To be able to use npm in your Command Line ensure Node.js is installed on your computer, which you can find out by running `npm --v`. If you don't have it installed, go to [https://nodejs.org/en/](https://nodejs.org/en/). If you are using Mac, please do not use the ‘sudo’ command to install Node or any npm package. Once Node.js is installed, you can go back to your command line interface and run `npm install git –g`

**Download from Git**

Alternatively, you can go to [https://git-scm.com/downloads](https://git-scm.com/downloads) and install Git there. Windows users will be able to download a .exe file which will install Git. Mac users can choose from 4 recommended methods for installing on their computer.

#### 3. Check the installation has worked

Once you’ve run the installation, type `git --version` and hit enter. This time you should get back a version number.

#### 4. Install GitHub

We will be using GitHub throughout your studies. Please go to [https://github.com/](https://github.com/) and sign up for an account.

## Code editor

We learned in the last lesson that HTTP is designed to send text files. This means we can use a tool as simple as Notepad on a PC or TextEdit on Mac to be able to create websites. While it is possible to use simple text editors, it’s much easier to develop websites using a code editor specifically designed for the job.

There are many different code editors to choose from, but in this programme, we will be working with Visual Studio Code which you can download the version for your operating system [here](https://code.visualstudio.com/download).

If you have experience with a different code editor, you can continue to use it, but in our examples, we’ll be using VS Code.

Two extensions which you’ll find useful in your studies are:

- Prettier (which helps format your code to be easier to read)

- Live Share (which lets you share your code with a tutor).

## Activity

### Activity 1

**WATCH**

The below video introducing you to GitHub and Visual Studio Code. (17m 12s)

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/443018346?h=34d1bba250&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Introduction to GitHub and Visual Studio Code"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

[View on Vimeo](https://vimeo.com/443018346/34d1bba250)

<hr>

## Lesson task

### Goal

Get set up to start coding in HTML and CSS. Brief Install VS Code and create a GitHub account.

### Level 1 process

1. Install VS Code from [https://code.visualstudio.com/](https://code.visualstudio.com)
2. Create an account with GitHub.
3. Download GitHub Desktop which will help you keep track of updates to repositories.
4. Create a repo on GitHub and clone it to your computer.
5. Open the repo using VS Code.
6. Update the repo by adding a file (any file will do).
7. Commit your changes using GitHub Desktop and push to origin.
8. Check on GitHub whether your repository has been updated.
