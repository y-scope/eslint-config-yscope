import importPlugin from "eslint-plugin-import";
import TsEslint from "typescript-eslint";


/**
 * Generates an override configuration for a TypeScript project specific to
 * file inclusion, parser options, and import resolution settings.
 *
 * @param {string[]} files Paths to include in the configuration.
 * @param {string} project Path to the TypeScript configuration file (tsconfig.json).
 * @return {object} The configuration object.
 */
const createTsConfigOverride = (files, project) => ({
    files: files,
    languageOptions: {
        parserOptions: {project: project},
    },
    settings: {
        "import/resolver": {
            typescript: {
                project: project,
            },
        },
    },
});


const TsConfigArray = [
    ...TsEslint.configs.strictTypeChecked,
    importPlugin.flatConfigs.typescript,
    {
        languageOptions: {
            parser: TsEslint.parser,
            parserOptions: {
                project: "tsconfig.json",
            },
        },
        plugins: {
            "@typescript-eslint": TsEslint.plugin,
        },
        rules: {
            "jsdoc/check-types": ["off"],
            "jsdoc/no-types": ["warn"],
            "jsdoc/require-param-type": ["off"],
            "jsdoc/require-property-type": ["off"],
            "jsdoc/require-returns-type": ["off"],

            "no-restricted-syntax": ["off"],
            "no-shadow": ["off"],

            "@typescript-eslint/member-ordering": ["error"],
            "@typescript-eslint/no-shadow": ["error"],
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["off"],
            "@typescript-eslint/restrict-template-expressions": [
                "error",
                {
                    allowNumber: true,
                },
            ],
        },
        settings: {
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "tsconfig.json",
                },
            },
        },
    },
];

export {createTsConfigOverride};
export default TsConfigArray;
