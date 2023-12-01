<!----- BEGIN GHOST DOCS HEADER ----->

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
