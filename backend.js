module.exports = {
  plugins: ['unicorn'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    './javascript.js',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript/base',
    './typescript.js',
    './prettier.js', // Needs to be last because it turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  env: {
    node: true,
  },
  rules: {
    'unicorn/prevent-abbreviations': [
      'error',
      {
        ignore: ['devEUI', 'DevEUI'],
        replacements: {
          acc: false,
          arg: false,
          args: false,
          attr: false,
          ctx: false,
          db: false,
          dir: false,
          doc: false,
          env: false,
          fn: false,
          i: false,
          msg: false,
          opt: false,
          opts: false,
          param: false,
          params: false,
          prev: false,
          prop: false,
          props: false,
          ref: false,
          req: false,
          res: false,
        },
      },
    ],
  },
};
