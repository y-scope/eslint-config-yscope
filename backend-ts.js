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
        "no-underscore-dangle": [
            "error", {
                allow: [
                    "_id",
                ],
            },
        ],
    },
};

