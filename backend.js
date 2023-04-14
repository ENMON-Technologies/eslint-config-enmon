module.exports = {
  extends: [
    './typescript.js',
    './prettier.js', // Needs to be last because it turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  env: {
    node: true,
  },
};
