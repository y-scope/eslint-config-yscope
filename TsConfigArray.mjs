import importPlugin from "eslint-plugin-import";
import TsEslint from "typescript-eslint";


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


export default TsConfigArray;
