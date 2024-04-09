/* eslint-disable sort-keys, no-undef */
module.exports = {
    env: {
        node: true,
    },
    extends: [
        "./common",
    ],
    plugins: [
        "@typescript-eslint",
    ],
    parser: "@typescript-eslint/parser",
    settings: {
        "import/resolver": {
            typescript: {},
        },
    },
    rules: {
        "no-console": [
            "error",
        ],
        "no-restricted-syntax": "off",

        // No need to specify types in docs in TS
        "jsdoc/no-types": [
            "warn",
        ],
        "jsdoc/check-types": [
            "off",
        ],
        "jsdoc/require-param-type": [
            "off",
        ],
        "jsdoc/require-property-type": [
            "off",
        ],
        "jsdoc/require-returns-type": [
            "off",
        ],
    },
};
/* eslint-enable sort-keys, no-undef */
