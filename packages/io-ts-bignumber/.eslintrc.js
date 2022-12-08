module.exports = {
  "extends": [
    "@ericcrosson/eslint-config"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2018,
    "project": `${__dirname}/tsconfig.json`
  },
  "parser": "@typescript-eslint/parser"
};