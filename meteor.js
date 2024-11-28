module.exports = {
    env: {
        node: true,
        meteor: true,
        jest: true,
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
