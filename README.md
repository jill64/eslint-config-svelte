<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/eslint-config-svelte

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/@jill64/eslint-config-svelte"><img src="https://img.shields.io/npm/v/@jill64/eslint-config-svelte" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/eslint-config-svelte"><img src="https://img.shields.io/npm/l/@jill64/eslint-config-svelte" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/eslint-config-svelte"><img src="https://img.shields.io/npm/dm/@jill64/eslint-config-svelte" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/eslint-config-svelte"><img src="https://img.shields.io/bundlephobia/min/@jill64/eslint-config-svelte" alt="npm-min-size" /></a>

<!----- END GHOST DOCS BADGES ----->

🔹Pre-Defined ESLint Flat Config for Svelte

<!----- END GHOST DOCS HEADER ----->

# ⚠️Deprecated

Currently, eslint-plugin-svelte supports FlatConfig.

See https://sveltejs.github.io/eslint-plugin-svelte/user-guide/#new-config-eslint-config-js

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

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
