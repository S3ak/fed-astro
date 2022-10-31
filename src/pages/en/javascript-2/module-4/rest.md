---
title: REST
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

REST (REpresentational State Transfer) is an architectural style for providing web standards across systems on the Internet. It is there to make it easier for systems to communicate with each other.

A system that complies with these standards can be called a RESTful system.

![Web API](../images/javascript-2/async/rest-api.png)

## How REST APIs work

REST APIs communicate using HTTP requests to perform CRUD (create, read, update and delete) operations.

An example is fetching data from an API (read) or creating a new user account (create).

## Principles of REST APIs

A REST API should follow these five REST design principles:

### Statelessness

REST APIs are stateless. This means that each request should include all the necessary information for the server to process. The server should not store anything about the HTTP requests that the client has made. In short, each network request should be seen as a new query.

### Uniform interface

All network requests for a resource should always look the same, no matter where the request is coming from.

### Client-server decoupling

REST is a distributed approach where the client and server applications are completely separate (decoupled) and independent of each other.

### Caching

Resources should be cacheable on the client or server when possible.

### Layered system

In a REST API, the network requests and responses can go through different layers. You should not assume that a client and server application connects directly to each other. There might be other servers or services between these connections.

## Additional resources

[Code Academy: What Is Rest](https://www.codecademy.com/article/what-is-rest)

[Tech Target: REST (REpresentational State Transfer)](https://www.techtarget.com/searchapparchitecture/definition/REST-REpresentational-State-Transfer)

[Understanding JavaScript REST APIs: 4 Critical Methods](https://hevodata.com/learn/javascript-rest-api/)

[IBM: REST APIs](https://www.ibm.com/cloud/learn/rest-apis)
