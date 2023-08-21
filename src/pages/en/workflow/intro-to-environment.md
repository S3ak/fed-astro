---
title: Your working environment
keywords: workflow
tags: Workflow
layout: ../../../layouts/MainLayout.astro
---

## Introduction

In this lesson, we will cover the process of setting up a stable working `environment` for future projects. Your working `environment` is a key aspect of your `workflow`, and many otherwise cumbersome tasks can be automated with a sound knowledge of how your `environment` works.

> This lesson requires these tools to be installed:
>
> - Git
> - NodeJS
> - Visual Studio Code

> This lesson has the following outcomes:
>
> - You can create a new working environment
> - You can manage environment dependencies
> - You can share your environment via remote hosting

### What is my environment?

A broad definition of working environment would include everything in the room you are working in (your chair, your desk, your wallpaper). However, we are far more interested in the computer you use to code, the operating system that computer runs, the applications you are using to complete your work, and finally, the folder where your project is set up. Every time you create a new project folder, you have created a `fresh environment`.

You may also use one or more `remote environments`, i.e. web servers that you use to host your code publicly.

### Why does my environment matter?

While correctly written HTML and CSS will always run in a browser without any additional tooling, complex projects commonly require special build instructions to produce usable content. For example, the project may have an external dependency that first needs to be installed and then bundled with the other files when the project is built.

Assuming that another person will know the procedure for installing and building the project correctly can make the project inaccessible. Software packages are frequently updated by their creators, meaning that version mismatch issues will be common without some sort of standard way to organise a project environment. This is especially true for projects that multiple people consume, which will be the case for all of the repositories you create during course assignments.

## Setting up Your environment

### Creating a project folder

It is common practice to store all code projects within a single parent folder. Those that use GitHub Desktop will typically use the default `Username/GitHub/` directory, although there is no strict convention. Within the parent folder, it is also common to subdivide repositories or project folders based on the project's purpose. For example:

```
YourName/Repos/Noroff/Coursework/Workflow/workflow-ca
YourName/Repos/Personal/portfolio
YourName/Repos/Client/project-name
```

Create a new directory (folder) called `environment` in an appropriate location and open this folder in your editor.

### Initialising a Git repository

Open the command line at the location of your new folder. Enter the command:

```sh
git init
```

This has now created a new local repository in your project folder. It is not currently hosted on GitHub or available to anyone else.

Every git repository should have a `.gitignore` file that instructs Git not to track files that match the patterns listed here. This is a common practice to avoid accidentally committing files that are not intended to be part of the project and would otherwise clutter the `environment`.

Create an empty file called `.gitignore` at the root of your project.

As this lesson uses `npm`, it is essential to include `node_modules` in the list of ignored files:

`.gitignore`

```
# npm folders to ignore
/node_modules
```

As your project grows, you may need to update this list with more folders.

#### Hosting your repository

There are various ways to publish your repository to GitHub:

1. Git CLI tool (`git add remote origin`)
2. GitHub CLI tool (`gh`)
3. Visual Studio Github Integration (Publish)
4. GitHub Desktop (Import Existing)

As your `workflow` is personal to you, you should explore these different methods and find the one that feels most comfortable to you. When you are working in a team you may be expected to conform to a standardised workflow.

Import the repository into GitHub and make a note of the repository URL that ends with `.git`.

> Name your repository `joker`

#### Creating a branch

Next, create a new branch called `environment-setup` using any of the methods listed above. This should be your active branch where all of the work will be done.

### Initialising Node Package Manager (NPM)

NPM provides a uniform pattern for defining project metadata. It is driven by a file called `package.json`, which should be committed with the rest of your project files. This file allows another developer to quickly copy and run your project correctly.

To initialise an `npm package` within our project, open the command line at your project root folder and enter this command:

```sh
npm init
```

You will be prompted with a series of questions:

```
package name
```

This should be a useful description of your project in lowercase letters and hyphens only. In this case, we can call our package `joker`.

```
version
```

The appropriate version for a fresh package is `0.0.1`.

Versioning is an important and common practice that is often overlooked. If you are creating an empty NPM package, you will almost certainly be using `Major Version 0`, i.e. your package is under development and therefore does not have a stable version. With each major addition or change to the code, the version number should change according to the rules of `Semantic Versioning (SEMVER)`. To find out more about SEMVER, visit [semver.org](https://semver.org/). We will pick up on this throughout the module.

We will be updating the version of our package along the way to simulate a versioning process.

```
description
```

Here you should describe your project in one or two sentences. For example, `Application that tells jokes`, `CSS only e-commerce application`, `Personal collection of useful functions`, etc.

```
entry point
```

Enter `src/index.js`.

This is the default script file that will be run by starting your project. This does not necessarily have to be the main file used in HTML, and you do not always require an entrypoint file.

```
test command
```

Here you should specify a command that will be run by the `npm test` command. Testing is an important part of a sophisticated workflow and should not be overlooked. We can leave this blank for now, but we will return to it later.

```
git repository
```

This is the URL of the remote repository for your project. In our case, this is the `git` URL that was saved when adding the repository to a remote host.

```
keywords
```

An optional comma-separated list of relevant words that describe your project. For example, `css, e-commerce, portfolio, website`.

```
author
```

Your name or alias, with the email address attached to your git credentials. For example, `John Smith <john@smith.com>`

```
license
```

As the copyright owner of your repository, you can decide which software license should be used. If you are unsure of which license to use, try using this tool: https://choosealicense.com/

Once all of these fields have been answered or skipped appropriately, open up the new `package.json` file and view it's contents.

> Commit your changes.

#### Changing the type of your package

Before we continue, we will need to change the type of our package. This is done by adding a new field to the `package.json` file:

```json
{
  "description": "example",
  "type": "module"
}
```

This allows for use of `import` statements in your code for managing dependencies.

> Save the file and commit your changes.

### Managing dependencies

Dependency management can be achieved in many different ways besides using NPM and `package.json` to track them. However, NPM syntax is the most common and familiar to developers in the front-end ecosystem. Other dependency managers include `yarn`, `homebrew`, `nuget`, `pip` and `composer`. While it is worth practicing with as many of these as possible, NPM will be sufficient for this course.

#### What is a dependency?

A dependency is any file, package or resource that is required by your project for any reason. In the process of adding CSS frameworks, Webfonts and JavaScript files to an HTML page - you have manually managed dependencies already. In the context of programming, dependencies typically refer to other code files or packages of files in the same language that you are working in. For example, if you are writing a JavaScript application, you may need to `import` other JavaScript files in your project - these are dependencies.

##### Internal dependencies

Any instance where a file is `imported` from _within_ the project environment into another file within the project environment is considered an internal dependency. For example, if `/js/main.js` imports `/js/login.js`, then the `login.js` file is an internal dependency.

##### External dependencies

Any instance where a file is `imported` from _outside_ the project environment into another file within the project environment is considered an external dependency. For example, if `/js/main.js` imports `https://example.com/login.js`, then the `login.js` file is an external dependency. Most external dependencies are hosted on GitHub and served via `npm`.

## Managing your environment

### Installing a dependency

The first time that we encounter dependencies is working with HTML. Both `<script>` and `<link>` tags are used to import resources into the document. Although this method is valid and useful, a project with many dependencies will soon become challenging to manage. For this reason, we use a package manager.

```sh
npm install one-liner-joke@1.2.2
```

or

```sh
npm i one-liner-joke@1.2.2
```

Both commands are equivalent. They instruct NPM to create a new external dependency, `one-liner-joke` and install the package files it into the project `node_modules` folder. If you open this folder, you will see a new folder containing a variety of files including JavaScript.

Check the Changes tab in your editor to see what this command has added. Before committing anything, add `node_modules` to your `.gitignore` file to exclude external dependencies from your repository.

```
# Mac OS System file
.DS_Store

# npm
node_modules/
```

After adding this line, the number of changes will be reduced to only those you have made directly.

> Commit the `.gitignore` file on it's own, then commit the remaining files together.

> Run `npm version patch` to update the version number.

#### Testing a dependency

We could set up an HTML file to test if the dependency has installed correctly and can be used inside your JavaScript. However, this can also be done using the command line.

In a new file, `src/js/joker.js` add the following code exactly as it is written:

```js
import joker from "one-liner-joke";

console.log(joker.getRandomJoke().body);
```

> Save the file and commit.

Now in the command line, run the following command:

```sh
node src/js/joker.js
```

If things are set up successfully, we should receive a message from the command line with a random joke.

This script can be copied and pasted into `package.json` as a temporary test command:

```json
{
  "scripts": {
    "test": "node src/js/joker.js"
  }
}
```

Now we can use the command `npm run test` to run a basic check if our setup is working at any time.

> Save the file and commit.

> Run `npm version patch` to update the version number.

### Installing a dev dependency

Some dependencies are required only for development, testing and optimisation purposes and should not be included in the public-facing website or application. For example, a dependency that is used to format CSS, HTML and JS code files is unnecessary when viewing the website on a phone, as the user is interested in the code's visual output rather than the code itself. Including this dependency in the website itself will only slow down the loading time by adding more resources to be loaded.

For this reason, external dependencies that are not required at runtime are called `devDependencies` and tracked separately.

`Prettier` is an NPM package used to apply standardised code formatting to your project files. We can install Prettier as a `devDependency` with this command:

```sh
npm install --save-dev prettier
```

To test that the installation was successful, run the following command:

```sh
npx prettier -c src/js/joker.js
```

If you see a message from Prettier, it was installed correctly as a dev dependency.

> Commit changes to `package.json` and `package-lock.json`.

Now we can run Prettier with the `write` flag enabled:

```sh
npx prettier -w src/js/joker.js
```

Any formatting errors will be fixed according to Prettier's default configuration and the file saved automatically.

Check the Changes tab to see the formatting errors that were corrected.

> Commit changes to `src/js/joker.js`

We can copy and paste this command into the package file as a `custom task`:

```json
{
  "scripts": {
    "test": "node src/js/joker.js",
    "format": "prettier -w src/js/joker.js"
  }
}
```

Run the command `npm run format` to check if this `task` is working as expected.

> Save the file and commit.

> Run `npm version patch` to update the version number.

### Uninstalling dependencies

Often we need to remove a dependency from our project if it is no longer in use. A common scenario would be when an alternative package becomes available that suits the needs of your project better than an existing dependency. Let's change the dependency driving the `joker.js` file:

```sh
npm uninstall one-liner-joke
```

If you check the changes to `package.json` you will see that our dependency has been removed successfully. Now we can run the `test` task to check the status of our application: `npm run test`.

The command line will show us an error message:

```sh
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'one-liner-joke'
```

This is because we are still attempting to import this package, although it has been removed from the project.

> Commit your changes.

Install `give-me-a-joke` version `0.5.0` as a dependency:

```sh
npm i give-me-a-joke@0.5.0
```

> Commit your changes.

Next replace `joker.js` with this content:

```js
import joker from "give-me-a-joke";

joker.getRandomDadJoke(console.log);
```

> Save the file, run the test task and commit your changes.

> Run `npm version patch` to update the version number.

### Upgrading dependencies

As mentioned earlier, software packages are dynamic and are frequently updated by the development team responsible for managing them. In most cases, these updates will be minor bug fixes or performance improvements - meaning that no changes to your code will be required after an update. This is known as a minor version update.

It is important to ensure that dependencies are updated to include these improvements, which can be done in several ways.

As we are only dealing with a small number of dependencies, the simplest way to do this is to run the following command:

```sh
npm i give-me-a-joke@0.5.1
```

The package file should reflect a change from `0.5.0` to `0.5.1`. Running the test command again should show the same result. However, future updates of this package may include breaking changes.

> Do not commit your changes.

### Downgrading dependencies

Downgrading dependencies is typically less common than upgrading. However, there are cases where this is necessary. For example, a critical security issue may be found in the latest version of a dependency - waiting for the original developer to update the package with a solution may take too long. In this case, identifying the last secure version and downgrading would be the fastest option.

Let's downgrade the dependency to version `0.4.0`:

```sh
npm i give-me-a-joke@0.4.0
```

Notice that this is the exact same syntax as the first command we started with. The `@` symbol is used to specify the version of the dependency to install.

Running the test command will show an error message, meaning that we have encountered a breaking change. The console will also issue warnings that insecure dependencies have been included as part of this package!

```sh
2 high severity vulnerabilities
```

### Auditing dependencies

Now that we have (intentionally) introduced vulnerabilities into our application, we will cover how to address these using `npm audit`.

Run the audit command to receive a list of all the vulnerabilities in your project:

```sh
npm audit
```

The message may seem overwhelming, but it provides very useful information:

```
# npm audit report

axios  <=0.21.1
Severity: high
```

This tells us that the package `axios` has a serious bug in versions 0.21.1 and below.

```
fix available via `npm audit fix --force`
Will install give-me-a-joke@0.5.1, which is a breaking change
```

Here NPM has offered a shortcut to fix the issue, however it warns of the breaking change that we have already encountered. Since we are prepared for this breaking change, we can go ahead and run the command:

```sh
npm audit fix --force
```

Now we have fixed the issue and test our application:

```sh
npm audit && npm run test
```

> Commit your changes.

> Run `npm version minor` to update the version number.

## Sharing your environment

Now we have set up a simple npm package, with some environmental tooling such as `Prettier` as well as a basic test task. However, in order for another person to use this environment, we must publish our branch or push our changes to the remote repository. You can either use any of the 4 listed tools to achieve this.

- In VS Code, `Publish` or `Publish Branch`
- In Git CLI, `git push origin environmental-setup`
- In GitHub desktop `Publish Branch`

### Testing the remote repository

To test if you have hosted your changes correctly, close your current editor window, create a new folder and open the editor at that location.

Now clone your repository again:

```sh
git clone --branch environment-setup https://github.com/YourUserName/joker
```

Open this new folder in your terminal and install the dependencies:

```sh
npm i
```

And finally, run the test command to check that everything is working:

```sh
npm run test
```

### Publishing your package

Although our code is now available on a hosted repository, we may want to go further than this in terms of making our work accessible to others. One of the tools available to us is `npm publish`, which will allow us to share our package with the world via the `npm` registry.

In order to publish a package, you must first create an account on the `npm` website. Once you have done this, you can log in to your account from the command line:

```sh
npm login
```

You will be prompted to enter your username, password and email address. Once you have done this, you can publish your package:

```sh
npm publish
```

> Note: Packages must use a unique name. If you receive an error message stating that the name is already in use, you will need to change the name in `package.json`. In order to avoid this we can append our username to the beginning of the package name: `username-package`

If we used the name `example-joker` in our `package.json` file, we would be able to install our package using the following command:

```sh
npm i example-joker
```

This installs our package to the `node_modules` folder, and we can import it into our code using the following syntax:

```js
import "example-joker";
```

This approach can be very useful for splitting up large projects into smaller, more manageable packages. For example, a large e-commerce project may have `ecommerce-api`, `ecommerce-ui`, and `ecommerce-utilities` packages. They all relate to the same application and may even be written by the same team, however by dividing them up into their own packages they can be worked on and tested in isolation to reduce the chances of `regression`.

## Conclusion

This guide has covered the process of creating a fresh npm package from scratch that can be tailored to you and your preferences. Using `package.json` and a package manager such as npm allows for quick implementation of useful tools, safer management of foreign code and a universal interface that most developers are familiar with.

### Reviewing your Git history

After completing this lesson, go to your GitHub repository in the browser and view the `commit history`. The URL will look like this: `https://github.com/YourUsername/joker/commits/environment-setup`

A healthy commit history should tell a story that is easy to follow.

### Merging your changes

Finally, we should incorporate our work into the default branch of our repository. Start by pushing your local changes to your remote branch.

On your GitHub repository page, navigate to the `environment-setup` branch. There will be a notification indicating that there are changes between these branches. Click on the `Compare & pull request` button to continue.

Here you will see a summary of all of the changes you have made so far. Read through the entire page, and then write a helpful message indicating what this code represents.

Now click the `Create pull request` button.

Confirm and complete the pull request to merge your code into the default branch (`main` or `master`).

> You have now successfully completed a pull request.

Delete your current branch and change your editor to use the default branch.

Sync your repository to update the default branch.

## Additional resources

- [About npm](https://docs.npmjs.com/about-npm)
- [GitHub docs: Managing branches](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches)
- [Working with GitHub in VS Code](https://code.visualstudio.com/docs/editor/github)
- [git - the simple guide](https://rogerdudler.github.io/git-guide/)
- [npm publish](https://docs.npmjs.com/cli/v8/commands/npm-publish/)
