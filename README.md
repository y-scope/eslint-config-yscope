# eslint-config-yscope

This repository contains ESLint configurations for various JavaScript environments under the `yscope` namespace. Our configurations are designed to enforce a consistent coding style and catch common bugs, making your codebase more maintainable and error-free.

## Available Configurations

- `yscope/common`: A general ESLint configuration suitable for a wide range of JavaScript projects.
- `yscope/react`: Tailored ESLint configuration for React applications.
- `yscope/meteor`: A specialized ESLint configuration for Meteor projects.
- `yscope/backend-ts`: Designed specifically for TypeScript backend applications.
## Installation

To get started with `eslint-config-yscope`, you can install the package:
```sh
npm install eslint-config-yscope --save-dev
# or
yarn add eslint-config-yscope --dev
```

## Usage
After installation, you can use one of the configurations by adding it to the `extends` section in your `.eslintrc` (or `.eslintrc.js`, `.eslintrc.json`, etc.) file, or in an attribute named `eslintConfig` in your `package.json` file.
eslintConfig
### For Common Configuration
```json
{
  "extends": ["yscope/common"]
}
```

### For React Configuration
```json
{
  "extends": ["yscope/react"]
}
```

### For Meteor Configuration
```json
{
  "extends": ["yscope/meteor"]
}
```

### For Backend TypeScript Configuration
```json
{
  "extends": ["yscope/backend-ts"]
}
```

## Customization
Each configuration can be further customized and extended as per your project's needs. You can override specific rules by adding them to your ESLint configuration file.

## Contributing
We welcome contributions to the `eslint-config-yscope`! If you have suggestions or improvements, feel free to open an issue or a pull request.

## License
This project is licensed under Apache License 2.0. Please see the [LICENSE](https://github.com/y-scope/eslint-config-yscope/blob/main/LICENSE) file for more details.
