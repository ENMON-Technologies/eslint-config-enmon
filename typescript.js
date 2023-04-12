module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses rules from `@typescript-eslint/eslint-plugin`,
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // Layer in all the JS Rules
    './.eslintrc.js',
    './prettier.js', // Needs to be last because it turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  // then add some extra good stuff for Typescript
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // Then we add our own custom typescript rules
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    // Depriciated rule due to zero-cost async stack traces
    '@typescript-eslint/return-await': 'off',

    '@typescript-eslint/comma-dangle': ['off'],

    // This allows us to use async function on addEventListener().
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'warn',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
