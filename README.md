[![Release](https://github.com/nodly/prettier-config/actions/workflows/release.yml/badge.svg)](https://github.com/nodly/prettier-config/actions/workflows/release.yml)

# @nodly/prettier-config

Nodly's shared [Prettier](https://prettier.io/) configuration.

It includes:

- single quotes
- sorted imports via `@ianvs/prettier-plugin-sort-imports`
- Tailwind class sorting via `prettier-plugin-tailwindcss`
- Tailwind function support for `cn`, `cva`, `clsx`, and `twMerge`

## Requirements

- Node.js 20 or newer
- Prettier 3

This package is ESM-only.

## Installation

```sh
pnpm add -D prettier @nodly/prettier-config
```

Or with another package manager:

```sh
npm install --save-dev prettier @nodly/prettier-config
yarn add --dev prettier @nodly/prettier-config
```

The import-sorting and Tailwind plugins are included by this package, so consumers do not need to install them separately.

## Usage

The recommended setup is a Prettier config file:

```js
// prettier.config.js
import config from '@nodly/prettier-config';

export default config;
```

If you need to extend the shared config:

```js
// prettier.config.js
import config from '@nodly/prettier-config';

/** @type {import('@nodly/prettier-config').Config} */
export default {
  ...config,
  printWidth: 100,
};
```

You can also reference the package directly from `package.json`:

```json
{
  "prettier": "@nodly/prettier-config"
}
```

## Scripts

Add format scripts to your project:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

Use `format:check` in CI to verify committed files are already formatted:

```yml
jobs:
  format:
    steps:
      - run: pnpm format:check
```

## Configuration

The exported config currently uses:

```js
{
  singleQuote: true,
  importOrder: [
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    '<BUILT_IN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '',
    '^[.]',
  ],
  tailwindFunctions: ['cn', 'cva', 'clsx', 'twMerge'],
}
```

## Release

Releases are handled by `semantic-release`. Version numbers, changelog entries, GitHub releases, and package publishing are generated from conventional commits.
