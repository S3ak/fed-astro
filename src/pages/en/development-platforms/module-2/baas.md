---
title: Backend as a Service
keywords: baas, firebase, amplify, supabase, appwrite
tags: Development Platforms
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Backend as a Service (BaaS) are platforms that provide all the backend services required by modern web applications, providing SDKs and APIs that we can build a frontend on top of.

These services included authentication, storage, database and serverless or cloud functions.

Rather than coding our own REST or GraphQL API and implementing our authentication and authorisation system, we can take advantage of one of these services and greatly increase development speed.

Google Firebase is probably the most well-known BaaS, and AWS Amplify is another offering from one of the cloud behemoths.

Although these two offer many well-tested features, using them does have potential downsides, including cost and vendor lock-in.

Other free, open-source (FOSS) options like Supabase and AppWrite can either be self-hosted or hosted via their hosting service.

## Brief history

Here is an (incomplete) timeline for some of the BaaS offerings. There are many other services than the ones listed below.

- **2011:** Firebase developed as a real-time database for chat apps
- **2014:** Google acquires Firebase
- **2015:** AWS launches its Mobile Hub, which includes BaaS features for mobile app development
- **2016:** Firebase expands to include authentication, storage, hosting, and more
- **2017:** AWS Amplify launches
- **2019:** AppWrite starts as a passion project
- **2019:** Supabase starts development as an open-source alternative to Firebase

## Common features

The BaaS space is fluid and constantly evolving, different providers may offer different features and functionalities, and some providers may be more specialised in certain areas than others.

Some common features provided by many BaaS providers include:

### Authentication

BaaS providers often include built-in user authentication and authorisation support, allowing us to implement login and registration functionality for our sites easily.

Often various authentication options are offered, such as email and password and social logins (e.g. Google, Facebook, Twitter, etc.).

Functionality for handling user account management tasks, such as password resets and email verification, is included too. Additionally, some vendors provide the ability to manage and assign roles and permissions to different users.

Some BaaS providers also offer multi-factor authentication (MFA) support, where in addition to a password, a user has to provide another form of authentication to verify their identity.

### Storage

Storage allows developers to easily store and retrieve files such as images and videos.

Storage features provided by BaaS providers vary, but they often include functionality such as:

- File storage and retrieval
- File versioning
- File metadata management
- Security and access controls
- File size limitations
- File upload and download capabilities

Files are usually stored in a cloud-based object storage, which stores files, images, videos, and other unstructured data as objects rather than blocks.

Storage services can be accessed via APIs, which allows us to store and retrieve files programmatically. This makes adding functionality such as file upload on our sites easy.

BaaS providers typically also offer the ability to scale the storage capacity so it can handle large amounts of data and traffic.

### Database

Many BaaS providers provide a cloud-based, NoSQL database as they are designed to handle large amounts of data, and are optimised for reads, writes, and scaling.

However, a service like Supabase is built on top of a relational database, PostgreSQL.

The databases provided by BaaS services can be accessed via APIs, which allows us to perform CRUD operations (Create, Read, Update and Delete) on the data programmatically. They also provide libraries and SDKs for popular programming languages, making it easy for us to interact with the database in our preferred language.

Additionally, BaaS providers often provide built-in functionality such as indexing, querying, and data validation. They also offer security and access controls, such as user authentication and authorisation, to help protect the data.

### Serverless/Cloud functions

Serverless or Cloud Functions (these are just two of their names) are a common feature provided by BaaS providers. They allow us to run code on the provider's infrastructure without the need to provision or manage servers. This allows for more cost-effective and scalable backend development.

Typically a variety of options for cloud functions are offered, such as:

- Event-driven functions: triggered by specific events, like a change in the data or a new user registration.
- Scheduled functions: which run at a specific time or interval
- HTTP functions: which can be triggered by HTTP requests

We can create and manage cloud functions using the provider's web console, CLI, or SDKs. Libraries and SDKs for popular programming languages are provided, making it easy for us to create and deploy cloud functions in, our case, JavaScript.

Cloud functions are usually stateless, meaning they don't store any data between calls, but they can be integrated with services like databases to store and retrieve data.

### Integration

Many BaaS providers offer integration with other services such as analytics, monitoring, and other third-party APIs.

### Real-time

Some BaaS providers offer real-time functionality, allowing developers to build apps that update in real-time as data changes.

## Pricing

The pricing structure for any of the vendors is subject to change at any time, so you will need to consult the official pricing pages for up-to-date information.

Short overviews of pricing for the individual vendors can be found in the vendor sections below.

## Vendor lock-in

When using BaaS providers, vendor lock-in can be an issue.

This occurs when we become heavily reliant on the provider's proprietary infrastructure and APIs, making it difficult to switch to a different provider or a self-hosted solution later on. This is because the codebase and architecture of the application may need to be significantly refactored to work with another provider's infrastructure and APIs.

Additionally, data stored in a BaaS provider's proprietary database may not be easily portable to a different provider or a self-hosted solution. The data may need to be manually migrated.

To mitigate vendor lock-in, we can choose BaaS providers that offer open-source solutions or use open standards for data storage and APIs. We can also consider building the application so it can be easily ported to a different provider or a self-hosted solution later.

## Open-source/self-hosted providers

Compared to proprietary providers like Firebase and AWS Amplify, open-source BaaS providers like Supabase and Appwrite have their own advantages and disadvantages.

Advantages include:

- **Avoid vendor lock-in:** Open-source solutions can be more easily moved to a different provider or to a self-hosted solution later on, which can help to avoid vendor lock-in.
- **Lower costs:** Open-source solutions are typically less expensive than proprietary solutions.

Disadvantages include:

- **Less support:** Compared to proprietary solutions, open-source solutions may have less community support and fewer resources for troubleshooting and problem resolution.
- **More complexity:** Open-source solutions may necessitate more technical knowledge to set up and manage, increasing the complexity of the development process.

## Firebase

[Firebase](https://firebase.google.com/) is one of the most popular BaaS platforms and provides us with many tools and services for building and managing web (and mobile) applications.

Some of the many services offered by Firebase include:

- **Authentication:** authentication, authorisation, and onboarding services for managing user accounts. This includes email and password authentication and identity providers like Google, Facebook, etc.
- **Cloud Firestore:** a NoSQL document-based database that offers real-time data syncing. It is the newer database offering, with **Realtime Database** being the first.
- **Cloud Functions:** a serverless platform for running backend code.
- **Cloud Storage:** for storing and serving user-generated content like images and videos.
- **Hosting:** for deploying web applications.

Firebase currently offers two pricing plans, a free plan and a pay-as-you-go. To integrate Firebase with other services, you will likely need a pay-as-you-go account. As with all providers, the pricing structure is subject to change at any moment, so always consult the official [pricing documentation](https://firebase.google.com/pricing).

Note that although the number of free document reads and writes offered for Cloud Firestore may seem like a lot, these can be consumed quickly depending on the nature of your site's functionality.

Firebase provides thorough [documentation](https://firebase.google.com/docs/build) and code snippets for various programming languages, including JavaScript.

Firebase shares infrastructure like Firestore and Storage with Google Cloud Platform, and you can add products from GCP as your project grows.

## AWS Amplify

[AWS Amplify](https://aws.amazon.com/amplify/) is a fully managed service built on top of other AWS services, such as Amazon Cognito (authentication and authorisation) and Amazon S3 (storage).

Like Firebase, Amplify offers many services, including authentication, file storage, real-time database, and it also includes ways to create [REST or GraphQL APIs](https://docs.amplify.aws/lib/restapi/getting-started/q/platform/js/).

Amplify also provides a CLI (Command Line Interface) and libraries for various platforms such as React, React Native, Angular, and Vue.js. This allows developers to integrate Amplify services into their existing applications easily.

[AWS Amplify Studio](https://docs.amplify.aws/console/) is, like its docs say, a visual development environment for building fullstack web and mobile apps. It includes things like a React form builder and a Figma-to-React code tool.

For up-to-date Amplify pricing, please consult the [official pricing documentation](https://aws.amazon.com/amplify/pricing/).

## Supabase

[Supabase](https://supabase.com/) markets itself as an open-source alternative to Firebase and offers similar functionality.

Supabase projects are built on top of PostgreSQL and leverages the database's functionality whenever possible.

Unlike Firebase and AWS Amplify, it is possible to [self-host](https://supabase.com/docs/guides/self-hosting) a Supabase project on our own infrastructure using Docker. It's also possible to use Supabase Cloud for easier hosting.

Supabase offers a free tier, and its pricing plans can be found [here](https://supabase.com/pricing).

## AppWrite

[AppWrite](https://appwrite.io/) is another open-source BaaS provider that offers similar services to those mentioned above.

Like Supabase, it offers a self-hosting option. It is built upon open-source technologies like Docker, which gives us more control over the infrastructure.
