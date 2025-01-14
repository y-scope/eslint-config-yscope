import ImportPlugin from "eslint-plugin-import";
import TsEslint from "typescript-eslint";


/**
 * Gets an object containing the basic options to configure ESLint for a TypeScript project.
 *
 * @param {string[]} files Paths or globs for the TypeScript files to be linted.
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
    ImportPlugin.flatConfigs.typescript,
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
].map(
    (config) => ({
        files: [
            "**/*.ts",
            "**/*.tsx",
        ],
        ...config,
    })
);

export {createTsConfigOverride};
export default TsConfigArray;
