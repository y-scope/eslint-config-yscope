import globals from "globals";

import CommonConfig from "./_common.mjs";


const config = [
    ...CommonConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];


export default config;
