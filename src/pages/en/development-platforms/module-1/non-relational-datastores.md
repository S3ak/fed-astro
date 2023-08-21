---
title: Non-relational datastores
keywords: development platforms, datastore
tags: Development Platforms, Datastore
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

A non-relational (`NoSQL`\*) database is a type of database that does not rely on the traditional table-based, relational model of storing data. Instead, NoSQL databases are designed to handle large amounts of unstructured, semi-structured, or structured data.

In the context of web development, we encounter various types of NoSQL datastores; `window.localStorage` and `window.sessionStorage` are both examples of `Key-Value Style NoSQL` datastores, for instance.

This lesson will focus on `Document Style NoSQL` datastores, commonly used as an alternative to relational databases in web development.

Instead of storing data items as rows within tables, document style databases store data items in `documents`, which are similar to JSON objects. These documents are grouped into `collections`, similar to tables in a relational database.

> \* The name `NoSQL` is somewhat of a misnomer. Many non-relational datastores support SQL-style queries. We can think of this acronym as "Not Only SQL" instead of "No SQL".

## Brief history

Technically speaking, NoSQL datastores have been in use since the 1960s - a decade before the invention of the relational database. However, these were typically crude and unable to handle the demands of an entire organisation's needs. Instead, relational systems achieved dominance as the de facto standard for storing data from the 1970s onwards. During this time, NoSQL databases supplemented but could not replace relational databases.

At the dawn of the Internet era, database operators found themselves under heavy strain as the number of users, records and the size of the data that needed to be stored increased exponentially. The limitations of relational databases became apparent, and adopting a more flexible and scalable alternative became a priority.

The term itself was only coined in 1998 by Carlo Strozzi's `Strozzi NoSQL OSRD`. This project still used a relational database at its core, but it was designed to be more flexible and scalable than traditional relational databases in order to meet these increased demands.

In 2009 the first 'true' `Document Style NoSQL` datastore was released by `MongoDB`. This was the first NoSQL database to achieve mass adoption and is still one of the most popular NoSQL databases today. Since then, a number of competing document style datastores have emerged, including CouchDB, RethinkDB, and ArangoDB.

The arrival of mature document style database products allowed for the rapid scaling of modern web applications such as Facebook, Twitter, and Instagram. These applications were able to store and retrieve data at a much faster rate than their predecessors, thanks to a concept called `Horizontal Scaling`.

## Anatomy of a non-relational database

### Collection: **Students**

This collection contains all of the data about the students, including which classes they are enrolled in. Instead of a `foreign-key` relationship between the `Students` and `Courses` collections, student objects contain `soft references` which point to the `Courses` they are enrolled in.

```json
{
  "name": "Sam",
  "age": 22,
  "fulltime": true,
  "courses": [
    "D1"
  ]
}, {
  "name": "Emma",
  "age": 20,
  "fulltime": true,
  "courses": [
    "WCT",
    "HAC",
  ]
}, {
  "name": "Lars",
  "age": 24,
  "fulltime": false,
  "courses": [
    "D1",
  ]
}, {
  "name": "Mia",
  "age": 21,
  "fulltime": false,
  "courses": [
    "WCT",
  ]
}
```

### Collection: **Courses**

This collection contains all of the data about the courses, including which students are enrolled in each. It may seem strange to have these relationships defined twice, in two different places - as this is so starkly opposite to the principles of a relational database, where we only write things once in one place.

> This approach is called `denormalisation`, a core practice in NoSQL databases. It is a trade-off between performance and data integrity. Repeating reference information allows for faster read access since we only need to view one record to see all relevant data. If we did not track students in the `Course` document, we would be forced to query all of the students to find out which ones are enrolled in a particular course. This is far more expensive and does not scale when there are many students. The risk of this approach is that important data falls out of sync, and the mitigation involves increased complexities when updating records.

```json
{
  "name": "Web and Communications Technologies",
  "code": "WCT",
  "students": [
    "Emma",
    "Mia",
  ]
}, {
  "name": "HTML and CSS",
  "code": "HAC",
  "students": [
    "Emma",
  ]
}, {
  "name": "Design 1",
  "code": "D1",
  "students": [
    "Sam",
    "Lars",
  ]
}
```

## Querying a non-relational database

Unlike relational databases, there is no one unifying standard for query syntax in the world of NoSQL databases. Instead, different products offer a variety of their own query languages. For example, MongoDB uses a query language called `MongoDB Query Language` (or `MQL` for short).

1. View some or all of a `Student`'s details
2. Add a new `Student`
3. Edit a `Student`'s details
4. Remove a `Student`
5. View a `Course`'s details
6. Add a new `Course`
7. Edit a `Course`'s details
8. Remove a `Course`
9. Enroll a `Student` to a `Course`
10. Unenroll a `Student` from a `Course`

### MQL commands

We can achieve the above tasks using the following MQL commands:

#### 1. View some or all of a Student's details:

```js
db.students.find({ name: "Sam" }, { name: 1, courses: 1 });
```

> Find the student with the name "Sam" and return only the fields name, and courses.

#### 2. Add a new Student:

```js
db.students.insertOne({ name: "John Doe", age: 42, fulltime: false });
```

> Create a new partime student named "John Doe" who is 42 years old.

#### 3. Edit a Student's details:

```js
db.students.updateOne({ name: "John Doe" }, { $set: { age: 43 } });
```

> Update the age of the student named "John Doe" to 43.

#### 4. Remove a Student:

```js
db.students.deleteOne({ name: "John Doe" });
```

> Remove the student named "John Doe" from the database.

#### 5. View a Course's details:

```js
db.courses.find({ code: "HAC" }, { name: 1, students: 1 });
```

> Find the course with the code "HAC" and return only the fields name, and students.

#### 6. Add a new Course

```js
db.courses.insertOne({ name: "Design 2", students: [], code: "D2" });
```

> Create a new course named "Design 2" with no students enrolled.

#### 7. Edit a Course's details:

```js
db.courses.updateOne(
  { name: "Workflow" },
  { $set: { teacher: "Linus Torvalds" } }
);
```

> Update the teacher of the course named "Workflow" to "Linus Torvalds".

#### 8. Remove a Course:

```js
db.courses.deleteOne({ name: "HTML and CSS" });
```

> Removes one course with the name "HTML and CSS"

#### 9. Enroll a `Student` to a `Course`

```js
const session = db.client.startSession();
session.startTransaction();

try {
  const enrollStudent = db.courses.updateOne(
    { name: "Workflow" },
    { $push: { students: "Lars" } },
    { session }
  );

  const updateStudent = db.students.updateOne(
    { name: "Lars" },
    { $push: { enrolledCourses: "Workflow" } },
    { session }
  );

  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}
```

> Enrolls Lars to the course "Workflow"

#### 10. Unenroll a `Student` from a `Course`

```js
const session = db.client.startSession();
session.startTransaction();

try {
  const unenrollStudent = db.courses.updateOne(
    { name: "Workflow" },
    { $pull: { students: "Lars" } },
    { session }
  );

  const updateStudentCourses = db.students.updateOne(
    { name: "Lars" },
    { $pull: { enrolledCourses: "Workflow" } },
    { session }
  );

  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}
```

> Unenrolls Lars from the course "Workflow"

### Using a NoSQL database in a web application

NoSQL databases provide a flexible and scalable alternative to traditional relational databases. They are often used for storing and querying large amounts of unstructured data and can be easily scaled horizontally to accommodate high levels of traffic and data growth. By utilising a variety of query languages and data models, NoSQL developers can build dynamic and responsive applications that can handle a wide range of data types and use cases. In the context of web development, NoSQL databases are often used to store state for web and mobile applications. The client can access them directly or through an API service that initiates the appropriate NoSQL query to retrieve the requested data.

## Limitations

Just as relational databases have their limitations, NoSQL databases also suffer from serveral limitations and vulnerabilities.

### Data integrity

NoSQL databases cannot provide full support for the `ACID` properties, which are the four characteristics of a transaction that guarantee data integrity. This means that data can be lost or corrupted if a transaction fails.

### Query capabilities

NoSQL databases typically have more limited query capabilities compared to SQL databases due to the lack of strict schema definitions. This means that NoSQL databases are not well suited for complex queries that require joins or aggregation.

### Security

NoSQL databases are often vulnerable to injection attacks if user input is not sanitised properly. Unlike SQL databases, NoSQL databases do not have a standard query language, meaning there is no standard way to prevent injection attacks.

## Resources

- [What is a Non-Relational Database?](https://www.mongodb.com/databases/non-relational)
- [What is NoSQL?](https://aws.amazon.com/nosql/)
- [Google Firestore](https://firebase.google.com/docs/firestore)
