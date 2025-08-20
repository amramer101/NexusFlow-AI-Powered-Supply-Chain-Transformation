import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tsESLintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsESLintPlugin,
      'react-hooks': reactHooks,
      prettier: 'eslint-plugin-prettier',
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier', // Add Prettier here
    ],
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': ['error'], // Add Prettier rules
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
