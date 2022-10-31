---
title: WordPress REST API
description: sample
tags: Content Management Systems
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Working with PHP can be cumbersome, and the scope of what we can develop becomes quite limited by the theme we’ve chosen.

What if we wanted the advantage of the admin panel for creating content, but wanted to be able to customise how that content is displayed by writing our own HTML, CSS and JavaScript? For that, we can use the WordPress REST API.

Up until now, we’ve been using external APIs that we don’t control. But with WordPress, we’re able to use it to create our own API. All the content management happens on the WordPress admin panel, but displaying that content is handled on a separate website that we build using HTML, CSS and JavaScript.

It’s essential to understand the difference between the WordPress files on the web host, which gives us an API, and the JavaScript in our project, which lets us call that API.

This is called a Headless CMS since the content management isn’t used to generate a ’Head’. We create the ‘Head’ ourselves.

## Access JSON

The WordPress REST API is a CRUD API, meaning we can Create, Read, Update and Delete content. We can Read public data for a WordPress website without authentication, which includes posts and pages created for the site.

If we want to update any of the content on the API outside of the admin panel, we will need to use authentication, but we won’t be going into this in this lesson.

To access the API root for your WordPress website, you can simply add /wp-json to the end of the URL.

You can try this on your local version of your WordPress site for ‘Flower Power’. You will likely get something that looks like this:

![Access JSON](../images/cms/2-4-accessjson.jpg) \_ _Please note: the image is from Firefox. If using another browser, the JSON might be formatted differently._

## Routes

‘Routes’ are an address we can use to access information from our site. These routes are added after the URL to view wp-json. For example, because our ‘Flower Power’ website uses WooCommerce, we can add /wc/store/products to the end of our URL, and we get a list of products on our website.

![Routes](../images/cms/2-4-routes.jpg)

We can then use these routes to fetch data from the API and build websites with it. You can find a list of your website’s available routes on your API’s root at /wp-json. Two common routes you may work with are /wp/v2/posts to get a list of the last ten posts, and /wp/v2/pages to get an array of pages.

### The \_embed parameter

To access related resources for an item, you can add the \_embed parameter to your url which will give you a list of related information. For example, if you set featured images on your posts, you can use /wp/v2/posts?\_embed to get featured images added to the API call.

### The API Documentation

As with all APIs, the best way to know how to use and work with them is to read the API documentation. Make sure that you’re using the resources that the API developers have given you.

**READ**

- Handbook: [WordPress REST API](https://developer.wordpress.org/rest-api/)
- Documentation: [WooCommerce API](https://woocommerce.github.io/woocommerce-rest-api-docs/#introduction)

As you can see, working with WordPress’s REST API is quite simple. If you want more information about using WordPress’s REST API, you can watch the below video.

**WATCH**

Video: [WordPress: REST API (2h 7m)](https://www.linkedin.com/learning/wordpress-rest-api-2/restful-wordpress-through-an-api?u=43268076)

## Making the site headless

Because we’re creating our own front-end and not using the front-end that WordPress makes, we can hide it from the public.

To do this, we can use a plugin like https://wordpress.org/plugins/headless-mode/, which hides the front-end from the public and allows us to redirect users to our new website. Once you’ve installed the plugin go to wp-config.php in your WordPress files and add the following code (replacing example.com with your website’s address):

```php
define( 'HEADLESS_MODE_CLIENT_URL', 'http://www.example.com' );
```

## Strapi.io

Suppose you’re looking for a headless CMS option other than WordPress. In that case, one option is https://strapi.io/ which is a Node.js based open-source solution which allows you to create a customisable REST API and control the content from an easy-to-use admin panel.

<hr>

## Activities

### Activity 1

**WATCH**

The following video on WooCommerce authentication and using variable products in WooCommerce. https://vimeo.com/648484068/f12b15d1e1

### Activity 2

**WATCH**

The below video: https://vimeo.com/546521086/e7b75810eb

<hr>

## Lesson Task

### Brief

Using the WordPress REST API, create a separate, standalone webpage (not built as a page on WordPress) that lists the products you created with WooCommerce on your WordPress site in Module Assignment 1.

Because you're using the API, each time an administrator creates or updates a product, the change will pull through to your product list page.

Your product page should be made using HTML, CSS and JavaScript and include a list of all the product names, images and prices.

### Level 1 Process

1. Create the page by fetching data from the WordPress REST API on your web host and displaying it on the page.
2. Create a new product on your WordPress admin page, and make sure it pulls through to your products page.

**WATCH**

Attempt to work with the WordPress REST API first, but if you are confused or would like more info on the WordPress REST API, please watch this vimeo video: [WordPress REST API](https://vimeo.com/503498883/ec0bc11c2a)
