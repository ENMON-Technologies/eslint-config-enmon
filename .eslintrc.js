const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['html', 'prettier', 'react-hooks'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    'no-use-before-define': ['error'],
    'no-debugger': 1,
    'no-alert': 1,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [2, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 0,
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 2,
    'space-before-function-paren': 0,
    'comma-dangle': 1,
    'max-len': 1,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 1,
    'react/display-name': 1,
    'react/no-array-index-key': 2,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 1,
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
    radix: 0,
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': ['error', prettierOptions],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
  },
};
