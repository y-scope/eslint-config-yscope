import globals from "globals";


const config = [{
    languageOptions: {
        globals: {
            ...globals.jest,
        },
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
}];


export default config;
