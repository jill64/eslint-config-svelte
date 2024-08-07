import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import type { Linter } from 'eslint'
import prettier from 'eslint-config-prettier'
import deprecation from 'eslint-plugin-deprecation'
import svelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
import { FlatConfig } from './index.js'

export const svelteTsConfig = (options?: {
  exclude?: {
    deprecation?: boolean
  }
  tsConfigPath?: string
  ignores?: string[]
  svelteRules?: Linter.RulesRecord | undefined
}): FlatConfig[] => [
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,svelte}']
  },
  {
    ignores: options?.ignores ?? [
      'dist',
      'build',
      'coverage',
      '*.config.{js,ts,cjs,mjs,cts,mts}',
      '.svelte-kit',
      '.vercel'
    ]
  },
  {
    plugins: {
      // @ts-expect-error workaround until upstream update
      '@typescript-eslint': ts
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: [options?.tsConfigPath ?? './tsconfig.json'],
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.svelte']
      }
    },
    // @ts-expect-error workaround until upstream update
    rules: {
      ...ts.configs.base.rules,
      ...ts.configs.recommended.rules
    }
  },
  {
    ignores: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
    plugins: {
      // @ts-expect-error workaround until upstream update
      svelte
    },
    processor: svelte.processors.svelte,
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        project: [options?.tsConfigPath ?? './tsconfig.json'],
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.svelte']
      }
    },
    // @ts-expect-error workaround until upstream update
    rules: {
      ...svelte.configs.base.rules,
      ...svelte.configs.recommended.rules,
      ...options?.svelteRules
    }
  },
  {
    ignores: ['**/*.{ts,tsx,cts,mts,svelte}'],
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
        rules: deprecation.configs.recommended.rules
      }
]
