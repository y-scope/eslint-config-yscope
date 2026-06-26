import Globals from "globals";

import CommonConfig from "./CommonConfig.mjs";
import StylisticConfigArray from "./StylisticConfigArray.mjs";


const EslintConfig = [
    CommonConfig,
    ...StylisticConfigArray,
    {
        languageOptions: {
            globals: {
                ...Globals.node,
            },
        },
    },
];


export default EslintConfig;
