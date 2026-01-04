# Git and GitHub Guide

## Introduction to Git and GitHub

_Git_ is a version control system used to track changes to your files. It is free and open-source software available for Windows, macOS, and Linux. Remember, Git is a software that can be installed on your computer.

_GitHub_ is a web-based hosting service for Git repositories. GitHub is an online platform that allows you to store and share your code with others. It's a popular platform for developers to collaborate on projects. Note that GitHub is not the only provider of Git repositories, but it is one of the most popular ones.

## About Version Control Systems

Version control systems are used to manage the history of your code. They allow you to track changes to your files and to collaborate with others. Version control systems are essential for software development.

Think of version control as a checkpoint in a game. You can move to any point in time and you can always go back to a previous checkpoint. This is the same concept in software development.

## Installing Git

To install Git, you can use the command line or visit the official website and download the installer for your operating system. Git is available for Windows, macOS, and Linux at:

[https://git-scm.com/downloads](https://git-scm.com/downloads)

## Terminology

Git and people who use it have their own terminology. For example:

- They don't call it a folder, they call it a _repository_
- They don't call it an alternative timeline, they call it a _branch_

Although, "alternative timeline" is a better name for it! 😁

## Basic Git Commands

### Check your Git version

```bash
git --version
```

### What is a Repository?

A repository is a collection of files and directories that are stored together. It is more than just a folder - it can contain other files, folders, and even other repositories. Think of a repository as a container that holds all your code.

To see the current state of your repository:

```bash
git status
```

### Configure Git Settings

GitHub requires user information when you make commits. You need to set your email and username in the Git config file:

```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

To check your config settings:

```bash
git config --list
```

### Creating a Repository

To create a new Git repository:

```bash
git init
```

This adds a hidden .git folder to your project directory, which tracks all changes.

### Working with Files

#### Staging Files

Staging is how you tell Git to track particular files:

```bash
git add <file> <file2>
```

To check what's staged:

```bash
git status
```

#### Committing Changes

Committing saves your changes to the repository. Think of a commit as a snapshot of your code at a particular point in time:

```bash
git commit -m "Your commit message here"
```

## Branching

### Check Current Branches

To list all branches in the repository:

```bash
git branch
```

### Creating and Switching Branches

Create a new branch:

```bash
git branch bug-fix
```

Switch to a branch:

```bash
git switch bug-fix
```

Create and switch to a new branch in one command:

```bash
git switch -c dark-mode
```

Alternative command to switch branches (older syntax):

```bash
git checkout orange-mode
```

### View Commit History

```bash
git log
```

### Rename a Branch

```bash
git branch -m <old-branch-name> <new-branch-name>
```

### Delete a Branch

```bash
git branch -d <branch-name>
```

## Comparing Changes with Git Diff

Git diff shows the differences between commits, branches, or changes in your working directory.

### How to Read the Diff Output

- a/ – the original file (before changes)
- b/ – the updated file (after changes)
- --- – marks the beginning of the original file
- +++ – marks the beginning of the updated file
- @@ – shows the line numbers and position of changes

### Compare Working Directory and Staging Area

```bash
git diff
```

### Compare Staging Area with Repository

```bash
git diff --staged
```

### Compare Two Branches

```bash
git diff <branch-name-one> <branch-name-two>
```

Or:

```bash
git diff branch-name-one..branch-name-two
```

### Compare Specific Commits

```bash
git diff <commit-hash-one> <commit-hash-two>
```

## Stashing Changes

Stash allows you to save changes in a temporary location, useful when switching branches without losing work:

```bash
git stash
```

To apply stashed changes:

```bash
git stash apply
```

## Working with Git Reflog

Git reflog shows the history of your commits and allows you to recover lost commits.

### View the Reflog

```bash
git reflog
```

### Find Specific Commit

```bash
git reflog <commit-hash>
```

### Recover Lost Commits or Changes

```bash
git reset --hard <commit-hash>
```

Or use HEAD@{n} to reset to the nth commit:

```bash
git reset --hard HEAD@{1}
```

## Working with Remote Repositories

### Check Remote Repositories

```bash
git remote -v
```

### Add Remote Repository

```bash
git remote add origin <remote-url>
```

Example:

```bash
git remote add origin https://github.com/username/repository.git
```

### Push Code to Remote Repository

```bash
git push origin main
```

### Set Upstream Remote

This allows you to track the remote branch, making future pushes simpler:

```bash
git push -u origin main
```

### Fetch Code from Remote

```bash
git fetch <remote-name>
```

### Pull Code from Remote

```bash
git pull origin main
```

This fetches and merges changes from the remote repository.

## Collaborating with Others

### Forking a Repository

Forking creates your own copy of someone else's repository on GitHub. This allows you to freely experiment with changes without affecting the original project.

1. Navigate to the GitHub repository you want to fork
2. Click the "Fork" button in the top-right corner
3. Select your account as the destination

### Working with Forks and Pull Requests

The standard workflow for contributing to open-source projects:

1. Fork the repository
2. Clone your fork to your local machine:
   ```bash
   git clone https://github.com/your-username/repository.git
   ```
3. Create a new branch for your feature:
   ```bash
   git switch -c feature-branch
   ```
4. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
5. Push the changes to your fork:
   ```bash
   git push origin feature-branch
   ```
6. Create a Pull Request on GitHub

### Adding Upstream Remote

When working with forks, it's important to keep your fork updated with the original repository:

```bash
git remote add upstream https://github.com/original-owner/repository.git
```

### Keeping Your Fork Updated

Fetch and merge changes from the upstream repository:

```bash
git fetch upstream
git switch main
git merge upstream/main
git push origin main
```

## Handling Merge Conflicts

Merge conflicts occur when Git can't automatically resolve differences between branches. When a conflict occurs:

1. Git will mark the file with conflict markers:

   <<<<<<< HEAD
   Your changes
   =======
   Their changes

   > > > > > > > branch-name

2. Edit the file to resolve the conflict:
   - Remove the conflict markers
   - Decide which changes to keep or combine them
3. Add the resolved files:
   ```bash
   git add <filename>
   ```
4. Complete the merge:
   ```bash
   git commit -m "Resolve merge conflict"
   ```

### Using Visual Tools for Merge Conflicts

Many tools can help visualize and resolve conflicts:

```bash
git mergetool
```

## Advanced Collaboration Techniques

### Code Reviews

GitHub provides tools for code reviews in Pull Requests:

- Line comments
- Suggested changes
- Review approvals
- Review requests

### Protecting Branches

Set up branch protection rules in GitHub:

1. Go to repository settings
2. Select "Branches"
3. Click "Add rule" next to "Branch protection rules"
4. Configure requirements (e.g., required reviews, status checks)

## Git Best Practices

1. _Commit often, push regularly_: Make small, focused commits that do one thing well
2. _Write meaningful commit messages_: Follow the convention:

   ```
   Short summary (50 chars or less)

   More detailed explanation if needed. Keep line length to about
   72 characters. Explain what and why, not how.
   ```

3. _Use branches for features/fixes_: Never work directly on main
4. _Pull before you push_: Always get the latest changes before pushing
5. _Review changes before committing_: Use git diff and git status
6. _Use .gitignore_: Exclude build artifacts, dependencies, and sensitive files

## Troubleshooting Common Issues

### Undo Last Commit (Keep Changes)

```bash
git reset --soft HEAD~1
```

### Discard All Local Changes

```bash
git reset --hard HEAD
```

### Undo a Public Commit

Create a new commit that reverts the changes:

```bash
git revert <commit-hash>
```

### Fix "detached HEAD" State

```bash
git switch main
```

or create a new branch at the current position:

```bash
git switch -c new-branch-name
```

## Further Learning Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Learn Git Branching](https://learngitbranching.js.org/) - Interactive tutorial
- [Pro Git Book](https://git-scm.com/book/en/v2) - Free comprehensive guide
- [GitHub Learning Lab](https://lab.github.com/) - Interactive courses
