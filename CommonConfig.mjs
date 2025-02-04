/* eslint-disable max-lines */

import ImportPlugin from "eslint-plugin-import";
import ImportNewlinesPlugin from "eslint-plugin-import-newlines";
import JsdocPlugin from "eslint-plugin-jsdoc";
import NoAutofixPlugin from "eslint-plugin-no-autofix";
import SimpleImportSortPlugin from "eslint-plugin-simple-import-sort";


const CommonConfig = {
    languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: {
        "import": ImportPlugin,
        "import-newlines": ImportNewlinesPlugin,
        "jsdoc": JsdocPlugin,
        "no-autofix": NoAutofixPlugin,
        "simple-import-sort": SimpleImportSortPlugin,
    },
    rules: {
        "accessor-pairs": ["error"],
        "array-callback-return": ["error"],
        "arrow-body-style": ["off"],
        "block-scoped-var": ["error"],
        "camelcase": [
            "error",
            {
                properties: "never",
                ignoreDestructuring: false,
                ignoreImports: false,
                ignoreGlobals: false,
            },
        ],
        "capitalized-comments": ["off"],
        "class-methods-use-this": ["error"],
        "complexity": ["error"],
        "consistent-return": ["error"],
        "consistent-this": ["error"],
        "constructor-super": ["error"],
        "curly": [
            "error",
            "all",
        ],
        "default-case": ["error"],
        "default-case-last": ["error"],
        "default-param-last": ["error"],
        "dot-notation": ["error"],
        "eqeqeq": ["error"],
        "for-direction": ["error"],
        "func-name-matching": ["error"],
        "func-names": [
            "error",
            "as-needed",
        ],
        "func-style": [
            "warn",
            "expression",
        ],
        "getter-return": ["error"],
        "grouped-accessor-pairs": ["error"],
        "guard-for-in": ["error"],
        "id-denylist": ["off"],
        "id-length": ["off"],
        "id-match": ["error"],
        "init-declarations": ["off"],
        "logical-assignment-operators": ["error"],
        "max-classes-per-file": ["error"],
        "max-depth": ["error"],
        "max-lines": ["error"],
        "max-lines-per-function": [
            "error",
            {max: 60, skipBlankLines: true, skipComments: true},
        ],
        "max-nested-callbacks": ["error"],
        "max-params": [
            "error",
            {max: 4},
        ],
        "max-statements": [
            "error",
            {max: 20},
        ],
        "new-cap": ["error"],
        "no-alert": ["error"],
        "no-array-constructor": ["error"],
        "no-async-promise-executor": ["error"],
        "no-await-in-loop": ["off"],
        "no-bitwise": ["off"],
        "no-caller": ["error"],
        "no-case-declarations": ["error"],
        "no-class-assign": ["error"],
        "no-compare-neg-zero": ["error"],
        "no-cond-assign": ["error"],
        "no-console": ["off"],
        "no-const-assign": ["error"],
        "no-constant-binary-expression": ["error"],
        "no-constant-condition": [
            "error",
            {checkLoops: false},
        ],
        "no-constructor-return": ["error"],
        "no-continue": ["off"],
        "no-control-regex": ["error"],
        "no-debugger": ["error"],
        "no-delete-var": ["error"],
        "no-div-regex": ["error"],
        "no-dupe-args": ["error"],
        "no-dupe-class-members": ["error"],
        "no-dupe-else-if": ["error"],
        "no-dupe-keys": ["error"],
        "no-duplicate-case": ["error"],
        "no-duplicate-imports": ["error"],
        "no-else-return": ["error"],
        "no-empty": ["error"],
        "no-empty-character-class": ["error"],
        "no-empty-function": [
            "error",
            {allow: ["arrowFunctions"]},
        ],
        "no-empty-pattern": ["error"],
        "no-empty-static-block": ["error"],
        "no-eq-null": ["error"],
        "no-eval": ["error"],
        "no-ex-assign": ["error"],
        "no-extend-native": ["error"],
        "no-extra-bind": ["error"],
        "no-extra-boolean-cast": ["error"],
        "no-extra-label": ["error"],
        "no-fallthrough": ["error"],
        "no-func-assign": ["error"],
        "no-global-assign": ["error"],
        "no-implicit-coercion": ["error"],
        "no-implicit-globals": ["error"],
        "no-implied-eval": ["error"],
        "no-import-assign": ["error"],
        "no-inline-comments": ["error"],
        "no-inner-declarations": ["error"],
        "no-invalid-regexp": ["error"],
        "no-invalid-this": ["off"],
        "no-irregular-whitespace": ["error"],
        "no-iterator": ["error"],
        "no-label-var": ["error"],
        "no-labels": ["error"],
        "no-lone-blocks": ["error"],
        "no-lonely-if": ["error"],
        "no-loop-func": ["error"],
        "no-loss-of-precision": ["error"],
        "no-magic-numbers": [
            "error",
            {
                detectObjects: false,
                enforceConst: true,
                ignore: [
                    -1,
                    0,
                    1,
                    2,
                    3,
                    10,
                    100,
                ],
                ignoreArrayIndexes: true,
                ignoreClassFieldInitialValues: true,
                ignoreDefaultValues: true,
            },
        ],
        "no-misleading-character-class": ["error"],
        "no-multi-assign": ["error"],
        "no-multi-str": ["error"],
        "no-negated-condition": ["off"],
        "no-nested-ternary": ["error"],
        "no-new": ["error"],
        "no-new-func": ["error"],
        "no-new-native-nonconstructor": ["error"],

        // Deprecated in ESLint v9.0.0 and replaced by `no-new-native-nonconstructor`
        "no-new-symbol": ["off"],
        "no-new-wrappers": ["error"],
        "no-nonoctal-decimal-escape": ["error"],
        "no-obj-calls": ["error"],
        "no-object-constructor": ["error"],
        "no-octal": ["error"],
        "no-octal-escape": ["error"],
        "no-param-reassign": ["off"],
        "no-plusplus": ["off"],
        "no-promise-executor-return": ["error"],
        "no-proto": ["error"],
        "no-prototype-builtins": ["error"],
        "no-redeclare": ["error"],
        "no-regex-spaces": ["error"],
        "no-restricted-exports": ["error"],
        "no-restricted-globals": ["error"],
        "no-restricted-imports": ["error"],
        "no-restricted-properties": ["error"],
        "no-restricted-syntax": [
            "error",
            {
                message: "Direct exporting of declarations is not allowed. Use export list or " +
                    "default exports instead.",
                selector: "ExportNamedDeclaration[declaration!=null]",
            },
        ],
        "no-return-assign": ["error"],
        "no-script-url": ["error"],
        "no-self-assign": ["error"],
        "no-self-compare": ["error"],
        "no-sequences": ["error"],
        "no-setter-return": ["error"],
        "no-shadow": ["error"],
        "no-shadow-restricted-names": ["error"],
        "no-sparse-arrays": ["error"],
        "no-template-curly-in-string": ["error"],
        "no-ternary": ["off"],
        "no-this-before-super": ["error"],
        "no-throw-literal": ["error"],
        "no-undef": ["error"],
        "no-undef-init": ["error"],
        "no-undefined": ["error"],
        "no-underscore-dangle": [
            "error",
            {
                allow: [
                    "_id",
                    "_malloc",
                ],
            },
        ],
        "no-unexpected-multiline": ["error"],
        "no-unmodified-loop-condition": ["error"],
        "no-unneeded-ternary": ["error"],
        "no-unreachable": ["error"],
        "no-unreachable-loop": ["error"],
        "no-unsafe-finally": ["error"],
        "no-unsafe-negation": ["error"],
        "no-unsafe-optional-chaining": ["error"],
        "no-unused-expressions": ["error"],
        "no-unused-labels": ["error"],
        "no-unused-private-class-members": ["error"],
        "no-unused-vars": [
            "warn",
            {args: "none"},
        ],
        "no-use-before-define": ["error"],
        "no-useless-assignment": ["error"],
        "no-useless-backreference": ["error"],
        "no-useless-call": ["error"],
        "no-useless-catch": ["error"],
        "no-useless-computed-key": ["error"],
        "no-useless-concat": ["error"],
        "no-useless-constructor": ["error"],
        "no-useless-escape": ["error"],
        "no-useless-rename": ["error"],
        "no-useless-return": ["error"],
        "no-var": ["error"],
        "no-void": ["error"],
        "no-warning-comments": [
            "warn",
            {
                location: "start",
                terms: [
                    "todo",
                    "fixme",
                ],
            },
        ],
        "no-with": ["error"],
        "object-shorthand": [
            "error",
            "consistent",
        ],
        "one-var": [
            "error",
            {var: "never", let: "never", const: "never"},
        ],
        "operator-assignment": ["error"],
        "prefer-arrow-callback": ["error"],
        "prefer-const": [
            "error",
            {destructuring: "all", ignoreReadBeforeAssign: false},
        ],
        "prefer-destructuring": ["error"],
        "prefer-exponentiation-operator": ["error"],
        "prefer-named-capture-group": ["off"],
        "prefer-numeric-literals": ["error"],
        "prefer-object-has-own": ["error"],
        "prefer-object-spread": ["error"],
        "prefer-promise-reject-errors": ["error"],
        "prefer-regex-literals": ["error"],
        "prefer-rest-params": ["error"],
        "prefer-spread": ["error"],
        "prefer-template": ["error"],
        "radix": ["error"],
        "require-atomic-updates": ["warn"],
        "require-await": ["warn"],
        "require-unicode-regexp": ["off"],
        "require-yield": ["error"],
        "simple-import-sort/exports": ["warn"],
        "simple-import-sort/imports": [
            "warn",
            {
                /*
                // EXAMPLES
                // ===
                // Built-in Node.js modules
                import fs from "node:fs";
                import path from "node:path";

                // Framework libraries
                import {Meteor} from "meteor/meteor";
                import PropTypes from "prop-types";
                import React from "react";
                import ReactDOM from "react-dom";

                // Third-party libraries
                import axios from "axios";
                import lodash from "lodash";

                // UI icons
                import {
                    faBars,
                    faFootball,
                } from "@fortawesome/free-solid-svg-icons";
                import BarChartIcon from "@mui/icons-material/BarChart";
                import FoodBankIcon from "@mui/icons-material/FoodBank";

                // Absolute imports (e.g., project-specific aliases)
                import apiRoutes from "/api/routes";
                import config from "/config";

                // Relative imports
                import App from "./components/App";
                import helperFunction from "./utils";

                // Side-effect imports (those which have `\u0000` prepended)
                import "normalize.css";
                import "./index.css";
                */
                groups: [
                    ["^node:"],
                    [
                        "^meteor",
                        "^prop-types",
                        "^react",
                    ],
                    ["^@?\\w"],
                    [
                        "^@fortawesome",
                        "^@mui/icons-material",
                    ],
                    ["^/"],
                    ["^\\."],
                    ["^\\u0000"],
                ],
            },
        ],
        "sort-imports": ["off"],
        "sort-keys": [
            "warn",
            "asc",
            {allowLineSeparatedGroups: true, caseSensitive: true, minKeys: 5, natural: true},
        ],
        "sort-vars": ["error"],
        "strict": ["error"],
        "symbol-description": ["error"],
        "unicode-bom": ["error"],
        "use-isnan": ["error"],
        "valid-typeof": ["error"],
        "vars-on-top": ["error"],
        "yoda": [
            "error",
            "always",
        ],

        "import-newlines/enforce": [
            "error",
            {items: 1},
        ],

        "import/default": ["error"],
        "import/export": ["error"],
        "import/named": ["error"],
        "import/namespace": ["error"],
        "import/newline-after-import": [
            "error",
            {count: 2, exactCount: true, considerComments: true},
        ],
        "import/no-duplicates": ["error"],
        "import/no-named-as-default": ["warn"],
        "import/no-named-as-default-member": ["warn"],
        "import/no-unresolved": [
            "error",
            {ignore: ["^/imports"], caseSensitive: true, caseSensitiveStrict: false},
        ],

        "jsdoc/check-access": ["warn"],
        "jsdoc/check-alignment": ["warn"],
        "jsdoc/check-examples": ["off"],
        "jsdoc/check-indentation": ["off"],
        "jsdoc/check-line-alignment": ["warn"],
        "jsdoc/check-param-names": [
            "warn",
            {checkRestProperty: true},
        ],
        "jsdoc/check-property-names": ["warn"],
        "jsdoc/check-syntax": ["off"],
        "jsdoc/check-tag-names": ["warn"],
        "jsdoc/check-types": ["warn"],
        "jsdoc/check-values": ["warn"],
        "jsdoc/empty-tags": ["warn"],
        "jsdoc/implements-on-classes": ["warn"],
        "jsdoc/informative-docs": ["warn"],
        "jsdoc/match-description": ["off"],
        "jsdoc/match-name": ["off"],
        "jsdoc/multiline-blocks": "warn",
        "jsdoc/no-bad-blocks": ["off"],
        "jsdoc/no-blank-block-descriptions": ["off"],
        "jsdoc/no-blank-blocks": "warn",
        "jsdoc/no-defaults": "warn",
        "jsdoc/no-missing-syntax": ["off"],
        "jsdoc/no-multi-asterisks": "warn",
        "jsdoc/no-restricted-syntax": ["off"],
        "jsdoc/no-types": ["off"],
        "jsdoc/no-undefined-types": ["off"],
        "jsdoc/require-asterisk-prefix": ["warn"],
        "jsdoc/require-description": [
            "warn",
            {checkConstructors: false, checkGetters: false, checkSetters: false},
        ],
        "jsdoc/require-description-complete-sentence": ["off"],
        "jsdoc/require-example": ["off"],
        "jsdoc/require-file-overview": ["off"],
        "jsdoc/require-hyphen-before-param-description": [
            "warn",
            "never",
        ],
        "jsdoc/require-jsdoc": [
            "warn",
            {
                contexts: [
                    ":has(VariableDeclarator[init.callee.object.name='Object']" +
                    "[init.callee.property.name='freeze'])[declarations]",
                    "Program > VariableDeclaration > .declarations > ArrowFunctionExpression",
                ],
                require: {FunctionDeclaration: true, FunctionExpression: true},
            },
        ],
        "jsdoc/require-param": ["warn"],
        "jsdoc/require-param-description": ["off"],
        "jsdoc/require-param-name": ["warn"],
        "jsdoc/require-param-type": ["warn"],
        "jsdoc/require-property": ["warn"],
        "jsdoc/require-property-description": ["off"],
        "jsdoc/require-property-name": ["warn"],
        "jsdoc/require-property-type": ["warn"],
        "jsdoc/require-returns": ["warn"],
        "jsdoc/require-returns-check": ["warn"],
        "jsdoc/require-returns-description": ["off"],
        "jsdoc/require-returns-type": ["warn"],
        "jsdoc/require-throws": ["warn"],
        "jsdoc/require-yields": ["warn"],
        "jsdoc/require-yields-check": ["warn"],
        "jsdoc/sort-tags": ["warn"],
        "jsdoc/tag-lines": [
            "warn",
            "any",
            {startLines: 1},
        ],
        "jsdoc/valid-types": ["warn"],
    },
    settings: {
        jsdoc: {
            mode: "typescript",
            tagNamePreference: {
                returns: "return",
            },
        },
    },
};


export default CommonConfig;
