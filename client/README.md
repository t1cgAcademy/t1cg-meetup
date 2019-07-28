# t1cg-meetup

This project is an ongoing project being developed during T1CG WebDev meetups held every second Wesdnesday of every month.

We hope to have meetup participants review, play with, and contribute to the project.

Below are some instructions and guidelines to help get you started.

Happy Coding 🎉 🚀 🤘

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

Open up your terminal

1. git clone https://github.com/t1cgAcademy/t1cg-meetup.git
2. cd into the project directory (`cd t1cg-meetup`)
3. You can now run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Installation Guide

_Note_: When working with **Windows** always install as administrator.

_Note_: All links will take you to websites with steps on how to install.

_Note_: If you run into errors, **Google** is every developers best friend to help troubleshoot! Also your human best developer friends are great troubleshooting resources :hand:

| Mac                                                                                                                     | Windows                                                                                                                                                                                                                                 | Purpose                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Install [Homebrew](https://brew.sh/) :beers:                                                                            | Install [Chocolatey](https://chocolatey.org/) :doughnut:                                                                                                                                                                                | Package Manager for Installing Almost Everything!                                                                                                           |
| [Install Node with Homebrew](https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew) | [Install Node with Chocolatey](https://chocolatey.org/packages/nodejs.install)                                                                                                                                                          | Installing Node will allow our machines to run javascript code as well install the O' So Important NPM (Node Package Manager)!                              |
| Install an IDE ([atom](https://atom.io/) or [visual studio code](https://code.visualstudio.com/))                       | Install an IDE ([atom](https://atom.io/) or [visual studio code](https://code.visualstudio.com/))                                                                                                                                       | Allow us to manipulate and edit our source code as well as provide extra tools to support and ease programming work flows.                                  |
| Install create-react-app `npm i create-react-app -g`                                                                    | Install create-react-app `npm i create-react-app -g`                                                                                                                                                                                    | Allow you to run create-react-app software.                                                                                                                 |
| [Install MongoDB with Homebrew](https://dbamohsin.wordpress.com/2017/05/02/installing-mongodb-on-a-mac-with-homebrew/)  | [Install MongoDB with Chocolatey](https://kjng.github.io/2017/05/17/mongodb-windows.html) <-- This guide is great to get you started but forgets an important step, the command to actually install mongo. It's `choco install mongodb` | The database software we will be using for this application.                                                                                                |
| Intall Git with Homebrew `brew install git`                                                                             | [Intall Git with Chocolatey](https://www.jamessturtevant.com/posts/5-Ways-to-install-git-on-Windows/#using-chocolatey)                                                                                                                  | Git is our version control tool allowing us store our source code online and locally while also adding tooling for collaboration and historical versioning. |
| Clone this repository and the Api repository                                                                            | `git clone [repourl].git`                                                                                                                                                                                                               | Now you have a version of the project source code on your local machine :smile:                                                                             |

---

## Contributing & Git Guide

##### CREATE REPOSITORIES

Start a new repository or obtain one from an existing URL

```
$ git init [project-name]
Creates a new local repository with the specified name
$ git clone [url]
Downloads a project and its entire version history
```

##### CONFIGURE TOOLING

Configure user information for all local repositories

```
$ git config --global user.name "[name]"
Sets the name you want attached to your commit transactions
$ git config --global user.email "[email address]"
Sets the email you want attached to your commit transactions
$ git config --global color.ui
autoEnables helpful colorization of command line output
```

##### MAKE CHANGES

Review edits and craft a commit transaction

```
$ git status
Lists all new or modified files to be committed
$ git add [file]
Snapshots the file in preparation for versioning
$ git add . or $ git add -A
Snapshots all the files in preparation for versioning
$ git reset [file]
Unstages the file, but preserve its contents
$ git diff
Shows file differences not yet staged
$ git diff --staged
Shows file differences between staging and the last file version
$ git commit -m "[descriptive message]"
Records file snapshots permanently in version history
```

##### GROUP CHANGES

Name a series of commits and combine completed efforts

```
$ git branch
Lists all local branches in the current repository
$ git branch -b [branch-name]
Creates a new branch and switches you to that branch
$ git checkout [branch-name]
Switches to the specified branch and updates the working directory
$ git merge [branch]
Combines the specified branch’s history into the current branch
$ git branch -d [branch-name]
Deletes selected branch
```

##### SYNCHRONIZE CHANGES

Register a repository bookmark and exchange version history

```
$ git push [branch]
Uploads all local branch commits to GitHub
$ git pull
Downloads bookmark history and incorporates changes
$ git fetch [branch]
Downloads all history from the repository bookmark
$ git merge [branch]
Combines bookmark’s branch into current local branch
```

---

## Helpful Links For Learning

##### HTML

- [HTML Cheat Sheet](https://digital.com/tools/html-cheatsheet/)
- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [HTML Tutorial](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [HTML Tutorials](http://www.htmldog.com/guides/html/beginner/)

###### CSS

- [CSS Cheat Sheet](https://www.onblastblog.com/css3-cheat-sheet/)
- [CSS Tutorial](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)
- [CSS Tutorial](http://www.htmldog.com/guides/css/beginner/)

##### JS

- [JS Cheat Sheet](https://github.com/mbeaudru/modern-js-cheatsheet)
- [JS Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

##### React

- [React Cheat Sheet](https://github.com/vincsb/react-cheat-sheet)
- [React Documentation](https://reactjs.org/docs/hello-world.html)
- [React Tutorial](https://reactjs.org/tutorial/tutorial.html#what-are-we-building)
