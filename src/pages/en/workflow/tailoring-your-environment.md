---
title: Tailoring your working environment
keywords: workflow
tags: Workflow
layout: ../../../layouts/MainLayout.astro
---

## Introduction

Although we have a simple working environment already, there are many more tools we can incorporate into our `environment` to make our `workflow` more effective.

This lesson will also cover using a `Linting` tool to automatically catch syntax errors in your code.

> This lesson has the following outcomes:
>
> - You can configure environment tooling to your preference
> - You can lint, format and serve your code using tasks

If you do not have your own `joker` package from a previous lesson, you may clone [this tag](https://github.com/NoroffFEU/joker).

### Setting up your repository

Please ensure that any other branches have been merged into your default branch. Also, that your default branch is both selected and up to date.

Create a new branch called `formatting-linting` and push it to your remote. This is the branch where all changes in this lesson will be made within.

## Preparing our package

Next, let's make some improvements to the `src/joker.js` script to make it consumable in HTML. Overwrite the contents of this file with this code:

```js
import joker from "give-me-a-joke";

export function dadJoke() {
  return new Promise(function (resolve, reject) {
    joker.getRandomDadJoke(resolve);
  });
}
```

This code exports a function called `dadJoke`, which `returns` a `Promise`. When the `Promise` is resolved, it will `return` a joke.

> Save and commit the file.

> Run `npm version patch` to update the version number.

If we run our test command again, it will do nothing. This is because the `src/js/joker.js` file is now arranged as a `module export` and does not call any functions on its own.

Instead, we need a new file `src/js/joker.test.js` to `import` and call this function for testing purposes:

```js
import { dadJoke } from "./joker.js";

export async function testDadJoke() {
  const joke = await dadJoke();
  const testPasses = Boolean(joke);
  console.log(joke);
  console.log("Dad Joke Test:", testPasses ? "PASSED" : "FAILED");
  return testPasses;
}

testDadJoke();
```

> Save and commit the file.

> Run `npm version patch` to update the version number.

We can run this file from node to check that it works:

```sh
node src/js/joker.test.js
```

Now we can update this in our package file as a test:

```json
{
  "scripts": {
    "test": "node src/js/joker.test.js",
```

> Save and commit the file.

Then test it out to make sure it is working: `npm test`.

### Updating npm tasks

Since we now have more than one javascript file - we also need to change our formatting task to include all JavaScript files inside the src folder:

```json
{
  "scripts": {
    "test": "node src/js/joker.test.js",
    "format": "prettier -w src/**/*.js"
```

> Save and commit the file.

> Run `npm version patch` to update the version number.

Test out the formatting command to make sure it is working.

## Configuring Prettier

So far, we have been using Prettier with the default settings. This is a great way to get started quickly, but as we add more code, we may find that some settings are undesirable.

Prettier can be configured with custom rules by creating a configuration and/or ignore file.

Create a new file in the root of your project called `.prettierrc.json` and add the following code:

```json
{
  "singleQuote": true
}
```

This instructs Prettier to use single quotes `'` instead of double quotes `"`. This is largely a matter of personal preference and will not affect the code itself.

> Save and commit your changes.

Run the format task again and check the changes in your editor.

> Commit your changes.

> Run `npm version patch` to update the version number.

You can find all of the options for Prettier here: https://prettier.io/docs/en/options.html

## Linting Code

### What is Linting?

A Linter is a tool designed to analyse the code you have written and warn or automatically fix issues it detects. This tool goes much further than a language formatter (such as Prettier) and can prevent you from making mistakes in your code.

There are many linting tools; however, we will focus on ESLint.

### Installing ESLint

ESLint is installed as a development dependency:

```sh
npm install eslint --save-dev
```

> Commit your changes.

### Setting up ESLint

Next, we need to initialise ESLint. This will create a `.eslintrc` file in your project folder that contains the rules that ESLint will use:

```sh
npx eslint --init
```

This will ask you a series of questions. Here are the recommended answers:

```
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

> Commit your changes.

Next, we need to add a `lint` task to our package file:

```json
"scripts": {
  "lint": "eslint src/**/*.js"
},
```

> Save and commit your changes.

Test this command out:

```sh
npm run lint
```

You should see two errors in the code:

```sh
/joker/src/joker.js
  4:41  error  'reject' is defined but never used  no-unused-vars

/joker/src/joker.test.js
  8:21  error  Unnecessary semicolon  no-extra-semi

✖ 2 problems (2 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

As indicated in this message, there are two syntax errors in the code - and one can be automatically resolved with the `--fix` option:

```json
"scripts": {
  "lint": "eslint src/**/*.js",
  "lint-fix": "eslint src/**/*.js --cache --fix"
},
```

Update your gitignore file to ignore the `.eslintcache` file.

> Save and commit your changes.

Run the new task to resolve one of the errors:

```sh
npm run lint-fix
```

The number of errors should now be reduced to one: `'reject' is defined but never used  no-unused-vars`. This error is too complicated for ESLint to automatically fix and requires some human input. The error states that a variable has been declared but not used. To resolve this error, we either need to remove the variable - or use it somehow.

Although removing it might be quicker, by using this variable, we can improve the code:

```js
export function dadJoke() {
  return new Promise(function (resolve, reject) {
    try {
      joker.getRandomDadJoke(function (joke) {
        resolve(joke);
      });
    } catch (error) {
      reject(error);
    }
  });
}
```

Now, if something goes wrong with the joke engine, this error will be passed back in a similar way to a successful response. This will be useful in the future.

> Run the format task, save and commit your changes.

> Run `npm version minor` to update the version number.

## Conclusion

This guide has covered installing and configuring Prettier for formatting code automatically, ESLint for catching syntax errors automatically. By including these tools in your devDependencies - you can ensure that your environment will always run in the same way on any computer.

### Reviewing your Git history

After completing this lesson, go to your GitHub repository in the browser and view the `commit history`. The URL will look like this: `https://github.com/YourUsername/joker/commits/formatting-linting`

A healthy commit history should tell a story that is easy to follow.

### Merging your changes

1. Push your local changes to your remote branch.
2. Create a new pull request from your branch to your default branch.
3. Confirm and complete the pull request.
4. Delete your current branch and change your editor to use the default branch.
5. Sync your repository to update the default branch.

## Additional resources

- [Prettier: Configuration File](https://prettier.io/docs/en/configuration.html)
- [Prettier: Options](https://prettier.io/docs/en/options.html)
- [ESLint: Rules](https://eslint.org/docs/rules/)
