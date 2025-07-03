import { ESLint, Linter } from "eslint";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

// Base configuration for the entire monorepo
export const baseConfig: Linter.Config[] = [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/.next/**",
      "**/.turbo/**",
      "**/.vscode/**",
      "**/*.min.js",
      "**/*.d.ts",
    ],
    files: ["**/*.{js,ts,tsx,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin as unknown as ESLint.Plugin,
    },
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",

      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-unused-vars": "off",
      "prefer-const": "warn",
      "no-var": "error",
      "object-shorthand": "warn",
      "no-duplicate-imports": "error",
      semi: ["error", "always"],
    },
  },
];

export default baseConfig;
