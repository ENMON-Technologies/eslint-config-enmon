module.exports = {
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
};
