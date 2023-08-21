---
title: Using a Bundler
keywords: workflow
tags: Workflow, bundler
layout: ../../../layouts/MainLayout.astro
---

## Introduction

As the size and ambition of a project grows, it will typically require more resources of a wider variety. A bundler is a workflow tool designed to collect and consolidate all of a project's dependencies including styles, scripts, fonts, images and markup.

For example, a simple project may only require a single CSS file and a single JS file. In this case the need for a bundler is not apparent as we can manage these dependencies quite easily. Compare this to a complex application with many features, package dependencies and many individual scripts or stylesheets. A bundler's job is to minimise the overhead spent managing reference by `moving`, `transpiling`, `minifying` and `building` code.

## Bundler Concepts

Although there are many competing bundlers, there are commonalities that can be helpful to know when approaching one of these for the first time.

### Key Directories

As the primary task of a bundler is to `build` code from a `source` it is common to have these represented in a project as folders:

```
1. /my-project/build
2. /my-project/src
```

Example 1 is called the `output directory` or `outDir`. This is the final destination of our built code and the location of the contents that a user will consume via a web application. This is commonly known as `dist`, `build` or `public` depending on the framework or bundler at hand.

Example 2 is called the `input directory` or `inDir`. This is the "raw" code and the only place where code changes should occur in a project. Every time an important code change is made here it must be rebuilt by the bundler before it can be consumed.

### Compilation and Transpilation

Every bundler must have the ability to facilitate code `compilation` or `transpilation`, particularly for JavaScript. A bundler should allow for a specific input or output version for code assets.

#### Compilation

Compilation refers to a process of transforming code from a "higher order" to a "lower order" syntax.

For example, `SCSS` code is `compiled` into `CSS`. Likewise, `TypeScript` is `compiled` into `JavaScript`. In both cases a higher order (more complex) syntax is converted into a lower order (less complicated) syntax.

This process continues from the Browser, to your Operating System all the way to your CPU where it is executed in it's simplest possible form - binary.

#### Transpilation

Transpilation is a similar concept, however, the goal is to convert from one version of a language to another version. With every `major version` of each language new syntax and/or features are introduced and/or deprecated. These changes are referred to as `breaking changes`. Consider this example:

`ES5.js`

```js
require("example.js");
```

`ES15.js`

```js
import "example.js";
```

Both files use the extension `.js` and both are ostensibly `valid JavaScript` - however we cannot run `ES15.js` in a `NodeJS` environment. This is because the `NodeJS runtime engine` is only designed to `interpret` a particular version of `JS`.

### NPM Scripts

Another feature common to bundlers is how they `expose` their functionality to their users (us in this case). All major bundlers expose a `Command Line Interface (CLI)` that can be used to trigger various build related tasks.

Like any other `CLI command` we can use these in our `package.json` file to create helpful shortcuts. Consider this fictional example:

```json
{
  "name": "Example",
  "scripts": {
    "build": "bundler build index.html",
    "watch": "bundler build --watch index.html",
    "start": "bundler index.html --open"
  }
}
```

These three scripts (or tasks) provide similar but subtly different outcomes:

- `build` processes the contents of the project once.
- `watch` processes the contents of the project every time something changes.
- `start` runs the package without processing for faster reloading.

Exactly how these commands behave is different in different tools, however this is a key concept to be aware of as you investigate options and begin using a bundler for the first time.

## The Ideal Bundler

When approaching a crucial tool it is useful to understand what qualities would make `The Ideal Tool` before investigating the options. A good bundler:

- Uses time and computer resources well
- Produces a reliable output or a clear error
- Handles a wide range of file types or pipelines
- Uses a well tested default configuration
- Allows for deeper configuration for specialist needs

## The Bundler Marketplace

Due to the common design principles mentioned earlier it is unusually straightforward to migrate from one bundler tool to another, in comparison with something like migrating a JS framework. Furthermore, due to the ideals listed above, the benefits of switching to a more effective tool can be considerable. Making this switch could mean less time spent in development, deploying work, finding errors, testing or experimenting. This has lead to a highly competitive marketplace for category of tooling.

At the time of writing `rollup` is the most popular tool for this purpose, having recently replaced `WebPack` in this position. `esbuild` is in third place. Other bundlers that deserve worthy mention include `parcel`, `bower`, `grunt`, `gulp`, `requirejs` and `browserify`.

## Vite

For the purposes of this lesson and future lessons, we will be using `Vite` as our bundler. Vite makes use of both `rollup` and `esbuild` for different tasks to produce a highly efficient, stable and well configured tool.

### Installing Vite

In your terminal, change directory to the location where you want to create your new Vite project, then run the following command:

```bash
npm create vite@3.1.0
```

You will be prompted to enter a `project name` and select a `template`. For this lesson, we will be using the `Vanilla` `JavaScript` template. This will create a new directory with the name you entered and install all the dependencies for you.

```bash
✔ Project name: … vite-project
✔ Select a framework: › Vanilla
✔ Select a variant: › JavaScript

Scaffolding project in /Users/User/Repos/Noroff/Workflow/vite-project...

Done. Now run:

  cd vite-project
  npm install
  npm run dev
```

Follow the commands as suggested, replacing `project-name` with the name that you chose in the first step of the process:

```bash
cd vite-project
npm install
npm run dev
```

This will install and start Vite's live server, allowing you to view all of your code changes live in the browser.

## Additional resources

- [Vite](https://vitejs.dev/guide/)
