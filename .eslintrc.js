module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:cypress/recommended',
  ],
  plugins: ['cypress'],
  // add your custom rules here
  rules: {
    "no-console": 0
  }
}
