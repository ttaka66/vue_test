module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
    env: {
    browser: true,
    node: true,
    mocha: true
  },
  "globals": {
    "expect": true
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ]
}
