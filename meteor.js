module.exports = {
    env: {
        meteor: true,
    },
    extends: [
        "./react",
    ],
    settings: {
        "import/core-modules": [
            "meteor/meteor",
            "meteor/mongo",
            "meteor/accounts-base",
            "meteor/react-meteor-data",
        ],
    },
};
