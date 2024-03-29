[![Release](https://github.com/nodly/prettier-config/actions/workflows/release.yml/badge.svg)](https://github.com/nodly/prettier-config/actions/workflows/release.yml)

# Nodly / Prettier Config

A [shareable configuration](https://prettier.io/docs/en/configuration.html#sharing-configurations) for prettier.

## Installation

Core installation

```
yarn add prettier @nodly/prettier-config --dev
```

Tailwind installation

```
yarn add prettier prettier-plugin-tailwindcss @nodly/prettier-config --dev
```

## Usage

There are multiple ways of loading the prettier preset in your project. It all depends on what kind of project it is.

Add it to your **package.json** file.

```json
"prettier": "@nodly/prettier-config"
```

Add it to any of the following files and export a string.

- **.prettierrc**
- **.prettierrc.yaml**
- **.prettierrc.yml**
- **.prettierrc.json**

```json
"@nodly/prettier-config"
```

Add it to any of the following files and export an object.

- **prettier.config.js**
- **.prettierrc.js**

```js
module.exports = {
  ...require('@nodly/prettier-config'),
};
```

To run prettier on your project files you need to add `prettier` to the script section in your `package.json` file.

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

To check that all files are prettified you will need to add another script with the `--check` flag.

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

This is useful in a CI environment where you want to check that all the commited code is prettified.

For example in a github action:

```yml
jobs:
  build:
    steps:
      - run: yarn prettier --check .
```

## Release

The versioning for the package is handled by **semantic-release** which will automatically determine the next version number, generate the release notes and publish the package.
