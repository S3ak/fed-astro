---
title: Security
keywords: Security
tags: Security
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

## Brief history

In the early days of the web, security was not a major concern as the Internet was primarily used for static content and simple interactions. However, as the web evolved and became more dynamic and interactive, security became an increasingly important issue.

In the late 1990s and early 2000s, web security concerns began to emerge with the rise of e-commerce and online transactions. These early threats included simple attacks such as SQL injection, where an attacker could input malicious code into a website's forms to gain unauthorised access to sensitive information.

As the web continued to evolve, new types of attacks emerged, such as cross-site scripting (XSS) and cross-site request forgery (CSRF). These attacks took advantage of the increased use of client-side scripts and the ability of websites to update content dynamically. To counter these threats, web developers began implementing input validation, sanitization, and output encoding to protect their websites.

In the 2010s, the rise of mobile devices led to an increase in the number of entry points for attackers and the emergence of new types of attacks, such as clickjacking and man-in-the-middle (MitM) attacks. To combat these threats, web developers increasingly began to implement secure protocols such as HTTPS and security tools such as firewalls, intrusion detection/prevention systems and web application firewalls (WAF) to protect their systems.

Following the boom in cryptocurrency and the emergence of the Web3 philosophy, new and lucrative attack vectors have become popular. These generally target the user with duplicitous copies of well-known websites or applications to trick them into disclosing their private key or credentials. This has driven further growth in novel security techniques, particularly various approaches to Multi Factor Authentication (MFA).

In an ongoing effort to identify and mitigate the key vulnerabilities in the way we use the Internet, password-less login and third-party authentication are becoming increasingly popular in the present. These technologies offer an alternative to a local user account with a unique password, thereby either shifting responsibility for authentication and identification onto a trusted party (social media, email provider, GitHub, etc.) or removing the concept of a password entirely.

## Security products

The market for security projects is growing quickly; for brevity, we will only focus on tools that directly relate to web development. These products include free and open-source offerings and premium subscription closed-source tooling.

Broadly speaking, there are two types of security strategies, runtime and build time protection. Runtime protection is designed to protect the application once it is deployed, while build time protection is designed to protect the application during development and testing.

### Firewall

A firewall is a runtime security system that monitors and controls the incoming and outgoing network traffic based on a set of security rules and policies. In web application security, a firewall can be used to protect a web application from external threats such as hacking attempts, denial-of-service (DoS) attacks, and other malicious activity. A firewall can be implemented in several ways, including on the network level, on the host level, or as a cloud-based service.

If you have some experience with backend development or hosting, you may already be aware of some of the more common rules, such as:

```
- Allow HTTP traffic through port 80
- Allow HTTPS traffic through port 443
- Allow FTP traffic through port 21
- Allow SSH/SFTP traffic through port 22
- Allow MySQL traffic through port 3306
```

By segregating types of activity between ports, an administrator is empowered to use different strategies to protect different ports. This approach ensures that a website user visiting the server on port 443 cannot use this connection to upload files via SFTP. This also means that SFTP traffic can be much more tightly regulated than HTTPS traffic, using multiple layers of authentication to prevent abuse.

Highly sensitive applications may use a non-standard firewall configuration to `obfuscate` their key ports. While this may defeat automated attack systems that blindly run the same procedure on every server they encounter - a sophisticated and motivated attacker can scan and map a server's ports sending packets to each port and analysing the response.

#### Network-level firewall

Network-level firewalls, also known as _perimeter firewalls_, examine each incoming and outgoing packet of data to determine whether it should be allowed to pass through based on predefined rules. These can be used to protect a group of hosts (servers) at once by rejecting access to requests that do not conform to the firewall rules.

#### Host-based firewall

On the other hand, host-based firewalls are installed on individual hosts, such as servers, and they work by monitoring and controlling network traffic on the host level. They can be used to protect a single server or a group of servers.

It is important to note that using a host-based firewall is not mutually exclusive to using a network-level firewall. In most cases, a combination of both types of firewalls is recommended for a comprehensive security strategy. A network-level firewall can protect the network, while a host-based firewall can provide additional protection for individual hosts and devices.

#### Web application firewall

A web application firewall (WAF) monitors and controls HTTP and HTTPS traffic to and from a web application. The most popular WAF product is CloudFlare, which is responsible for screening traffic to a large percentage of the modern internet. Other providers include Fortinet, AWS WAF, Akamai and many more.

It is considered best practice not to rely on this technology but instead to use this as one of many layers in an effective security strategy.

### SSL/HTTPS

Secure Sockets Layer (`SSL`) and Hypertext Transfer Protocol Secure (`HTTPS`) are security protocols that establish an encrypted connection between a web server and a web browser. They are designed to protect sensitive information, such as login credentials, from being intercepted and read by unauthorised parties during transmission.

When a website uses `SSL`/`HTTPS`, the browser establishes a secure connection to the web server using a process called "handshake." During this handshake, the browser and server exchange a series of keys to establish a secure session. Once the secure session is established, all data transmitted between the browser and server is encrypted, making it unreadable to anyone who intercepts it.

While this technology does nothing to guarantee that the web server owner won’t abuse the information the user sends, it guarantees that an unauthorised third party cannot access this data. This third-party activity could be as mundane as a spammer attempting to harvest email addresses for a marketing campaign or something as severe as an extremist group trying to collect the physical addresses of potential targets. _In the field of security, it is considered hygienic to assume the worst._

### Input validation

One of the most straightforward and fundamental security methods used to protect web applications is `input validation`. A web server, like any `software runtime environment` is responsible for interpreting text files containing code and executing this code on its CPU. When an application accepts `input` from a user, there is a risk that this input may be executed as code in certain circumstances. This is how SQL injection works, you can read more about the theory [here](https://noroff-content.gitlab.io/feu/development-platforms/relational-datastores.html).

Input validation ensures that user input is in the correct format before an application processes it. This is achieved by checking the input against a set of rules that define what is and is not allowed. For example, a web application may only allow passwords with a minimum length of 8 characters to ensure that user accounts do not present a security risk.

#### Client-side validation

It is important to note that `Client-side` input validation does not protect against injection attacks. Any form of validation performed on the user's device, rather than on the host, can be considered a form of `Client-side` validation. This is a User Experience provision intended to reduce frustration while the user is filling out a form. **Client-side validation is not a security measure.**

### Input sanitization

Input sanitization is the process of removing potentially malicious characters from user input before an application processes it. This is achieved by replacing these characters with harmless alternatives, such as HTML entities. For example, the following input:

```
<script>alert('Hello World!');</script>
```

Would be sanitized to:

```
&lt;script&gt;alert('Hello World!');&lt;/script&gt;
```

This is done at multiple levels throughout an application flow. For example, when a user submits a form, when that form data is stored in a database, when that data is retrieved from the database, and when that data is displayed to the user.

During this example flow, data originates in the DOM from an HTML form field; the browser sanitises it before being sent to the server either as a URL encoded string or as a multipart form data string. Once it reaches the server it is sanitised again by the server before being stored in the database during a predefined SQL sequence. When the data is required, it is retrieved from the database, sanitised and encoded again as JSON before being sent to the client. Finally, the client should sanitise this data again during rendering as the JSON is parsed back into the DOM.

#### Client-side sanitization

Just as client-side validation is not a security measure, client-side sanitization cannot be considered such either. Client-side sanitization often happens automatically during the process of encoding from one data format to another rather than as a conscious choice by the developer. It is possible to bypass this process by creating requests in JavaScript that contain unsanitized data, for example. This is why it is essential to perform sanitization at multiple levels throughout an application flow.

### Authentication

Authentication is the process of verifying the identity of a user. This is achieved by asking the user to provide some form of unique credentials, typically a username/email (`identifier`) and password. The server checks these details against an authority, either a database or an external service. If they match, the user is granted access to the application through one of several methods discussed below.

#### Local authentication

Local authentication is the process of storing user credentials in a database on the same server as the application. Although this has been the most common authentication method for many years, it is increasingly considered a security risk. There are several reasons for this outlined below:

1. If an attacker accesses the production database, they will have access to all user data, including the value of the password field.
2. The password field may not be hashed, or it may be hashed using a weak algorithm.
3. The password hash may not be salted.
4. Users often struggle to create strong passwords; if they do, they often reuse them across multiple applications. A lapse in security on one application could result in a breach of multiple applications.
5. The responsibility for session management is often left to the developer, and this is a complex process that is often not implemented correctly. A bad implementation could result in a session being hijacked by an attacker.
6. A single factor of authentication is not enough to guarantee the identity of a user. If a user's password is compromised, an attacker could gain access to the user's account.

Using a local authentication strategy for production-scale web applications means that the development team will be responsible for a complex security strategy in addition to the application itself. Successful applications should have a team of dedicated security professionals to ensure that this system is well protected.

#### Third-party authentication

Third-party authentication is the process of using an external service to verify the identity of a user. This is achieved by redirecting the user to the third-party website, where they are challenged to prove their identity. This may be done by forcing a user to log into their account or by detecting the user's current authentication status. If the user is already authenticated with a third party, the user is redirected back to the application with a token that can be used to access the user’s account.

Besides the benefit of offloading the various responsibilities of local authentication to a third party, this approach has some more subtle benefits. When a social media service is used as a third-party authentication provider, the user has additional accountability for their input. For example, a user violates the terms of service by posting abusive comments to a web application. If the application uses a third-party authentication provider, the user's account on the social media service will be partially available for the team to investigate. By sharing information on banned or troublesome identities, application owners can blacklist users that might pose a risk to their platform.

This can also help with trust when transacting with others through a web platform. For example, if a user is selling a product on a web application, they can use a third-party authentication provider to prove that they are who they say they are. This can help to build trust between the buyer and seller and can also help to reduce the risk of fraud.

#### oAuth

`oAuth` is an open standard for authorisation, commonly used to facilitate third-party authentication. The protocol allows for granular access to a user's account, allowing the user to grant permission to only the information that the application requires instead of the entire account.

This is a common sight in the modern web environment, often characterised by a row of company icons and the offer to "Sign in with..." your preferred service. In some cases, a secondary step allows for a particular identity to be selected, for example, if you have multiple Google accounts.

Although `oAuth` is a reasonably complex protocol, it is not difficult to implement. The most common implementation is to use a third-party library, such as [Passport](http://www.passportjs.org/). This library provides a number of strategies for authenticating with various third-party services, including Google, Facebook, Twitter, and GitHub.

Typically third-party `oAuth` providers go out of their way to ensure a smooth implementation process, and this is aided by the standardisation of the `oAuth` protocol. Implementing a single provider is a relatively simple process using a library, and implementing multiple providers is a matter of adding additional API keys and configuring the library.

#### Multi-factor authentication

Multi-factor authentication (`MFA`) is a strategy that relies upon multiple means of identification to verify the identity of a user. The most common `MFA` approach is `2FA`, which requires two of the following `factors`:

1. Something you know, such as a password or PIN.
2. Something you have, such as a mobile or access device.
3. Biometric data, such as a fingerprint, voice recognition or retina scan.
4. Question and answer, such as security questions or recent activity.

`MFA` can be a quick and effective way to bolster the defences of an existing strategy, such as local authentication. It also allows for `passwordless` access strategies, as discussed below.

Common approaches utilise software such as temporary one time password (`TOTP`) generators, like Google Authenticator, or hardware one time password (`HOTP`) devices, like YubiKey. These devices generate a unique code that is valid for a short period of time, and can be used to authenticate a user.

Similarly, these codes can be sent to the user's mobile device via SMS or email, although this is typically less secure due to the possibility of interception.

#### Passwordless authentication

Passwordless authentication is a strategy borne out of criticism of the traditional local authentication strategy. While the performance of many authentication provisions can be reliably measured, it is challenging to measure the average strength of a user's password. This is because the strength of a password is not a static value but rather a function of the user's ability to create a strong password and their ability to remember it. This introduces psychological factors that are difficult to quantify.

Instead of relying on passwords as the primary authentication factor, this approach emphasises using other factors, such as biometrics or one time passwords. For example, to log in to a telecoms provider, a user may be asked to provide their phone number and a one time password sent to the same number. DDuring this process, the provider can first use the number as an `identifier` to confirm the customer’s existence, then use the one time password to verify that this customer is in possession of the mobile device. Without additional factors in place, this approach is not necessarily more secure than a traditional password. Still, it does negate the risk of a user's password being compromised by the provider.

### Security testing

Security testing is the process of identifying and exploiting vulnerabilities in a system before a third party can find these. Depending on the approach, this can be done before a code release, as part of a continuous integration process, or as a manual process.

#### Static Application Security Testing

Static Application Security Testing (`SAST`) is a source code analysis approach that examines the code of a web application to identify potential security vulnerabilities prior to deployment. `SAST` tools scan for known vulnerabilities, such as SQL injection, cross-site scripting (`XSS`), and buffer overflow. `SAST` tools such as `Snyk` can be integrated into the software development lifecycle and help identify vulnerabilities early in the development process.

#### Software Composition Analysis

Software Composition Analysis (`SCA`) is a similar approach to `SAST`, but it focuses on identifying vulnerabilities in third-party dependencies and open-source components used in the application. `SCA` tools scan the application's codebase, looking for known vulnerabilities in the libraries and components used and providing recommendations for how to remediate them. GitHub offers an SCA tool called [Dependabot](https://dependabot.com/), which can be used to automatically identify and remediate vulnerabilities in open-source components.

#### Dynamic Application Security Testing

Dynamic Application Security Testing (`DAST`) is an automated approach to penetration testing that examines the application's runtime behaviour to identify potential security vulnerabilities. `DAST` tools simulate attacks on the application, looking for vulnerabilities such as `SQL` injection and cross-site scripting (`XSS`), among other vectors. `DAST` can be used to identify vulnerabilities that are not detectable by `SAST` or `SCA`.

#### Manual Application Security Testing

Manual Application Security Testing (`MAST`) is a manual approach to identifying vulnerabilities in a web application during runtime. This is typically done by a team of security professionals who attempt to exploit the application's security controls. This is a complex and time-consuming process, but it can be uniquely effective at identifying vulnerabilities that would not be exposed by automated tooling.

Due to the additional cost and resources required to conduct `MAST`, this form of testing is typically done infrequently, such as at a launch event, major version release or following a security incident.

#### Shifting Left

The term "Shifting Left" refers to the methodology of performing security testing earlier and more consistently during the software development lifecycle. This can be done by integrating security testing strategies such as `SAST`, `SCA` or `DAST` into the continuous integration process and involving more developers in the security testing process.

"Shifting Left" contrasts with a more traditional "Shifting Right" approach to security testing, wherein the bulk of test creation, testing and code analysis is done at the end of the development process, often by a dedicated team of specialised developers.

## Summary

In this lesson, we have covered a selection of topics relating to the security of modern web applications. The strongest strategies for securing a web application use multiple approaches in layers to mitigate all known attack vectors. These approaches should be baked into the production process from the planning stage, through the development stage, during quality assurance, before release, at major version milestones, and continuously during the application's runtime.

Where appropriate, responsibility for security can be delegated to third-party services. However, such services should be carefully investigated prior to use. This approach risks vendor lock-in and can introduce new attack vectors if the third party itself is compromised.

Security best practices are constantly evolving in response to new trends, threats and research done in the field. The information in this lesson may be outdated by the time you read it, and the lesson content should not be relied upon to form a complete security strategy.

## Resources

- [OWASP Web Security Testing Guide (WSTG)](https://owasp.org/www-project-web-security-testing-guide/)
- [SANS SEC542: Web App Penetration Testing and Ethical Hacking](https://www.sans.org/cyber-security-courses/web-app-penetration-testing-ethical-hacking/)
- [PortSwigger Web Security Academy](https://portswigger.net/web-security)

### Reading list

- _The Web Application Hacker's Handbook: Finding and Exploiting Security Flaws_ (by Dafydd Stuttard, Marcus Pinto)
- _Web Security Testing Cookbook_ (by Paco Hope, Ben Walther)
