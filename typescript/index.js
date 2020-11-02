/** @type {import('eslint').Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', './rules'],
  parserOptions: {
    ecmaVersion: 2020
  },
  env: {
    es2020: true
  },
  rules: {
    'node/no-missing-import': [
      'warn',
      {
        resolvePaths: ['src'],
        tryExtensions: ['.js', '.json', '.node', '.ts']
      }
    ],
    'node/no-unsupported-features/es-syntax': [
      'warn',
      {
        ignores: ['dynamicImport']
      }
    ]
  }
}

module.exports = config
