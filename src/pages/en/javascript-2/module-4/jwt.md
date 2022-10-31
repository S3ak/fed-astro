---
title: JWT
description: jwt
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

In this lesson, we will be looking at JSON Web Tokens (JWT).

JWT, pronounced "jot", is an open standard (RFC 7519) that defines a way to transmit information between two parties as a JSON object securely. This information is verified and trusted.

As a front-end developer, you will use JWT to authenticate users and validate their network requests with the back-end. JWTs ensure that only the right people access pages they are allowed to access.

An example of the above is how you would log into your social media platforms and then have access to your account pages. If you didn't log in, you wouldn't be able to access these pages as they are private.

## How it works

The principle behind JWTs is quite simple. It involves the client receiving a token from the back-end and then using it in requests to the server.

![JWT Illustration](../images/javascript-2/async/jwt.png)

_Figure 1. JWT process_

1. **Client -> Server:** We log in with our credentials by sending a username and password to the server (POST request).

2. **Server:** Our credentials are correct, and a token is generated.

3. **Server -> Client:** Our credentials are correct, so the server sends back a token.

4. **client:** The client has now got the token and stores it.

5. **Client -> Server:** Any subsequent requests are now made with the stored token. This token is added to the request header so the back end can ensure the request comes from the right client.

6. **Server:** The server validates the token which is included in the header.

7. **Server -> Client:** If the token is correct, then the request is performed. Otherwise, the request is denied (`401 Unauthorized` error).

## Video on the basics of JWT

We take a look at the basics of JWT and the flow of it.

<iframe src="https://vimeo.com/750972477?h=7af9007a67" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/750972477/7af9007a67" target="_blank" alt="Classes video">Link to video</a>

### The process above simplified

We will be doing the following actions to use a JWT:

1. Client registers an account (no JWT involved, but we need an account to exist).
2. Client logs in with an account that will receive a token from the back-end API if the process is successful. The client stores the JWT token in Local Storage.
3. Client uses the JWT token in requests to the back end.

## Video on implementing JWT

We look at how we can implement JWT into our code.

<iframe src="https://vimeo.com/750977058?h=86a9f2f2a0" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<a href="https://vimeo.com/750977058/86a9f2f2a0" target="_blank" alt="Classes video">Link to video</a>

## 1. Register an account

Before we begin looking at the token, you must first register an account with the back-end API. Below is an example function of how you could do this.

API end-point: `https://nf-api.onrender.com/api/v1/social/auth/register`

[API end-point documentation](https://noroff-api-docs.netlify.app/social-endpoints/authentication#register)

**Note:** You will not be able to use the account we have used in our example. You will need to come up with your own account details.

```js
const API_BASE_URL = "https://nf-api.onrender.com";

async function registerUser(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

const user = {
  name: "test_account_a",
  email: "test-account-a@noroff.no",
  password: "my-password",
};

registerUser(`${API_BASE_URL}/api/v1/social/auth/register`, user);
```

If the registration request we sent was successful, then we would receive a status of `201` in the response with our user details as the response body:

```js
{
  avatar: "";
  banner: "";
  email: "test-account-a@noroff.no";
  id: 116;
  name: "test_account_a";
}
```

![Registering account: Register response](../images/javascript-2/async/jwt-register-response.png)

_Figure 2. JWT user registration response_

**Note:** We have hard-coded our user details as an object called `user`. You would typically need to get these values from inputs in a login form.

### Account already exists

You can only register a user once. If you were to try register a user with the same details then you would get the following `400` status code:

```js
error: "Bad Request"
message: "Profile already exists"
statusCode: 400
[[Prototype]]: Object
```

![Registering account: Account already exists](../images/javascript-2/async/jwt-register-user-already-exists.png)

_Figure 3. Profile already exists_

## 2. Logging in and receiving the token

We can now log in with our account and receive a token from the back-end API.

Below is the code we can use to log in. If successful, we will receive a status of `200` and a body containing an access token under the `accessToken` key.

After we receive the access token, we will store it in `localStorage` so we can keep using it.

**Note:** You will need to use your own account details which you used in point 1. above when you registered your account.

API end-point: `https://nf-api.onrender.com/api/v1/social/auth/login`

[API end-point documentation](https://noroff-api-docs.netlify.app/social-endpoints/authentication#login)

```js
const userLogin = {
  email: "test-account-a@noroff.no",
  password: "my-password",
};

async function loginUser(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
    console.log(json);
    // Logs:
    // accessToken: "eyJhbGciOiJIuzI1NiIsInR...
    // avatar: ""
    // email: "test-account-a@noroff.no
    // name: "test_account_a"
    return json;
  } catch (error) {
    console.log(error);
  }
}

loginUser(`${API_BASE_URL}/api/v1/social/auth/login`, user);
```

You can see above that we get a token back called `accessToken`. The server will now expect this token to be included in subsequent requests as part of the `Authorization` header, which we will look at shortly.

![Login: Access token](../images/javascript-2/async/jwt-login-token.png)

_Figure 4. JWT login token received when logging in_

**Note:** We have hard-coded our user details as an object called `userLogin`. You would typically need to get these values from inputs in a login form.

## 3. Making requests with the JWT token

We have our token from logging in and stored this in our local storage.

We will now use this token in a `GET` request to get a list of posts.

API end-point: `/api/v1/social/posts`.

[API end-point documentation](https://noroff-api-docs.netlify.app/social-endpoints/posts)

```js
async function fetchWithToken(url) {
  try {
    const token = localStorage.getItem("accessToken");
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    // Logs:
    // 0: {title: 'test', body: 'test', tags: Array(0), media: '', created: '2022-09-18T08:04:05.484Z', …}
    // 1: {title: 'This is a new post', body: 'This is updated text', tags: Array(1), media: 'whatevs', created: '2022-09-17T13:17:01.133Z', …}
    // ... More array values
  } catch (error) {
    console.log(error);
  }
}

fetchWithToken(API_BASE_URL + "/api/v1/social/posts");
```

![Getting posts with a token](../images/javascript-2/async/jwt-get-posts.png)

_Figure 5. Getting social posts by using the JWT token_

## Additional resources

[JWT.io: Introduction to JSON Web Tokens](https://jwt.io/introduction)

[JWT.io: Debugger tool](https://jwt.io/#debugger)

[LogRocket: JWT authentication: Best practices and when to use it](https://blog.logrocket.com/jwt-authentication-best-practices/)

[MDN Web Docs: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
