---
title: Introduction to Bootstrap
description: sample
tags: CSS Frameworks
---

## Introduction

Each lesson in the CSS Frameworks course includes a practical lesson task related to the study material. We highly recommend attempting each task and then comparing your attempt to the supplied example answer. The more you code, the quicker you will improve.

## Node.js, NPM and NPX

While we won't use Node.js or npm in the first few lessons, we do need them installed so we can use them in subsequent lessons and courses.

### NODE.js

NODE.js is a JavaScript runtime. For a long time, JavaScript ran only in browsers and was the only language that could run in browsers. Using Node, it's possible to execute JavaScript wherever we can install NODE, including on web servers and our own computers.

### NPM

NPM is a package manager we can use to install, update, and remove JavaScript tools, libraries, and frameworks. Using npm packages improves our development experience and speeds up the coding process.

You can install packages globally (accessible from any folder on your computer) or locally (accessible only from the folder in which the package is installed).

### NPX

NPX is another tool installed alongside NPM when installing node.

One of the main benefits of NPX is that we can use it to execute packages or libraries that we haven't installed.

We will use npx to run the create-react-app package later in the course.

### Installation

You can install Node (which will also install NPM) from the downloadable installation files on this site: [https://nodejs.org/en/Use](https://nodejs.org/en/Use) the LTS version.

You can check if the installation was successful by running `node -v` in your command line or terminal. If successfully installed, it will return the node version.

When you install local packages with NPM they will be installed inside a `node_modules` folder and saved in the `dependencies` or `dev_depencenies` section of a `package.json` files in your project folder.

The packages in the node_modules folder will all have their own packages and the folder will become very big. It should always be included in the gitignore file in a project. The gitignore file lists which files and folders should not be commited to a repository.

The node_modules should also be removed before submitting any project folders to Noroff or to tutors on Discord.

### Installing all packages for a project

The command below reads the dependencies and dev dependencies from the package.json file in a project and fetches all the packages listed there:

`npm install`

Run this command in your command line or terminal when you clone or download a repo that includes a package.json file.

The packages in the dependencies section of package.json are the packages that will be installed when the build command runs and a project is in production mode.

The packages in the dev_dependencies section will be installed, along with those in the dependencies section, when the project is running in development mode.

To make sure your built files are as small as possible, keep dev-related packages like code formatters or linters in the dev_dependencies section.

You can install a package as a dev dependency by adding the –D switch to the installation command:

`npm install package_name -D`

> MAC AND LINUX USERS: A WARNING ABOUT INSTALLING NODE  
> NEVER use the sudo command to install Node or any npm package as this will cause permission problems and these problems are difficult to fix.

## Building a site with Bootstrap

Bootstrap is a popular CSS and JavaScript library used to speed up development.

We can use pre-built components from the library to quickly create layouts and UI, then apply custom styles to adapt the components to the design we are building.

In the video lessons on the next page, we will build a three-page website from an XD design using Bootstrap.

## Videos and Activities

> WARNING Please note the following videos use Bootstrap v4.5. If you want to follow along with the videos on your computer, please make sure you’re using Bootstrap v4.5. To read the documentation for Bootstrap v4.5 you can use this link (note the v4.5 in the header where you can choose other versions).   
> You can use the latest version of Bootstrap, but there will be discrepancies between the videos and the documentation. Always make sure the version of the documentation on getbootstrap.com is the version that you want to be using.  
> When you work as a developer you’ll get projects which use specific versions of a framework and it’s important to be able to make sure you’re reading the correct documentation for the version of the framework being used.

### Video Lesson 1

The first video covers linking to the required files and building out the pages using Bootstrap components without customising any of the styles.

<iframe src="https://player.vimeo.com/video/435862409?h=ee76e9eb59" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

[Here is the link](https://vimeo.com/435862409/ee76e9eb59) for the above video: [Code from the video.](https://github.com/NoroffFEU/introduction-to-bootstrap)

### Video Lesson 2

In the second video we’ll add custom styles to match the design.

<iframe src="https://player.vimeo.com/video/436108836?h=522ed73410" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

[Here is the link](https://vimeo.com/436108836/522ed73410) for the above video: [Code from the video](https://github.com/NoroffFEU/introduction-to-bootstrap/tree/part-2) is on the **part-2** branch of the repo.

The lesson task includes another two pages in the XD design for you to code yourself. Be sure to check your work against the example answer.

## Activity

Read sections: [layout](https://getbootstrap.com/docs/4.5/layout/overview/), [components](https://getbootstrap.com/docs/4.5/components/alerts/) and [utilities](https://getbootstrap.com/docs/4.5/utilities/borders/) of the Bootstrap docs to get an overview of everything available in the library. (1 hour)

## Lesson Task

### Brief

In this task you will practise using Bootstrap to create page layouts.

### Resources

Download the XD file from this [repo](https://github.com/NoroffFEU/introduction-to-bootstrap-lesson-task).

### Process

1. Code the additional pages in the design using Bootstrap.
2. Make sure the layouts work on all device sizes.

### Example answer

You can find an example solution in the [answer branch](https://github.com/NoroffFEU/introduction-to-bootstrap-lesson-task/tree/answer) of the repo.
