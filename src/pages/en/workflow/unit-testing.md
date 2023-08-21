---
title: Unit Testing
keywords: workflow
tags: Workflow
layout: ../../../layouts/MainLayout.astro
---

## Introduction

In this lesson we will take a closer look at `Unit Testing` and how it can be used to improve the quality of our code. We will be using `Jest`, one of the most popular JavaScript testing frameworks at the time of writing.

The purpose of a unit test is to confirm that a single atom of functionality is working. This is most commonly a test for a single function, class or component. As unit tests are `tightly coupled` to the code that they test, it is common to create these files in the same folder as the code being tested.

For example, if we are testing `/src/js/commerce/cart.js` we would create a file `/src/js/commerce/cart.test.js` to contain the unit tests for this functionality. For this reason it is important to structure your application properly, breaking code up into manageable functions with a single responsibility. If our code is `monolithic`, i.e. a single file with many responsibilities, it will be very difficult to test properly.

Furthermore, testing is much easier when the codebase is primarily made from `pure functions`. A pure function accepts an `input`, provides an `output`, and does not change any variables that are defined outside it's scope. You can read more about this concept [here](/programming-foundations/intro-functions.html). Functions that do not touch external data can be described as being free of `side-effects`, meaning that these functions will always perform in the same predictable way. This is crucial for testing as we want our tests to be reliable and repeatable.

## Testing with Jest

Jest is a popular unit testing framework maintained by Meta. Jest is designed to offer a `zero-configuration` experience, meaning that it is easy to get started with. In this lesson we will explore testing with Jest and how to configure the best working environment for Jest.

### Installing Jest

> Make sure that you have a git repository and `package.json` file ready in your project folder, using `git init` and `npm init` as necessary.

> Make sure to setup a `.gitignore` file with `/node_modules` ignored before proceeding.

To begin using Jest in a project, we must first install it with the command

```bash
npm i -D jest@29.2.0
```

Next, we should update our `test` script within `package.json`:

```json
{
  "scripts": {
    "test": "npm run test-unit",
    "test-unit": "jest"
```

The `jest` command will search for any files that match the pattern `*.test.js` and run each of them, reporting the results in the console.

### Configuring the Environment for Jest

If you do not have `eslint` installed and configured already, run this command and answer the questions accordingly:

```bash
npx eslint --init
```

```bash
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
Local ESLint installation not found.
The config that youve selected requires the following dependencies:

eslint@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```

The result will be a file like this:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

Now let's add a simple `baseline` test to check that `jest` is installed and working correctly.

Create a file called `src/test/baseline.test.js` and add the following code:

```js
test("It adds 1 and 2 and gets 3 as a result", () => {
  expect(1 + 2).toEqual(3);
});
```

Before we run this test, you will notice a red underline warning from eslint. For those familiar with how module `imports` work, this is no surprise - as we are referencing functions that we have not imported, and are not built into the runtime environment (i.e. the Browser or Node.js).

If we run our test with `npm run test-unit` we will see that it succeeds despite this warning.

We should resolve this by updating our eslint configuration to allow `jest` functions to be used in our tests. To do this, we will need to install the `eslint-plugin-jest` package:

```bash
npm i -D eslint-plugin-jest
```

We will need to enable this plugin within our `.eslintrc.json` file at the same time as setting various other configurations. Bear in mind that we only want these linting rules to be applied to `Jest test files`, to do so we can setup a pattern to match these URLs:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "files": ["**/*.test.js"],
      "env": { "jest": true },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": { "jest/prefer-expect-assertions": "off" }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

With this configuration in place, we should see the red underline warning disappear. This indicates that eslint has been configured to allow `jest` functions to be used in our project.

We can confirm that this `baseline` test is still working with the `npm run test-unit` command.

### Configuring Babel for Jest

By default, Jest uses `ES5` JavaScript syntax instead of the more modern version that we are used to writing with. For example, to reference another file `ES5` uses `require()` whereas `ES6` and later uses `import`.

Although we could write all of our tests with this limited syntax, it is more efficient to use the same version of JS everywhere in your project to avoid `code switching` and the associated mental overhead involved.

Create a new file called `es6.js` and add the following content:

```js
export function wait(ms = 1000, resolveWith = "Hello World") {
  return new Promise((resolve) => {
    setTimeout(() => resolve(resolveWith), ms);
  });
}
```

Create another file called `es6.test.js` and add the following content:

```js
import { wait } from "./es6";

test("It resolves with 'abc' value after 1 second", async () => {
  const start = Date.now();
  const data = await wait(1000, "abc");
  expect(data).toEqual("abc");
  const end = Date.now();
  expect(end - start).toBeGreaterThanOrEqual(1000);
});
```

If we run this test with `npm run test-unit` we will see that it fails with the following error:

```bash
 SyntaxError: Cannot use import statement outside a module
```

To ensure that our tests can use this modern syntax, we must install and configure `babel` to work with `jest`.

```bash
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

Lastly, we need to create a file called `babel.config.json` and add the following content:

```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

If we run the `npm run test-unit` command again, we will see that this has completed successfully. Our environment is now configured for `testing` with `Jest` using `ES6`.

## Jest Syntax

Jest provides a number of useful functions that can be assembled into tests. We have already encountered some of these above: `test()`, `expect()`, `toEqual()`, and `toBeGreaterThanOrEqual()`.

These functions are named so that they can be used to construct something similar to a sentence in English:

`apple.js`

```js
export default {
  color: "red",
  texture: "juicy",
  animalProduct: false,
  rating: 4.5,
};
```

`apple.test.js`

```js
import apple from "./apple";

describe("My apple", () => {
  it("is red and juicy", () => {
    expect(apple.color).toEqual("red");
    expect(apple.texture).toEqual("juicy");
  });

  it("is delicious", () => {
    expect(apple.rating).toBeGreaterThan(6);
  });

  it("is vegan friendly", () => {
    expect(apple.animalProduct).not.toBeTruthy();
  });
});
```

### describe()

In this example, `describe` has been used to group assertions into a single block. The apple object needs to pass all three of these assertions.

Try this out yourself and check the console for a report on what went wrong.

### it() vs test()

You may notice that we have swapped `test()` for `it()`. These are functionally identical, interchangeable and provided to help with readability.

Compare these two examples:

```js
test("it shows a message when clicked", () => {
  expect(...)
})

it("shows a message when clicked", () => {
  expect(...)
})
```

They perform the same task but the second example is easier to read and understand when nested inside a `describe` statement.

### expect()

The `expectations` are set using `expect()` and each of these must succeed for the test to pass. There are a number of `matchers` that can be used to test the value of a variable or the result of a function.

Each data type (`string`, `number`, `boolean`, `array`, `object`, `function`, etc) has its own set of matchers in the same way that these types have different `prototype methods` in JavaScript.

Let's take a closer look at this example's expectations:

```js
expect(apple.color).toEqual("red");
expect(apple.texture).toEqual("juicy");
expect(apple.rating).toBeGreaterThan(6);
expect(apple.animalProduct).not.toBeTruthy();
```

1. Assuming that `apple.color` is a `string`, we can use the `toEqual()` matcher to check that it is equal to `"red"`. Any other value will cause the test to fail.
2. Assuming that `apple.texture` is also a `string`, we can use the `toEqual()` matcher to check that it is equal to `"juicy"`. Any other value will cause the test to fail.
3. Assuming that `apple.rating` is a `number`, we can use the `toBeGreaterThan()` matcher to check that it is greater than `6`. Any value lower than this will cause the test to fail.
4. Assuming that `apple.animalProduct` is [`truthy`](../programming-foundations/arrays-of-objects.html), we can use the `not` and `toBeTruthy()` matchers together to check that it is not `true`.

## Matchers

Matchers are functions that compare a value to an expected value. If a matcher succeeds, that assertion succeeds. As such, matchers are the atoms of Unit Testing.

The following table lists some of the most commonly used matchers. For a full list of matchers, see the [Jest documentation](https://jestjs.io/docs/en/expect).

| Matcher                    | Description                                                                      |
| -------------------------- | -------------------------------------------------------------------------------- |
| `toEqual()`                | Checks that a value is equal to another value.                                   |
| `toBeGreaterThan()`        | Checks that a value is greater than another value.                               |
| `toBeGreaterThanOrEqual()` | Checks that a value is greater than or equal to another value.                   |
| `toBeLessThan()`           | Checks that a value is less than another value.                                  |
| `toBeLessThanOrEqual()`    | Checks that a value is less than or equal to another value.                      |
| `toBeCloseTo()`            | Checks that a number is close to another number.                                 |
| `toBeNull()`               | Checks that a value is `null`.                                                   |
| `toBeUndefined()`          | Checks that a value is `undefined`.                                              |
| `toBeDefined()`            | Checks that a value is not `undefined`.                                          |
| `toBeTruthy()`             | Checks that a value is `truthy`.                                                 |
| `toBeFalsy()`              | Checks that a value is `falsy`.                                                  |
| `toContain()`              | Checks that an array contains a value.                                           |
| `toContainEqual()`         | Checks that an array contains an object with matching properties.                |
| `toHaveLength()`           | Checks that the length of an array, object or string matches the expected value. |
| `toMatch()`                | Checks that a string matches a regular expression.                               |
| `toMatchObject()`          | Checks that an object matches a subset of the properties of an expected object.  |
| `toThrow()`                | Checks that a function throws an error when it is called.                        |

The matchers we choose should:

- Work for the type of value we expect
- Check meaningful values about our code
- Translate our test description into code

## Mocks

Despite being written with JavaScript, unit tests are always run by the `NodeJS` runtime, rather than in a browser. Although `NodeJS` is designed to be similar to the browser, it lacks certain important features that we rely on as front-end developers. For example, we often refer to `location.href` while writing applications - however, this object does not exist within the `NodeJS` environment.

Our code is full of these native functions, objects and variables - and without them, attempting to run a function that relies upon them inside a test will result in an error. Let's examine an example in closer detail:

```js
export default async function getExampleData(limit = 10) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
  );
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Unable to fetch data");
  }
}
```

Our unit test for this should be straightforward, we need to call the function with a value for `limit` and check if the number of items we receive is less than or equal to the value we provided:

```js
import getExampleData from "./example.js";

describe("getExampleData", () => {
  it("returns the correct maximum of items", async () => {
    const data = await getExampleData(3);
    expect(data.length).toBeLessThanOrEqual(3);
  });
});
```

Although this would work in our browsers, it will not work in Jest - as `window.fetch` does not exist in the context of `NodeJS`. This will throw an error, causing our test to fail.

We can solve this problem by using a `mock` function to replace the native `fetch` function with a function that we can control.

```js
const TEST_VALUE = 3;

// Create a mock function that will pretend to be the native fetch function
const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue([
    { id: 1, title: "Example 1" },
    { id: 2, title: "Example 2" },
    { id: 3, title: "Example 3" },
    { id: 4, title: "Example 4" },
    { id: 5, title: "Example 5" },
  ]),
});

// Assign this to the global fetch function
global.fetch = mockFetchSuccess;

describe("getExampleData", () => {
  it("returns the correct maximum of items", async () => {
    const data = await getExampleData(TEST_VALUE);
    expect(data.length).toBeLessThanOrEqual(TEST_VALUE);
  });
});
```

We can use the same approach to **expect failure**:

```js
const mockFetchFailure = jest.fn().mockResolvedValue({
  ok: false,
});
global.fetch = mockFetchFailure;

describe("getExampleData", () => {
  it("throws an error when the request fails", async () => {
    await expect(getExampleData(3)).rejects.toThrow("Unable to fetch data");
  });
});
```

Notice that we did not actually send an HTTP request to the API at all, instead, our `getExampleData` function simply returned the contents that we provided in our mock function. This may seem strange or redundant, however we are not interested in testing the health of the API, instead, we are focused on the health of the function itself. Whether the API request fails or not is none of our concern during unit testing, as long as our function responds correctly to a successful or failed request.

By taking control of the `fetch` function we do not have to wait until API conditions are in our favour, we can simulate the API in all possible states to make sure our code will handle them correctly.

### Checking Mocks

When using mocks such as `fetch` or `localStorage`, it can be useful to check whether these functions were called or not, how many times they were called or which parameters they were called with.

Jest provides an interface for us to inspect this behaviour with the methods `toHaveBeenCalled`, `toHaveBeenCalledWith`, `toHaveBeenCalledTimes` and more.

Let's work through an example case. Our example function calls three different API endpoints and returns the result of each of these calls in an array:

```js
export async function complexRemoteCall() {
  const endpoints = [
    fetch("https://a.api.com"),
    fetch("https://b.api.com"),
    fetch("https://c.api.com"),
  ];

  return await Promise.all(endpoints);
}
```

When testing this function, we will need to use a mock for fetch in order to return different data for each of the three endpoints. We will also need to check how many times this mock function has been called. For instance, if the `fetch` function has only been called once - we can be sure that this function has not performed correctly. Likewise, if `fetch` has been called more than three times, we must also conclude that the function is not working correctly.

```js
describe("complexRemoteCall", () => {
  it("should return an array of responses from three API endpoints", async () => {
    global.fetch = jest.fn(() => Promise.resolve({}));

    await complexRemoteCall();

    expect(fetchMock).toHaveBeenCalledTimes(3);
  });
});
```

Likewise we may want to inspect the arguments provided to this function when it was called:

```js
describe("complexRemoteCall", () => {
  it("should make an API request to each of the API URLs", async () => {
    global.fetch = jest.fn(() => Promise.resolve({}));

    await complexRemoteCall();

    expect(fetchMock).toHaveBeenNthCalledWith(1, "https://a.api.com");
    expect(fetchMock).toHaveBeenNthCalledWith(2, "https://b.api.com");
    expect(fetchMock).toHaveBeenNthCalledWith(3, "https://c.api.com");
  });
});
```

These methods provide useful data on any mocked function, and can be used to ensure that `localStorage` values are handled correctly, for example.

### Third Party Mocks

Some `mocks` are provided by Jest and other libraries automatically, however custom mocks are commonplace and a routine aspect of this form of testing.

## Activities

- Read: [Using Matchers](https://jestjs.io/docs/using-matchers)
- Read: [Testing Async Code](https://jestjs.io/docs/asynchronous)
- Read: [Async Example](https://jestjs.io/docs/tutorial-async)
- Read: [CSI Mocks](https://microsoft.github.io/code-with-engineering-playbook/automated-testing/unit-testing/mocking/)

## Lesson Task

Select a JavaScript project that you have already completed. Inside this project, identify 3 functions that meet this criteria:

- Function has at least one `argument`
- Function has a `return value`

For each file, create a `<filename>.test.js` file to match and construct unit tests for each.

Use the `describe >> it >> expect` syntax to structure your tests so that they are as understandable as possible.

Once all tests are passing, think about how you might improve this code based on the feedback you have received.

## Resources

- [Testing a Framework](https://jestjs.io/docs/testing-frameworks)
- [Jest documentation](https://jestjs.io/docs/api)
