---
title: Introduction to testing
keywords: workflow
tags: Workflow
layout: ../../../layouts/MainLayout.astro
---

## Introduction

Before discussing testing in the context of software, it is helpful to look at this topic from an abstract distance. We intuitively test the outcome of our actions and the conditions of our environment on a daily basis. For example, before stepping into the shower, we test the temperature of the water to avoid burning ourselves. Before drinking milk, we test with our noses for the presence of microbes to ensure that we do not drink something poisonous.

Some of these every day tests are learned rather than instinctual. Checking your mirror before turning a car, for example, or testing for acidity using litmus paper. Often these tests are enforced by workplace safety regulation. For example, testing heavy machinery on a routine basis to avoid accidents.

In some contexts, we are subjected to tests at school, college or in an interview - while learning to drive, fly a plane, or operate a submarine. Our knowledge must be tested to verify our level of understanding.

There is a categorical difference between sniffing milk, checking the condition of an industrial furnace and passing your high school exams. In the context of software development, we can liken these three categories to the following activities:

- Intuitive Testing: Manual user testing on the browser.
- Formalised Testing: Unit testing on NodeJS.
- Acceptance Testing: End-to-end testing.

## Types of tests

In front-end web development, the most important types of testing are `Manual Testing`, `Unit Testing` and `End-to-end Testing`.

### Manual user testing

When we create web applications, the first form of testing that we learn involves using the browser to manually perform the interactions that we have exposed to our users. For example, if we are developing a contact form, we will repeatedly fill out and send this form with different values to observe and change the outcome. Although different developers will have different levels of proficiency with this form of testing, it comes naturally as the intuitive way to test our work.

Manual testing is an important activity, especially considering that this is how a non-technical client will most likely assess your work. Good manual testing should be supported by planning, for example, creating a spreadsheet with the important user interactions before you begin. This helps to ensure that your `test coverage` is even across your project and that nothing has been missed. Forgetting to test a feature can lead to unnecessary embarrassment during a product demo.

Beyond the surface level, manual testing can be performed with `breakpoints`, `debug` statements, `console` statements or by using the many features available within browser devtools. For example, an effective way to manually test fetch functions would be to use the `Network` tab to observe the request and response data. If the result matches your expectation, it has passed the test.

### Unit testing

Instead of relying on a long-winded and potentially uneven manual `test set`, `Unit Tests` can be constructed to automatically test code from the command line. These tests are run during development time to check if a recent change had negative consequences (`regression testing`) and before `build time` to ensure that a broken product cannot be deployed.

Unit tests are closely coupled to their corresponding code. If we have a function that converts a number into a string, we must also have a test that checks that this function behaves as intended. In this case, the test will be quite straightforward, quick to write and `robust`, meaning that it is very unlikely to undergo `regression` as the result of a change elsewhere in the application codebase.

Competing tools are commonly used for this purpose, the two most popular being `Jest` and `Mocha`. Unit testing is commonly incorporated as a feature into testing libraries that perform a wider feature set, such as `Cypress` or `Storybook`. In this lesson, we will not cover any syntax or library-specific concepts.

### End-to-end testing

Unlike unit testing, `e2e` tests are not tightly bound to a particular file or function. Instead, these tests directly simulate the experience of `Manual Testing`. For example, if our user needs to toggle a checkbox and then click a button - that is what our `e2e` test routine must do. Unlike a slow, unreliable human user, an `e2e` suite can be run in seconds or minutes. This depends on how many features are being tested and if the behaviours being tested are `synchronous` or `long running`. For example, an application that requires ten successive `fetch` operations may take `10 * 30ms = 300ms` to complete.

These tests can be run directly in our default browser, allowing us to see the process happening in real-time. When we are happy with the quality of our `test coverage`, the same `test routine` can be run directly on the command line via `NodeJS`. This means our tests can be run remotely on a server, just like unit tests.

This form of testing is both challenging and enjoyable, as it provides direct visual feedback. It is most commonly used to satisfy `Acceptance Criteria` with a client. For example, if a team is building an e-commerce application, they will have a strict set of criteria:

- User can click the "Register" button to register an account
- User can click the "Help" button to view a support modal
- User can click the "Checkout" button to navigate to "/checkout/"

To demonstrate that each of these features has been completed, the team would be wise to dedicate some time early in the development process to constructing `e2e routines`. This can also help morale and motivation, as it provides a constant series of milestones to be achieved.

## The mentality of testing

Writing formalised tests for your application can be an unsettling experience at first. It may be clear how to use a given library's syntax, but exactly what to ask for is not always as clear. To create effective tests, we must switch mind frames away from pure coding. Although we often describe our tests using `JavaScript`, a test file can look and feel quite different to a typical application file.

Instead of using code to describe tests, this lesson will do so with plain English. This should highlight the mental approach needed, as well as the sometimes perplexing commands that are involved.

### Black box thinking

It is important to remember that the goal of testing code is simulating a genuine experience. Our users do not commonly inspect the source code of the website they are visiting, nor should developers need to read every file of code in a project they are working on to use a single function. We do not need to do this either while writing tests.

In fact, it is best to do this before any work has begun. This approach is called `Black Box Testing` in reference to an aircraft's black box, which should never be opened or inspected. In our case, our application source code is the `black box`, and as testers, we observe from the outside in.

During unit testing, we are not aiming to simulate our users' behaviour but the application code's behaviour at large. If we have three buttons that trigger three functions, there should be three unit tests to match. These tests will check the input and output value of the function in isolation to avoid any interference from other parts of the application. Exactly how a function achieves this goal is not of any interest to the accompanying unit test.

### Stating the obvious

While describing tests, it is common to write something that seems redundant or obvious. For example:

```js
function multiplyByThree(value) {
  if (typeof value !== "number") {
    throw new Error("Value must be numerical");
  }
  return value * 3;
}
```

This function has a very clear purpose, and from scanning the code we may feel confident that it will work 100% of the time. However, this does not mean that we shouldn't write a test to describe the intended functionality:

```
1. It accepts a numerical argument and returns that argument multiplied by three.
```

In simpler terms, "it does what it says it does". We could also rephrase this "`multiplyByThree` multiplies by three". This type of statement is normally avoided in coding because it is `redundant`. However, this is precisely the purpose of testing. We must state the obvious in our tests, but that is not where the process ends.

### Desiring failure

Any function that can succeed can also fail in some way. Even a well-written function can be misused, for example, by providing the wrong type of input value. While testing, we must think about the success of our code as much as it's failure. This can be counterintuitive, as this involves setting up instances of `intentional misuse`:

```
2. It throws an error when provided with a non-numerical type value
```

In this case, we want the function to throw an error if we provide the wrong type of input value since this might lead to an unexpected output value. For example, consider a function that accepts payment information for a checkout - if this function is passed `["100", "50", "25"]` instead of `[100, 50, 25]` the result of adding these values together will be quite different: `"$1,005,025.00"` vs `$175.00`. Expecting other developers to always use a function in the correct way is not sustainable for the same reason that relying on manual testing is not sustainable. Humans are unreliable, and well-written test routines are `robust`.

We can manually test this function in the browser console:

```js
multiplyByThree([1, 2, 3]); // Uncaught Error
```

In this case, we `expect` the statement to `throw` an `Error`. Our test will pass only if the statement throws an error.

### Repeating yourself

When writing code, we are frequently reminded not to repeat ourselves. Testing software is a highly repetitive process that demands code repetition. There are methods that can be used to reduce the amount of repeated code, but these must be used carefully to avoid `contamination`.

Test contamination is when the actions in one test affect the outcome of another test. For example, while testing a shopping cart, the cart must be created from scratch and populated with data before every test case. If this is not done, items may linger in the cart from previous tests. This generally leads to more `instability` or `flakiness`, meaning that a test could have different outcomes when run with the same data repeatedly.

Although we have tested `Condition 2`, there are more than one `non-numerical types` in JavaScript:

```js
multiplyByThree({ a: 1 }); // Uncaught Error
multiplyByThree("100"); // Uncaught Error
multiplyByThree(function () {}); // Uncaught Error
multiplyByThree(undefined); // Uncaught Error
```

By testing a variety of bad types, we can now be more confident that this function won't output a dangerous result.

Although we could simply peek at the source code for this function, we should avoid doing so. Instead, we must consider all the possible ways this function could be used or abused, regardless of what the code says. This is because code is subject to change, while desired functionality should be more static. For example, a checkout button listener may always need to take the user to the checkout page, but exactly how that is done may change if the developer switches frameworks or routers.

## The language of testing

Not only does testing come with its own dictionary of jargon, but we must also adopt a certain `tone` and `tense` while describing our `assertions` in English. Each test includes a sentence that explains the purpose of the test code. A good test has a clear and detailed description that closely matches the contents of the test script. A bad test has a vague or unclear description that does not align well with its contents.

When writing tests, we typically start sentences with `It` and write in the present tense:

`calculate-percentage.test.js`

- It returns the percentage of the first argument to the second argument
- It throws an error if provided with a non-numerical argument

`login-modal-button.test.js`

- It toggles the login modal on when the state is off
- It toggles the login modal off when the state is on
- It is disabled while the modal state is on
- It is not disabled while the modal state is off

`get-products.test.js`

- It returns an array of product objects after awaiting
- It throws an error if the response code is not 200
- It throws an error if no JWT token header is included

We use this `tone` and `tense` because these descriptions will be displayed with the results in a table when the tests are run together. A well-written description should give immediate and helpful insight into what has occurred:

| **Name**             | **Test**                                                               | **Outcome** |
| -------------------- | ---------------------------------------------------------------------- | ----------- |
| calculate-percentage | It returns the percentage of the first argument to the second argument | ✅ PASSED   |
| calculate-percentage | It throws an error if provided with a non-numerical argument           | ❌ FAILED   |
| login-modal-button   | It toggles the login modal on when the state is off                    | ✅ PASSED   |
| login-modal-button   | It toggles the login modal off when the state is on                    | ✅ PASSED   |
| login-modal-button   | It is disabled while the modal state is on                             | ✅ PASSED   |
| login-modal-button   | It is not disabled while the modal state is off                        | ❌ FAILED   |
| get-products         | It returns an array of product objects after awaiting                  | ❌ FAILED   |
| get-products         | It throws an error if the request code is not 200                      | ✅ PASSED   |
| get-products         | It throws an error if no JWT token header is included                  | ✅ PASSED   |

## Example

### The animal class

Our application uses a simple `class` to describe animal data stored in the database:

```js
class Animal {
  constructor(name, continent, carnivore, herbivore) {
    this.name = name;
    this.continent = continent;
    this.diet.carnivore = carnivore;
    this.diet.herbivore = herbivore;
    this.diet.omnivore = carnivore && herbivore;
  }
}
```

Elsewhere in our code, we have a function to retrieve this data based on the animal's properties:

```js
export async function getAnimalData(name = "", continent = "") {
  if (typeof name !== "string" || typeof continent !== "string") {
    throw new Error("Invalid argument type");
  }

  if (!name && !continent) {
    // Return list of all animals
    return await fetchAnimals();
  }

  // Return list of animals filtered by name and/or continent
  return await fetchAnimals(name, continent);
}
```

To test this code, we first need to establish our test cases:

1. It returns a list of all animals when no arguments are provided
2. It returns a list of animals filtered by continent when only the continent argument is provided
3. It returns a list of animals filtered by name when only the name argument is provided
4. It returns a list of animals filtered by both name and continent when both arguments are provided
5. It throws an error if the name or continent argument is not a string

For each of these assertions, at least one step or `test` is required. Let's work through these cases one by one:

**Assertion 1**

1. Call the function with no arguments, expect a non empty array as a result
2. Inspect the results, expect each item to be an instance of the `Animal` class

**Assertion 2**

1. Call the function with a `continent` argument, expect a non empty array as a result
2. Inspect the results, expect each item to be an instance of the `Animal` class with the correct `continent` property

**Assertion 3**

1. Call the function with a `name` argument, expect a non empty array as a result
2. Inspect the results, expect each item to be an instance of the `Animal` class with the correct `name` property

**Assertion 4**

1. Call the function with a `name` and `continent` argument, expect a non empty array as a result
2. Inspect the results, expect each item to be an instance of the `Animal` class with the correct `name` and `continent` properties

**Assertion 5**

1. Call the function with a non string `name` argument, expect an error to be thrown

We can see from this list that our tests are quite repetitive, changing only one variable in the scenario each time. For each `assertion` to `pass`, every one of it's child steps must succeed.

## Test Driven Development

Test Driven Development (TDD) is a software development process that emphasises the creation of automated tests before the creation of the code. This is in contrast to the more intuitive approach of writing code first and then testing it later. TDD is a very popular approach to software development and is often used in conjunction with Agile development methodologies.

This is only possible to achieve with good quality planning before the start of a project. Before you can write tests, you should plan your application functionality. With a detailed plan in place, it is possible to make assertions about code that does not yet exist. For example, if building a donation form for a charity we may confidently assert that:

1. It has a required `name` form field
2. It has a required `donation` form field that cannot be set lower than 0
3. It has an optional `message` form field
4. It returns a success response when submitted with valid data
5. It shows help text when an attempt is made to submit with invalid data

All we have done to arrive at this short list of assertions is think with common sense about how this form system should behave. Using this list of assertions, we can begin test development, expecting that our tests will initially fail all the time. As work tasks are completed, the tests will begin to pass one by one until all assertions can be considered truthful.

During this process, especially when writing your first tests, you may find that you need to adjust, update or extend your test coverage. A test may have been written incorrectly at first, causing it to falsely report either a `passing` or `failing` status. This can greatly impact the development process, particularly if we spend long debugging sessions looking for a problem that does not actually exist in our code. This can damage our motivation or cost us crucial time.

However, when equipped with a `robust` set of tests, our development process is faster, more efficient and more predictable. With each new feature completed, we can always check that this feature is working at a glance in future. If another developer in our team makes a change that breaks some of our code, they will be aware of this before they merge the code into the default branch. This helps to keep the default branch free of unfinished or faulty code.

## Activities

### Outside-in front-end development

This resource offers a common sense approach to test-driven development aimed at students and front-end developers that are new to the field of testing. Please read the following pages (the activities are not required).

1. [Introduction](https://outsidein.dev/about-this-book)
2. [Agile Methodology](https://outsidein.dev/concepts/why-agile)
3. [Testing Concepts](https://outsidein.dev/concepts/testing-concepts)
4. [Test Driven Development](https://outsidein.dev/concepts/why-tdd)

## Lesson task

Thinking about your daily life, identify a test that you perform already. For example, you may check that your car is locked before leaving it in public. Write a list of assertions about this process and the smaller steps you may take in order to confirm these assertions. Please use this format:

| **Name** | **Test**       | **Outcome** |
| -------- | -------------- | ----------- |
| It...    | Expect that... | ✅ PASSED   |
| It...    | Expect that... | ❌ FAILED   |
