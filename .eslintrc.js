module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'quotes': ['error','single', {
        'allowTemplateLiterals': true
    }]
  }
};
