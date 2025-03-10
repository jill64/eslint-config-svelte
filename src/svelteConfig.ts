import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
import { FlatConfig } from './index.js'
import type { Linter } from 'eslint'

export const svelteConfig = (options?: {
  tsConfigPath?: string
  ignores?: string[]
  svelteRules?: Linter.RulesRecord | undefined
}): FlatConfig[] => [
  {
    files: ['**/*.{js,jsx,cjs,mjs,svelte}']
  },
  {
    ignores: options?.ignores ?? [
      'dist',
      'build',
      'coverage',
      '*.config.{js,cjs,mjs}',
      '.svelte-kit',
      '.vercel'
    ]
  },
  {
    ignores: ['**/*.{js,jsx,cjs,mjs}'],
    plugins: {
      svelte
    },
    processor: svelte.processors.svelte,
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        extraFileExtensions: ['.svelte']
      }
    },
    rules: {
      ...options?.svelteRules
    },
    ...svelte.configs.base,
    ...svelte.configs.recommended
  },
  {
    ignores: ['**/*.svelte'],
    ...js.configs.recommended
  },
  prettier
]
