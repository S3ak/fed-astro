---
title: API Hook
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

We can create our own hook that makes handling our API calls easier.

## The benefits of an API call hook

When we are doing API calls, we typically have `data`, `isLoading` and `isError` states that are used to render our data, loading and error components. This becomes a lot of boilerplate code whenever we want to do API calls in a component.

We could instead have an API hook which exports these states, reducing our API code to a single line when the hook is used in a component.

## Creating the hook

We will now create the API hook.

You will see in our hook that we have three states:

1. `data`: Our data that gets stored

2. `isLoading`: Our loading state which we use to show a spinner

3. `isError`: Our error state to show that we have an error

The logic when it comes to fetching the data in our hook is how we would normally handle an API call in React, however it's now been abstracted to a reusable hook that exposes the above three states. We can then easily use these three states to render content accordingly.

```jsx
import React, { useState, useEffect } from "react";

/**
 * Our API hook
 */
function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, isError };
}

function App() {
  const { data, isLoading, isError } = useApi(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <div>Data loaded</div>;
}

export default App;
```

<hr>

## Lesson task

### Goal

The student will demonstrate they can create their own API hook.

### Brief

You will create your own API hook.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Create an API hook like shown in the lesson.
