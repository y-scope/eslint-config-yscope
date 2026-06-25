import Globals from "globals";

import CommonConfig from "./CommonConfig.mjs";
import PerfectionistConfigArray from "./PerfectionistConfigArray.mjs";
import StylisticConfigArray from "./StylisticConfigArray.mjs";


const EslintConfig = [
    CommonConfig,
    ...PerfectionistConfigArray,
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
