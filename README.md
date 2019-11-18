# `docserver v0.1.0`

A simple document server for exposing your projects `README` files so you can figure out what you're actual versioned dependencies do.


## How it works

`docserver` automagically globs all the `README.md` file(s) in your project and it's dependencies folders and generates a static site in your root project directory called `./docserver`

From here you can open the root `index.html` file to view your projects dependency index and quickly find the documentation you need for whatever package you're trying to use.


## Installation

```bash
# NPM
npm i -D docserver

# Yarn
yarn add -D docserver
```

_*Recommended:* setup a `postinstall` command in your `package.json` file to auto-reindex your `docserver` index_


## Update your `.gitignore`

Since this just compiles all of your dependencies documentation into one folder, you may wish to remove it from your tracked dependencies by updating `.gitignore`. 

```ini
# ...

.docserver/
```

_*NOTE:* If you previously tracked the files and can't seem to get Git to ignore them, you can refresh your `.gitignore` index using the following git commands_

```bash
git rm -r --cached .
git add .
git commit -m "reindexing project assets OR WHATEVER YOU WANT TO SAY HERE"
```

Which should reset things without affecting your 