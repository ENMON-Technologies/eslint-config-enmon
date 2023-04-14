const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  extends: [
    'plugin:prettier/recommended', // Turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
};
