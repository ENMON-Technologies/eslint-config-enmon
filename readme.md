# eslint-config-enmon

Base ESLint configs for Enmon projects.

## Usage

1. Install the config package

```bash
yarn add --dev github:ENMON-Technologies/eslint-config-enmon#v1.0.0
```

2. Install peer dependencies

For backend project:

```bash
yarn add --dev \
  @typescript-eslint/eslint-plugin@^5.58.0 \
  @typescript-eslint/parser@^5.58.0 \
  eslint@^8.38.0 \
  eslint-import-resolver-typescript@^3.5.5 \
  eslint-plugin-import@^2.27.5 \
  eslint-plugin-prettier@^4.2.1 \
  prettier@^2.8.7 \
  typescript@^4.4.2
```

For frontend project:

All BE peer dependencies +

```bash
yarn add --dev \
  eslint-plugin-html@^7.1.0 \
  eslint-plugin-jsx-a11y@^6.7.1 \
  eslint-plugin-react@^7.32.2 \
  eslint-plugin-react-hooks@^4.6.0 \
```



3. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

In frontend project:

```json
{
  "extends": ["enmon/frontend"]
}
```

In backend project:

```json
{
  "extends": ["enmon/backend"]
}
```

4. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint --fix ."
},
```

5. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## Files

|File           |Description
|----           |-----------
| backend.js    |Config common to all our backend projects.
| frontend.js   |Config common to all our frontend projects.
| javascript.js |Config common to all our projects, requiring only plain JavaScript to work.
| prettier.js   |Rules conflicting with Prettier.
| react.js      |Config common to all our React projects.
| typescript.js |Config common to all our projects, requiring TypeScript to work.

## FAQ

### Why are some ESLint related dependencies in `devDependencies` and some in `peerDependencies`?

TL;DR: eslint-config-* packages should go to `dependencies`, plugins and parsers should go to `peerDependencies`.


[Read more: Shareable config | ESLint](https://eslint.org/docs/latest/extend/shareable-configs#publishing-a-shareable-config)
