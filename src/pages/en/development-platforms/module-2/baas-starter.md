---
title: Baas Starter Frontend Code
keywords: baas, spa
tags: Development Platforms
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

This is a brief discussion of [one potential way](https://github.com/NoroffFEU/baas-starter) to arrange frontend code for a single-page application (SPA) website using vanilla JavaScript, Vite and Tailwind. The site would be backed by one of the BaaS providers, though no specific provider code is included here.

There are endless ways to arrange a frontend project; you don't have to follow the arrangement or file or folder names used here.

## Folder and files

Since this is a SPA, there is only one `.html` file in the project, located in the root folder and linked to `/src/main.js`.

Apart from configuration files, the other file of interest in the root folder is the `.env` file. This will hold environment variables, and because we are using Vite, the variables should be prefixed with `VITE_`. API keys, App IDs and other settings can be stored in this file.

`/src/main.js` could include any setup calls required by the BaaS providers. In this case, it just imports and calls the router, which handles the navigation.

### templates

The files in the `templates` folder hold the HTML that will be inserted into `index.html` in a specific element when the route changes. `index.html` contains a navigation element, and other elements like a footer or sidebar could be added to wrap the inserted template HTML.

#### router

The `src/router` folder contains two files.

`routes.js` holds a `routes` object that contains a `template` and `title` property for each path and for a default 404 path. A `description` property could also be added here.

`router.js` contains several functions. The repo contains detailed comments for each.

The `handleRouteChange` function does a lot of the work by retrieving the path name, fetching the object whose key matches the path name from the `routes` object, and calling the `renderTemplate` function with the route object. This function will fetch and insert the HTML into the page and update the page title.

There is also a switch statement, which is calling the `handleRegisterForm` function if the path name is `register`. Other functions that handle form submissions, other DOM events or render the results of backend calls can be added here.

Route protection can also be added to the router. For example, the `/admin` path should require an authenticated user.

#### handlers

This folder could be called something else, like `listeners`.

There is one handler function that adds a submit event listener to the register form.

The callback function `submitRegisterForm` retrieves the relevant input values (you may want to add password confirmation on a register form) and passes the values to a `register` function exported from the `backend` folder.

`submitRegisterForm` assumes that an object with a `user` or an `error` property is returned from the `register` function.

If a `user` property is present, the call is successful, and we can navigate elsewhere.

If an `error` property is present, we can call the `displayFormError` function, passing it the form and error object.

### backend

This folder could be called something else like `server`, `api`, `baas`, etc.

This folder's files would hold wrapper functions for the specific Baas provider code.

Any setup, packages or methods would be imported and/or called.

All authentication functions, for example, could go in a single file or in separate files in an `auth` folder.

If we return any errors from these functions, then we can handle them in the handler functions.

### ui

We can keep UI-related code in a `ui` or `components` folder.

We have only one function, `displayFormError`, which will display an error message on a supplied form. The only notable thing about this function is that it tries to retrieve a custom error message from a `messages` object. This is useful if you don't want to display the error messages returned from the BaaS providers.

## Potential additions

There is an endless amount we could add to this starter project, including:

- A `utils` folder holding files containing utility or helper functions for things like formatting
- A `views` folder holding functions that fetch and display lists of database results or single results. (Any code interacting directly with the backend should go in the `backend` folder)
- More functions in the `ui` folder, for example, a function that displays errors not related to form submissions
