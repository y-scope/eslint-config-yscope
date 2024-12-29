import globals from "globals";


const MeteorConfig = {
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
};


export default MeteorConfig;
