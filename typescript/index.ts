import type { Linter } from 'eslint'

const config: Linter.Config = {
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

export = config
