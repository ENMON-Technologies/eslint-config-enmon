module.exports = {
  rules: {
    'no-use-before-define': ['error'],
    'no-debugger': 1,
    'no-alert': 1,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 0,
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
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 2,
    'space-before-function-paren': 0,
    'comma-dangle': 1,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 1,
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
  },
};
