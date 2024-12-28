import globals from "globals";

import ReactConfig from "./ReactConfig.mjs";


const MeteorConfig = [
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


export default MeteorConfig;
