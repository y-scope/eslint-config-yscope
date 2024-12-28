import globals from "globals";

import CommonConfig from "./CommonConfig.mjs";


const NodeConfig = [
    ...CommonConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];


export default NodeConfig;
