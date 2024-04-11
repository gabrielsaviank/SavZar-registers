module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        semi: [2, "always"],
        "quotes": [2, "double", { "avoidEscape": true }],
        "object-curly-spacing": ["error", "always"],
        "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
        "react/prop-types": "off",
        "no-unused-vars": "off",

    }
};
