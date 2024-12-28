import globals from "globals";

import ReactConfigArray from "./ReactConfigArray.mjs";


const MeteorConfigArray = [
    ...ReactConfigArray,
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


export default MeteorConfigArray;
