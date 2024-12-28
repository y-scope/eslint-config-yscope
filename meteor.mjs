import globals from "globals";

import ReactConfig from "./react.mjs";


const config = [
    ...ReactConfig,
    {
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.meteor,
                ...globals.node,
            },
        },
        settings: {
            "import/core-modules": [
                "meteor/meteor",
                "meteor/mongo",
                "meteor/accounts-base",
                "meteor/react-meteor-data",
            ],
        },
    },
];


export default config;
