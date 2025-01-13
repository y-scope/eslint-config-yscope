# eslint-config-yscope

This repository contains ESLint ["flat"][eslint-flat-config] configurations for various JavaScript
environments under the `yscope` namespace. Our configurations are designed to enforce a consistent
coding style and catch common bugs, making your codebase more maintainable and error-free.

## Installation

To get started with `eslint-config-yscope`, you can install the package:

```shell
npm install --save-dev eslint-config-yscope
# or
yarn add --dev eslint-config-yscope
```

### For Older Node.js Versions

This package requires ESLint 9, which in turn requires Node.js 18 or above. If you are using an
older version of Node.js, you can use version `0.0.32` of this package, which is compatible with
ESLint 8. Detailed setup instructions for this version are available in the 
[older version's README][readme-0.0.32].

## Usage

After installation, you can create an `eslint.config.mjs` configuration file in the root directory
of your project and export an array of configuration objects.

### Available Configurations

Some configurations are provided as standalone configuration objects, which can be directly
referenced once imported:
- `CommonConfig`: A general ESLint configuration suitable for a wide range of JavaScript projects.
- `JestConfig`: A specialized ESLint configuration for Jest files.
- `MeteorConfig`: A specialized ESLint configuration for Meteor projects.

The other configurations are provided as a group of configuration objects stored in an array. To use
these configurations, you need to utilize the "spread" (`...`) syntax to unpack the configuration
objects into your own configuration array:
- `StylisticConfigArray`: A configuration for stylistic formatting. It is typically combined with
  `CommonConfig`, as shown in the [ESLint config examples](#eslint-config-examples).
- `ReactConfigArray`: A specialized ESLint configuration for React applications.
- `TsConfigArray`: A specialized ESLint configuration for TypeScript projects. A helper
  `createTsConfigOverride` is also provided. See [ESLint config examples](#eslint-config-examples)
  for details on how to set it up.


### ESLint config examples

1. For use with a CommonJS Node.js project:
    ```javascript
    import globals from "globals";
    
    import CommonConfig from "eslint-config-yscope/CommonConfig.mjs";
    import StylisticConfigArray from "eslint-config-yscope/StylisticConfigArray.mjs";
    
    
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
        {
            rules: {
                // Your own overrides
            },
        },
    ];
    
    
    export default EslintConfig;
    ```

2. For use with a JavaScript React.js project:
    ```javascript
    import CommonConfig from "eslint-config-yscope/CommonConfig.mjs";
    import ReactConfigArray from "eslint-config-yscope/ReactConfigArray.mjs";
    import StylisticConfigArray from "eslint-config-yscope/StylisticConfigArray.mjs";
    
    
    const EslintConfig = [
        CommonConfig,
        ...StylisticConfigArray,
        ...ReactConfigArray,
    ];
    
    
    export default EslintConfig;
    ```

3. For use with a TypeScript React.js project:
    ```javascript
    import CommonConfig from "eslint-config-yscope/CommonConfig.mjs";
    import ReactConfigArray from "eslint-config-yscope/ReactConfigArray.mjs";
    import StylisticConfigArray from "eslint-config-yscope/StylisticConfigArray.mjs";
    import TsConfigArray from "eslint-config-yscope/TsConfigArray.mjs";
    
    
    const EslintConfig = [
        CommonConfig,
    
        ...TsConfigArray.map(
            (config) => ({
                files: [
                    "**/*.ts",
                    "**/*.tsx",
                ],
                ...config,
            })
        ),

        // NOTE: `StylisticConfigArray` must be placed after `TsConfigArray` to override stylistic
        // rules within `TsConfigArray` (we can't remove the stylistic rules from `TsConfigArray`
        // since they come from a preset that `TsConfigArray` extends).
        ...StylisticConfigArray,
    
        ...ReactConfigArray,
    ];
    
    
    export default EslintConfig;
    ```
   
4. For use with a TypeScript project with multiple `tsconfig.json` files: In projects that include
   multiple `tsconfig.json` files for different source types, such as a Vite project created from
   the `react-ts` template, you can use the helper function `createTsConfigOverride` to generate
   configuration overrides. This ensures proper handling of imports and resolution.
   ```javascript
   import CommonConfig from "eslint-config-yscope/CommonConfig.mjs";
   import ReactConfigArray from "eslint-config-yscope/ReactConfigArray.mjs";
   import StylisticConfigArray from "eslint-config-yscope/StylisticConfigArray.mjs";
   import TsConfigArray, {createTsConfigOverride} from "eslint-config-yscope/TsConfigArray.mjs";
   
   
   const EslintConfig = [
       {
           ignores: [
               "dist/",
               "node_modules/",
           ],
       },
       CommonConfig,
       ...TsConfigArray.map(
           (config) => ({
               files: [
                   "**/*.ts",
                   "**/*.tsx",
               ],
               ...config,
           })
       ),
       createTsConfigOverride(
           [
               "src/**/*.ts",
               "src/**/*.tsx",
           ],
           "tsconfig.app.json"
       ),
       createTsConfigOverride(
           ["vite.config.ts"],
           "tsconfig.node.json"
       ),
       ...StylisticConfigArray,
       ...ReactConfigArray,
   ];
   
   
   export default EslintConfig;
   ```

## Customization

Each configuration can be further customized and extended as per your project's needs. You can
override specific rules by adding them to your ESLint configuration file.

## Contributing

We welcome contributions to the `eslint-config-yscope`! If you have suggestions or improvements,
feel free to open an issue or a pull request.

[eslint-flat-config]: https://eslint.org/docs/v9.x/use/configure/migration-guide
[license]: https://github.com/y-scope/eslint-config-yscope/blob/main/LICENSE
[readme-0.0.32]: https://github.com/y-scope/eslint-config-yscope/blob/f75571723ff1a6fd734ab82b4a399c2c1c92c5fb/README.md#for-older-nodejs-versions
