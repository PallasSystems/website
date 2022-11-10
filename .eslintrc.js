module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:import/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "settings": {
      "import/extensions": [
        ".js",
        ".jsx"
      ],
      "react": {
        "createClass": "createReactClass", // Regex for Component Factory to use default to "createReactClass"
        "pragma": "React",  // Pragma to use, default to "React"
        "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
        "version": "18",
        "flowVersion": "0.53" // Flow version
      }
    }
}
