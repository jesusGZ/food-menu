module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  plugins: ['prettier', 'security'],
  extends: ['eslint:recommended', 'google', 'prettier', 'plugin:security/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    camelcase: 0,
    indent: ['error', 4],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
