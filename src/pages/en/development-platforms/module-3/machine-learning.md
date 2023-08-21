---
title: Machine Learning
keywords: Machine Learning
tags: machine learning, ml, ai, artificial intelligence
layout: ../../../../layouts/MainLayout.astro
---

## Introduction

Machine Learning (ML) and Artificial Intelligence (AI) are often used interchangeably, but they do not represent the same concept. While AI is the pursuit of creating machines capable of human-type thought, ML focuses on the means of knowledge acquisition in these systems. An intelligent machine must be capable of learning new information and applying it to new situations. However, this alone is not enough to declare a system as intelligent. ML is the field where engineers design, construct and analyse algorithms that allow machines to learn and make predictions based on data.

## Brief history

Since the earliest days of digital computing in the 1940s, there's been a desire to create machines that learn from the data they are exposed to. Although analogies between biological computing and digital computing are tempting, these systems operate on significantly different principles. The physical mechanism used to store information amongst neurons is fundamentally different from the binary system used in digital computing. With this in mind, early ML researchers faced the daunting task of simulating the brain concept by concept.

Consider the challenge of producing an artificial flower. Unable to replicate the delicate nanostructure of the plant’s cells, a machine would need to satisfy each of the flower’s core properties and functions to be considered `Flower-Like`. This machine would need mechanisms to sense light, water, and nutrients and respond to these stimuli in a way that would allow it to grow and reproduce. Even if the mechanism perfectly replicates the flower’s properties, it can still be described as a `simulation`, `analog`, `model` or `approximation` of a real flower in nature. Before any such model can be created, an exhaustive study of the flower's properties must be conducted to achieve a deep level of understanding.

Early developments in the field of ML involved a combination of philosophy, mathematics and engineering. For example, decision tree theory was developed in the 1950s by mathematician Leo Breiman as a means of graphing the decision-making process. This diagram uses a flow chart to show all possible decisions that can be made in a situation and the probability of each outcome. This allows for an approximation of an organic process (decision-making) to be represented numerically.

This method was later applied to the field of ML by statistician Jerome Friedman in 2000. Friedman's work utilised many simple decision trees in a special arrangement to create a more complex model. By comparing the results predicted by an algorithm to the actual results using this method, an algorithm could be trained to make more accurate predictions the next time.

Meanwhile, engineers developed the first Artificial Neural Networks (ANNs) in the 1940s. These systems were inspired by the biological neural network of the brain and were designed to mimic the way neurons communicate with each other. The first ANN was created by Warren McCulloch and Walter Pitts in 1943. This system was a simple model of a neuron and was designed to be able to compute simple logical functions. The first ANN to be used in a practical application was created by Frank Rosenblatt in 1958, who developed a handwriting recognition system.

Although very simple ANNs have been in use for many decades, the availability of cheap computing resources created a bottleneck to progress. This began to change in the late 1980s and early 1990s, with more powerful hardware enabling more complex models. These neural networks could now be layered on top of each other to create Deep Neural Networks (DNNs) capable of impressive tasks such as speech, image or tone recognition.

Today, most of us enjoy the benefits of ML daily. Using a search engine, driving a modern vehicle, or setting a reminder using a mobile voice assistant requires a highly trained AI model. These models are trained using large datasets based on the principles developed in the 1940s and 1950s.

## Using ML in development

Although the engineering of these systems is outside the responsibilities of a front-end developer, there are many ways we can leverage the power of ML in our work as developers. ML systems are best at understanding an environment with limited options that can be experienced repeatedly and with minor variations.

This is fundamentally what we are creating as front-end developers. The environment is the interface of our web application, the variation comes from dynamic rendering or interaction, and the repeatability is a natural consequence of wanting each of our users to have a similar experience regardless of device or browser choices. The products we create as front-end web developers are naturally conducive to ML strategies. To put it another way, AI is especially good at understanding websites.

There are two ways to think about these tools in relation to our work as front-end developers. ML can be used either as a **tool** to enhance the development process or as a **feature** within the applications that we create.

### ML as a tool

ML products can significantly increase developer productivity when understood and applied correctly. These products can speed up the debugging process, improve code quality, catch mistakes as they happen and even generate fully functional code from a prompt.

#### AI driven testing

The many different types of software testing are fundamental to a product’s lifecycle and are often neglected by product engineers. This is an ideal `use case` for an AI product, as we aim to automate tasks that are not enjoyable or burdensome.

ML tools like Copilot can generate unit tests based on the application code. A human engineer is still required to prompt and review these tests to ensure that they accurately cover the test cases, but this can save a large amount of time and effort.

Using an AI agent to learn about and traverse an application as an end-user can help to expose blind spots in end-to-end test suites. For example, an unknown bug may occur when the user clicks the bottom left corner of the screen. An end-to-end test will test positive assertions such as "When the user clicks the Login button, they are taken to the login page", but will not test negative assertions such as "If you click a weird place, the app doesn't break". By using an agent with some ability to learn and act in a chaotic way, it is possible to uncover these types of bugs. This approach combines the repeatability of automated testing with the coverage potential of manual testing.

ML tools can also be used to performance/stress test an application by simulating a large number of users via a cluster of these agents. While a single agent might be useful for picking up obscure bugs, a crowd of agents is a powerful way to test the limits of an application's infrastructure.

Visual regression is another area where such tools can be incredibly useful. After each code change to a web application, an AI inspector can visually reference the previous version of the application and compare the two. This allows for the detection of visual regressions, such as an unwanted change in the colour of a button or the position of a text element. This can be used to catch bugs that would otherwise go unnoticed and to ensure that the application is consistent across different browsers and devices.

#### AI assisted design

AI tools can be used to assist with the design process by generating mockups and prototypes based on a prompt. This can be useful for generating many variations of a design or for generating a design based on a user's input.

AI can also generate placeholder content for a more relevant and realistic design than the standard Lorem Ipsum text. Likewise, placeholder image content can be generated based on a prompt while the designer waits for finished assets such as professional photography or digital art.

These tools are also able to dynamically check contrast and accessibility issues and can provide suggestions for improving the design. This can be useful for ensuring that the design is accessible to all users and can help to avoid the need for a separate accessibility audit.

Some examples of popular tools in this category include DALLE-2, MidJourney and Stable Diffusion.

#### AI pair programming

One of the most powerful applications for ML tooling in development is the generation and checking of code. This can be used to generate code for a new feature or to fix a bug. This is particularly useful for repetitive tasks such as laying out a scaffold with boilerplate files.

The most popular tools in this category are Copilot and DeepCoder. Copilot is a VS Code extension that can generate code based on a prompt. DeepCoder is a web application that can generate code based on a prompt and can also be used to generate unit tests.

These tools are best used to simulate a pair-programming session, where the AI agent is the second developer. The human developer is still required to review the code and make any necessary changes, but this can save time and effort.

### ML as a feature

Although these tools can enhance our development process, they also offer numerous avenues for enriching features within our applications.

#### Chatbots

It is commonplace for a modern web application to offer some kind of chatbot functionality to assist users that require help. These chatbots can be used to answer questions, provide information, or even complete tasks on the user's behalf. Before the availability of good-quality ML tools, these chatbots were extremely limited in how they could interact with users. They were often limited to a small number of pre-defined responses and could not always respond to user input in a meaningful way.

With the advent of highly-reliable Natural Language Processing (NLP) tools, chatbots can now be trained to understand the context of a conversation and respond appropriately. This allows for a much more natural interaction between the user and the chatbot and can greatly improve the user experience. For example, an AI chatbot may be able to switch languages mid-conversation or to understand the user’s tone of voice and respond accordingly.

#### Intelligent recommendation

Many types of web applications rely on a recommendation system to promote products or articles that may be attractive to a user. At best, these systems are based on a simple statistical model generated from the user's purchase or browsing history. At worst, the same recommendations are given to all users regardless of their unique preferences.

ML tools can train a recommendation system to understand the user’s preferences and make more accurate recommendations. This can be done by using a collaborative filtering approach, where the system learns from similar users’ preferences. Many popular recommendation systems, such as Netflix and Amazon, use this approach. You can often spot these systems in the wild by noticing the feedback options such as "I liked this" or "I didn't like this". This feedback is used to retrain the system and improve the recommendations over time.

#### Media recognition

ML tools are also being used to improve the user experience of media-rich applications. By recognising the content of an image it is possible to save the user from having to manually tag it. For example, a used car website could automatically tag a photo of a car with the make, model and specifications of the vehicle. Not only does this save the user time entering these details themselves, but the information is more likely to be accurate and consistent.

Other applications may benefit more from audio or even video recognition. For example, a video game could use an ML tool to recognise the player's facial expressions and use this to control the character's emotions. This could be used to create a more immersive experience or to improve the accessibility of the game for players with limited motor skills.

Alternatively, a voice note application could use an ML tool to transcribe the audio and automatically generate a text version of the note. This would save the user from having to manually type out the contents of the note and would also allow the user to search the contents of the note for specific keywords.

The most popular media recognition tools are OpenCV, Google Cloud Vision and Amazon Rekognition. These systems can also be built using more general ML tools such as TensorFlow, PyTorch or Keras.

#### Bot prevention

Although we might find bots useful for enhancing our applications and development process, we generally wish to avoid other people's bots from interacting with our applications. Unwarranted bot activity can cause several problems, such as slowing down the application, increasing the cost of hosting or even causing the application to crash in a DDoS attack.

Most of us are already familiar with the CAPTCHA system, which is a simple way to prevent bots from interacting with an application. CAPTCHAs are generally based on a simple image recognition task, such as identifying a street sign or a traffic light. These systems are effective at preventing bots from interacting with an application but are not very effective at preventing humans from interacting with the application.

Modern CAPTCHA systems are closely tied to ML systems that use human input to train the system to better recognise the difference between a human and a bot. This human input is also leveraged to provide secondary benefits such as training a system to recognise dangers on the road, or to train a handwriting recognition system.

## Resources

- [Practical Deep Learning for Coders](https://www.fast.ai/posts/2022-07-21-dl-coders-22.html)
- [Google Cloud AI](https://cloud.google.com/solutions/ai)
- [Amazon AWS AI](https://aws.amazon.com/ai/)
- [Google ML Crash Course](https://developers.google.com/machine-learning/crash-course)

### Reading list

- _Building Machine Learning Powered Applications_ (by Emmanuel Ameisen)
- _Hands on Machine Learning: Scikit Learn, Keras, TensorFlow_ (by Aurélien Géron)
- _Introduction to Machine Learning with Python_ (by Andreas C. Mueller, Sarah Guido)
- _Real World Machine Learning_ (by Henry Brink, Joseph Richards, Mark Fetherolf)
- _The Hundred Page Machine Learning Book_ (by Andriy Burkov)
