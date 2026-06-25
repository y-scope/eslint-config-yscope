import PerfectionistPlugin from "eslint-plugin-perfectionist";


const PerfectionistConfigArray = [
    {
        plugins: {
            perfectionist: PerfectionistPlugin,
        },
        rules: {
            "perfectionist/sort-jsx-props": [
                "error",
                {
                    customGroups: [
                        {
                            groupName: "callback",
                            elementNamePattern: "^on.+",
                        },
                    ],
                    groups: [
                        "shorthand-prop",
                        "prop",
                        "multiline-prop",
                        "callback",
                    ],
                    ignoreCase: true,
                    order: "asc",
                    type: "alphabetical",
                },
            ],
        },
    },
];


export default PerfectionistConfigArray;
