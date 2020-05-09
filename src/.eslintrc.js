
    var OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
    "env": {
        "es6": true
    },
    "parser": "babel-eslint",

    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },

    "plugins": [
        "react",
        "react-hooks"
    ],
    "extends": [
        // "eslint:recommended",
        // "plugin:react/recommended"
    ],

    "rules": {
        "comma-dangle": 0,
        "react/jsx-uses-vars": 1,
        "react/display-name": 1,
        "no-unused-vars": "warn",
        "no-console": 1,
        "no-unexpected-multiline": "warn",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
        },
    }

