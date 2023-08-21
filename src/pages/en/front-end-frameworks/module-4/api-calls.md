---
title: API Calls
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

You'll often need to access APIs as a front-end developer.

## How to access an API

We are going to get a list of posts from the following endpoint: `https://jsonplaceholder.typicode.com/posts`

We want our API data to load when the component loads so we will run our code inside of a `useEffect()`. In side of this `useEffect` we create an async function (`getData`) which will fetch our posts.

Once the data is loaded we will add it to a state called `posts`.

We then eventually render out the posts.

```jsx
import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);

  // The useEffect will run once when the component first mounts
  useEffect(() => {
    // Function that gets our posts
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      // Setting our `posts` state to the API data we received
      setPosts(json);
    }
    getData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```

## Adding loading and error states

In the example above we retrieved our data however we aren't handling any loading or error states. When we're doing an API call we usually need to wait a period of time until the data is fetched. We would usually display a loading indicator while this is taking place. In addition to this, we would also want to display an error in case one occurs when we are fetching the data.

We will make use of a `try catch` block and then set loading and error states based on what is happening with the API call.

```jsx
import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);
  // State for holding our loading state
  const [isLoading, setIsLoading] = useState(false);
  // State for holding our error state
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        // Reset the error state in case there as an error previously
        setIsError(false);
        // Turn on the loading state each time we do an API call
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setPosts(json);
        // Clear the loading state once we've successfully got our data
        setIsLoading(false);
      } catch (error) {
        // Clear the loading state if we get an error and then
        // set our error state to true
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading posts</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```

<hr>

## Lesson task

### Goal

The student must demonstrate that they can fetch data from an end-point and then display this data.

End-point: https://api.noroff.dev/api/v1/online-shop

### Brief

We are going to fetch data from an end-point and then display this data using HTML elements.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Create a new CRA or reuse a previous installation

2. Get a list of products from the end-point: https://api.noroff.dev/api/v1/online-shop

3. Display a component for each product, using all of the properties from the object in the data

## Additional resources

[Noroff API](https://api.noroff.dev/api/v1/online-shop)
