const path = require('node:path');
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'standard-with-typescript',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      path.join(__dirname, './electron/tsconfig.eslint.json'),
      path.join(__dirname, './renderer/tsconfig.json'),
    ],
  },
  rules: {},
});
