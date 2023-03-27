---
title: What are CMSs and why use them
description: sample
tags: Content Management Systems
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Content Management Systems make it easy to create, update and organise content on a website. For people with minimal development knowledge, this can be a great way to control their website in maintainable ways.

When working with freelance clients, they’ll likely want a Content Management System like WordPress to control their website rather than having to keep coming to you to update pages.

Throughout the content management course, we’ll be working on one website called ‘Flower Power’, an e-commerce business that sells bouquets through their website.

![Guy standing infront of servers](https://cdn.midjourney.com/5fca01b7-afc3-420f-8ecf-d736957c4ddb/grid_0.webp)

## Database

One significant difference between CMSs and regular static websites is their use of databases to show content to users. When content is added to a website using a CMS, the content and other meta-data get stored in this database.

When a client visits a URL on the website, the application calls the data from the database and displays it on the page for the user according to the styles set in a theme. These pages aren’t hard coded but are built dynamically.

This separation of content and how the content is displayed makes CMSs easy for most people to use. The application handles the building of the actual pages, and all the user is doing is creating new entries in a database.

## CMS options

There are several different CMSs to choose from. They all have advantages and disadvantages. There is a mix of paid and open-source CMS options.

CMSs can be divided into main catergories. Headed and headless.

### Headed

Head CMS, also known as "Headed CMS", is a type of Content Management System that combines content management and frontend presentation in one platform. This means that the CMS provides pre-built templates and themes for website design, allowing users to create and manage content, as well as customize the website's appearance and layout, all in one platform. Head CMS is usually more beginner-friendly and easier to set up, but can be limited in terms of scalability and customization options.

![Diagram of traditional CMS](/public/images/mvc-cms-diagram.jpg)

#### [WordPress](https://wordpress.com/)

WordPress is by far the most popular, with about 60% of the share of CMS websites. There’s a very large developer community and an extensive codex to help you make most of the CMS.

WordPress works on PHP with a SQL database to store data.

#### [Joomla!](https://www.joomla.org/)

Joomla! has the second-largest share in the CMS market. It offers more out of the box functionality than WordPress, but this also comes at the cost of more complexity.

#### [Drupal](https://www.drupal.org/)

Drupal is popular with larger websites and enterprises. It’s less bloated than the other two CMS options, but this comes at the expense of requiring more technical knowledge.

---

### Headless

A headless CMS is a content management system that separates where content is stored (the “body”) from where it is presented (the “head“). It separates information and presentation. Headless CMS is a type of CMS that is decoupled from the frontend and focuses solely on content management. This means that the CMS is only responsible for managing content and does not provide any frontend presentation or design features. Instead, the content is delivered via an API to any frontend that needs to display it, such as a website, mobile app, or IoT device. Headless CMS requires more technical knowledge and development resources, but offers more flexibility and customization options, making it a popular choice for businesses and organizations that require a more complex, personalized digital experience.

Headless CMS can be divided into services you pay monthly and self hosted option that you manage yourself.

![Diagram of headless CMS](/public/images/headless-cms-diagram.jpg)

### Content as a service (CaaS)

These web services provide all the the CMS already configured and ready to go. CaaS is a cloud computing service that provides a platform for managing and delivering content over the internet. Unlike traditional CMS solutions, CaaS stores and manages content independently, allowing it to be delivered to any frontend via API. This provides greater flexibility and scalability for businesses and organizations that need to manage and distribute large amounts of content across multiple channels. By storing and managing content in the cloud, CaaS can also help reduce costs by eliminating the need for on-premise infrastructure and maintenance.

#### [ContentFul](https://www.contentful.com/)

Contentful is a cloud-based headless CMS that provides a platform for managing and delivering content over the internet. With Contentful, users can create, manage, and deliver content independently from the frontend, allowing it to be delivered to any frontend via API.

#### [Sanity](https://www.sanity.io/)

The Best CMS for Next.js. Sanity is an open-source, API-based CMS that pairs perfectly with Next.js.

#### [Storyblok](https://www.storyblok.com/home)

With Storyblok, users can create and manage content independently from the frontend, allowing it to be delivered to any frontend via API. This approach provides greater flexibility and scalability for businesses and organizations that need to manage and distribute large amounts of content across multiple channels, such as websites, mobile apps, and IoT devices. Works well with React.

#### [Airtable](https://www.airtable.com/) (Database)

Airtable is a platform for building collaborative applications. It is a great way to visualise your database.

### Self Hosted

This is when you purchase a hosting option and manage the deployment of your backend CMS.

#### [Strapi](https://strapi.io/)

Strapi is the leading open-source headless CMS. It’s 100% JavaScript and fully customizable.

#### [Jekyll](https://jekyllrb.com/)

A Jekyll plugin that provides users with a traditional CMS-style graphical interface.

#### [Wordpress API](https://developer.wordpress.org/rest-api/)

The WordPress CMS enables headless development through a built-in REST API and offers extensions to enable methods like GraphQL via a rich plugin ecosystem.

#### [GitHub Pages](https://pages.github.com/)

Hosted directly from your GitHub repository. Just edit, push, and your changes are live.

You can view a full list of headless CMS at [Jamstack.org](https://jamstack.org/headless-cms/)

| Head CMS                                                                                                                               | Headless CMS                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Traditional CMS with a built-in frontend                                                                                               | CMS that is decoupled from the frontend and only manages content                                                      |
| Content is managed and displayed on the same platform                                                                                  | Content is managed on one platform and displayed on multiple channels, such as websites, mobile apps, and IoT devices |
| Offers pre-built templates and themes for easy website design                                                                          | Requires development skills to create custom frontend and integrate with various channels                             |
| Usually more beginner-friendly and easy to set up                                                                                      | Requires more technical knowledge and development resources                                                           |
| Offers a range of built-in features for content management and presentation, including WYSIWYG editors and drag-and-drop page builders | Focuses solely on content management, but offers more flexibility and customization options                           |
| Can be limited in terms of scalability and customization options                                                                       | Can be more scalable and flexible, allowing for the creation of complex, personalized experiences                     |
| Examples include WordPress, Drupal, and Wix                                                                                            | Examples include Contentful, Strapi, and Sanity.io                                                                    |

In summary, head CMS is a traditional CMS that combines content management and frontend presentation in one platform, while headless CMS is decoupled from the frontend and focuses solely on content management. Head CMS is usually more beginner-friendly and easier to set up, but can be limited in terms of scalability and customization options. Headless CMS requires more technical knowledge and development resources, but offers more flexibility and customization options, making it a popular choice for businesses and organizations that require a more complex, personalized digital experience.

**WATCH (OPTIONAL)**

Video: [Considering a CMS for Web Design](https://www.linkedin.com/learning-login/share?account=43268076&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fconsidering-a-cms-for-web-design%3Ftrk%3Dshare_ent_url%26shareId%3D9sUazNFmQo%252BSz4bn6ZmgdA%253D%253D)

---

## Lesson Task

![Wordpress website](https://cdn.midjourney.com/1c90be65-be34-4877-9f56-7b83bad0fcda/grid_0.webp)

### Brief

Sign up to [wordpress](https://wordpress.com/) and create a website.

You can use [Mixo](https://app.mixo.io/) to generate a business idea.

[Unsplash](https://unsplash.com/) to get stocck images.

[Pexels](https://www.pexels.com/videos/) for video.

[Chat GPT](https://chat.openai.com/) for content.
