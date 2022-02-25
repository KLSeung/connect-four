module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    "plugin:import/recommended",
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    "@typescript-eslint/no-use-before-define": "error",
    "react/jsx-filename-extension": [ "warn", {"extensions": [".tsx"]} ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
      "ts": "never",
      "tsx": "never"
      }
    ],
    "@typescript-eslint/no-shadow": ["error"],
    "no-use-before-define": "off",
  },
};