/** @type {import('eslint').Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', './rules'],
  rules: {
    'node/no-missing-import': [
      'warn',
      {
        resolvePaths: ['src'],
        tryExtensions: ['.js', '.json', '.node', '.ts']
      }
    ]
  }
}

module.exports = config