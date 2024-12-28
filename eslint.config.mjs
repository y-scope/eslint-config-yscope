import globals from "globals";

import CommonConfig from "./CommonConfig.mjs";
import StylisticConfigArray from "./StylisticConfigArray.mjs";


const EslintConfig = [
    CommonConfig,
    ...StylisticConfigArray,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];


export default EslintConfig;
