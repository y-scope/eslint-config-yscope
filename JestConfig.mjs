import globals from "globals";


const JestConfig = [{
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


export default JestConfig;
