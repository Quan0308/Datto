// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['expo', 'eslint:recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['react-hooks', 'prettier', 'import'],
  rules: {
    'import/order': [
      'error',
      { groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']], 'newlines-between': 'always' },
    ],
    'import/newline-after-import': 'error',
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  env: {
    node: true,
  },
};
