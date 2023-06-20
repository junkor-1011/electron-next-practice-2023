const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  extends: [
    '../.eslintrc.base.cjs',
  ],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
  },
})
