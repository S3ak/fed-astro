---
title: Course Assignment
keywords: development platforms, Building a CRUD REST API
tags: Development Platforms
layout: ../../../../layouts/MainLayout.astro
---

## Goal: Building a CRUD REST API

The objective of this assignment is to empower you, 2nd-year front-end web development students, to create and host a functional RESTful API. The focus will be on understanding datastores and backend solutions commonly used in full-stack web development. You will demonstrate your ability to implement CRUD (Create, Read, Update, Delete) REST endpoints, providing valuable practical experience.

## Learning Outcomes

### Knowledge

You will gain knowledge in:

- Services and APIs used to deliver integrated full-stack solutions.
- Processes and tools used in front-end projects with cloud-based backend platforms and self-hosted APIs.
- Organizational requirements and workflows in web development powered by modern, simplified database solutions.
- Insight into your own opportunities for development through interdisciplinary collaboration using platform-as-a-service tools and APIs.

### Skills

You will acquire skills in:

- Explaining your choices in front-end projects with platform-as-a-service software.
- Explaining your choice of APIs to access and update data.
- Explaining your choice of web interface tools to create and configure services.
- Reflecting on your own work with cloud-based authentication and authorization services.
- Reflecting on your own work in front-end projects to connect to and authenticate with the taught backend services.
- Reflecting on your own front-end solutions that integrate with dynamic data supplied by cloud services and APIs.

### General Competence

You will develop competence in:

- Planning and carrying out tasks linked to configuring cloud-based and self-hosted APIs.
- Planning and carrying out programming that accesses and updates data hosted in databases provided by platform-as-a-service software.
- Planning and carrying out full-stack solutions by leveraging modern backend services.

## Context

In the context of full-stack web development, proficiency in backend development, data storage, and API creation is essential. This assignment challenges you to build a production-ready RESTful API that supports multiple endpoints catering to different front-end clients (Personas). Core requirements include the implementation of GET, POST, DELETE, and UPDATE endpoints. As an optional success criterion, you can showcase the ability to query data related to tables or endpoints using foreign keys. For example, an end-user can view the author of a book they searched for.

## Assignment Details

### Choose Your Stack

Select a programming language and framework from the recommended tech stacks. This choice will guide your API development and deployment.

#### GitHub Repository

Host your codebase on GitHub to facilitate version control and collaboration.

#### API Development

Develop a robust RESTful API with multiple endpoints, catering to various front-end clients (Personas). Ensure your API covers the CRUD operations, including GET, POST, DELETE, and UPDATE. Optionally, implement foreign keys to enable data querying between related tables.

#### Database Integration

Integrate a suitable datastore solution (e.g., Pocketbase or PostgreSQL) into your API for efficient data management.

## Minimum Requirements

_Your API project must include the following to pass the assignment:_

- A functional GET endpoint for data retrieval.
- A working POST endpoint for data creation.
- A DELETE endpoint to remove resources.
- At least two distinct tables or data objects within your chosen datastore.
- A simple front-end client (Persona) demonstrating your API's functionality.
- The Student Backend API must be hosted.
- The backend should have an environment.
- The backend CANNOT expose any sensitive data (e.g., private keys).

## Optional Enhancements:

_Consider implementing the following optional features to enhance your project:_

- A PUT endpoint to update resources.
- An UPDATE endpoint to modify existing data.
- Establish relations between tables or data objects and allow data querying using foreign keys.
- Set up authorization (Sessions).

## Assessment Criteria:

You will not be assessed on the front-end web application.

Your project will be assessed based on the following criteria:

- Completion of mandatory requirements.
- Overall design and usability of your API and front-end client.
- Reliability, responsiveness, and adherence to RESTful principles.
- Documentation of your API endpoints and datastore.

## Minimum Acceptance Criteria:

You must pass 5 out of 8 criteria to pass the course assignment:

1. The API must be hosted remotely.
2. The Github repo must be publicly available and must not expose any sensitive data.
3. The repo must include a README explaining the datastore and endpoints.
4. The client can send a request to view a single item.
5. The client can send a request to view all items in a table/collection.
6. The client can send a request to insert one object/row.
7. The client can send a request to delete a single item.
8. A Client that can consume the API (Postman Collection/ Front-end App/ Testing Suite).
   1. You can create a [POSTMAN collection](https://www.postman.com/collection/) connecting to your API.
   2. You can create a [Cypress test suite](https://learn.cypress.io/advanced-cypress-concepts/integration-and-api-tests) that tests your API endpoints.

## Optional Customer Success Criteria:

- Create a document detailing every resource in your API (e.g., Swagger).
- The API requires a key/authentication.
- API has some sort of pagination function.

## Delivery

For assessment, submit the following items:

- A link to your GitHub repository containing the API code.
- A README explaining the endpoints.
- A link to your production API endpoint.
- A rationale explaining your

## Restrictions

The duration of this assignment is 2 weeks, and students have the flexibility to work individually or in groups of at least two members.

## Ideas for Inspiration

Create an API for a vending machine to provide a great customer experience for students at vocational school. Create four tables for customers, products, vending machines and transactions. A customer can have many transactions. Vending machines can have many products. Transaction records can never be deleted, only marked as deleted. Transaction records should be real-time (streamed) and searchable but still protected by authentication. Vending machines and product records can be public. The vending machines must be grouped as they work in a daisy chain. A transaction should open a set of vending machines which contain the desired products.

## Recommended Tech Stacks

You are encouraged to explore the following tech stacks for your projects:

- Railway: A platform simplifying the deployment of web applications and databases, supporting various databases, including PostgreSQL.
- Render: A cloud platform designed for hosting web applications with a straightforward deployment process.
- Node.js with Express or Fastify
- Python with Flask or FastAPI
- PHP
- Cypress for end-to-end (e2e) testing.
- Next.js: A React framework known for server-side rendering and routing capabilities.
- Vercel Storage: Store key-value data, transactional data, large files, and more with Vercel's suite of storage products.
- Pocketbase with Pockethost: A versatile database-as-a-service (DBaaS) solution suitable for small to medium-scale projects.
- Superbase (BaaS): A backend-as-a-service (BaaS) platform offering features like authentication, database management, and APIs.

## Examples

- [Postman Collection](https://www.postman.com/api-evangelist/workspace/collections/collection/35240-c9013d55-8237-4a7f-b18e-1101ac585e2d)
- [Documentation Website](https://sqlzoo.net/wiki/SELECT_basics)
