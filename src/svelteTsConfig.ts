import js from '@eslint/js'
import ts from 'typescript-eslint'
import type { Linter } from 'eslint'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
import { FlatConfig } from './index.js'

export const svelteTsConfig = (options?: {
  tsConfigPath?: string
  ignores?: string[]
  svelteRules?: Linter.RulesRecord | undefined
}): FlatConfig[] =>
  ts.config(
    js.configs.recommended,
    ts.configs.recommended,
    ...svelte.configs.recommended,
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
      ignores: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
      plugins: {
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
      rules: {
        ...options?.svelteRules
      }
    },
    prettier
  ) as FlatConfig[]
