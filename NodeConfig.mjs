import globals from "globals";

import CommonConfig from "./CommonConfig.mjs";
import StylisticConfig from "./StylisticConfig.mjs";


const NodeConfig = [
    ...CommonConfig,
    ...StylisticConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];


export default NodeConfig;
