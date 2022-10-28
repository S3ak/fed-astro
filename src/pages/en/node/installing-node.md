---
title: Installing Node
description: node, npm, workflow
tags: Node, NPM, Workflow
sidebar: node
---

## Introduction

Although it is recommended to use NVM in order to manage your NodeJS installation, this tutorial will cover the process of installing NodeJS directly onto your computer without a `Version Manager`.

All installation files can be found on the NodeJS website: [NodeJS Downloads](https://nodejs.org/en/download/)

## NVM

NVM is the recommended way to install and manage NodeJS Versions on your computer.

You can find the tutorial for installing Node with NVM here: [Installing Node with NVM](https://noroff-content.gitlab.io/feu/node/installing-nvm.html).

## MacOS

Start by downloading the Mac installer for the correct version of Node you require from the link above.

The installer package will walk you through the process. When the installation process has finished, check that it worked correctly by running the command:

```bash
node -v
```

This should output the version of NodeJS that you have installed.

## Linux

The easiest way to install NodeJS on Linux is to use the built in package manager for your distribution. For example, users with `apt` would install NodeJS using the following command:

```bash
sudo apt install nodejs
```

You can also install using the downloadable package from the link above.

Once installed, check that it worked correctly by running the command:

```bash
node -v
```

This should output the version of NodeJS that you have installed.

## Windows

Start by downloading the Windows installer for the correct version of Node you require from the link above.

The installer package will walk you through the process. When the installation process has finished, check that it worked correctly by running the command:

```bash
node -v
```

This should output the version of NodeJS that you have installed.
