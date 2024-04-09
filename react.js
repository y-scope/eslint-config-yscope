/* eslint-disable sort-keys, no-undef */
module.exports = {
    env: {
        browser: true,
        node: false,
    },
    extends: [
        "./common",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        "@stylistic/jsx",
        "react-hooks",
        "react",
    ],
    settings: {
        "import/resolver": {
            node: {
                extensions: [
                    ".js",
                    ".jsx",
                ],
            },
        },
    },
    globals: {
        process: "readonly",
    },
    rules: {
        "@stylistic/jsx/jsx-child-element-spacing": [
            "error",
        ],
        "@stylistic/jsx/jsx-closing-bracket-location": [
            "error",
            {
                nonEmpty: "tag-aligned",
                selfClosing: "after-props",
            },
        ],
        "@stylistic/jsx/jsx-closing-tag-location": [
            "error",
        ],
        "@stylistic/jsx/jsx-curly-brace-presence": [
            "error",
            {
                props: "always",
                children: "ignore",
            },
        ],
        "@stylistic/jsx/jsx-curly-newline": [
            "error",
            {
                multiline: "consistent",
                singleline: "forbid",
            },
        ],
        "@stylistic/jsx/jsx-curly-spacing": [
            "error",
        ],
        "@stylistic/jsx/jsx-equals-spacing": [
            "error",
        ],
        "@stylistic/jsx/jsx-first-prop-new-line": [
            "error",
            "multiline",
        ],
        "@stylistic/jsx/jsx-indent": [
            "error",
        ],
        "@stylistic/jsx/jsx-indent-props": [
            "error",
        ],
        "@stylistic/jsx/jsx-max-props-per-line": [
            "error",
            {
                maximum: 1,
                when: "always",
            },
        ],
        "@stylistic/jsx/jsx-newline": [
            "off",
        ],
        "@stylistic/jsx/jsx-one-expression-per-line": [
            "error",
            {
                allow: "literal",
            },
        ],
        "@stylistic/jsx/jsx-pascal-case": [
            "error",
        ],
        "@stylistic/jsx/jsx-props-no-multi-spaces": [
            "error",
        ],
        "@stylistic/jsx/jsx-self-closing-comp": [
            "error",
        ],
        "@stylistic/jsx/jsx-sort-props": [
            "error",
            {
                callbacksLast: true,
                ignoreCase: true,
                multiline: "last",
                shorthandFirst: true,
                locale: "auto",
            },
        ],
        "@stylistic/jsx/jsx-tag-spacing": [
            "error",
            {
                closingSlash: "never",
                beforeSelfClosing: "never",
                afterOpening: "never",
                beforeClosing: "never",
            },
        ],
        "@stylistic/jsx/jsx-wrap-multilines": [
            "error",
            {
                arrow: "parens-new-line",
                assignment: "parens-new-line",
                declaration: "parens-new-line",
                return: "parens-new-line",
            },
        ],
        "react-hooks/exhaustive-deps": [
            "warn",
        ],

        "react-hooks/rules-of-hooks": [
            "error",
        ],
        "react/boolean-prop-naming": [
            "error",
            {
                rule: "^(is|has|disabled|enabled)[A-Za-z0-9]*",
                validateNested: false,
            },
        ],
        "react/destructuring-assignment": [
            "warn",
            "always",
        ],
        "react/display-name": [
            "error",
        ],
        "react/hook-use-state": [
            "warn",
            {
                allowDestructuredState: true,
            },
        ],
        "react/jsx-boolean-value": [
            "warn",
            "always",
        ],
        "react/jsx-child-element-spacing": [
            "off",
        ],
        "react/jsx-closing-bracket-location": [
            "off",
        ],
        "react/jsx-closing-tag-location": [
            "off",
        ],
        "react/jsx-curly-brace-presence": [
            "off",
        ],
        "react/jsx-curly-newline": [
            "off",
        ],
        "react/jsx-curly-spacing": [
            "off",
        ],
        "react/jsx-equals-spacing": [
            "off",
        ],
        "react/jsx-first-prop-new-line": [
            "off",
        ],
        "react/jsx-indent": [
            "off",
        ],
        "react/jsx-key": [
            "error",
        ],
        "react/jsx-max-props-per-line": [
            "off",
        ],
        "react/jsx-newline": [
            "off",
        ],
        "react/jsx-no-comment-textnodes": [
            "error",
        ],
        "react/jsx-no-duplicate-props": [
            "error",
        ],
        "react/jsx-no-target-blank": [
            "error",
        ],
        "react/jsx-no-undef": [
            "error",
        ],
        "react/jsx-one-expression-per-line": [
            "off",
        ],
        "react/jsx-pascal-case": [
            "off",
        ],
        "react/jsx-sort-props": [
            "off",
        ],
        "react/jsx-tag-spacing": [
            "off",
        ],
        "react/jsx-uses-react": [
            "off",
        ],
        "react/jsx-uses-vars": [
            "error",
        ],
        "react/jsx-wrap-multilines": [
            "off",
        ],
        "react/no-children-prop": [
            "error",
        ],
        "react/no-danger-with-children": [
            "error",
        ],
        "react/no-deprecated": [
            "error",
        ],
        "react/no-direct-mutation-state": [
            "error",
        ],
        "react/no-find-dom-node": [
            "error",
        ],
        "react/no-is-mounted": [
            "error",
        ],
        "react/no-render-return-value": [
            "error",
        ],
        "react/no-string-refs": [
            "error",
        ],
        "react/no-unescaped-entities": [
            "error",
        ],
        "react/no-unknown-property": [
            "error",
        ],
        "react/no-unsafe": [
            "off",
        ],
        "react/prop-types": [
            "error",
        ],
        "react/react-in-jsx-scope": [
            "off",
        ],
        "react/require-render-return": [
            "error",
        ],
    },
    overrides: [
        {
            files: ["*.jsx"],
            rules: {
                "max-lines-per-function": [
                    "error",
                    {
                        max: 120,
                        skipBlankLines: true,
                        skipComments: true,
                    },
                ],
            },
        },
    ],
};
/* eslint-disable sort-keys, no-undef */
