---
title: Building with Tailwind
keywords: react, styling, tailwind
tags: JS Frameworks
sidebar: css-frameworks
permalink: css-frameworks/building-with-tailwind.html
folder: css-frameworks
---

> This lesson is optional and will not be assessed.

## Introduction

In this lesson, we will be building a simple app using Tailwind CSS.

We'll be using Create React App to create this [small app](https://tailwind-card.vercel.app/).

## Installing a Tailwind Application

Clone [this repository](https://github.com/NoroffFEU/css-frameworks-lesson-3-2-tailwind-cra) to your computer.

Once you have cloned the repo, enter the folder that is downloaded:

```bash
cd css-frameworks-lesson-3-2-tailwind-cra
```

We can now install our dependencies now that we are in the root directory of the repo:

```bash
npm install
```

We can start the app once the dependencies are finished being installed.

Run the following command to start the app, which will launch in a browser window once it has started:

```bash
npm start
```

Once the browser has opened, you should see a single card containing a title, body of text, image and button.

## Customising our Tailwind config file

Let's say we wanted to add a custom colour to Tailwind. We can do this in the `tailwind.config.js` file.

We are going to extend our colours to include a custom colour called `custom-pink` so that it is available to us to use.

Open the `tailwind.config.js` file and paste in the following code:

```js
module.exports = {
  purge: {
    enabled: false,
    content: ["./src/**/*.js", "./src/**/*.jsx", "./public/index.html"],
  },
  theme: {
    extend: {
      colors: {
        "custom-pink": "#ff00ff",
      },
    },
  },
  variants: {},
  plugins: [],
};
```

If you have a look a the code above, you will see that we’ve extended the colours available in Tailwind to include our custom-pink colour.

We should again rebuild our CSS so Tailwind can generate new classes from our custom-pink custom colour. Run the following command to rebuild our tailwind.css file:

```bash
npx tailwindcss build -o src/tailwind.css
```

We can now use this custom colour to change any of the colours on our site, such as background colours, text colours etc.

Let’s now make use of this new custom-pink class. Find the following `<p>` tag in `App.js`, line 8:

```html
<p className="text-2xl text-gray-700 font-bold">
  Becoming a full-stack developer
</p>
```

Now change the text-gray-700 text to text-custom-pink, so it looks as follows:

```html
<p className="text-2xl text-custom-pink font-bold">
  Becoming a full-stack developer
</p>
```

Save the file and you should now see that the heading for our card has now become pink, meaning that it's using our new custom-pink variation.

## Extracting component classes with @apply

Sometimes we may want to extract common utility patterns so they can easily be reused. Let’s change one of our containers to be a CSS component class.

Look in App.js at the outermost element and you will see a div that looks as follows:

```html
<div className="max-w-xl mx-auto px-8 py-4 bg-white rounded-lg shadow-lg"></div>
```

Replace its class name with “card-wrapper” so that it looks as follows:

```html
<div className="card-wrapper"></div>
```

Now open the “index.css” file and add this to the bottom of the file:

```css
.card-wrapper {
  @apply max-w-xl mx-auto px-8 py-4 bg-white rounded-lg shadow-lg;
}
```

Save the file. You should not see any visual changes as our CSS is still the same.

All of the utility classes that were being used have now been combined to a CSS Component class called card-wrapper.

## Purging our Tailwind CSS

One of the main principles of Tailwind is that it creates a very large number of utility classes for us to use while we are developing a website, which we then “purge” to remove all the classes we aren’t using. Tailwind only expects you to use a small number of these classes. Once you are eventually done developing your website, you would use Tailwind to “purge” all of the classes you aren’t using.

If you have a look in the `src` directory you will see there is a file called tailwind.css. This contains a lot of CSS (over 180k lines of code) and is an incredibly large file size in the world of web development (3mb+). If we purge the CSS from this file, it becomes smaller than 20kb.

Purging the CSS is quite straightforward and there are two ways of doing so.
You specify a NODE_ENV=production flag in an .env file. This is the typical way of purging CSS as it will only purge your CSS when you are making a final build of your project. We will not be using this method at this stage.
The other way is to add an enabled: true flag to your `tailwind.config.js` file. This is not ideal when developing but it’s great for demonstration purposes. This is the method we are going to use.
Open the `tailwind.config.js` file. You will see at line 3 there is an enabled: `false` flag.

Change this value to true:

```js
module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.js", "./src/**/*.jsx", "./public/index.html"],
  },
  theme: {
    extend: {
      colors: {
        "custom-pink": "#ff00ff",
      },
    },
  },
  variants: {},
  plugins: [],
};
```

Now let’s rebuild our `tailwind.css` file so that it gets purged of the classes we are not using.

```bash
npx tailwindcss build  -o src/tailwind.css
```

Once this is done, you will see that the `tailwind.css` file has reduced significantly in size (< 20kb). This project would now be ready to be released to the public, typically referred to as a “production build”.

If you are struggling, feel free to checkout the branch “answer” which contains a finished version of this project.

## Lesson Task

### Brief

In this task you will create a React app and style it with Tailwind.

Download the XD file from [this repo](https://github.com/NoroffFEU/tailwind-introduction-lesson-task).

### Process

Use Create React App and Tailwind to create a responsive website from the design.

### Example answer

You can find an example solution in the [answer branch](https://github.com/NoroffFEU/tailwind-introduction-lesson-task/tree/answer) of the repo.

## Resources

- [Lesson Source Code](https://github.com/NoroffFEU/tailwind-introduction)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Configuration](https://tailwindcss.com/docs/configuration)
