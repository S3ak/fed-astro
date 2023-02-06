---
title: The World Wide Web and communication technology
description: sample
tags: WCT
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

The web, also known as the world wide web, consists of a number of servers connected together. A server is a system or computer located somewhere in the world readily available to serve some resources, such as websites. Users can connect to the web from their various devices, such as mobile phones, laptops, etc., via the internet from their web browser using a URL(Uniform Resource Locator). As a trainee in frontend development, you need to get an overview of the different pieces that make up the world wide web.

In this lesson, we will look at:

- What the web, hypertext and internet are.
- How hypertext is shared on the World Wide Web.
- Technologies that aid the sharing of information on the World Wide Web
- Various tools needed to explore the World Wide Web

## The Library Metaphor

Imagine you go to your local library. You are looking for a book on a subject. You find this book, borrow it, and take it home. As you begin to read it, you notice that another book is mentioned several times in the text. Eventually, you realise that this book has some information you need, so you decide to go back to the library.

You take out this second book, take it home, and repeat the process. Once again, you see this book mentions still other books, meaning more trips to the library. Instead of going to your local library every time you come across a footnote to a referenced text, wouldn’t it be convenient if these texts could be connected in some logical way?

It was this desire to have associative links connecting multiple texts which lead to the use of hypertext.

## Tim Berners-Lee and the World Wide Web

Tim Berners-Lee, a British computer scientist, worked at the largest internet node in Europe, CERN. During his time there, a lot of information was being shared, but the sharing process was cumbersome and time-consuming. Berners-Lee’s "great idea" was to combine the existing technologies of the internet and Hypertext to create the World Wide Web. He wanted to be able to share knowledge and information in a "Web" of documents using hypertext. Working with Robert Cailliau, he proposed a model for the World Wide Web and developed the first web browser/editor, appropriately named WorldWideWeb.

![Tim Berners-Lee](/images/wct/wct-tim-berners-lee.jpg)

Berners-Lee chose not to license or patent the technology but allowed it to be used by anyone. Some of the first web pages were descriptions of the technology and instructions on how it could be used. The world's first web server was based at CERN and the first web page was launched on the 6th of August, 1991. This page is still active - [have a look](http://info.cern.ch/hypertext/WWW/TheProject.html).

## HyperText Transfer Protocol (HTTP)

Developed by Berners-Lee's team, HTTP (HyperText Transfer protocol) is the network protocol used to distribute and link web pages. It essentially functions as a client/server protocol where the client (a web browser) will request information from a server (a web server).

With HTTP, all the communication is done using plain text, which is why we use HTML (HyperText Markup Language) to structure the text files. The data transfer across HTTP is not encrypted.

HTTPS stands for HyperText Transfer Protocol Secure and means that the communication between the server and the client is encrypted using either TLS or SSL.

A few reasons to use HTTPS are:

- If clients input data on your website, that data can be securely sent.
- Google prefers websites that use HTTPS and ranks them higher in their search results.
- It can protect your website from attacks.

## Internet and TCP/IP Protocol

The internet is the global system of interconnected computer networks that uses the internet protocol suite (TCP/IP) to communicate between networks and devices. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies.([https://en.wikipedia.org/wiki/Internet](Wikipedia)). The servers in the world wide web serve their content via internet. This implies that the world wide web won't be accessible without internet.

TCP/IP stands for Transmission Control Protocol/Internet Protocol. It is the communication protocol that guides the transfer of data from one node to another.

## Uniform Resource Locator (URL)

URL stands for Uniform Resource Locator and gives you the specific location of a given resource. On the web, a "resource" could be an HTML page, a CSS file, an image, or other item that is available. A URL allows us to identify where on the World Wide Web we can find a specific file.

It is up to the owner of a website to make sure that URLs to their website work and that the resource can still be found at that location. If you change folders or file names, it can affect other sites linking to your content, and you might need to redirect for a user.

## Domain Name System (DNS)

### Top-level domains

When we talk about web domains, we are talking about addresses connected to servers or other devices. Top-level domains, as the name implies, are the highest web domains in the domain name system hierarchy. There are currently over 1000 top-level domains; examples are .com, .org, and .net.

![New York Times domain](/images/wct/wct-nytimes.png)

![Wikipedia domain](/images/wct/wct-wikipedia.png)

Each device that connects to a network using the Internet Protocol (IP) is assigned an IP address written using a notation that looks like 2001:4860:4860::8888. IP addresses are great, but they aren’t easy to remember – imagine how difficult it would be to remember all the IP addresses of the websites you visit daily! This is where a Domain Name System (DNS) comes into play.

A DNS server will take an IP address and look it up in a table to find the domain name associated with the IP address. It will then send this name associated with this IP address and you can then type words into your web browser, rather than just numbers. It will work if a DNS server can find a name that matches the IP number. This also works in reverse – a DNS can translate a domain name to an IP address, and this process is referred to as resolving.

While a "master list" is kept by DNS authority, it would be too much work for a single server to handle every single domain name request. For this reason, there are multiple domain name servers distributed around the globe. Each top-level domain has its own authoritative name server. If your local DNS does not have a name for a given IP address, it will contact other DNS servers to obtain it from them. DNS is also used for email addresses, instant messaging, and other instances where a name is easier to remember than an IP address.

In summary, here is what the Domain Name System offers:

- Mapping of IP addresses to domain names and vice versa
- All mapping is stored in a database
- The DNS database is distributed

<hr>

### Browser

Modern web browsers have what is called ‘Developer Tools’, which help us test and debug our code in the browser. This is very useful as sometimes what we think we’re writing in the code doesn’t translate on an actual web browser.

Chrome, Safari, and Firefox are all popular browsers. Choosing which one to use is somewhat about personal preference. Chrome is certainly the most popular browser and so a good choice. We’d also like to suggest trying out Firefox. There are a few reasons to choose Firefox, including its better security and arguably a more intuitive developer experience.

Try different browsers to find what works best for you.

<hr>

## Activities

### Activity 1

**READ**

More indepth of [browser developer](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools) tools

### Activity 2

**READ**

Interview: [Vint Cerf: We Knew What We Were Unleashing on the World](https://www.wired.com/2012/04/epicenter-isoc-famers-qa-cerf/) (30m)  
Vint Cerf talks about the history of how TCP/IP came to be the standard for network communication.

### Activity 3

**READ**

Article: [Dec. 9, 1968: The Mother of All Demos](https://www.wired.com/2010/12/1209computer-mouse-mother-of-all-demos/) (30m)

<hr>

## Lesson task

### Goal

Familiarise yourself with IP addresses.

### Level 1 process

Try using an IP address instead of just typing the domain name of a website into your browser. Go to [https://dnschecker.org](https://dnschecker.org) and find the IP address of a website you regularly use. Then copy the IP address and paste it into your browser.

> **Hint:** Remember to check whether the website uses http or https.

### Level 2 process

Use only the URL to navigate around Google. Try using this format: [https://www.google.com/search?q=insert+search+term+here](https://www.google.com/search?q=insert+search+term+here)

Then try add "&tbm=vid" to the end of your URL to navigate to the videos page. (tbm=isch takes you to images and tbm=nws takes you to news). When browsing sites over the next few days, look out for parameters in the URL and try figure out what they're used for and adjust them.

Go to [http://httpbin.org/get?name=insert+name&colour=insert+colour](http://httpbin.org/get?name=insert+name&colour=insert+colour) and see how the info in the URL gets sent to the server. Change “insert+name” and insert your own name. You'll see the data displayed in JSON. Try adding other variables to the URL.

Next, go to [http://httpbin.org/forms/post](http://httpbin.org/forms/post) and fill in the form. On the submission page you'll see the data was sent securely and doesn't appear in the URL.
