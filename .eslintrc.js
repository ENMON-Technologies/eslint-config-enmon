// NOTE: Do not extend other ESLint config by this file, it's meant as config to lint this repo only.
module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    './javascript.js',
    './prettier.js', // Needs to be last because it turns off all rules that are unnecessary or might conflict with Prettier.
  ],
};
