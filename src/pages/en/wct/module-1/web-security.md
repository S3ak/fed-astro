---
title: Web Security
description: sample
tags: WCT
sidebar: wct

layout: ../../../../layouts/MainLayout.astro
---

# Introduction

This is intended to introduce you to web security and some common web security practices in front-end development.

**NOTE:** This lesson contains 2 activities that you should complete.

## What is web security? 

Web security is an act of protecting the information on the world wide web from web security threats. Just as you protect your house from intruders, web security aims to protect the web from intruders (security threats). Web security threats could be addressed on the server side, client side, or any other infrastructure.

In this lesson, we will be covering front-end web client security because it is important for you to understand what risks there are as a front-end developer. It is widely known that clients provide a large risk surface for attack.

Many breaches occur when a user unknowingly clicks a malicious link, passing their sensitive information to an untrustworthy source. The result could be identity or financial fraud.

Consequences range from loss of private account passwords to loss of credit card details. Many users cannot identify malicious links and are not vigilant about their information. That is why it is the duty of a front-end developer to be wary of the possible threats and build with the mindset of protecting potential users.

## Web security threats

There are many kinds of web security threats, but here are the common ones you should be aware of: Cross-Site scripting, SQL injection, and Cross-Site request forgery.

### Cross-site scripting

Cross-site scripting, otherwise known as XSS, is a web security threat that happens when a malicious script (code) successfully penetrates a website via a client (browser) and runs successfully. This script is usually passed into the website via the URL parameter, form data, and so on.

For example, if a website accepts parameters from a URL, say https://example.com?user=mane, a malicious user can pass in a script in place of the user parameter like https://example.com?user=<script>console.log('retrieve the username and password')</script>. In the example, the script only logs a string to the console. This is not the case when an attacker runs a malicious link on a user's client. It could be a script to steal credit card information which the attacker could use to steal from the user's bank account.

### SQL injection

This web security threat entails sending malicious data into the database via the client. Usually, it is passed in when a user attempts to submit a form via a client and Url parameter. This can cause different kinds of havoc, such as performing CRUD(Create Read Update Delete) operations against the database, which could cause the data in the database to be compromised.

### Cross-site request forgery 

This is a web security threat, also known as XSRF. It is a security threat whereby an attacker tricks a user into executing an action unintentionally via a client. An attacker could trick a user into completing a payment on an e-commerce site, or possibly claiming an asset from the government.

For instance, let's say we have this URL https://mybank.com?username=dave&amount=$100. An attacker can create a malicious link like <a href="https://mybank.com?username=attacker&amount=$100">view more</a> and send it via email or any social network like Facebook. An ordinary user has no idea what is going on behind the scenes of a button click.

## Web Security best practices

There are a number of practices in front-end development that are widely accepted. The practices are proven to be efficient. They include:

### Sanitization of data

This practice involves ensuring that the data a system accepts is in the right format. This can be done manually or by using a well-known third-party solution. For example, in NodeJS, you have the sanitize-html package for sanitizing HTML code, and it is downloaded over a million times per week. There is also an ORM(Object Related Mapping) library for sanitizing the SQL related code.

### Secure authorization and authentication

This involves ensuring that authorization and authentication are hard to crack. This can be done manually but can be best achieved by using an open-standard authorization protocol or framework such as OneLogin, Okta, etc.

### Make use of a well-known third-party application.

This involves ensuring that a third-party application is trusted and tested. One might need to carry out some research about the application before it can be used. An easier way to do that is to check how many downloads the application gets per week.

### Continuous Deployment/Continuous Integration (CI/CD)

Continuous Deployment/Continuous Integration is an automatic process of integrating and delivering code to production. Usually, CI/CD runs every change against some security checks and decides the delivery of the change to productions. Any change that does not pass the checks would be rejected and flagged for a rework. It basically catches oversights from developers and helps maintain the reliability of the changes coming to a codebase.

There are different CI/CD tools that teams across the globe integrate into their pipeline. They include [Github Action](https://docs.github.com/en/actions), [Jenkins](https://www.jenkins.io/doc/), [Travis CI](https://docs.travis-ci.com/), [Circle CI](https://circleci.com/docs/getting-started), etc

### Network security 

A network is the connection of nodes via wired or wireless means in order to share data across nodes. Network security is the act of protecting the exchange of packets of data across the network.

A network engineer is the one responsible for network security. However, a front-end developer must be wary of what network to connect to as well as where to host the website. Data could be compromised via the hosting platform.

### Implementation of automatic user timeout

This involves protecting users who have left their credentials hanging in the browser for a long time. In most cases, this would be done by the backend team by setting a session for the expiration of the user credentials. However, as a front-end developer, you have to ensure that the API you are consuming has put this into consideration.

## Activities

### Activity 1

**Practical**

Get a valid website url, say `https://www.noroff.no/` and check for possible security threat at [here](https://pentest-tools.com/website-vulnerability-scanning/website-scanner)

### Activity 2

**READ**

Article: [Web Security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security) (10min)
Article: [Web Security Practices](https://www.acunetix.com/blog/web-security-zone/7-web-application-security-best-practices/) (<10min)
