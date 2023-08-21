---
title: Hosting
keywords: hosting
tags: Development Platforms
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

To share our website with others or receive feedback during development, we must host it on a publicly accessible server. After all, only we can access our local website.

Web hosting allows us to make our website available by providing the necessary infrastructure and maintenance to keep it running smoothly.

There are various types of web hosting services available, and we will take a brief look at the following:

- shared hosting
- dedicated hosting
- virtual private servers (VPS)
- cloud hosting
- static website hosting
- specialist hosting

## Brief history

In the early days of the Internet, web hosting was provided by universities and research institutions.

As the Internet became more popular, more people began to create websites, and the need for web hosting grew.

- **August 1991:** The first website was launched and was hosted on a server at CERN (the European Organisation for Nuclear Research) in Switzerland.
- **mid-1990s:** Commercial web hosting companies started to appear, offering shared and dedicated hosting.
- **1997:** cPanel is released, making it easier for users to manage their websites.
- **late-1990s:** The first VPS offerings start to appear.
- **2002:** The rise of content management systems (CMS) like WordPress makes website creation more accessible to the general public.
- **2006:** Amazon Web Services (AWS) is launched, making cloud hosting widely available for the first time.
- **2008:** Google Cloud Platform (GCP) first launched as the Google App Engine.
- **2008:** GitHub Pages is launched.
- **2010:** Windows Azure (later Microsoft Azure) becomes generally available. This was Microsoft's answer to Amazon and Google's cloud offerings.
- **mid-2010s:** managed WordPress hosting becomes more common.
- **mid-2010s:** hosting services that specialise in easy deployment for developers begin to appear. Netlify and Vercel are two of the biggest players in this space.

## Types of hosting

### Shared hosting

Shared hosting is the most common form of hosting in which hosts provide hard-drive space and other resources like memory (RAM) to multiple users on one server.

This is the cheapest form of paid hosting and requires far less technical knowledge than operating a dedicated or virtual private server. We must ensure the hosting matches our stack requirements, like the server-side language (PHP, .NET, Node, etc.) and database requirements. For example, we will need PHP and a MySQL database to host a WordPress site.

Most shared hosts will give us access to a management tool like CPanel through which we can manage files, FTP users, databases, etc.

Most shared hosting providers oversell their servers, meaning many users' sites run on one server and compete for its resources. The hosts bet that most sites will have limited user interaction and not use many resources, but a busy site on a shared host can interrupt the experience of other sites on the host. If we experience slow load times or database timeouts, it may be time to upgrade our hosting to a shared plan with more resources or to change our type of hosting to one of the options below.

If we use free shared hosting, our site will have very limited resources and will almost certainly perform poorly.

### Dedicated hosting

If we sign up for dedicated hosting, ours will be the only site running on the server.

Our site will be the only one utilising the server’s resources and will perform well. Still, the disadvantages include a much higher cost and a greater amount of technical knowledge required as we will be responsible for installing and updating all relevant software, including security patches.

With the rise of cloud hosting and adjacent services, dedicated hosting is a much less common option for most developers.

### Virtual Private Servers (VPS)

VPS hosting is considered a middle ground between shared hosting and dedicated hosting.

It is a type of service that allows multiple users to share a single physical server while still having their own dedicated resources, such as CPU, memory, and storage.

One of the benefits of VPS hosting is that it allows us to scale our resources as our needs change without having to move to a different type of hosting.

### Cloud hosting

Cloud hosting is a hosting service that uses the resources of a network of remote servers, or a "cloud," to host websites and applications.

Instead of hosting a website or application on a single server, cloud hosting uses the resources of multiple servers, which can be located in different parts of the world.

Cloud hosting is based on a pay-as-you-go model, where users only pay for the resources they consume.

#### Amazon Web Services (AWS)

AWS provides various hosting options, from single-page websites written in frameworks like React to enterprise solutions requiring high performance.

AWS was the first major operator in the cloud space, and many services run on top of AWS infrastructure.

An overview of their hosting options can be found here: [https://aws.amazon.com/websites/].

#### Microsoft Azure

Azure is a major player in the cloud hosting space with a large market share.

It, too, offers a wide variety of options, descriptions of which can be found here: [https://learn.microsoft.com/en-us/azure/developer/intro/hosting-apps-on-azure].

#### Google Cloud Platform (GCP)

Like the two above, GCP offers a plethora of hosting solutions.

You can explore their options, including their click-to-deploy solutions here: [https://cloud.google.com/solutions/web-hosting].

### Static website hosting

These services are optimised for hosting websites that are built with only static files, such as HTML, CSS, and JavaScript.

Static websites are pre-built and do not require server-side processing to generate their output.

Netlify and Vercel are two of the most well-known vendors, though they could just as easily fall under the cloud hosting section.

GitHub Pages is a very convenient option to use if we are already using GitHub for our repository.

### Specialised hosting

Specialised hosting platforms like WordPress hosting are services that are specifically optimised for running WordPress.

These platforms are designed for those who want to focus on WordPress without needing to handle complicated server management. They typically offer services including pre-installed WordPress software, automatic updates, backups, and security measures such as malware scanning and firewalls.

## Deploying code to a server

### File Transfer Protocol (FTP)

FTP was one of the first protocols used for file transfer over the Internet, first being standardised in the 1970s.

FTP was designed for use on closed networks and did not provide adequate security for use on the public internet. In the late 1990s, a new protocol called Secure File Transfer Protocol (SFTP) was developed, which is based on the same principles as FTP but uses an encrypted connection for added security.

Although still widely used, many developers and businesses opt for cloud-based file storage and transfer services, which offer more features and greater security than traditional FTP.

#### FTP clients

FTP clients like FileZilla can manually transfer files from our local machine to the server.

However, this method is vulnerable to human error, as we might transfer incorrect files to the wrong folder on the server or accidentally delete files on a production site.

When moving a large number of files to the server, be sure to check that all files have been transferred.

#### Automatic transfers

FTP transfers can be automated via automation servers like Jenkins or similar tools like GitHub Actions. Transfers can be triggered by a push to a particular branch in a repository, providing a convenient and less error-prone method for code deployment.

### File managers

Web hosting control panels often provide built-in file managers that allow us to manage files on the server. The file managers provide an interface for performing common file management tasks, such as uploading, downloading, editing, and deleting files, and creating and managing directories.

Although convenient, this method of transferring files is also susceptible to human error and is not a scalable way to manage code deployment.

### Git

A very common way these days to deploy code is via Git.

When a user pushes code changes to a repository on a service like GitHub, Gitlab, or Bitbucket, the service will notify a host platform like Netflify, Vercel, Railway, AWS, etc. of the update.

The host will pull the updated code from the repository using Git and then build and deploy it to its servers.

## Configuring hosting

How we can configure our hosting depends on what kind of hosting we use and the particular vendor.

### cPanel

cPanel is a popular web-based control panel for managing web hosting accounts.

It provides an interface for managing various aspects of a web hosting account, such as creating email accounts, managing databases, and viewing website statistics. It also includes a file manager.

Additionally, cPanel provides easy access to tools for managing domains, setting up FTP accounts, and managing security settings.

It is widely used by many hosting providers.

### Build settings

Hosting services like Netlfiy and Vercel include build settings, which allow us to configure how our website is built and deployed.

They typically allow us to specify the build command (the command that is run to build the website), the output directory (the directory where the built site should be located) and any environment variables that should be used during the build process.

If you are having trouble deploying on these platforms, the build settings are the first places to look.

The second place to look is the logs.

## Logs

Logs are an essential tool for understanding what is happening on a web server and can be very helpful in determining the cause of failures.

Logs can provide detailed information about the requests and responses a web server handles, as well as any errors or issues that may occur.

Different types of web hosts have different log management systems, but the logs should be reasonably easy to find regardless of the host.

If we are having trouble deploying on a platform and our build settings are correct, the next thing to do is to check the log for errors and warnings.
