module.exports = {
  extends: [
    'airbnb',
    './javascript.js',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript',
    './typescript.js',
    './react.js',
    './prettier.js', // Needs to be last because it turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  env: {
    browser: true,
  },
};
