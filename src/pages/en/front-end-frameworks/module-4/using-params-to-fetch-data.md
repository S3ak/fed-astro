---
title: Using route params to fetch data
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We can use a param passed to a route to fetch a single item from an API.

## Setup

To start, we need to have a basic app working that uses a dynamic segment.

The app below has a `Home` and a `Post` page/component. The `Post` route has a dynamic segment.

```jsx
import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}

function Post() {
  let params = useParams();
  return <div>Individual Post ID: {params.id}</div>;
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post/1">Post with ID: 1</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
```

## Fetching a single item using the params

We will now use the params passed to our route/component and fetch a single item from the API using the params.

In the example below we have a `Post` component we add the `id` from our params to the URL. We then fetch a single item from the API and display the data from this item.

```jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}

function Post() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <div>
      <div>userId: {data.userId}</div>
      <div>id: {data.id}</div>
      <div>title: {data.title}</div>
      <div>body: {data.body}</div>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post/1">Post with ID: 1</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
```

![Basic routing with another page](../images/front-end-frameworks/module-4/react-router-dynamic-segment.png)

_Above: Fetching a single item from an API_

<hr>

## Lesson task

### Goal

For the student to demonstrate they can fetch data using a dynamic segment.

### Brief

We will use the params from a dynamic segment in an API call to fetch data, then display it.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

The API you should use is: `https://jsonplaceholder.typicode.com/todos`

1. Create a new CRA or an existing app.

2. Add `react-router`.

3. Create `<Todo>` component which only returns `<div>Todo</div>` at this stage.

4. Create routing to this `<Todo>` component using a dynamic segment.

5. In the `<Todo>` component, use the `useParams` hook to get the params.

6. Use the correct parameter from `params` to do an API call and fetch a single Todo.

7. Display this Todo on the page.

## Additional resources

https://jsonplaceholder.typicode.com/posts
