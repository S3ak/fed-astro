---
title: Relational datastores
keywords: development platforms, datastore
tags: Development Platforms, Datastore
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

A relational datastore, also known as a relational _database_, is a digital structure that organises data into tables and uses relationships between those tables to manage and retrieve information. The relationships between the tables are defined by `foreign keys`, which are used to link data in one table to data in another table. The data in each table are organised into rows and columns, each representing a different piece of information and a unique record.

We can visualise a relational datastore as a spreadsheet with multiple pages. Each cell can only contain a specific type of information (e.g. a number, a date, a string), and each row represents a unique record. Some cells contain `references` to another cell, which we refer to as `foreign keys`. These `references` are used to link data in one page to data in another page.

The purpose of this lesson is to give you a contextual understanding of the purpose and utility of relational databases. This is not intended as an introduction to the SQL programming language.

## Brief history

Relational "data banks" were first described in a 1970 paper by IBM computer scientist Dr E. F. Codd. IBM developed the first relational database management system (`RDBMS`) in 1974 based on this wor, as was the later `System R` product. In 1979 Oracle released their aptly named `Oracle` relational database management system, which is still widely used in enterprise to this day.

In 1980 a team at the University of Berkley began work on a relational database management system called `Ingres`. This later evolved into `Post-Ingres SQL` or `Postgres` for short. `Postgres` was released free and open source in 1996 and is widely used today.

`MySQL` was developed by a Swedish company called TcX (later MySQL AB) in response to the lack of reliable, open-source database offerings at the time. `MySQL` was released in 1995 under the GNU General Public License and was free to use and modify. This made it an attractive option for early web developers looking for a powerful, reliable, and free database management system.

In 2000, SQLite was released to the public. SQLite uses space on the disk to store data rather than in memory. This makes it significantly less performant but much more convenient than a traditional system. SQLite is widely used in mobile applications and embedded systems, as well as rapid prototype applications.

In 2008, MySQL AB was acquired by Sun Microsystems, which was itself acquired by Oracle in 2010. This acquisition led to a lot of uncertainty in the open-source community, as Oracle had a reputation for its aggressive licensing practices. In response, the `MySQL` community forked the project and created a new open-source relational database management system called `MariaDB`. `MariaDB` is a drop-in replacement for `MySQL` and is fully compatible with the `MySQL` API.

## Anatomy of a relational database

Due to the simple, two-dimensional nature of a relational database, we can represent an example using a set of HTML tables. Each table below represents one table in a fictional database tracking Student enrollment in Noroff courses.

### Table: **students**

This table is responsible for containing all of the information relevant to students that is required by the system. Each row represents a unique student with a unique Student ID, and each column represents a different piece of information about that student. In reality, we would have many more columns with data such as email, address, phone number, etc.

| Student ID | Name | Age | Fulltime |
| ---------- | ---- | --- | -------- |
| 1          | Sam  | 22  | true     |
| 2          | Emma | 20  | true     |
| 3          | Lars | 24  | false    |
| 4          | Mia  | 21  | false    |

### Table: **courses**

This table is responsible for containing all of the information relevant to the courses offered by the university. Each row represents a unique course with a unique Course ID, and each column represents a different piece of information about that course. In reality, we would have many more columns with data such as course description, course duration, credits, etc.

| Course ID | Course Name                         | Course Code |
| --------- | ----------------------------------- | ----------- |
| 1         | Design 1                            | D1          |
| 2         | Web and Communications Technologies | WCT         |
| 3         | HTML and CSS                        | HAC         |

### Table: **enrollments**

This table is responsible for tracking which students are enrolled in which classes. Each row represents a unique enrollment, and the columns contain references to the Student and Course tables. Specifically, these reference the Student ID and Course ID columns in the Students and Courses tables, respectively.

| Enrollment ID | Student ID | Course ID |
| ------------- | ---------- | --------- |
| 1             | 1          | 1         |
| 2             | 2          | 2         |
| 3             | 2          | 3         |
| 4             | 3          | 1         |
| 5             | 4          | 2         |

## Structured Query Language

Structured Query Language (`SQL`), originally `SEQUEL`, is a declarative programming language designed to interact with relational datastores. It is the standard language for relational database management systems. `SQL` queries, updates, and manages data in a relational database.

Going back to our example, we can use `SQL` to perform the following operations:

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

### SQL commands

We can achieve these goals with the following `SQL commands`:

- `SELECT`: Retrieves data from a table
- `CREATE`: Adds a new record in a table
- `UPDATE`: Edits an existing record in a table
- `DELETE`: Removes a record from a table

You may notice the similarity between these `commands` and `HTTP verbs`:

- `GET`: Retrieves data from a server
- `POST`: Adds a new record to a server
- `PUT`: Edits an existing record on a server
- `DELETE`: Removes a record from a server

Both of these `verb sets` map onto the `CRUD` acronym, which stands for: **C**reate, **R**ead, **U**pdate, **D**elete

Let's run through the list of numbered `cases` above with SQL:

#### 1. View some or all of a `Student`'s details

```sql
SELECT * FROM students WHERE id = 1;
```

> Select all columns from the `students` table for the student with an `id` of `1`

```sql
SELECT age FROM students WHERE name = "Sam";
```

> Retrieves Sam's age from the `students` table

#### 2. Add a new `Student`

```sql
INSERT INTO students (name, age, fulltime) VALUES ('John Doe', 42, false);
```

> Creates a 42-year-old part time student named `John Doe`

#### 3. Edit a `Student`'s details

```sql
UPDATE students SET fulltime = true WHERE name = "John Doe";
```

> Makes `John Doe` a fulltime student

#### 4. Remove a `Student`

```sql
DELETE FROM students WHERE name = "John Doe";
```

> Removes `John Doe` from the `students` table

#### 5. View a `Course`'s details

```sql
SELECT * FROM courses WHERE id = 1;
```

> Select all columns from the `courses` table if the `id` column is equal to `1`

#### 6. Add a new `Course`

```sql
INSERT INTO courses (name) VALUES ('Design 2');
```

> Adds a new course called `Design 2`

#### 7. Edit a `Course`'s details

```sql
UPDATE courses SET name = 'Design 2++' WHERE name = "Design 2";
```

> Update the name of the course `Design 2` to `Design 2++`

#### 8. Remove a `Course`

```sql
DELETE FROM courses WHERE name = "Design 2++";
```

> Removes the course `Design 2++` from the `courses` table

#### 9. Enroll a `Student` to a `Course`

```sql
INSERT INTO enrollments (student_id, course_id) VALUES (2, 3);
```

> Enrolls the Student `Emma` in the Course `HTML and CSS`

#### 10. Unenroll a `Student` from a `Course`

```sql
DELETE FROM enrollments WHERE student_id = 2 AND course_id = 3;
```

> Unenrolls the Student `Emma` from the Course `HTML and CSS`

### Using SQL in a web application

By utilising combinations of these commands, SQL developers can build complex and powerful procedures that govern the behaviour of an application's data flow. In web development, SQL is often used to store `state` for an `API` or `web application`. When accessing data from an API via a tool like `Postman` or `Fetch`, the API service may initiate a SQL command or procedure to retrieve the requested data before this is returned to the client.

#### SQL injection

One of the major security concerns of the early web environment was an `attack vector` known as `SQL injection`. This type of attack is essentially an abuse of the syntax of the language, forcing the SQL interpreter to execute commands that were not intended by the developer. This was most likely to happen when a website or application directly inserted the user's input into a SQL query without sanitising the input first. For example, a signup form for a Student on a university website may have a field for the student's name. If the developer was to directly insert the user's input into a SQL query without sanitising the input first, then the following could happen:

Input: `"Robert"`

```sql
INSERT INTO students (name) VALUES ('Robert');
```

> Creates a new student named `Robert`

Input: `"Robert'); DROP TABLE students;"`

```sql
INSERT INTO students (name) VALUES ('Robert'); DROP TABLE students;
```

> Creates a new student named `Robert`, then deletes the entire `students` table

[Relevant XKCD](https://xkcd.com/327/)

Thankfully this is no longer a major concern for web developers, as most modern web frameworks and libraries will sanitise user input before it is inserted into a SQL query. The addition of `prepared statements` has also helped to mitigate the risk of SQL injection attacks by separating the query itself from the input.

## Limitations

Although relational database management systems are extremely widely used, there are limitations to their use. A relational database is a sensible and efficient choice in cases where data is highly uniform, such as a list of players in a sports team. Unfortunately, this is not always the case and some applications require datasets that are variable. For example, a list of car parts on an e-commerce website will have different properties for each part depending on it's purpose:

```json
[
  {
    "id": 1,
    "name": "Engine",
    "price": 1000,
    "weight": 80,
    "power": 65,
    "fuel": "petrol"
  },
  {
    "id": 2,
    "name": "Tyre",
    "price": 50,
    "weight": 10,
    "diameter": 15
  },
  {
    "id": 3,
    "name": "Seat",
    "price": 100,
    "weight": 15,
    "material": "leather"
  }
]
```

If we wanted to store these items in a relational database, we would either need to create a new table for every type of part or include all possible properties of all parts in a single table. Neither of these options are ideal, as they would result in a lot of wasted space and a lot of unnecessary complexity. It simply doesn't make sense to track a value for `fuel` for a `Seat` product object.

There are also performance limitations to relational databases. As the size of a database grows, the time it takes to retrieve data from the database also grows. This is because the database has to search through every record in the database to find the one that matches the query. This is known as a `full table scan` and is a common cause of performance issues in relational databases.

## Resources

- [SQLBolt](https://sqlbolt.com/)
- [SQLZoo](https://sqlzoo.net/)
- [MySQL](https://www.mysql.com/)
- [PostgreSQL](https://www.postgresql.org/)
