/* eslint-disable sort-keys */
module.exports = {
    env: {
        node: true,
    },
    extends: [
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:import/typescript",
    ],
    plugins: [
        "@typescript-eslint",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
    },
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "tsconfig.json",
            },
        },
    },
    rules: {
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

        "no-shadow": [
            "off",
        ],
        "@typescript-eslint/no-shadow": [
            "error",
        ],
        "@typescript-eslint/restrict-template-expressions": [
            "error",
            {
                allowNumber: true,
            },
        ],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
        "@typescript-eslint/member-ordering": "error",
    },
};
/* eslint-enable sort-keys */
