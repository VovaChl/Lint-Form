import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    languageOptions: {
      globals: globals.browser,
    },
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    rules: {
      // "no-console": "error",
      "react/jsx-indent": ["error", 2],
      "react/no-children-prop": "error",
      // "no-restricted-exports": ['error', {
      //   "restrictDefaultExports": {
      //     "direct": true
      //   }
      // }],
      "@typescript-eslint/no-explicit-any": 'error',
      "quotes": ['error', 'single'],
      "max-len": ["warn", 43]
    }
  },
];
