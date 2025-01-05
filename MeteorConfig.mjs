import Globals from "globals";


const MeteorConfig = {
    languageOptions: {
        globals: {
            ...Globals.jest,
            ...Globals.meteor,
            ...Globals.node,
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
