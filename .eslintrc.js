module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended"
  ],
  plugins: ["react"],
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"]
      }
    }
  },
  rules: {
    "react/prop-types": 0,
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-console": 2,
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "no-multiple-empty-lines": 2,
    "no-trailing-spaces": 2,
    "max-len": [
      1,
      {
        code: 120
      }
    ],
    indent: [
      "error",
      2,
      {
        MemberExpression: 1
      }
    ],
    "keyword-spacing": 2,
    "template-curly-spacing": ["error", "never"],
    "react/self-closing-comp": 2,
    "react/jsx-max-props-per-line": [
      "error",
      { maximum: 1, when: "multiline" }
    ],
    "react/prefer-stateless-function": 2,
    "react/no-unused-state": 2,
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: [
          "componentDidMount",
          "componentDidUpdate",
          "componentWillMount",
          "componentWillReceiveProps",
          "componentWillUnmount",
          "componentWillUpdate",
          "render",
          "shouldComponentUpdate"
        ]
      }
    ],
    "react/forbid-prop-types": [
      1,
      {
        forbid: ["any"]
      }
    ],
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/display-name": 0,
    "react/no-unused-prop-types": 2,
    "import/no-named-as-default-member": 0,
    "prefer-template": 2,
    "no-multi-spaces": 2,
    "object-shorthand": 2,
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-dangle": ["error", "always-multiline"],
    "space-in-parens": 2,
    "key-spacing": 2,
    "array-bracket-spacing": 2,
    "object-curly-spacing": [2, "always"],
    quotes: [2, "single"],
    semi: [2, "always"]
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    cy: true,
    context: true,
    Cypress: true,
    assert: true,
    process: true
  }
};
