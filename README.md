<!----- BEGIN GHOST DOCS HEADER ----->

# eslint-config-svelte

[![npm-version](https://img.shields.io/npm/v/@jill64/eslint-config-svelte)](https://npmjs.com/package/@jill64/eslint-config-svelte) [![npm-license](https://img.shields.io/npm/l/@jill64/eslint-config-svelte)](https://npmjs.com/package/@jill64/eslint-config-svelte) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/eslint-config-svelte)](https://npmjs.com/package/@jill64/eslint-config-svelte) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/eslint-config-svelte)](https://npmjs.com/package/@jill64/eslint-config-svelte)

🔹Pre-Defined ESLint Flat Config for Svelte

## Installation

```sh
npm i @jill64/eslint-config-svelte
```

<!----- END GHOST DOCS HEADER ----->

## Usage

with TypeScript

```js
// eslint.config.js
import { svelteTsConfig } from '@jill64/eslint-config-svelte'

/** @type {import('@jill64/eslint-config-svelte').FlatConfig[]} */
export default [
  ...svelteTsConfig()
  // ...
]
```

without TypeScript

```js
// eslint.config.js
import { svelteConfig } from '@jill64/eslint-config-svelte'

/** @type {import('@jill64/eslint-config-svelte').FlatConfig[]} */
export default [
  ...svelteConfig()
  // ...
]
```
