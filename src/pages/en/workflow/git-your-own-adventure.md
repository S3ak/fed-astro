---
title: Git your own adventure
keywords: workflow, release
tags: Workflow, Github, release
layout: ../../../layouts/MainLayout.astro
---

## Introduction

Although there is much to be learnt about _how_ Git works, a technical understanding is only so much use without an understanding of _why_ we would use Git. This lesson will show how Git might be used in a non-technical setting, such as telling a story.

Follow along with this lesson in your command line by running the commands and comparing your output to the lesson content.

## Initialising your repository

Create a new folder on your computer at a location of your choosing; you can do this using your editor or the command line:

```bash
mkdir ~/git-adventure
cd ~/git-adventure
```

> The `mkdir` command means `Make Directory`. This command will create a folder directly in your user folder: `/Users/YourName/git-adventure`.

Open this file in your editor and initialise a new Git repository here:

```bash
git init
```

Create a new file in this folder called `plot.md` using your editor or command line:

```bash
touch plot.md
```

> The `touch` command will look for the filename provided, if the file exists it will update the `last-modified` date otherwise it will create a new file with that name.

Create a branch to house the story content:

```bash
git branch -m main
```

Now stage and commit this empty file:

```bash
git add plot.md
git commit -m "The story begins"
```

Now we have a default branch with one commit, we can create and checkout a new branch called `chapter-one`:

```bash
git checkout -b chapter-one
```

## Correcting mistakes

In your editor, open `plot.md` and write the following text:

```md
# The Repository of Theseus

## Chapter On

Once upon a time there was a web developer called Theseus, who lived in a wooden boat.
```

Save the file, add and commit this change to your repository:

```bash
git add plot.md
git commit -m "Theseus isintroduced"
```

You may have noticed two typos in the content above. Not only is there a spelling mistake in the file contents, but there is also a spelling mistake in the commit message.

This sort of mistake can happen very easily, and it might seem like there is no way to fix it without messing up our commit history. Thankfully, there is a way to fix both problems at once.

Going back to `plot.md`, substitute this text:

```md
## Chapter On
```

```md
## Chapter One
```

Now we will add the file like normal:

```bash
git add plot.md
```

However, instead of committing this correction as a new commit, we instead want to overwrite our last commit using the `--amend` flag:

```bash
git commit --amend -m "Theseus is introduced"
```

Now we have corrected both mistakes, one in the content and one in the git history!

## Forking repository history

In the same file, add the following content:

```md
One day Theseus decided to create a new app to help with carpentry.

After planning, Theseus started by creating a new folder and repository.
```

Save the file, add and commit this change to your repository:

```bash
git add plot.md
git commit -m "Theseus starts an app"
```

In the `plot.md` file add the following text:

```md
Fearing that a life close to water might damage his laptop, Theseus made sure to use a remote repository. Each time Theseus made an important change, Theseus would commit this change to his local branch with a clear message. Every evening, Theseus would push his local branch to make sure it was safely backed up.
```

Save the file, add and commit this change to your repository:

```bash
git add plot.md
git commit -m "Theseus uses a remote repository"
```

In the `plot.md` file add the following text:

```md
Bit by bit, Theseus' application took shape. Although it was not perfect, it was very useful.

One day Theseus found himself stuck on a bug in a new feature. Despite reading hundreds of pages of documentation and discussions, the solution eluded Theseus.

Theseus decided to...
```

Save the file, add and commit this change to your repository:

```bash
git add plot.md
git commit -m "Theseus is stuck on a bug"
```

Create a new branch called `gives-up`:

```bash
git checkout -b gives-up
```

In the `plot.md` file add the following text to replace the elipsis (`...`):

```md
Theseus decided to give up on his project, forget all about it and set sail on the unforgiving seas in search of meaning in some unknown land.
```

Save the file, add and commit this change to your repository:

```bash
git add plot.md
git commit -m "Theseus gives up and sails away"
```

In the `plot.md` file add the following text to replace the elipsis (`...`):

```md
After a year lost at sea, Theseus lands on a small desert island with only a single coconut tree.
```

Save the file, add and commit this change to your repository:

```bash
git add plot.md
git commit -m "Theseus lands on an island"
```

Now switch back to the `chapter-one` branch, and use that to create an alternative outcome:

```bash
git checkout chapter-one
git checkout -b posts-on-forum
```

In the `plot.md` file add the following text:

```md
Theseus decided to make a post on a forum offering his application to anyone who wanted to use it for free. He described its purpose, features and his plan for the future and spent that evening answering questions from the community.
```

Save the file, add and commit this change to your repository:

```bash
git add plot.md
git commit -m "Theseus posts on a forum"
```

We could now select either branch to continue this chapter, for the sake of continuing the story we will choose the `posts-on-forum` branch:

```bash
git checkout chapter-one
git merge posts-on-forum
```

## Viewing a Git log

If we pause to check the status of our git history, we should be able to see one main storyline stored in `chapter-one` that includes the `posts-on-forum` branch and one alternative storyline stored in `gives-up`. We can view a visual representation of this history by running the following command:

```bash
git log --oneline --graph --decorate --all
```

This will show us a more detailed history of our commits and branches:

```bash
* a113121 (HEAD -> chapter-one, posts-on-forum) Theseus posts on a forum
| * 366d56b (gives-up) Theseus lands on an island
| * 480a0ff Theseus gives up and sails away
|/
* 759328b Theseus is stuck on a bug
* b69c80a Theseus uses a remote repository
* 1cd9e4c Theseus starts an app
* 9729bcc Theseus is introduced
* fac8521 (main) The story begins
```

> When the graph is longer than your terminal window, you will need to exit this log with the shortcut `:q`.

This graph shows us that branch `main` only contains one commit. It shows us that branches `gives-up` and `chapter-one` share most of their history apart from the latest commit. We will check back on this graph later on.

Before we move onto chapter 2, let's merge our `chapter-one` content into the `story branch`:

```bash
git checkout main
git merge chapter-one
```

## Creating tags

Unlike branches, which constantly change as commits are added or branches merged, tags represent a static marker in your history. They can be useful if you intend to come back to a specific location in history.

Create a tag called `C1`:

```bash
git tag C1
```

This tag will always point towards the final commit in our `chapter-one` branch, even if we change or delete that branch later on.

View your log graph again with this command and compare the differences:

```bash
git log --oneline --graph --decorate --all

* a113121 (HEAD -> main, tag: C1, posts-on-forum, chapter-one) Theseus posts on a forum
| * 366d56b (gives-up) Theseus lands on an island
| * 480a0ff Theseus gives up and sails away
|/
* 759328b Theseus is stuck on a bug
* b69c80a Theseus uses a remote repository
* 1cd9e4c Theseus starts an app
* 9729bcc Theseus is introduced
* fac8521 The story begins
```

The only noticeable difference is that the `main` branch label has moved from the bottom to the top of the diagram. This shows that `main` and `chapter-one` are now identical, including the alternative storyline branch. You can also see the `C1` tag at the same location as these two branches.

Moving onto Chapter Two, this will require it's own branch. It's best to create a new branch from `main` or the default branch if possible:

```bash
git checkout -b chapter-two
```

In the plot file add this content:

```md
## Chapter Two

The next morning, Theseus saw that he had an email notification. Someone had forked his repository, adding their own solution. They requested a Pull Review to merge their code into his.
```

Save the file, add and commit this change to your repository:

```bash
git add plot.md
git commit -m "Theseus is notified of a fork"
```

In the plot file add this content:

```md
Looking at the diff diagram, he could see the elegant solution to his bug. He checked out the new branch and tested on his computer. Happy that it worked perfectly, he accepted the pull request.
```

```bash
git add plot.md
git commit -m "Theseus accepts the PR"
```

```md
The morning after that, he had more emails from more contributors. Although some were not good enough to be added, the others were useful and written well. Soon, Theseus spent little time writing new code for his project, instead managing discussions, reviewing pull requests and creating release tags.
```

```bash
git add plot.md
git commit -m "Theseus gains more collaborators"
```

```md
This continued for many months and one day Theseus thought to himself:

"I wonder how many of the files in this project still contain my code"
```

```bash
git add plot.md
git commit -m "Theseus ponders esoterically"
```

```md
He analysed the files in the repository and found that not a single line of his original code was still in use. Over time, all of it had been replaced by cleaner, faster and smarter code from his contributors.

Pondering whether the application could truly be called his own, he decided to...
```

```bash
git add plot.md
git commit -m "Theseus makes a decision"
```

Here the story could again branch off in more than one direction, so let's create a new branch to handle the first outcome:

```bash
git checkout -b sells-out
```

```md
Pondering whether the application could truly be called his own, he decided to change the copyright license, remove the code from a public platform and sell it to big tech companies for millions of dollars.

With this money he buys a larger boat and sets sail on the unforgiving seas in search of meaning in some unknown land.
```

```bash
git add plot.md
git commit -m "Theseus sells out"
```

```md
The End.
```

```bash
git add plot.md
git commit -m "The end of the story"
```

Switching back to the original `chapter-two` branch we can create an alternative ending:

```bash
git checkout chapter-two
git checkout -b does-right-thing
```

```md
Pondering whether the application could truly be called his own, he decided to commit to an open source license so that everyone could enjoy the code for free, forever.
```

```bash
git add plot.md
git commit -m "Theseus does the right thing"
```

```md
The End.
```

```bash
git add plot.md
git commit -m "The end of the story"
```

Once again, we will select the more positive option available:

```bash
git checkout chapter-two
git merge does-right-thing
git tag C2
```

Although we have a finished story, we can still revisit any of the commits in our history to see how the story progressed. New branches can be made from specific commits, or from one of the tags that we placed earlier.

## Branching from any commit

This graph shows us the main thread of our story as well as two possible alternative storylines that run parallel starting from a different commit. Not only could we continue to add commits to these branches in order to tell multiple stories, but we can also create a new branch from any commit in this list.

Let's select the commit where Theseus is notified of the fork. You will need to look at your own log graph to find the correct commit id to insert:

```bash
git log --oneline --graph --decorate --all

* <commit> <commit-message>
* 983a3e5  Theseus is notified of a fork
```

```bash
git branch ignores-fork <commit>
git checkout ignores-fork
```

If you check the `plot.md` file, you should see it reverted back to the state that it was in when this commit was made. From here, we can add some alternative content:

```md
Theseus ignored this request and continued to work on his application alone.
```

```bash
git add plot.md
git commit -m "Theseus ignores the request"
```

```md
Without any hope for solving his bug, Theseus decided to abandon his project and set sail on the unforgiving seas in search of meaning in some unknown land.
```

```bash
git add plot.md
git commit -m "Theseus sails away"
git log --oneline --graph --decorate --all

* cff67cc (HEAD -> ignores-fork) Theseus sails away
* 7f2badd Theseus ignores the request
| * d66fa3d (tag: C2, does-right-thing, chapter-two) The end of the story
| * 79faa66 Theseus does the right thing
| | * cd2332a (sells-out) The end of the story
| | * c8bfab3 Theseus sells out
| |/
| * b8e1281 Theseus makes a decision
| * 9686d15 Theseus ponders esoterically
| * e6c6494 Theseus gains more collaborators
| * 5a06fac Theseus accepts the PR
|/
* f7e7d0b Theseus is notified of a fork
* a113121 (tag: C1, posts-on-forum, main, chapter-one) Theseus
 posts on a forum
| * 366d56b (gives-up) Theseus lands on an island
| * 480a0ff Theseus gives up and sails away
|/
* 759328b Theseus is stuck on a bug
* b69c80a Theseus uses a remote repository
* 1cd9e4c Theseus starts an app
* 9729bcc Theseus is introduced
* fac8521 The story begins
```

## Merging into the default branch

Now that we have our finished story, and we have explored some unsatisfactory alternative narratives - we can finish off by merging our preferred content into the `main` branch:

```bash
git checkout main
git merge chapter-two
```

Our history is now looking quite complicated, but we can fix that.

If we run `git branch -a` to list our branches we will see there are now many that we do not need:

```bash
  chapter-one
  chapter-two
  does-right-thing
  gives-up
  ignores-fork
* main
  posts-on-forum
  sells-out
```

Since we are happy that the contents of branches `chapter-one` and `chapter-two` have been included in `main` we may not need to keep the detailed history around. To delete a branch we use the `-d`:

```bash
git branch -d chapter-one
git branch -d chapter-two
```

There are alternative endings in other branches that have not been merged, we may also choose to delete these. Let's remove these remaining, unwanted branches:

```bash
git branch -d gives-up
```

This will output an error message:

```bash
The branch 'gives-up' is not fully merged.
If you are sure you want to delete it, run 'git branch -D gives-up'.
```

This is warning us that there is unique information in our branch that might be lost if we proceed. If we wish to use these alternative storylines in future, we should should not force delete (`-D`) the branches. However, since we have finished our story we are happy to lose this information:

```bash
git branch -D gives-up
git branch -D ignores-fork
git branch -D sells-out
git branch -d does-right-thing
git branch -d posts-on-forum
```

If we check our log graph again we can see that we have a clean history without any alternative paths containing all of the chosen work:

```bash
git log --oneline --graph --decorate --all

* d66fa3d (HEAD -> main, tag: C2) The end of the story
* 79faa66 Theseus does the right thing
* b8e1281 Theseus makes a decision
* 9686d15 Theseus ponders esoterically
* e6c6494 Theseus gains more collaborators
* 5a06fac Theseus accepts the PR
* f7e7d0b Theseus is notified of a fork
* a113121 (tag: C1) Theseus posts on a forum
* 759328b Theseus is stuck on a bug
* b69c80a Theseus uses a remote repository
* 1cd9e4c Theseus starts an app
* 9729bcc Theseus is introduced
* fac8521 The story begins
```

## Conclusion

We have been through a complex process of branching, rewriting our commit history, merging branches together and placing tags at useful positions.

Feel free to continue playing around with this repository as you wish. If you are worried about creating a mess, there is a simple way to backup a branch:

```bash
git checkout example
git branch backup-of-example
```

Now you can work in `example` with confidence that your prior commit history is backed up in `backup-of-example`.

You can easily rename branches this way too:

```bash
git checkout my-example
git checkout -b my-new-name
git branch -d my-example
```

The `my-new-name` branch will contain the exact same commit history as `my-example`.

## Lesson Task

Writing software is a very similar process to writing literature, as work progresses the `corpus` grows and changes. A novel describes the path of characters as they progress through their environment whereas a software project describes the path of data as it flows through the application. Both of these must be built up over time and both will involve retroactive edits or the removal of content.

Find one of your completed projects and review the commit history. Answer the following questions:

1. Does my commit history make sense?
2. Does my commit history tell a meaningful story about my process?
3. Is the tone and tense of my commit messages consistent?
4. If this was all that remained of the project, would I be able to use this as a guide to rebuild the code?
