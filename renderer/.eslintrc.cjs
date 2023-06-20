const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  extends: [
    'next/core-web-vitals',
    '../.eslintrc.base.cjs',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
});
