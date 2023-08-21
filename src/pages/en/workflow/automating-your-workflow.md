---
title: Automating your Workflow
keywords: workflow
tags: Workflow
layout: ../../../layouts/MainLayout.astro
---

## Introduction

Our coding environment has now become both more complex and powerful. However, all of our tasks are manual. If we forget to lint or format our code, we will end up with a mess. Instead, we can configure our environment with additional tools to automatically run these helpful tasks every time we build, save or commit our work. Task automation is the first step towards supercharging your `workflow`.

> This lesson has the following outcomes:
>
> - You can install and utilise pre-commit hooks
> - You can configure your workspace to run tasks on save
> - You can create a simple build pipeline

### Setting up your repository

Please ensure that any other branches have been merged into your default branch. Also, that your default branch is both selected and up to date.

Create a new branch called `task-automation` and push it to your remote. This is the branch where all changes in this lesson will be made within.

## Task automation

### Hooks

A hook is a generic term in software development that refers to a piece of code run before or after a specific event. We can understand hooks by making some real-world analogies. For example, before you ride a bicycle, you should put on a helmet. After you have finished riding the bicycle, you should remove the helmet. This can be described as:

- Pre Riding Bicycle Hook: Put on Helmet
- Post Riding Bicycle Hook: Remove Helmet

Since our `workflow` involves many different `events`, we have a number of opportunities to create useful `hooks` that will assist in automating our tasks.

#### Pre-commit

The pre-commit hook runs before a commit is made to your repository. This means that formatting and syntax mistakes will be checked before code can be committed. If there are errors that ESLint cannot automatically fix, the commit will be prevented.

#### Save

Most code editors provide a way of performing tasks when a file has been saved. For example, suppose there is a formatting error in a JavaScript file, and the file is saved. In that case, the editor will automatically run Prettier or another language formatting tool over the file.

#### Build

Some tasks are best suited for running before or after a build has been completed. For example, PostCSS for removing unused styles or testing the output to ensure the build completed correctly.

### Creating pre-commit hooks

Pre-commit hooks are created using `shell scripts` which are not covered as part of this course. Instead, we can install a package that will generate these scripts to speed up our development process.

`Mrm` is a tool designed to provide numerous shortcuts for package configuration. We will use it to create a pre-commit hook that will automatically run ESLint and Prettier on all files in our repository with the following command:

```sh
npx mrm@2 lint-staged
```

This command will examine the existing `environmental tooling` we have created and generate the appropriate scripts for us using two tools: `lint-staged` and `husky`.

If you examine the changes, you will see two new files and updates to the package file.

> Commit your changes.

Now we must edit the package file to use our own tasks:

```json
"lint-staged": {
  "*.js": [
    "prettier --write",
    "eslint --fix"
  ],
  "*.html": [
    "prettier --write"
  ],
  "*.scss": [
    "prettier --write"
  ]
}
```

These commands instruct `lint-staged` to a specific command for a specific file type in our package.

> Save and commit this file.

> Run `npm version patch` to update the version number.

To test that the configuration was successful, create a new file and insert a style/syntax error:

```js
console.log("Intentional Error");
```

> Save and commit your changes.

If the commit was successful, your file should have been automatically formatted and linted.

> Revert your last commit.

We know now that simple fixes will be applied automatically each time we attempt to commit a file.

#### Handling unfixable errors

If you attempt to commit work that has an error that ESLint cannot automatically fix, the commit will be prevented. If you are using git on the command line, you will see a clear readout of the issues reported by ESLint. If you are using the built in git tool within Visual Studio Code, click the "Show Command Output" button and you will see the same output.

Introduce another intentional error to your test file:

```js
helloWorld();
```

As `helloWorld` is never defined - this will produce an error. As ESLint cannot know whether this call should be replaced, or whether something is missing from the file - it will not attempt to resolve this issue. The solution is to either remove the call or add the function to the file.

> Unstage and discard your changes.

Unfixable errors must be resolved prior to a commit. In a professional workplace, it is not acceptable to make commits without the correct formatting and syntax rules applied. These rules will vary from application to application and from company to company, which is why knowledge of configuration files is important.

Look for these errors in the file browser inside Visual Studio Code, files containing errors are marked in red. The `Problems` tab also gives a helpful breakdown of potential issues in your project.

### Creating a Save hook

We have already set up a pre-commit hook that will prevent badly formatted code from being committed to a repository. However, it can also be useful to run linting and formatting tools each time you save.

This must be done differently from how we have configured our project to automatically format on commit. Before proceeding, search for and enable the `Prettier - Code formatter` extension in VS Code. You can find the homepage for this extension [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

> Most editors allow for a save hook to be utilised; however, this guide will use Visual Studio Code. If you are not using this editor - documentation should be available online with the following search pattern: `"my-editor" lint on save`.

#### Opening settings

Open the `Command Palette` with `Ctrl + ,` or `Cmd + ,`. Click on the `Workplace Settings` tab and search for `Format`. You will see a number of settings relating to formatting; we are interested in `Format on Save`. Tick the checkbox and open the new `.vscode/settings.json` file. It should look like this:

```json
{
  "editor.formatOnSave": true
}
```

> This settings file is local to your `environment`, meaning that settings changes made here will not affect other projects.

Test this out by intentionally introducing formatting errors to your test file:

```js
console.log("Intentional Formatting Error");
```

> Save the file.

If this was successful, you should see the formatting changes applied.

> Discard your changes.

#### Setting a default formatter

To ensure reliable results, we must specify that we want to use Prettier as our default formatter. We can do this by selecting Prettier from the list in the Settings menu, or simply by adding this line to our `.vscode/settings.json` file:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

#### Adding Linting rules

Next, we can add linting rules to this file to auto fix errors on save:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
}
```

This instructs Visual Studio Code to run ESLint on any javascript files saved to attempt to auto-fix errors found. Test this out by introducing a syntax error to `src/index.js`:

```js
console.log("Intentional Syntax Error");
```

> Save the file.

If this was successful, you should see both formatting errors and syntax corrections applied.

> Discard your changes.

#### Sharing your configuration

The changes we have made to our workflow have allowed us to use Prettier and ESLint on save. However, we cannot share this configuration with other developers at present. This is because the `.vscode` folder is automatically ignored by the editor. If we shared our repository with another developer, the save hook configuration would not be available to them.

Workspace settings are ultimately the choice of each developer, so instead of _enforcing_ these settings, we can provide them as an optional resource. Copy your `.vscode/settings.json` file to a new file called `.vscode/settings.json.default`. This will act as a static copy of the settings file that another developer can use to edit their own workspace.

> Save and commit your changes.

> Run `npm version patch` to update the version number.

## Conclusion

We now have a multifaceted environment that can be used to compile, lint, format, test and serve our code in a professional manner. This configuration is easy to share, extend and reuse for other projects. By creating and sharing build hooks, we can ensure that our code will always be error-free and correctly formatted even when collaborating with others.

### Reviewing your Git history

After completing this lesson, go to your GitHub repository in the browser and view the `commit history`. The URL will look like this: `https://github.com/YourUsername/joker/commits/task-automation`

A healthy commit history should tell a story that is easy to follow.

### Merging your changes

1. Push your local changes to your remote branch.
2. Create a new pull request from your branch to your default branch.
3. Confirm and complete the pull request.
4. Delete your current branch and change your editor to use the default branch.
5. Sync your repository to update the default branch.

## Additional resources

- [Typicode: Husky](https://typicode.github.io/husky/)
- [GitHub: Husky](https://github.com/typicode/husky)
