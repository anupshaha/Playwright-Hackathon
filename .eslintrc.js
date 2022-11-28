module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: [`plugin:@typescript-eslint/recommended`],
  overrides: [
  ],
  parser: `@typescript-eslint/parser`,
  plugins: [`@typescript-eslint`],
  rules: {
    quotes: [`warn`, `backtick`],
    semi: [`error`, `always`]
  }
};
