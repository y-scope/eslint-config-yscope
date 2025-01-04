import importPlugin from "eslint-plugin-import";
import TsEslint from "typescript-eslint";


/**
 * Creates a configuration object for a TypeScript project.
 *
 * This function helps tailor ESLint to work with our TypeScript config by defining the files to
 * include, pointing to the TypeScript project configuration file (tsconfig.json), and ensuring
 * proper import resolution.
 *
 * @param {string[]} files Paths to include in the configuration.
 * @param {string} projectConfigPath Path to the corresponding `tsconfig.json`.
 * @return {object} The configuration object.
 */
const createTsConfigOverride = (files, projectConfigPath) => ({
    files: files,
    languageOptions: {
        parserOptions: {project: projectConfigPath},
    },
    settings: {
        "import/resolver": {
            typescript: {
                project: projectConfigPath,
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
