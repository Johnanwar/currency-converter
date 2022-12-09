module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
  ],
  overrides: [
    {
      files: [
        '*.js',
        '*.jsx',
      ],
    },
  ],
  rules: {
    quotes: [
      'error',
      'single',
    ],
    'react/prop-types': 'off',
    indent: ['error', 2, { ignoredNodes: ['TemplateLiteral'], SwitchCase: 1 }],
    'linebreak-style': 'off',
    'max-len': ['error', { code: 200 }],
    'max-lines': ['error', { max: 500 }],
    'no-shadow': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'template-curly-spacing': 'off',
    'react/jsx-props-no-spreading': 'off',
    'arrow-body-style': 'off',
    'no-nested-ternary': 'off',
    'no-new': 'off',
    'no-plusplus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-vars': 'warn',
    'react/destructuring-assignment': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
};
