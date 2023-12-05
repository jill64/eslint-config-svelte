import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import deprecation from 'eslint-plugin-deprecation'
import svelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
import { FlatConfig } from './index.js'

export const svelteConfig = (options?: {
  exclude?: {
    deprecation?: boolean
  }
  tsConfigPath?: string
  ignores?: string[]
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
      // @ts-expect-error workaround until upstream update
      svelte
    },
    processor: svelte.processors.svelte,
    languageOptions: {
      // @ts-expect-error workaround until upstream update
      parser: svelteParser,
      parserOptions: {
        extraFileExtensions: ['.svelte']
      }
    },
    rules: {
      // @ts-expect-error workaround until upstream update
      ...svelte.configs.base.rules,
      ...svelte.configs.recommended.rules
    }
  },
  {
    ignores: ['**/*.svelte'],
    ...js.configs.recommended
  },
  prettier,
  // @ts-expect-error workaround until upstream update
  options?.exclude?.deprecation
    ? {}
    : {
        plugins: {
          deprecation
        },
        languageOptions: {
          parserOptions: {
            parser: '@typescript-eslint/parser',
            project: [options?.tsConfigPath ?? './tsconfig.json']
          }
        },
        rules: deprecation.configs.recommended.rules
      }
]
