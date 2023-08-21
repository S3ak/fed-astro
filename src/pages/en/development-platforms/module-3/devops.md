---
title: DevOps
keywords: devops
tags: devops
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

DevOps is a set of practices and tools that help organisations improve the collaboration and communication between software development and IT operations teams. The goal of DevOps is to automate the software development process and reduce the time it takes to release new features and updates to customers. DevOps is not just about the tools and process; it's also a cultural methodology that promotes collaboration, communication, and shared ownership of the entire software development lifecycle.

## Brief history

DevOps, as a term, was first coined in 2009, but the practices and principles were used long before that. The term was coined to reflect the growing recognition that development and operations teams needed to work more closely together to achieve faster and more reliable software delivery.

Instead of a new field, DevOps is the crystallisation of a set of practices and principles that have been used for decades. The term DevOps is a combination of two words: development and operations.

In 2018 Microsoft renamed their popular Team Foundation Server (TFS) product to Azure DevOps Server (AzDos) to recognise the importance of DevOps principles in their software development process.

## Core principles

As an ideology or philosophy, DevOps can be described as a set of principles that are used to guide the development and operations teams. These principles are:

### Infrastructure as Code

Infrastructure as code (IAC) is a practice in which infrastructure is provisioned and managed using code rather than manual configuration. IAC enables teams to version control their infrastructure, automate the provisioning of resources, and make it easier to roll out changes and updates. This can help to reduce the time it takes to provision new resources and make it easier to troubleshoot issues when they arise.

Many projects require complex server configuration, including specific versions of Linux packages to be installed or databases to be configured and set up. A team that does not utilise IAC will need to manually configure each server, which can be time-consuming and error-prone. IAC allows teams to automate the configuration of their servers and ensure that all servers are configured in the same way every time they are provisioned.

At its simplest, a GitHub Action YAML file is an example of IAC. It is a file that describes a set of required resources and steps that should be executed when a GitHub Action is triggered. The steps can include things like installing packages, running tests, and deploying code to a server. Using the `Image` field, it is possible to utilise a wide range of runtime environments, which can be further configured within a workflow file.

At its most complex, IAC can be used to provision and configure entire server clusters, including load balancers, databases, and web servers. This can be done using tools like Terraform, which can be used to provision resources on a wide range of cloud providers, including AWS, Azure, and Google Cloud.

### Continuous Integration

Continuous Integration (CI) is a practice in which developers regularly integrate their code changes into a shared code repository. This allows teams to detect and resolve conflicts early in the development process and ensure that the code is always in a releasable state. CI can be automated using tools like Jenkins, Travis CI, and CircleCI.

The main principle underlying CI is that developers should integrate their code changes into a shared repository as often as possible. Each task is performed in a branch, and when that branch is ready to be merged into the main branch, a pull request is created. This allows other team members to review the code changes and ensure that the code is ready to be merged into the main branch. The process of merging code into the main branch can be described as `Integration` as you integrate the code changes into the main branch.

### Continuous Delivery

Continuous Delivery (CD) is a practice that builds upon continuous integration and enables teams to release new software changes to customers at a faster pace. It involves automating the process of testing, building, and deploying code changes so that teams can release new features and updates to customers as soon as they are ready.

The main principle underlying CD is that teams should be able to release new software changes to customers at any given time. This means that the software should always be in a releasable state, without unfinished or buggy code in the main branch. Testing and static code analysis tools can help to ensure that the code is always in this condition.

Furthermore, human intervention should not be required to release new software changes. This means that the process of building and deploying code should be automated and should not require manual intervention.

### Continuous Monitoring

Continuous monitoring is a practice that involves monitoring the performance and stability of software systems in production. This can include monitoring resource usage, tracking error rates, and collecting log data. Continuous monitoring can help teams to detect and resolve issues quickly and ensure that the software is always running at optimal performance. Tools like Prometheus, Grafana, and Logstash are commonly used for this purpose.

This approach can be contrasted with the traditional approach of monitoring software systems in production. In the traditional approach, monitoring is performed manually and is only performed when a customer reports an issue. This can lead to problems going undetected for long periods and can result in a poor customer experience or inefficiencies.

### Continuous Feedback

Continuous feedback (CF) is a practice that involves collecting feedback from customers and users and using that feedback to improve the software. This can include collecting form submissions from users and using that data to improve their experience. It can also include gathering customer feedback and using that feedback to build upon the product roadmap.

In a mirror image of the short development cycle used in the Agile methodology, CF aims to keep feedback loops small and cycles short. This means that feedback should be acted upon as soon as possible while it is relevant. Besides collecting user feedback, regular panels, test groups, and surveys can also be used to collect additional information.

## An example stack

Instead of discussing these principles in abstract, it can help to materialise them into a concrete example. Let's imagine a bank providing online financial services to its customers. The technical team at the bank would be responsible for building and maintaining the software that powers their online services. This software would include things like their website, mobile app, and internal systems. To carry out their work effectively, the team would need to use a set of tools and technologies. Let's take a look at some of the tools and technologies that they might use:

### Version control

The company would use a version control system, most likely Git, to manage the source code for their applications. This would allow developers to collaborate on code changes and easily roll back to previous versions if necessary. They would require signed commits to ensure that unauthorised people cannot make changes to the code. Branch protection rules would be used to ensure that code changes are reviewed by other team members before they are merged into the main branch.

### Continuous Integration

The company would use a continuous integration tool, such as Jenkins or Travis CI, to automate the process of building and testing code changes. This would help to catch bugs and issues early in the development process. Unit testing and static code analysis tools would be used to ensure that the codebase is healthy and stable.

### Infrastructure as Code

The company would use tools like Terraform or Ansible to provision and manage their infrastructure as code. This would enable them to automate the provisioning of new resources, such as servers or databases, and make it easier to roll out changes and updates. Before the rollout of a new infrastructure change, the team would test the change in a staging environment to ensure that it works as expected.

### Continuous Delivery

The company would use a continuous delivery tool, such as Jenkins or Spinnaker, to automate the process of testing, building, and deploying code changes. This would allow them to release new features and updates to customers as soon as they are ready. End-to-end tests would be used to ensure that new releases do not cause any regression.

### Monitoring and logging

The company would use monitoring and logging tools such as Prometheus and ELK to keep track of their system's performance and troubleshoot any issues that arise. Key metrics such as CPU usage, memory usage, and error rates would be monitored to ensure that the systems are running at optimal performance.

### Security

The company would implement security best practices such as encrypting data in transit and at rest and using security tools like threat detection and vulnerability scanning to keep their systems secure. Access logs would be collected to help with security analysis and threat prevention. The company would also use tools like Snyk to keep track of its dependencies and ensure that they are up to date.

### Containers and orchestration

The company would use containerization technologies like Docker and Kubernetes to package their applications and manage the deployment and scaling of their services. This would allow them to run their applications in a consistent environment and make deploying and scaling their services easier. In the event of downtime or an attack, the company would be able to quickly spin up new instances of their services to ensure that their customers are not affected.

### Cloud providers

The company would use cloud providers like AWS, Azure, or GCP to provide an infrastructure that is scalable, secure, and fault-tolerant. This also reduces the attack surface of the application as their infrastructure's physical location is obfuscated and less prone to physical interference.

## Summary

Rather than a specific technology, DevOps should be thought of as a philosophy or combination of principles designed to increase cohesion during all stages of the development process. The role of a DevOps engineer within a development team is to ensure that these practices are in place and working efficiently. This often involves working on the infrastructure and tooling needed to sustain these practices.

## Resources

- [DevOps.com onramp](https://devops.com/devops-onramp/)
- [DZone Methodologies](https://dzone.com/methodologies)

### Reading list

- _The Unicorn Project: A Novel about Developers, Digital Disruption, and Thriving in the Age of Data_ (by Gene Kim)
- _The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win_ (by Gene Kim, George Spafford, and Kevin Behr)
- _The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations_ (by Gene Kim, Patrick Debois, John Willis, Jez Humble)
- _Effective DevOps_ (by Jennifer Davis, Ryn Daniels)
