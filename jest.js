module.exports = {
    env: {
        jest: true,
    },
    rules: {
        "no-magic-numbers": "off",
        "jsdoc/check-tag-names": [
            "warn",
            {
                definedTags: ["jest-environment"],
            },
        ],
    },
};
