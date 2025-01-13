import Globals from "globals";


const JestConfig = {
    languageOptions: {
        globals: {
            ...Globals.jest,
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
};


export default JestConfig;
