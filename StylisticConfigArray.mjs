/* eslint-disable max-lines, no-magic-numbers */

import StylisticPlugin from "@stylistic/eslint-plugin";


const StylisticConfigArray = [
    StylisticPlugin.configs["disable-legacy"],
    {
        plugins: {
            "@stylistic": StylisticPlugin,
        },
        rules: {
            "@stylistic/array-bracket-newline": [
                "error",
                "consistent",
            ],
            "@stylistic/array-bracket-spacing": [
                "error",
                "never",
            ],
            "@stylistic/array-element-newline": [
                "error",
                {ArrayExpression: "always", ArrayPattern: {minItems: 3}},
            ],
            "@stylistic/arrow-parens": ["error"],
            "@stylistic/arrow-spacing": ["error"],
            "@stylistic/block-spacing": [
                "error",
                "never",
            ],
            "@stylistic/brace-style": [
                "error",
                "1tbs",
                {allowSingleLine: true},
            ],
            "@stylistic/comma-dangle": [
                "warn",
                {
                    arrays: "always-multiline",
                    dynamicImports: "never",
                    enums: "always-multiline",
                    exports: "always-multiline",
                    functions: "only-multiline",
                    generics: "always-multiline",
                    importAttributes: "never",
                    imports: "always-multiline",
                    objects: "always-multiline",
                    tuples: "always-multiline",
                },
            ],
            "@stylistic/comma-spacing": ["error"],
            "@stylistic/comma-style": ["error"],
            "@stylistic/computed-property-spacing": ["error"],
            "@stylistic/dot-location": [
                "error",
                "property",
            ],
            "@stylistic/eol-last": [
                "error",
                "always",
            ],

            // This rule was renamed to `@stylistic/function-call-spacing`.
            "@stylistic/func-call-spacing": ["off"],
            "@stylistic/function-call-argument-newline": [
                "error",
                "consistent",
            ],
            "@stylistic/function-call-spacing": ["error"],
            "@stylistic/function-paren-newline": [
                "error",
                "multiline-arguments",
            ],
            "@stylistic/generator-star-spacing": ["error"],
            "@stylistic/implicit-arrow-linebreak": ["error"],
            "@stylistic/indent": [
                "error",
                4,
                {
                    SwitchCase: 1,
                    flatTernaryExpressions: false,
                    offsetTernaryExpressions: false,
                    ignoreComments: false,
                },
            ],
            "@stylistic/jsx-quotes": ["error"],
            "@stylistic/key-spacing": [
                "error",
                {afterColon: true},
            ],
            "@stylistic/keyword-spacing": ["error"],
            "@stylistic/line-comment-position": ["error"],
            "@stylistic/linebreak-style": [
                "error",
                "unix",
            ],
            "@stylistic/lines-around-comment": [
                "error",
                /* eslint-disable sort-keys */
                {
                    ignorePattern: "c8|Enum",
                    beforeBlockComment: true,
                    afterBlockComment: false,
                    beforeLineComment: true,
                    afterLineComment: false,
                    afterHashbangComment: true,
                    allowBlockStart: true,
                    allowBlockEnd: true,
                    allowClassStart: true,
                    allowClassEnd: true,
                    allowObjectStart: true,
                    allowObjectEnd: true,
                    allowArrayStart: true,
                    allowArrayEnd: true,

                    // TypeScript specific
                    allowEnumStart: true,
                    allowEnumEnd: true,
                    allowInterfaceStart: true,
                    allowInterfaceEnd: true,
                    allowModuleStart: true,
                    allowModuleEnd: true,
                    allowTypeStart: true,
                    allowTypeEnd: true,
                },
                /* eslint-enable sort-keys */
            ],
            "@stylistic/lines-between-class-members": ["error"],
            "@stylistic/max-len": [
                "warn",
                {
                    code: 100,
                    comments: 100,
                    ignoreComments: false,
                    ignoreRegExpLiterals: true,
                    ignoreStrings: false,
                    ignoreTemplateLiterals: false,
                    ignoreTrailingComments: false,
                    ignoreUrls: true,
                    tabWidth: 4,
                },
            ],
            "@stylistic/max-statements-per-line": ["error"],
            "@stylistic/member-delimiter-style": ["error"],
            "@stylistic/multiline-comment-style": ["off"],
            "@stylistic/multiline-ternary": ["error"],
            "@stylistic/new-parens": ["error"],
            "@stylistic/newline-per-chained-call": ["error"],
            "@stylistic/no-confusing-arrow": ["error"],
            "@stylistic/no-extra-parens": [
                "error",
                "functions",
            ],
            "@stylistic/no-extra-semi": ["error"],
            "@stylistic/no-floating-decimal": ["error"],
            "@stylistic/no-mixed-operators": ["error"],
            "@stylistic/no-mixed-spaces-and-tabs": ["error"],
            "@stylistic/no-multi-spaces": ["error"],
            "@stylistic/no-multiple-empty-lines": [
                "error",
                {max: 2, maxBOF: 0, maxEOF: 0},
            ],
            "@stylistic/no-tabs": ["error"],
            "@stylistic/no-trailing-spaces": ["error"],
            "@stylistic/no-whitespace-before-property": ["error"],
            "@stylistic/nonblock-statement-body-position": ["error"],
            "@stylistic/object-curly-newline": [
                "error",
                {
                    ImportDeclaration: {consistent: false, minProperties: 2, multiline: true},
                    ExportDeclaration: {consistent: false, minProperties: 2, multiline: true},
                },
            ],
            "@stylistic/object-curly-spacing": [
                "error",
                "never",
            ],
            "@stylistic/object-property-newline": [
                "error",
                {allowAllPropertiesOnSameLine: true},
            ],
            "@stylistic/one-var-declaration-per-line": ["error"],
            "@stylistic/operator-linebreak": [
                "error",
                "after",
            ],
            "@stylistic/padded-blocks": [
                "error",
                "never",
            ],
            "@stylistic/padding-line-between-statements": [
                "warn",
                {blankLine: "always", next: "return", prev: "*"},
                {
                    blankLine: "always",
                    prev: [
                        "export",
                        "const",
                        "let",
                        "var",
                        "function",
                        "enum",
                        "interface",
                        "type",
                    ],
                    next: "*",
                },
                {
                    blankLine: "any",
                    prev: [
                        "singleline-const",
                        "singleline-let",
                        "singleline-var",
                    ],
                    next: "*",
                },
                {
                    blankLine: "any",
                    next: [
                        "export",
                        "const",
                        "let",
                        "var",
                    ],
                    prev: [
                        "export",
                        "const",
                        "let",
                        "var",
                    ],
                },
                {
                    blankLine: "never",
                    prev: "function-overload",
                    next: "function",
                },
            ],
            "@stylistic/quote-props": [
                "error",
                "consistent-as-needed",
            ],
            "@stylistic/quotes": [
                "warn",
                "double",
                {avoidEscape: true},
            ],
            "@stylistic/rest-spread-spacing": ["error"],
            "@stylistic/semi": ["error"],
            "@stylistic/semi-spacing": ["error"],
            "@stylistic/semi-style": ["error"],
            "@stylistic/space-before-blocks": ["error"],
            "@stylistic/space-before-function-paren": ["error"],
            "@stylistic/space-in-parens": ["error"],
            "@stylistic/space-infix-ops": ["error"],
            "@stylistic/space-unary-ops": ["error"],
            "@stylistic/spaced-comment": [
                "error",
                "always",
                {block: {balanced: true}},
            ],
            "@stylistic/switch-colon-spacing": ["error"],
            "@stylistic/template-curly-spacing": ["error"],
            "@stylistic/template-tag-spacing": ["error"],
            "@stylistic/wrap-iife": ["error"],
            "@stylistic/wrap-regex": ["error"],
            "@stylistic/yield-star-spacing": ["error"],

            "@stylistic/jsx-child-element-spacing": ["error"],
            "@stylistic/jsx-closing-bracket-location": [
                "error",
                {
                    nonEmpty: "tag-aligned",
                    selfClosing: "after-props",
                },
            ],
            "@stylistic/jsx-closing-tag-location": ["error"],
            "@stylistic/jsx-curly-brace-presence": [
                "error",
                {
                    props: "always",
                    children: "ignore",
                },
            ],
            "@stylistic/jsx-curly-newline": [
                "error",
                {
                    multiline: "consistent",
                    singleline: "forbid",
                },
            ],
            "@stylistic/jsx-curly-spacing": ["error"],
            "@stylistic/jsx-equals-spacing": ["error"],
            "@stylistic/jsx-first-prop-new-line": [
                "error",
                "multiline",
            ],
            "@stylistic/jsx-function-call-newline": [
                "error",
                "multiline",
            ],
            "@stylistic/jsx-indent": ["error"],
            "@stylistic/jsx-indent-props": ["error"],
            "@stylistic/jsx-max-props-per-line": [
                "error",
                {
                    maximum: 1,
                    when: "always",
                },
            ],
            "@stylistic/jsx-newline": ["off"],
            "@stylistic/jsx-one-expression-per-line": [
                "error",
                {
                    allow: "literal",
                },
            ],
            "@stylistic/jsx-pascal-case": ["error"],
            "@stylistic/jsx-props-no-multi-spaces": ["off"],
            "@stylistic/jsx-self-closing-comp": ["error"],
            "@stylistic/jsx-sort-props": [
                "error",
                {
                    callbacksLast: true,
                    ignoreCase: true,
                    locale: "auto",
                    multiline: "last",
                    shorthandFirst: true,
                },
            ],
            "@stylistic/jsx-tag-spacing": [
                "error",
                {
                    closingSlash: "never",
                    beforeSelfClosing: "never",
                    afterOpening: "never",
                    beforeClosing: "never",
                },
            ],
            "@stylistic/jsx-wrap-multilines": [
                "error",
                {
                    arrow: "parens-new-line",
                    assignment: "parens-new-line",
                    declaration: "parens-new-line",
                    return: "parens-new-line",
                },
            ],

            "@stylistic/curly-newline": [
                "error",
                "always",
            ],
            "@stylistic/indent-binary-ops": ["off"],
            "@stylistic/type-generic-spacing": ["error"],
            "@stylistic/type-named-tuple-spacing": ["error"],
        },
    },
];

export default StylisticConfigArray;
