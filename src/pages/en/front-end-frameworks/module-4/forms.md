---
title: Forms
keywords: sample
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

React allows us to easily attach event listeners, making forms relatively easy to work with.

## Controlled and Uncontrolled Components

In React we have Controlled Components and Uncontrolled Components.

### Controlled components

Controlled components are where we have a state that manages the value of a component. This is usually how we handle our inputs in React.

We have a state that manages the value of the component, so we can't manually change these values without setting the state. In other words, if we were to type a letter, an input's value would not be changed. We instead set the state to the updated input value which then automatically reflects in the input.

A Controlled component/input is generally preferred as you can easily perform validation and keep track of the values. This means you can simply send through your states when you're submitting a form.

The downside of Controlled components/inputs is that they can lead to some input lag as the input will be re-rendered with the updated value, but generally this is not a concern.

### Uncontrolled components

Uncontrolled components on the other hand are managed by the DOM itself. React will not keep track of these inputs and you'll need to manually get the value of the input.

In some cases you might want to use an Uncontrolled component/input to reduce input lag, however Controlled components/inputs should be preferred.

## Creating a form with Controlled components: Part 1

We are now going to build out a form with Controlled components.

In the example below we have a single state, `firstName`.

We then have a `<form>` with a single `<input>`. The `value` for this input is set to our `firstName` state. Add our `firstName` state to the `<input>` makes it a Controlled component/input.

```jsx
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <div>
      <form>
        <input value={firstName} placeholder="Your first name" />
      </form>
    </div>
  );
}

export default App;
```

If you try and change the input then you will notice that nothing happens. This is because our input is a Controlled component/input. We instead need to use the state setter (`setFirstName`).

## Creating a form with Controlled components: Part 2

We will now extend the above example to include a function that will set our state when a user tries to modify the input.

```jsx
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");

  // Function that gets called whenever a user tries to change
  // the input value
  function onFirstNameChange(event) {
    // Get the current value of the input and then
    // set that to our `firstName` state
    setFirstName(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          value={firstName}
          placeholder="Your first name"
          // Add our `onFirsNameChange` function to the `onChange` event
          onChange={onFirstNameChange}
        />
      </form>
    </div>
  );
}

export default App;
```

Our input will now be changed based on the user's input and we can use the `firstName` sate value whenever we need this data, such as submitting it to an API.

## Adding multiple inputs and states

In this example below we have added more inputs and states to handle these inputs.

We have additionally added `lastName` which is a user's last name, and a `city` which is a user's city.

```jsx
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");

  function onFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function onLastNameChange(event) {
    setLastName(event.target.value);
  }
  function onCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          value={firstName}
          placeholder="Your first name"
          onChange={onFirstNameChange}
        />
        <input
          value={lastName}
          placeholder="Your last name"
          onChange={onLastNameChange}
        />
        <input value={city} placeholder="Your city" onChange={onCityChange} />
      </form>
    </div>
  );
}

export default App;
```

## Adding submit functionality

The main last part of our form is that we have to add the functionality for a form to be submitted.

We extend our example to have an `onFormSubmit` function that gets called when the `<form>`'s `onSubmit` event is called.

**NOTE:** We need to call the `event.preventDefault()` method so that the form does not refresh the page.

**NOTE:** The `fetch` function being called is simply an example and the end-point is not a valid end-point.

```jsx
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");

  // This function is called when our form's `onSubmit` event
  // is called, which happens when you press the Submit button
  function onFormSubmit(event) {
    // We must call the `event.preventDefault()` method otherwise our page
    // will reload and we usually don't want that with a SPA
    event.preventDefault();
    // We can now use our states as a payload in an API call
    const body = {
      firstName,
      lastName,
      city,
    };

    // Basic fetch example
    fetch("http://www.example.com", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  function onFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function onLastNameChange(event) {
    setLastName(event.target.value);
  }
  function onCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          value={firstName}
          placeholder="Your first name"
          onChange={onFirstNameChange}
        />
        <input
          value={lastName}
          placeholder="Your last name"
          onChange={onLastNameChange}
        />
        <input value={city} placeholder="Your city" onChange={onCityChange} />
        {/* Added a button to submit our form */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
```

## Adding labels to our form inputs

We should be using labels for our inputs so that our code is a11y-compliant. Doing so is quite simple.

1. Give an input a `name` property.
2. Add a `<label>` above the input that has the `htmlfor` property set to the `name` property in step 1.

Our example has been modified to include labels.

```jsx
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      firstName,
      lastName,
      city,
    };

    fetch("http://www.example.com", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  function onFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function onLastNameChange(event) {
    setLastName(event.target.value);
  }
  function onCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        {/* Label added for 'first-name' */}
        <label htmlFor="first-name">First name</label>
        <input
          name="first-name"
          value={firstName}
          placeholder="Your first name"
          onChange={onFirstNameChange}
        />
        {/* Label added for 'last-name' */}
        <label htmlFor="last-name">Last name</label>
        <input
          name="last-name"
          value={lastName}
          placeholder="Your last name"
          onChange={onLastNameChange}
        />
        {/* Label added for 'city' */}
        <label htmlFor="city">City</label>
        <input
          name="city"
          value={city}
          placeholder="Your city"
          onChange={onCityChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
```

## Reducing text inputs to a single function

It's possible for us to use the `name` properties of our inputs and then have a single function which handles our state changes.

**NOTE:** This will only work for text inputs.

```jsx
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      firstName,
      lastName,
      city,
    };

    fetch("http://www.example.com", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === "first-name") {
      setFirstName(value);
    }
    if (event.target.name === "last-name") {
      setLastName(value);
    }
    if (event.target.name === "city") {
      setCity(value);
    }
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="first-name">First name</label>
        <input
          name="first-name"
          value={firstName}
          placeholder="Your first name"
          onChange={onTextInputChange}
        />
        <label htmlFor="last-name">Last name</label>
        <input
          name="last-name"
          value={lastName}
          placeholder="Your last name"
          onChange={onTextInputChange}
        />
        <label htmlFor="city">City</label>
        <input
          name="city"
          value={city}
          placeholder="Your city"
          onChange={onTextInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
```

<hr>

## Lesson task

### Goal

The student can demonstrate that they are able to create a form.

### Brief

We will be creating a form that is similar to a contact form.

> <b>NOTE:</b> Lesson tasks do not get submitted on Moodle and are not assessed by tutors. They are mainly there for you to practise what you have learned in the lesson.

### Level 1 process

1. Create a new CRA or use an existing App.

2. In App.js, or another component, create a form.

3. This form must have the following inputs and states:

   3.1 First name

   3.1 Last name

   3.1 Subject

   3.1 Body

## Additional resources

[ReactJS.org Docs: Forms](https://reactjs.org/docs/forms.html)
