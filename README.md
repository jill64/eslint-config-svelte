<!----- BEGIN GHOST DOCS HEADER ----->

# eslint-config-svelte

[![npm-version](https://img.shields.io/npm/v/@jill64/eslint-config-svelte)](https://npmjs.com/package/@jill64/eslint-config-svelte) [![npm-license](https://img.shields.io/npm/l/@jill64/eslint-config-svelte)](https://npmjs.com/package/@jill64/eslint-config-svelte) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/eslint-config-svelte)](https://npmjs.com/package/@jill64/eslint-config-svelte) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/eslint-config-svelte)](https://npmjs.com/package/@jill64/eslint-config-svelte)

🔹Pre-Defined ESLint Flat Config for Svelte

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i -D @jill64/eslint-config-svelte
```

## Usage

eslint.config.js

with TypeScript

```js
import { svelteTsConfig } from '@jill64/eslint-config-svelte'

/** @type {import('@jill64/eslint-config-svelte').FlatConfig[]} */
export default svelteTsConfig()
```

To add any configuration, configure as follows

```js
import { svelteTsConfig } from '@jill64/eslint-config-svelte'

/** @type {import('@jill64/eslint-config-svelte').FlatConfig[]} */
export default [
  ...svelteTsConfig()
  // ...
]
```

with JavaScript

```js
import { svelteConfig } from '@jill64/eslint-config-svelte'

/** @type {import('@jill64/eslint-config-svelte').FlatConfig[]} */
export default [
  ...svelteConfig()
  // ...
]
```
