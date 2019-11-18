# `docserver v0.1.0`

A simple document server for exposing your projects `README` files so you can figure out what you're actual versioned dependencies do.


## How it works

`docserver` automagically checks against your dependency files globs your projects folder structure for any `README.md` file(s) and indexes them into a small statically generated site called `./docserver`

From here you can open the root `index.html` file to view your projects dependency index and quickly find the documentation you need for whatever package you're trying to use.


## Get started

```bash
# NPM
npm i -D docserver

# Yarn
yarn add -D docserver
```

_*Recommended:* setup a `postinstall` command in your `package.json` file to auto-reindex your `docserver` index_

