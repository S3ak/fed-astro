---
title: Networking
keywords: networking
tags: Development Platforms
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

This lesson will cover Domain Name System (DNS) and its history, nameservers, Content Delivery Networks (CDN) and a few command line/terminal network tools.

## Brief history

Below is an (incomplete) timeline of some of the significant events in the history of internet communication:

- **1969 - ARPANET created:** The first network of computers, the forerunner of the Internet.
- **1971 - Email developed.**
- **1974 - The beginning of TCP/IP:** Transmission Control Protocol/Internet Protocol - a set of rules that allow computers to communicate. Most communication today takes place via this protocol.
- **1975 - The first email client:** This program introduced features like reply and forward.
- **1977 - The first PC modem.**
- **1978 - The first spam.**
- **1980 - ENQUIRE software:** Tim Berners-Lee writes software at CERN that keeps track of projects and software via hyperlinks.
- **1983 - Domain Name System (DNS) created.**
- **1988 - Internet Relay Chat (IRC):** The forerunner of instant messaging.
- **1988 - The first major internet virus:** _The Morris Worm_.
- **1989 - World Wide Web was first proposed:** Tim Berners-Lee develops _The Web_ as a way to share information between scientists at universities and institutes.
- **1990 - First commercial dial-up Internet Service Provider (ISP).**
- **1990 - Web protocols released:** HTML, HTTP and URLs came into existence.
- **1990 - The first search engine:** Called Archie Index.
- **1991 - The first web page:** This page described what the World Wide Web was.
- **1993 - Mosaic released:** One of the first widely-used graphical web browsers.
- **1994 - Netscape Navigator released:** One of Mosaic’s first major competitors. Netscape eventually died in the browser wars, losing to Internet Explorer as Microsoft installed IE on all Windows machines, ensuring a practical browser monopoly.
- **1995 - Internet Explorer was released:** Derived from Mosaic.
- **1995 - Secure Socket Layer (SSL) created:** SSL made it safer to conduct financial transactions. Amazon and eBay started this year.
- **1996 - Hotmail:** The first webmail service.
- **1998 - Napster:** One of the first file-sharing applications.
- **1998 - Google goes live.**

## Domain Name System (DNS)

A domain name system (DNS) is a service that translates domain names, which are easy for people to remember, into IP addresses used by computers to identify and communicate with each other on the Internet.

When we enter a domain name into the web browser, the browser sends a request to a DNS server to resolve the domain name to an IP address. The DNS server then looks up the IP address associated with the domain name and returns it to the browser, which uses it to establish a connection to the appropriate server and access the requested website or resource.

### A brief history of DNS

DNS was first developed in the early 1980s to make the Internet more user-friendly. Before DNS, users had to remember the IP addresses of the servers they wanted to connect to, which were difficult to remember and often changed.

The first version of DNS in 1983 included the creation of the domain name hierarchy, with the top-level domain (TLD) such as .com, .edu and .gov.

The United States government initially controlled the management of DNS, but in 1998, the Internet Corporation for Assigned Names and Numbers (ICANN) was created to take over the management of DNS and oversee the introduction of new TLDs.

A timeline for some of the TLDs:

- **1983:** .com, .edu and .gov
- **1987:** .net
- **1989:** .org
- **1995:** .aero, .museum and .coop
- **2000:** .biz and .info
- **2001:** .name
- **2004:** .jobs, .travel and .pro
- **2005:** .mobi
- **2012:** .xxx
- **2018:** .app, .dev, .page
- **2019:** .shop, .blog, .book, .art
- **2022:** .dojo, .team, .happy, .inc

### Registering a domain name

To register a domain name, we must first choose a unique domain name (with TLD) that is not already in use and then register it with a domain registrar.

A domain registrar is a company that manages the registration of domain names and assigns unique domain names to users. These companies are accredited by ICANN, the organization responsible for coordinating the assignment of unique domain names.

When buying a domain name, the contact information provided is added to the WHOIS database, a public record of all registered domain names and their associated contact information.

You can check the information for a particular site using a lookup service like [Whois.com](https://www.whois.com/whois/)

Some of the world's biggest domain registrars include GoDaddy, Namecheap and Name.com.

### Nameservers

A nameserver is a specific type of server responsible for resolving domain names to IP addresses.

Usually, when we register a domain, the registrar will provide us with at least two nameservers, and they need to be configured on the domain records to point the domain to the desired IP.

The registrar provides the specifics of how to configure the nameservers.

## Content Delivery Networks (CDN)

A content delivery network (CDN) is a system of distributed servers that are used to deliver web content to users based on their geographic location. A CDN aims to improve the performance and availability of a website by bringing content closer to the users who request it.

A CDN typically consists of a network of servers strategically placed in data centres worldwide. These servers are connected to the main web server, and when a user requests a web page, the CDN redirects the request to the server closest to the user, known as the "edge server", which will deliver the requested content.

CDN caching was discussed in the caching lesson, and some of the other benefits of using a CDN include the following:

- **Improved performance:** A CDN can significantly improve the load times and overall website performance by delivering content from a server geographically closer to the user.
- **Increasing availability:** By distributing the content across multiple servers, a CDN can help ensure that a website remains accessible even if one server goes down.
- **Reducing traffic:** CDN helps to reduce the traffic on the main server by caching and serving the popular contents from the edge servers.

Some of the most popular CDNs include:

- **Cloudflare**
- **Amazon CloudFront**
- **Akamai**
- **Fastly**

## Command line/terminal tools

There are several command line tools we can use when working with networks:

### ping

'ping` is used to test the connectivity between two network devices. It can be used to check if a website or server is up and running.

```
ping noroff.no
```

Output:

```
PING noroff.no (194.63.248.52): 56 data bytes
64 bytes from 151.101.0.81: icmp_seq=0 ttl=56 time=79.170 ms
```

The IP address returned by the ping command above is the address the `noroff.no` domain name is mapped to via DNS.

### tracert/traceroute

`tracert` (Windows) or `traceroute` (Mac, Linux) is used to track the path that a packet takes from the source to the destination.

```
tracert noroff.no
or
traceroute noroff.no
```

Output:

```
traceroute to noroff.no (194.63.248.52), 64 hops max, 52 byte packets
 1  192.168.100.1 (192.168.100.1)  2.027 ms  7.569 ms  1.318 ms
 2  31.146.255.245 (31.146.255.245)  3.171 ms  18.914 ms  16.205 ms
```

The IP addresses in the output are the addresses of the different routers encountered from the source (typically your computer) to the destination (in the case above, noroff.no)

### curl

`curl` is used to transfer data over the Internet. It supports various protocols such as HTTP and FTP and can be used to make HTTP requests, and check response status and headers.

The command below will perform a GET request to the domain name and output the response, which in this case will be the HTML of the web page:

```
curl https://www.noroff.no/
```

Output:

```
<!DOCTYPE html>
// rest of the response
```

## Web servers

A web server is a program that runs on a computer and listens for incoming requests from web clients such as browsers and apps.

When a request is received, the server processes the request and sends back a response, which typically includes the requested web page or API response.

These servers handle tasks such as handling multiple simultaneous connections, security, serving static files, and passing requests to other software for further processing.

Some common web server software includes:

- **Apache**
- **Nginx**
- **Microsoft IIS**
- **LiteSpeed**
