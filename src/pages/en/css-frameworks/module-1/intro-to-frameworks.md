---
title: Introduction to Frameworks
description: CSS, frameworks
tags: CSS Frameworks
sidebar: css-frameworks

layout: ../../../../layouts/MainLayout.astro
---

## Introduction

In software production, a `Framework` is any tool that provides structure to your code. As a front end web developer it is common to hear about `JS Frameworks`, `UI Frameworks` or `CSS Frameworks`, however these tools underlie every aspect of the computing environment.

As such an integral part of the discipline, there are some conventions that help to use a framework with more success:

- **Documentation is important.**
- **A framework is biased, by design.**
- **Do not overwrite the framework code.**

### Documentation

When searching for documentation, ensure that you have a note of the version of the framework that you are using. For example, if you are using Bootstrap 4.6, you be searching for https://getbootstrap.com/docs/4.6/.

Documentation language can be difficult to understand or access at first, as it is often terse and may not always include code examples. Understanding these resources is an indispensible part of working with modern web applications.

### Framework Bias

A framework is built around a set of _assumptions_ about the needs of its users. Not all of these assumptions will apply to your project at all times, and you may not agree with some. You do not have to agree with all of the biases of a framework but it important to be aware of them.

For example, in many CSS Frameworks, the element `<i>` is used to show an icon. Semantically, this element represents _italic_ text, in a similar way to `<b>` which represents **bold** text. This represents an _assumption_ about the use of this element on behalf of the developer by the framework.

A part of understanding these biases is being aware of `The X Way` of achieving a particular result. For example, achieving a responsive layout can be done in many different ways using CSS & HTML - however by using Bootstrap you would be expected to achieve this in `The Bootstrap Way`.

### Extending a Framework

A Framework is only a starting point to creating an application, providing a layer of assistance and structure to built on top of. As such, you will need to customise, configure and extend a framework in order to get the best out of it.

When these situations arise, changes should never be made to the framework code itself - unless you have `forked` the framework repository and intend to contribute changes to the framework project itself.

Editing framework source code creates a number of problems:

- The framework cannot be updated in future without destroying your changes.
- Documentation is no longer accurate to your version of the framework.
- The support community will be unable to help as they cannot see your changes.

Instead of editing the source code, we can either `configure` or `extend` the framework. Frameworks should `expose` important options or settings for configuration - and will have `The X Way` to extend them too.

## Why do we use frameworks?

If you have a CSS file that you add to most projects to speed up development, you are already using a CSS Framework. At their most basic, they are simply there to save time and effort. At their most complex, they enforce or encourage best practices.

Without CSS Frameworks, for example, every project would require CSS to be written from scratch. However, many modern web applications share similarities - not only in their visual style, but also in their functionality and user experience. These _challenges_ have been tackled many times before, with the most popular solutions being represented within CSS Frameworks.

By providing useful styles in a predictable class name system, important styling tasks can be performed quickly. This leaves more time to work on functionality or implementing design changes.

The major frameworks can be described as _ubiquitous_ - meaning that they are so common that most developers will be aware, or familiar with them. The ability to transfer skills from one project to a completely unrelated project is another key benefit of using a framework. If two employers use a single framework, mobility between these companies will be easier for a developer working at the other.
