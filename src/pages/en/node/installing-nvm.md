---
title: Installing NVM
description: node, npm, nvm, workflow
tags: Node, NPM, NVM, Workflow
sidebar: node

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Before you can use NodeJS, it must be installed in one of two ways. You can either install a specific version of NodeJS to your computer or you can install a `Node Version Manager` (NVM) tool in order to manage multiple versions of NodeJS.

Different versions of NodeJS offer different tools and features. Some packages will only run with a specific NodeJS version and will require you to switch your installation in order to use them. It is therefore recommended to use a `Version Manager`, although this adds more steps to the process.

> Please make sure that you do not have an existing installation of NodeJS on your computer before attempting to install NVM. If you have installed NodeJS before, you should uninstall it first.

## Installing on Unix (MacOS, Linux)

Run either the `curl` or `wget` command to install depending on which is available to you:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Close and reopen your terminal and check that the installation was successful by using the command:

```bash
nvm --version
```

## Installing on Windows

The best way to manage packages such as `nvm` on Windows is to install the Windows Subsystem for Linux (WSL) and follow the Unix installation instructions. WSL allows for Unix commands to be used inside Windows, something that will be useful throughout the course.

You can read more about WSL here: [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about)

There is also a package called `nvm-windows` which serves as a parallel project to `nvm` for Windows users who cannot use WSL. You can read about that project here: [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).

## Installing NodeJS with NVM

Once NVM is correctly installed on your computer, you can use the command `nvm ls` to list all of the available versions. From these versions, select the version you would like to use (or use the latest `lts` release if you are not sure):

```bash
nvm ls
```

```
default -> lts/* (-> v16.16.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v16.16.0) (default)
stable -> 16.16 (-> v16.16.0) (default)
lts/* -> lts/gallium (-> v16.16.0)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.20.0 (-> N/A)
lts/gallium -> v16.16.0
```

From this list, the latest stable release would be `lts/gallium` which can be installed like so:

```bash
nvm install lts/gallium
```

## Switching NodeJS Versions with NVM

If you already have another version installed and would like to switch to another installed version, you can use this command:

```bash
nvm use <version>
```
